"""
This module prepares the database for the chatbot.
It loads the documents from the directory and splits them into chunks 
Chunks are  then stored in the chroma database for easier vector search functionality
"""

import os
import shutil

import json
from dotenv import load_dotenv
from langchain.schema import Document
from langchain_community.document_loaders import JSONLoader
from langchain_community.vectorstores.chroma import Chroma
from langchain_google_genai.embeddings import GoogleGenerativeAIEmbeddings


DATA_PATH = "data"
CHROMA_DB_PATH = "database/chroma"
MAX_CHUNK_SIZE = 1500
load_dotenv()
api_key = os.getenv("GOOGLE_API_KEY")


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
    print(f"Saved {len(chunks)} chunks to {CHROMA_DB_PATH}.")


def load_documents():
    """
    Loads all documents from the data directory.

    Returns:
        list[Document]: A list of documents.
    """
    loader = JSONLoader("./data/hospitals.geojson", jq_schema=".", text_content=False)

    document = loader.load()
    return document


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
        patients = data["features"]
        for patient in patients:
            chunk_document = Document(json.dumps(patient), metadata=document.metadata)
            chunks.append(chunk_document)
    print(f"Split {len(documents)} documents into {len(chunks)} chunks.")
    return chunks


def main():
    """
    Main function to prepare the database.
    """
    documents = load_documents()
    chunks = split_json(documents)
    save_to_chroma_db(chunks)


if __name__ == "__main__":
    main()
