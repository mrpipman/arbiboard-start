
'use client';
import { useParams } from "next/navigation";
import { useAIModulesStore } from "@/lib/store/aiModules";
import Card from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const mockLogs = [
  { id: 1, date: "2025-06-06", action: "📈 Attivazione trigger ROI > 12%", result: "🟢 Successo - ROI stimato 15.3%" },
  { id: 2, date: "2025-06-05", action: "🔍 Scansione pattern quota", result: "🟡 Anomalia rilevata su 1xBet" },
  { id: 3, date: "2025-06-04", action: "⏱️ Delay esecuzione modulo", result: "🔴 Errore di rete. Retry in 30s." },
  { id: 4, date: "2025-06-03", action: "🧠 Aggiornamento predizione AI", result: "🟢 Accuratezza 93%" },
  { id: 5, date: "2025-06-02", action: "📡 Check flusso odds multipiattaforma", result: "🟢 Tutto regolare" }
];

export default function AIModuleInsightsLog() {
  const { id } = useParams();
  const { modules } = useAIModulesStore();
  const mod = modules.find((m) => m.id === id);

  if (!mod) return <div className="p-4">❌ Modulo non trovato</div>;

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">📚 Insight & Log Modulo: {mod.name}</h2>

      <ScrollArea className="h-64 rounded-md border p-2">
        <div className="space-y-3">
          {mockLogs.map((log) => (
            <Card key={log.id}>
              <div className="p-3 space-y-1">
                <div className="text-xs text-muted-foreground">{log.date}</div>
                <div className="text-sm font-medium">{log.action}</div>
                <div className="text-sm">{log.result}</div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
