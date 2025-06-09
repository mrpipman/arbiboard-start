# Backtest and live rollout simulator
import random

def simulate_portfolio(strategy_allocations, matches):
    returns = {}
    for s_id, alloc in strategy_allocations.items():
        returns[s_id] = round(alloc * random.uniform(-0.1, 0.3), 3)
    return returns
