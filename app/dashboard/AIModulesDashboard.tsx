
'use client';
import Link from "next/link";
import { useAIModulesStore } from "@/lib/store/aiModules";
import Card from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AIModulesDashboard() {
  const { modules } = useAIModulesStore();

  if (!modules.length) {
    return <div className="p-6 text-sm">📭 Nessun modulo AI ancora creato</div>;
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">🤖 AI Modules Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {modules.map((mod) => (
          <Link key={mod.id} href={`/dashboard/ai-modules/${mod.id}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <div className="p-4 space-y-2">
                <div className="text-lg font-semibold">{mod.name}</div>
                <p className="text-sm text-muted-foreground">{mod.description?.slice(0, 80)}...</p>

                <div className="flex flex-wrap gap-1 pt-2 text-xs">
                  {mod.market?.public && <Badge variant="success">🟢 Pubblico</Badge>}
                  {mod.performance?.roi && (
                    <Badge variant="outline">📈 ROI: {mod.performance.roi.toFixed(2)}%</Badge>
                  )}
                  {mod.reputation && (
                    <Badge variant="outline">⭐ Reputazione: {mod.reputation}</Badge>
                  )}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
