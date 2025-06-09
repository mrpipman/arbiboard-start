# ArbiSignal Engine
import random
from datetime import datetime

def generate_signal(event):
    # Simulate AI prediction
    return {
        "event_id": event["id"],
        "predicted_outcome": random.choice(["Home", "Away", "Draw"]),
        "confidence": round(random.uniform(0.6, 0.95), 2),
        "timestamp": datetime.utcnow().isoformat()
    }
