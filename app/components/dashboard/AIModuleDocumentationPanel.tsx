
'use client';
import { useParams } from "next/navigation";
import { useAIModulesStore } from "@/lib/store/aiModules";
import Card from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function AIModuleDocumentationPanel() {
  const { id } = useParams();
  const { modules } = useAIModulesStore();
  const mod = modules.find((m) => m.id === id);

  if (!mod) return <div className="p-4">❌ Modulo non trovato</div>;

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">📘 Documentazione Modulo: {mod.name}</h2>

      <Tabs defaultValue="overview">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Strategia</TabsTrigger>
          <TabsTrigger value="params">Parametri</TabsTrigger>
          <TabsTrigger value="io">Input/Output</TabsTrigger>
          <TabsTrigger value="schema">API & JSON</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <div className="p-4 text-sm leading-relaxed">
              <p>
                🤖 <strong>Obiettivo:</strong> Il modulo predice possibili incongruenze nel betting sportivo, basandosi su 
                cluster globali di flussi di scommesse, pattern sospetti e volatilità statistica.
              </p>
              <p className="mt-2">
                🎯 <strong>Strategia:</strong> Rilevamento discrepanze non giustificate tra quote e movimenti di massa,
                supportato da ranking bookmaker e segnali AI storici.
              </p>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="params">
          <Card>
            <div className="p-4 text-sm space-y-2">
              <div><strong>acceptedSports:</strong> string[]</div>
              <div><strong>minConfidence:</strong> number (0.0 - 1.0)</div>
              <div><strong>maxVariance:</strong> number</div>
              <div><strong>preferredBookmakers:</strong> string[]</div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="io">
          <Card>
            <div className="p-4 text-sm space-y-2">
              <div><strong>Input:</strong> JSON con partite, quote, scommesse piazzate</div>
              <div><strong>Output:</strong> array di prediction con ranking e motivazione</div>
              <div><strong>Formato:</strong> standardizzato, validato con Zod</div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="schema">
          <Card>
            <div className="p-4 text-sm">
              <p className="mb-2">🔗 <strong>Schema JSON:</strong></p>
              <a
                href="https://arbiboard.ai/modules/schema/fixed-match-detect/v1"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600"
              >
                Visualizza JSON Schema API ↗
              </a>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
