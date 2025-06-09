
'use client';
import { useParams } from "next/navigation";
import { useAIModulesStore } from "@/lib/store/aiModules";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";

export default function AIModuleCompatibilityPanel() {
  const params = useParams() ?? {};
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const { modules } = useAIModulesStore();
  const mod = modules.find((m) => m.id === id);

  if (!mod) return <div className="p-4">❌ Modulo non trovato</div>;

  const markets = mod.compatibility?.markets || [];
  const sports = mod.compatibility?.sports || [];
  const neuralLinks = mod.compatibility?.neuralLinks || [];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">🧩 Compatibilità del Modulo AI</h2>

      <Card title="Compatibilità AI">
        <div className="p-4 space-y-4 text-sm">
          <div>
            <span className="font-semibold">🏟️ Sport supportati:</span>
            <div className="mt-1 flex flex-wrap gap-2">
              {sports.map((s, i) => (
                <Badge key={i} variant="outline">{s}</Badge>
              ))}
            </div>
          </div>

          <div>
            <span className="font-semibold">📈 Mercati compatibili:</span>
            <div className="mt-1 flex flex-wrap gap-2">
              {markets.map((m, i) => (
                <Badge key={i} variant="default">{m}</Badge>
              ))}
            </div>
          </div>

          <div>
            <span className="font-semibold">🧠 Collegamenti a reti neurali:</span>
            <div className="mt-1 flex flex-wrap gap-2">
              {neuralLinks.length ? (
                neuralLinks.map((n, i) => (
                  <Badge key={i} variant="outline">{n}</Badge>
                ))
              ) : (
                <span className="text-muted-foreground">Nessuna rete collegata</span>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
