"""
This module prepares the database for the chatbot.
It loads the documents from the directory and splits them into chunks 
Chunks are  then stored in the chroma database for easier vector search functionality
"""

import os
import shutil

# import nltk
import json
# from pprint import pprint
from dotenv import load_dotenv
from langchain.schema import Document
from langchain_community.document_loaders import JSONLoader
# from langchain_community.document_loaders import DirectoryLoader
from langchain_community.vectorstores.chroma import Chroma
from langchain_google_genai.embeddings import GoogleGenerativeAIEmbeddings

# import spacy
# from langchain_community.embeddings import GooglePalmEmbeddings
# from langchain.text_splitter import RecursiveCharacterTextSplitter

DATA_PATH = "data"
CHROMA_DB_PATH = "database/chroma"
MAX_CHUNK_SIZE = 1500
load_dotenv()
api_key = os.getenv("GOOGLE_API_KEY")
# nlp = spacy.load("en_core_web_sm")


def save_to_chroma_db(chunks: list[Document]):
    """
    Saves the chunks to the chroma database.

    Args:
        chunks: A list of chunks.
    """
    if os.path.exists(CHROMA_DB_PATH):
        shutil.rmtree(CHROMA_DB_PATH)

    Chroma.from_documents(
        chunks,
        GoogleGenerativeAIEmbeddings(
            google_api_key=api_key, model="models/embedding-001"
        ),
        persist_directory=CHROMA_DB_PATH,
    )
    # db.persist()
    print(f"Saved {len(chunks)} chunks to {CHROMA_DB_PATH}.")


def load_documents():
    """
    Loads all documents from the data directory.

    Returns:
        list[Document]: A list of documents.
    """
    # json_loader = JSONLoader(jq_schema=".")
    # loader = DirectoryLoader(
    #     DATA_PATH,
    #     glob="*.json",
    #     show_progress=True,
    #     use_multithreading=True,
    #     loader_cls=json_loader,
    # )
    # documents = loader.load()
    loader = JSONLoader("./data/testData.json", jq_schema=".", text_content=False)

    document = loader.load()
    # pprint(document)
    return document


# def split_texts(documents: list[Document]):
#     """
#     Splits the documents into chunks based on sentences, considering complexity.

#     Args:
#         documents (list[Document]): A list of documents.

#     Returns:
#         chunks: A list of Document chunks
#     """
#     chunks = []
#     for document in documents:
#         text = document.page_content
#         sentences = nltk.sent_tokenize(text)
#         current_chunk = []
#         chunk_size = 1  # Default to 1 sentence for short factual content
#         for sentence in sentences:
#             # Analyze sentence complexity
#             is_complex = is_sentence_complex(sentence)

#             # Update chunk size based on complexity
#             if is_complex:
#                 chunk_size = min(chunk_size + 1, 5)
#             else:
#                 chunk_size = min(chunk_size + 1, 3)

#             # Check if adding the sentence exceeds the chunk size
#             if (
#                 len(current_chunk) == 0
#                 or sum(len(s) for s in current_chunk) + len(sentence) <= MAX_CHUNK_SIZE
#             ):
#                 current_chunk.append(sentence)
#             else:
#                 # Create a new Document object for the chunk
#                 chunk_document = Document(
#                     " ".join(current_chunk), metadata=document.metadata
#                 )
#                 chunks.append(chunk_document)
#                 current_chunk = [sentence]
#         # Add the last chunk if any sentences remain
#         if current_chunk:
#             chunk_document = Document(
#                 " ".join(current_chunk), metadata=document.metadata
#             )
#             chunks.append(chunk_document)
#     print(f"Split {len(documents)} documents into {len(chunks)} chunks.")

#     # print(chunks[15].page_content)
#     # print(chunks[15].metadata)
#     return chunks


def split_json(documents: list[Document]):
    """
    Splits a list of JSON-compatible documents into chunks, where each chunk is a patient.

    Args:
        documents: A list of documents, where each document is a JSON object
                   containing a 'patients' array.

    Returns:
        list[list]: A list of lists, where each inner list contains patient chunks.
    """
    chunks = []
    for document in documents:
        page_content = document.page_content
        data = json.loads(page_content)
        patients = data["patients"]
        for patient in patients:
            chunk_document = Document(json.dumps(patient), metadata=document.metadata)
            chunks.append(chunk_document)
    print(f"Split {len(documents)} documents into {len(chunks)} chunks.")
    # print(chunks[0])
    return chunks


def is_sentence_complex(sentence):
    """
    Function to check sentence complexity

    Args:
        sentence: A sentence to check

    Returns:
        bool: True if the sentence is complex, False otherwise
    """

    # TODO
    # implement complexity checks here based on factors like:
    #  - Word count
    #  - Presence of subordinate clauses
    #  - Lexical density (ratio of unique words to total words)
    # doc = nlp(sentence)
    # word_count = len(sentence)
    # has_subordinate_clause = any(
    #     token.dep_ == "mark" for token in doc
    # )  # Check for subordinating conjunctions
    return len(sentence) > 20


def main():
    """
    Main function to prepare the database.
    """
    documents = load_documents()
    chunks = split_json(documents)
    save_to_chroma_db(chunks)


if __name__ == "__main__":
    main()
