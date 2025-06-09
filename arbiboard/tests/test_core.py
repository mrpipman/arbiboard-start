
import unittest
import random

# Simulazioni base (mock per demo)
def get_odds():
    return {'bookieA': 2.1, 'bookieB': 2.2, 'bookieC': 2.0}

def explain_prediction():
    return {'shap': [0.2, -0.1], 'gpt_summary': 'likely win due to form'}

def rl_policy_feedback():
    return random.choice(['adjusted', 'unchanged'])

def trigger_autobet():
    return {'status': 'success', 'executed_on': ['bookieA', 'bookieC']}

class TestArbiboardCore(unittest.TestCase):

    def test_odds_engine(self):
        odds = get_odds()
        self.assertTrue(len(odds) >= 3)
        self.assertTrue(all(o > 1.5 for o in odds.values()))

    def test_explainability_output(self):
        output = explain_prediction()
        self.assertIn('shap', output)
        self.assertIn('gpt_summary', output)

    def test_rlhf_policy_feedback(self):
        result = rl_policy_feedback()
        self.assertIn(result, ['adjusted', 'unchanged'])

    def test_auto_bet_execution(self):
        res = trigger_autobet()
        self.assertEqual(res['status'], 'success')
        self.assertGreaterEqual(len(res['executed_on']), 1)

if __name__ == '__main__':
    unittest.main()
