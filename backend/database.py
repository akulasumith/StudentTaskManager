from pymongo import MongoClient

MONGO_URL = "mongodb+srv://akulasumith27_db_user:RpXL4SWVNlxMEjpV@cluster0.bp2tvxz.mongodb.net/?appName=Cluster0"

client = MongoClient(MONGO_URL)

db = client["StudentTaskManager"]

users_collection = db["users"]
tasks_collection = db["tasks"]