import PriceTicker from '@/components/PriceTicker';
import PriceChart from '@/components/PriceChart';
import OrderToast from '@/components/OrderToast';
import TabPanel from '@/components/TabPanel';

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        <h1 className="text-3xl font-bold">Arbiboard</h1>
      </div>
      <PriceTicker />
      <h2 className="text-xl font-bold mt-6">Andamento Prezzo</h2>
      <PriceChart />
      <h2 className="text-xl font-bold mt-6">Ultimi Ordini</h2>
      <TabPanel />
      <OrderToast />
    </div>
  );
}
