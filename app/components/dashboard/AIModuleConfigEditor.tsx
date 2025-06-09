
'use client';
import { useParams } from "next/navigation";
import { useAIModulesStore } from "@/lib/store/aiModules";
import { Input } from "@/components/ui/input";
import Label from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function AIModuleConfigEditor() {
  const { id } = useParams();
  const { modules, updateModule } = useAIModulesStore();
  const mod = modules.find((m) => m.id === id);
  const [risk, setRisk] = useState(5);
  const [autoTrade, setAutoTrade] = useState(true);
  const [lockFunds, setLockFunds] = useState(false);

  if (!mod) return <div className="p-4">❌ Modulo non trovato</div>;

  const handleSave = () => {
    updateModule(mod.id, { risk, autoTrade, lockFunds });
    alert("✅ Configurazione salvata");
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">⚙️ Configurazione Modulo: {mod.name}</h2>

      <Card>
        <CardContent className="space-y-4 p-4">
          <div>
            <Label>🎯 Percentuale Rischio Massimo</Label>
            <Input
              type="number"
              min={0}
              max={100}
              value={risk}
              onChange={(e) => setRisk(parseInt(e.target.value))}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label>🚀 Auto-Trade Attivo</Label>
            <Switch checked={autoTrade} onCheckedChange={setAutoTrade} />
          </div>

          <div className="flex items-center justify-between">
            <Label>🔒 Blocca Fondi On-Chain</Label>
            <Switch checked={lockFunds} onCheckedChange={setLockFunds} />
          </div>

          <Button onClick={handleSave}>💾 Salva Configurazione</Button>
        </CardContent>
      </Card>
    </div>
  );
}
