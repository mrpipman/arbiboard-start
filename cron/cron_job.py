
import datetime
import schedule
import time
from ai.feedback_loop import log_feedback
from ai.explain import retrain_policy_model

def weekly_retrain():
    print(f"[{datetime.datetime.now()}] Starting XP Policy Retraining...")
    retrain_policy_model()
    print("✅ Weekly policy retraining complete.")

# Esegue ogni lunedì alle 03:00 UTC
schedule.every().monday.at("03:00").do(weekly_retrain)

if __name__ == "__main__":
    print("🔁 Cron loop avviato.")
    while True:
        schedule.run_pending()
        time.sleep(30)
