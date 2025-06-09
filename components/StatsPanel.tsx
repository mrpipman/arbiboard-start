export default function StatsPanel({ orders }: { orders: { amount: number }[] }) {
  const total = orders.reduce((sum, o) => sum + o.amount, 0);

  return (
    <div className="bg-card p-4 rounded-xl shadow-md space-y-2">
      <h2 className="text-lg font-semibold">📦 Statistiche</h2>
      <div className="text-sm text-muted-foreground">Ordini Totali: {orders.length}</div>
      <div className="text-sm text-muted-foreground">Quantità Totale: {total.toFixed(2)}</div>
    </div>
  );
}
