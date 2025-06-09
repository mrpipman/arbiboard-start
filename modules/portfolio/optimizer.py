# Portfolio risk-reward optimizer
def optimize_portfolio(strategies, risk_tolerance=0.5):
    total_score = sum(s['roi'] * (1 - abs(s['risk'] - risk_tolerance)) for s in strategies)
    return {
        s['id']: round((s['roi'] * (1 - abs(s['risk'] - risk_tolerance))) / total_score, 3)
        for s in strategies if total_score > 0
    }
