# Community rewards engine
def calculate_rewards(users):
    total_xp = sum(user['xp'] for user in users)
    reward_pool = 10000  # in platform credits
    return {
        user['id']: round((user['xp'] / total_xp) * reward_pool, 2)
        for user in users if total_xp > 0
    }
