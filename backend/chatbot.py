"""
Chatbot logic and functionality
"""

import argparse
import os
import json
from flask import Flask, request, jsonify, session
from flask_cors import CORS
from dotenv import load_dotenv
from langchain.prompts import ChatPromptTemplate
from langchain_community.vectorstores.chroma import Chroma
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_google_genai.embeddings import GoogleGenerativeAIEmbeddings

from functools import lru_cache
# from flask_executor import Executor
import asyncio
from concurrent.futures import ThreadPoolExecutor


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
executor = ThreadPoolExecutor(max_workers=5)
# executor = Executor(app)
app.secret_key = "es"

load_dotenv()
api_key = os.getenv("GOOGLE_API_KEY")

CHROMA_DB_PATH = "../database/chroma"
PROMPT_TEMPLATE = """
**Context:**
* You are a personal health assistant called Dr.Nishauri provided with the patient's real-time location, {location}, helping patients with medical queries.

* **Patient Name:** {name}
* **Patient Real-Time Location and time:** {location} at {time} 
* **Patient Records:** {context}
* **Conversation History sorted from the latest message to the oldest:** {history}
* **Hospitals Details:** {hospitals}

**User Query:** {question}


**Instructions:**

1. **Identify Query Type:**
    * If the query is a greeting, respond with a greeting tailored to the time of day and patient's name (e.g., "Good morning, [Patient Name]").
    * If the query is a request for information, prioritize using the provided patient details, conversation history, and external information from reliable medical sources. Ensure the information is relevant to the patient's location and context.
    * If the query requires further clarification or suggests a potential health concern, acknowledge and offer assistance (e.g., "I understand you're concerned about [symptom]. Can you tell me more about what you're experiencing?").
    * If the query is a request for a specific action or recommendation, provide clear and concise guidance based on the patient's details and context.

2. **Craft Response:**
    * Maintain a professional and informative tone, avoiding medical jargon whenever possible.
    * Base your response on the provided context and reliable external medical sources, ensuring factual accuracy.
    * Acknowledge limitations and encourage seeking professional medical advice for complex issues or suspected diagnoses (e.g., "This information cannot replace a doctor's diagnosis. If you're concerned, please schedule an appointment with your physician.").
    * Consider incorporating elements of empathy and reassurance in your responses.

3. **Privacy and Security:**
    * Do not disclose any personal health information beyond what is explicitly provided in the patient details and conversation history.
    * Maintain user privacy by not referencing external information that could be traced back to the patient.

* **Patient Real-Time Location and time:** {location} at {time}
"""


PROMPT_TEMPLATE_2 = """
**Context:**
* Assume you are the {patient} and you are to ask the next question,
* Your role is to generate follow-up questions that the {patient} is likely to ask based on the response provided to their initial query.

* **Initial {patient}'s Query:** {question}
* **Response Given:** {response}
* **Conversation History sorted from the latest message to the oldest:** {history}

**Instructions:**

1. **Analyze Response:**
    * Review the response provided given on the Initial Query.

2. **Generate potential follow up questions:**
    * Formulate follow-up questions to further explore the topic or request additional information.
    * Consider the context of the conversation and the user's intent in crafting your questions.
    * Aim to deepen the conversation.

3. **Craft Response:**
    * Use the response provided as a reference point for your follow-up questions.
    * Maintain a conversational and engaging tone to encourage further interaction.
    * Seek to address any unanswered questions or areas of interest raised by the user.
    * Consider incorporating elements of empathy and understanding in your responses.
    * Encourage the user to provide more details or ask additional questions to enhance the conversation.

4. **Returning Response**
    * Pick at most 3 that are most relevant
    * Do not include numbers in your response i.e no numbering the follow-up questions
    * Return your response as a list (e.g., [follow-up_1, follow-up_3, follow-up_3 ]).

"""


PROMPT_TEMPLATE_3 = """
**Context:**
* Assume your role is to analyze two responses given to a user query and return the better response based on the context and quality of information provided.

* **User Query:** {question}
* **Response 1:** {response_1}
* **Response 2:** {response_2}

**Instructions:**

1. **Analyze Responses:**
    * Review the two responses provided to the user query.
    * Consider the relevance, accuracy, and informativeness of each response.

2. **Select the Better Response:**
    * Choose the response that is more informative, relevant, and engaging based on the user query.
    * Consider the quality of the information provided and the user's likely satisfaction with the response.

3. **Craft Response:**
    * If both responses are equally good, combine the key points from each response into a single response.
    * Maintain a professional and informative tone in your response.

4. **Returning Response**
    * Rewrite the better response exactly as it was given as your response.
    * Do not indicate anywhere the response that you picked


"""


