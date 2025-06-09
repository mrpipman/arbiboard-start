
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import shap
import numpy as np
from loguru import logger

# CORS + App
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Logger configurazione
logger.add("logs/api.log", rotation="1 MB", retention="10 days")

# Singleton model loader
class ModelSingleton:
    _model = None

    @classmethod
    def load_model(cls):
        if cls._model is None:
            logger.info("Loading model...")
            cls._model = joblib.load("regression_model.pkl")
        return cls._model

# Input schema
class ROIRequest(BaseModel):
    odds: float
    rating: float

# Auth Clerk header
def verify_auth(request: Request):
    auth_header = request.headers.get("authorization")
    if not auth_header or not auth_header.startswith("Bearer "):
        logger.warning("Auth header missing or invalid.")
        raise HTTPException(status_code=401, detail="Unauthorized")

# Predict endpoint
@app.post("/predict-roi/")
async def predict_roi(req: ROIRequest, request: Request):
    verify_auth(request)
    try:
        model = ModelSingleton.load_model()
        X = np.array([[req.odds, req.rating]])
        pred = model.predict(X)[0]

        explainer = shap.Explainer(model.predict, X)
        shap_values = explainer(X)
        feature_impact = {
            "odds": round(shap_values.values[0][0], 4),
            "rating": round(shap_values.values[0][1], 4),
        }

        logger.info(f"Prediction: {pred}, SHAP: {feature_impact}")
        return {
            "predicted_roi": round(pred, 4),
            "impact_by_feature": feature_impact,
        }
    except Exception as e:
        logger.exception("Prediction error")
        raise HTTPException(status_code=400, detail=f"Errore nel calcolo: {str(e)}")
