import Head from 'next/head';

import PriceTicker from '../components/PriceTicker';
import PriceChart from '../components/PriceChart';
import TabPanel from '../components/TabPanel';
import OrderToast from '../components/OrderToast';
import StatsPanel from '../components/StatsPanel';
import DashboardPanel from '../components/DashboardPanel';

export default function Home() {
  return (
    <>
      <Head>
        <title>Arbiboard Start – UI Completa</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀 Arbiboard Start – Preview completa</h1>

        <StatsPanel orders={[{ amount: 100 }, { amount: 250 }, { amount: 400 }]} />
        <DashboardPanel />

        <section>
          <h2>📈 Price Ticker</h2>
          <PriceTicker />
        </section>

        <section>
          <h2>📊 Price Chart</h2>
          <PriceChart />
        </section>

        <section>
          <h2>🧠 Arbitrage Tabs</h2>
          <TabPanel />
        </section>

        <OrderToast />
      </main>
    </>
  );
}
