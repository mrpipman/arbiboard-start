
'use client';
import { useParams } from "next/navigation";
import { useAIModulesStore } from "@/lib/store/aiModules";
import Card from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function AIModuleOnChainPerformancePanel() {
  const { id } = useParams();
  const { modules } = useAIModulesStore();
  const mod = modules.find((m) => m.id === id);

  if (!mod) return <div className="p-4">❌ Modulo non trovato</div>;

  const level = mod.onChain?.level || 1;
  const roi = mod.onChain?.roi || 0;
  const xp = mod.onChain?.xp || 0;

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">📈 On-Chain Performance</h2>

      <Card>
        <div className="p-4 space-y-4 text-sm">
          <div className="flex justify-between">
            <span>🔢 ROI On-Chain</span>
            <span><strong>{roi.toFixed(2)}%</strong></span>
          </div>

          <div className="flex justify-between">
            <span>🧠 Livello</span>
            <Badge variant="outline">Lvl {level}</Badge>
          </div>

          <div className="space-y-1">
            <span>⚡ XP guadagnata</span>
            <Progress value={(xp % 1000) / 10} className="h-2" />
            <span className="text-muted-foreground text-xs">{xp} / {Math.floor(xp / 1000 + 1) * 1000} XP</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
