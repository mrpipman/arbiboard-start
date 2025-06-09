# Unit tests for ArbiSignal
import unittest
from modules.arbisignal.engine import generate_signal

class TestArbiSignal(unittest.TestCase):
    def test_signal_generation(self):
        event = {"id": "test_match"}
        signal = generate_signal(event)
        self.assertIn("predicted_outcome", signal)
        self.assertGreaterEqual(signal["confidence"], 0.6)

if __name__ == "__main__":
    unittest.main()
