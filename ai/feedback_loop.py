
import csv
from datetime import datetime

def log_feedback(user_id: str, xp: int, reason: str, bet_id: str):
    """
    Registra reward RL da esperienza utente.
    """
    with open("rl_feedback_log.csv", "a", newline="") as file:
        writer = csv.writer(file)
        writer.writerow([datetime.utcnow().isoformat(), user_id, xp, reason, bet_id])
