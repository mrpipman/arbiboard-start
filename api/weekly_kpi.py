
from datetime import datetime, timedelta
from collections import defaultdict

def compute_weekly_kpis(bets: list) -> dict:
    """
    Calcola ROI e XP ultimi 7 giorni.
    """
    now = datetime.utcnow()
    week_ago = now - timedelta(days=7)
    user_data = defaultdict(lambda: {"total_stake": 0, "total_profit": 0, "xp": 0, "count": 0})

    for bet in bets:
        if datetime.fromisoformat(bet['timestamp']) < week_ago:
            continue
        uid = bet['user_id']
        user_data[uid]["total_stake"] += bet['stake']
        user_data[uid]["total_profit"] += bet['profit']
        user_data[uid]["xp"] += bet.get('xp', 0)
        user_data[uid]["count"] += 1

    output = {}
    for uid, data in user_data.items():
        roi = (data["total_profit"] / data["total_stake"]) if data["total_stake"] > 0 else 0
        output[uid] = {
            "roi": round(roi, 3),
            "xp": data["xp"],
            "bets": data["count"]
        }
    return output
