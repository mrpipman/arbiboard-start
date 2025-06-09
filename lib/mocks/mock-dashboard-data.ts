export const mockDashboardData = {
  wallet: {
    balance: 1250.75,
    currency: 'EUR',
    updatedAt: '2025-06-09',
  },
  performance: {
    roi: 12.5,
    betsPlaced: 143,
    successRate: 68,
  },
  arbitrageMarkets: [
    { id: 1, event: 'Match A vs B', edge: 4.2, status: 'open' },
    { id: 2, event: 'Match C vs D', edge: 5.1, status: 'pending' },
  ],
  aiInsights: [
    { title: 'High-Value Market', confidence: 91, signal: 'Back @ 2.10' },
    { title: 'Risk Signal', confidence: 74, signal: 'Avoid: low liquidity' },
  ],
};