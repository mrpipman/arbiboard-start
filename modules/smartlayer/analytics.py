# Strategist reputation scoring
def compute_reputation(user):
    score = user['roi'] * 0.6 + user['trust'] * 0.3 + user['volume'] * 0.1
    return round(score, 2)