prompt_template = ChatPromptTemplate.from_template(PROMPT_TEMPLATE)
prompt_template_2 = ChatPromptTemplate.from_template(PROMPT_TEMPLATE_2)
prompt_template_3 = ChatPromptTemplate.from_template(PROMPT_TEMPLATE_3)
model_one = ChatGoogleGenerativeAI(model="gemini-pro", google_api_key=api_key)

embedding_function = GoogleGenerativeAIEmbeddings(
    model="models/embedding-001", google_api_key=api_key
)
db = Chroma(persist_directory=CHROMA_DB_PATH, embedding_function=embedding_function)


@app.route("/login", methods=["POST"])
def login():
    print("Login invoked")
    data = request.get_json()
    # print(f"Data: {data}")
    phone = data["phone"]
    password = data["password"]

    # Query the database for the user
    with open("../data/testData.json", "r") as file:
        database = json.load(file)

    try:
        for patient in database["patients"]:
            if (
                patient["patient_id"] == password
                and patient["contact"]["phone"] == phone
            ):
                with open("../data/chats-hist.json", "r") as file:
                    users_hist = json.load(file)
                user_hist = users_hist.get(password, [])

                # print(f"User history: {user_hist}")

                session["user"] = patient["patient_id"]
                return jsonify(
                    {
                        "id": patient["patient_id"],
                        "name": patient["name"],
                        "details": patient,
                        "history": user_hist,
                        "status": "success",
                    }
                )
        return jsonify(
            {"message": "Login failed, Patient does not exist", "status": "error"}
        )
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": e, "status": "error"})


@app.route("/logout", methods=["POST"])
def logout():
    data = request.get_json()
    user = data["user"]
    history = data["history"]
    # print(f"User: {data}")

    # Save the history to a json file with user as key
    with open("../data/chats-hist.json", "r") as file:
        users_hist = json.load(file)
    users_hist[user] = history
    with open("../data/chats-hist.json", "w") as file:
        json.dump(users_hist, file)

    session.pop("user", None)
    return jsonify({"message": "User logged out", "status": "success"})


@lru_cache(maxsize=128)
def get_results(query):
    embedding_function = GoogleGenerativeAIEmbeddings(
        model="models/embedding-001", google_api_key=api_key
    )
    db = Chroma(persist_directory=CHROMA_DB_PATH, embedding_function=embedding_function)

    results = db.similarity_search_with_relevance_scores(query, k=5)
    # print(f"Results: {results}")
    return results


async def invoke_model(model, prompt):
    loop = asyncio.get_event_loop()
    return await loop.run_in_executor(executor, model.invoke, prompt)


@app.route("/chatbot", methods=["POST"])
async def chatbot():
    data = request.get_json()
    query_text = data["message"]
    details = data["details"]
    history = data["history"]
    time = data["time"]
    query = f"Juja"

    results = get_results(query)

    if len(results) == 0 or results[0][1] < 0.5:
        return jsonify({"message": "No results found", "status": "error"})

    context_text = "\n\n---\n\n".join([doc.page_content for doc, _score in results])

    prompt = prompt_template.format(
        context=details["records"],
        name=details["name"],
        question=query_text,
        hospitals=context_text,
        location="Juja,Kiambu, Kenya",
        time=time,
        history=history,
    )

    try:
        response_1 = await invoke_model(model_one, prompt)
        response_2 = await invoke_model(model_one, prompt)

        prompt_3 = prompt_template_3.format(
            question=query_text, response_1=response_1.content, response_2=response_2.content
        )
        response_three = await invoke_model(model_one, prompt_3)

        prompt_2 = prompt_template_2.format(
            patient=details["name"],
            question=query_text,
            response=response_three.content,
            history=history,
        )
        response_two = await invoke_model(model_one, prompt_2)

        return jsonify(
            {
                "message": response_three.content,
                "followUps": response_two.content.split("\n"),
                "status": "success",
            }
        )
    except Exception as e:
        return jsonify({"message": str(e), "status": "error"})


if __name__ == "__main__":
    app.run(port=5000, debug=True)
