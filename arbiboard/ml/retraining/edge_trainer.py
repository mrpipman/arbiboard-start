
import datetime
import random

def should_trigger_event_based():
    # Simula eventi: drop accuracy < 75% o spike XP > 50%
    drop = random.random() < 0.2
    spike = random.random() < 0.3
    return drop or spike

def run_retraining():
    print(f"[{datetime.datetime.now()}] ⏳ Inizio retraining ML...")
    # Mock training time
    for i in range(3):
        print(f"  → Epoch {i+1}/3...")
    print("✅ Retraining completato e salvato.")

def retrain_if_needed(event_mode=False):
    if event_mode:
        print("[Trigger EVENT] 🔍 Controllo anomalie...")
        if should_trigger_event_based():
            run_retraining()
        else:
            print("📉 Nessuna anomalia trovata.")
    else:
        print("[Trigger CRON] 🔁 Routine settimanale attiva.")
        run_retraining()
