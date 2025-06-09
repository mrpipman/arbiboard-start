# SmartLayer Fee Engine
def compute_dynamic_fee(user_metrics):
    base_fee = 0.03
    performance_bonus = 0.01 * user_metrics['roi']  # higher ROI = lower fee
    volume_bonus = 0.005 if user_metrics['volume'] > 10000 else 0
    trust_bonus = 0.002 if user_metrics['trust'] > 80 else 0
    fee = base_fee - performance_bonus - volume_bonus - trust_bonus
    return max(0.005, round(fee, 4))
