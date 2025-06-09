# FastAPI for ArbiSignal
from fastapi import FastAPI, Request
from engine import generate_signal

app = FastAPI()

@app.post("/predict")
async def predict(request: Request):
    event = await request.json()
    return generate_signal(event)
