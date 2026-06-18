from pymongo import MongoClient
from dotenv import load_dotenv
from pathlib import Path
import os

load_dotenv(Path(__file__).parent / ".env")
client = MongoClient(
    os.getenv("MONGO_URI")
)
db = client["StudentTaskManager"]

users_collection = db["users"]
tasks_collection = db["tasks"]