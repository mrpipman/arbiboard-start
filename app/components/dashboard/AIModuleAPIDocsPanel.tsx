
'use client';
import { useParams } from "next/navigation";
import { useAIModulesStore } from "@/lib/store/aiModules";
import Card from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CodeBlock } from "@/components/ui/code-block";

export default function AIModuleAPIDocsPanel() {
  const params = useParams() ?? {};
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const { modules } = useAIModulesStore();
  const mod = modules.find((m) => m.id === id);

  if (!mod) return <div className="p-4">❌ Modulo non trovato</div>;

  const schema = JSON.stringify(mod.api?.schema || {}, null, 2);
  const endpoint = mod.api?.endpoint || "N/A";
  const exampleRequest = JSON.stringify(mod.api?.exampleRequest || {}, null, 2);
  const exampleResponse = JSON.stringify(mod.api?.exampleResponse || {}, null, 2);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">📚 Documentazione & Schema API</h2>

      <Card title="📚 API Docs">
        <div className="p-4 space-y-4 text-sm">
          <div>
            <strong>🔗 Endpoint:</strong> <code>{endpoint}</code>
          </div>

          <Tabs defaultValue="schema">
            <TabsList>
              <TabsTrigger value="schema">🧾 JSON Schema</TabsTrigger>
              <TabsTrigger value="req">📤 Esempio Request</TabsTrigger>
              <TabsTrigger value="res">📥 Esempio Response</TabsTrigger>
            </TabsList>

            <TabsContent value="schema">
              <ScrollArea className="h-64 mt-4">
                <CodeBlock code={schema} />
              </ScrollArea>
            </TabsContent>

            <TabsContent value="req">
              <ScrollArea className="h-64 mt-4">
                <CodeBlock code={exampleRequest} />
              </ScrollArea>
            </TabsContent>

            <TabsContent value="res">
              <ScrollArea className="h-64 mt-4">
                <CodeBlock code={exampleResponse} />
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </div>
  );
}
