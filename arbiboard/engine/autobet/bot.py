
import random
import time

class AutoBetBot:
    def __init__(self, bookmakers):
        self.bookmakers = bookmakers
        self.fallback_order = list(bookmakers.keys())

    def place_bet(self, opportunity, stake):
        for bookie in self.fallback_order:
            if self._simulate_odds_check(bookie, opportunity):
                return {
                    "status": "SUCCESS",
                    "bookmaker": bookie,
                    "odds": opportunity["odds"][bookie],
                    "stake": stake
                }
        return {"status": "FAIL", "reason": "All bookmakers failed"}

    def _simulate_odds_check(self, bookmaker, opportunity):
        # Simula il successo (80% probabilità)
        return random.random() < 0.8
