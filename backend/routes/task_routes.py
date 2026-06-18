from fastapi import APIRouter
from bson import ObjectId

from database import tasks_collection
from models.task_model import Task

router = APIRouter()


@router.post("/tasks")
def create_task(task: Task):

    result = tasks_collection.insert_one(
        task.dict()
    )

    return {
        "message": "Task Added",
        "task_id": str(result.inserted_id)
    }


@router.get("/tasks/{user_id}")
def get_tasks(user_id: str):

    tasks = []

    for task in tasks_collection.find(
        {"user_id": user_id}
    ):

        task["_id"] = str(task["_id"])

        tasks.append(task)

    return tasks


@router.put("/tasks/{task_id}")
def update_task(task_id: str):

    tasks_collection.update_one(
        {"_id": ObjectId(task_id)},
        {
            "$set": {
                "completed": True
            }
        }
    )

    return {
        "message": "Task Completed"
    }


@router.delete("/tasks/{task_id}")
def delete_task(task_id: str):

    tasks_collection.delete_one(
        {"_id": ObjectId(task_id)}
    )

    return {
        "message": "Task Deleted"
    }