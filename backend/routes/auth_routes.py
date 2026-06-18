from fastapi import APIRouter
from models.user_model import User
from database import users_collection
import bcrypt

router = APIRouter()

@router.post("/signup")
def signup(user: User):

    existing_user = users_collection.find_one(
        {"email": user.email}
    )

    if existing_user:
        return {
            "message": "User already exists"
        }

    hashed_password = bcrypt.hashpw(
        user.password.encode("utf-8"),
        bcrypt.gensalt()
    )

    users_collection.insert_one({
        "name": user.name,
        "email": user.email,
        "password": hashed_password.decode("utf-8")
    })

    return {
        "message": "Signup Successful"
    }

@router.post("/login")
def login(user: User):

    existing_user = users_collection.find_one(
        {"email": user.email}
    )

    if not existing_user:
        return {
            "message": "Invalid Credentials"
        }

    if not bcrypt.checkpw(
        user.password.encode("utf-8"),
        existing_user["password"].encode("utf-8")
    ):
        return {
            "message": "Invalid Credentials"
        }

    return {
        "message": "Login Successful",
        "user_id": str(existing_user["_id"]),
        "name": existing_user["name"]
    }