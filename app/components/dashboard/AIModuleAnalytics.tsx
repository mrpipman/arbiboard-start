'use client';
import { useAIModulesStore } from "@/lib/store/aiModules";
import Card from "@/components/ui/card";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const COLORS = ["#6366F1", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

export default function AIModuleAnalytics() {
  const { modules, xp, reputation, totalROI } = useAIModulesStore();

  const categoryCounts = modules.reduce((acc, mod) => {
    acc[mod.category] = (acc[mod.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const data = Object.entries(categoryCounts).map(([key, value]) => ({
    name: key,
    value,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card title="📊 Distribuzione Moduli per Categoria">
        <div className="p-4">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {data.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card title="📈 XP & ROI Overview">
        <div className="p-4 space-y-4">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={[{ xp, reputation, roi: totalROI }]}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="xp" fill="#6366F1" />
              <Bar dataKey="reputation" fill="#10B981" />
              <Bar dataKey="roi" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
