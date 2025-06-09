
from fastapi import APIRouter
from pydantic import BaseModel
from typing import List
import uuid

router = APIRouter()

class Thread(BaseModel):
    id: str
    title: str
    body: str
    author: str
    xp: int
    likes: int

# In-memory store
threads_db = [
    Thread(id=str(uuid.uuid4()), title="Welcome to Arbiboard", body="Come funziona il sistema?", author="mod", xp=120, likes=5),
    Thread(id=str(uuid.uuid4()), title="Suggerimenti miglioramento UX?", body="Avete idee per la UX del feed predizioni?", author="alpha_user", xp=92, likes=11),
]

@router.get("/api/community/threads", response_model=List[Thread])
def get_threads():
    return threads_db
