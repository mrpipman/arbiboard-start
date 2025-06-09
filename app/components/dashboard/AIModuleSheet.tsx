
'use client';
import { useParams } from "next/navigation";
import { useAIModulesStore } from "@/lib/store/aiModules";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Card from "@/components/ui/card";
import Link from "next/link";

export default function AIModuleSheet() {
  const { modules } = useAIModulesStore();
  const { id } = useParams();

  const mod = modules.find((m) => m.id === id);

  if (!mod) {
    return (
      <div className="p-4">
        <h2 className="text-lg font-semibold">❌ Modulo non trovato</h2>
        <Link href="/dashboard/ai-modules">
          <Button className="mt-4">Torna alla dashboard</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{mod.name}</h2>
        <Badge className="text-sm capitalize">{mod.category}</Badge>
      </div>

      <Card>
        <div className="p-4 space-y-2">
          <div className="text-sm text-muted-foreground">🆔 ID: <strong>{mod.id}</strong></div>
          <div className="text-sm text-muted-foreground">📡 Stato: <strong>{mod.status}</strong></div>
          <div className="text-sm text-muted-foreground">🧠 Tipo: <strong>{mod.category}</strong></div>
          <div className="text-sm text-muted-foreground">📈 ROI Simulato: <strong>{Math.floor(Math.random() * 100)}%</strong></div>
          <div className="text-sm text-muted-foreground">🏆 XP generato: <strong>{Math.floor(Math.random() * 200)}</strong></div>
        </div>
      </Card>

      <div className="space-y-2 text-sm text-muted-foreground">
        <p>📓 Questa è una versione iniziale della scheda modulo AI.</p>
        <p>🚧 Aggiungeremo: log attività, changelog, configurazione parametri e connettività on-chain (ArbiChain™).</p>
      </div>

      <Link href="/dashboard/ai-modules">
        <Button variant="outline">🔙 Torna alla Dashboard</Button>
      </Link>
    </div>
  );
}
