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

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
app.secret_key = "es"

load_dotenv()
api_key = os.getenv("GOOGLE_API_KEY")

CHROMA_DB_PATH = "database/chroma"
PROMPT_TEMPLATE = """
INSTRUCTIONS:
If the QUESTION is a greeting, ignore the DOCUMENT and respond with a greeting.
Answer the users QUESTION using the DOCUMENT text above.
Keep your answer ground in the facts of the DOCUMENT.
When answering, always use a formal doctor's tone.
Avoid using the phrase "according to the document" in your response.

DOCUMENT:
{context}

QUESTION:
{question}

"""

@app.route("/login", methods=["POST"])
def login():
    print("Login invoked")
    data = request.get_json()
    print(f"Data: {data}")
    email = data["email"]
    password = data["password"]

    # Query the database for the user
    with open("../data/testData.json", "r") as file:
        database = json.load(file)
    
    for patient in database["patients"]:
        if patient["patient_id"] == email and patient["contact"]["phone"] == password:
            session["user"] = patient["patient_id"]
            return jsonify({"name": patient["name"], "status": "success"})
        else:
            return jsonify({"message": "Login failed", "status": "error"})

    return jsonify({"message": "Login failed, Patient does not exist", "status": "error"})


@app.route("/logout", methods=["POST"])
def logout():
    session.pop("user", None)
    return jsonify({"message": "User logged out", "status": "success"})


@app.route("/chatbot", methods=["POST"])
def chatbot():
    print("Chatbot invoked")
    data = request.get_json()
    print(f"Data: {data}")
    query_text = data["message"]

    embedding_function = GoogleGenerativeAIEmbeddings(
        model="models/embedding-001", google_api_key=api_key
    )
    db = Chroma(persist_directory=CHROMA_DB_PATH, embedding_function=embedding_function)

    results = db.similarity_search_with_relevance_scores(query_text, k=5)
    print(f"Results: {results}")

    if len(results) == 0 or results[0][1] < 0.5:
        print("No results found")
        return

    context_text = "\n\n---\n\n".join([doc.page_content for doc, _score in results])
    prompt_template = ChatPromptTemplate.from_template(PROMPT_TEMPLATE)
    prompt = prompt_template.format(context=context_text, question=query_text)


    model_one = ChatGoogleGenerativeAI(model="gemini-pro", google_api_key=api_key)

    try:
        response_one = dict(model_one.invoke(prompt))
        return jsonify({"message": response_one["content"], "status": "success"})
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": e, "status": "error"})
    finally:
        print("\n")
        print(f"Question: {query_text}" )
        print("\n")
        print(
            response_one["content"]
            # .replace("(", " ")
            # .replace(")", " ")
            # .replace("'", " ")
            # .strip()
        )


def main():
    """
    Main function for the chatbot
    """
    # parser = argparse.ArgumentParser()
    # parser.add_argument("query_text", type=str, help="Query text")
    # args = parser.parse_args()
    # query_text = args.query_text

    # load the database created earlier
    app.run(port=5000, debug=True)


if __name__ == "__main__":
    main()
