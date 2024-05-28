"""
This module prepares the database for the chatbot.
It loads the documents from the directory and splits them into chunks 
Chunks are  then stored in the chroma database for easier vector search functionality
"""

import os
import shutil
import re

import json
from dotenv import load_dotenv
from langchain.schema import Document

from langchain_community.document_loaders import DirectoryLoader
from langchain_community.document_loaders.json_loader import JSONLoader
from langchain_community.vectorstores.chroma import Chroma
from langchain_google_genai.embeddings import GoogleGenerativeAIEmbeddings


DATA_PATH = "../data/facilities"
CHROMA_DB_PATH = "../database/chroma"
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
    # loader = JSONLoader("./data/hospitals.geojson", jq_schema=".", text_content=False)

    # document = loader.load()
    # return document
    loader = DirectoryLoader(
        DATA_PATH,
        glob="**/*.json",
        show_progress=True,
        loader_cls=JSONLoader,
        loader_kwargs={"jq_schema": ".", "text_content": False},
    )
    documents = loader.load()

    print(f"document count: {len(documents)}")
    # print(documents[0] if len(documents) > 0 else None)
    return documents


def split_json(documents: list[Document]):
    """
    Splits a list of JSON-compatible documents into chunks, where each chunk is a facility.

    Args:
        documents: A list of documents, where each document is a JSON object
                   containing a 'facilities' array.

    Returns:
        list[list]: A list of lists, where each inner list contains facility chunks.
    """
    chunks = []
    pattern = r"(?<={)'|'(?=})|(?<=})'|'(?=: )|(?<=: )'|'(?=, )|(?<=, )'"
    replacement = '"'

    for document in documents:
        page_content = document.page_content
        result = re.sub(pattern, replacement, page_content)
        # print(f"Facilities: {result[:46566]}")
        facilities = json.loads(str(result))
        # facilities = data["features"]
        for facility in facilities:
            metadata = document.metadata.copy()  # create a copy of document.metadata
            metadata["facility_code"] = facility["Code"]  # add facility["Code"] to the metadata
            chunk_document = Document(json.dumps(facility), metadata=metadata)
            chunks.append(chunk_document)
    print(f"Split {len(documents)} documents into {len(chunks)} chunks.")
    # print(chunks[0] if len(chunks) > 0 else None)
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
