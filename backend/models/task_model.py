from pydantic import BaseModel

class Task(BaseModel):
    user_id: str
    text: str
    priority: str
    due_date: str
    completed: bool = False