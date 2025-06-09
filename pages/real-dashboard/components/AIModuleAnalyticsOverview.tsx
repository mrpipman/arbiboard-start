'use client';
import { useRouter } from 'next/router';
import { useAIModulesStore } from '@/lib/store/aiModules';
import Card from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

export default function AIModuleAnalyticsOverview() {
  const router = useRouter();
  const id = typeof router.query.id === 'string' ? router.query.id : 'demo';
  const { modules } = useAIModulesStore();
  const mod = modules.find((m) => m.id === id);
  const data = mod?.analytics ?? [];

  return (
    <Card title="Analytics">
      <div style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" /><YAxis /><Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <Badge>Trend modulo: {mod?.name ?? "Sconosciuto"}</Badge>
    </Card>
  );
}
