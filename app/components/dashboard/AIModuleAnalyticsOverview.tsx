'use client';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Lun', value: 45 },
  { date: 'Mar', value: 80 },
  { date: 'Mer', value: 130 },
  { date: 'Gio', value: 95 },
  { date: 'Ven', value: 160 },
];

export default function AIModuleAnalyticsOverview({ id }: { id: string }) {
  return (
    <div>
      <h2>Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
      <p>Trend modulo: Arbitrage AI Pro</p>
    </div>
  );
}
