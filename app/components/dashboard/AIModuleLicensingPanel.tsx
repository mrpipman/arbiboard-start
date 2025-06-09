
'use client';
import { useParams } from "next/navigation";
import { useAIModulesStore } from "@/lib/store/aiModules";
import { Card, CardContent } from "@/components/ui/card";
import Label from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AIModuleLicensingPanel() {
  const { id } = useParams();
  const { modules, updateLicensing } = useAIModulesStore();
  const mod = modules.find((m) => m.id === id);

  const [geoRestriction, setGeoRestriction] = useState(mod?.licensing?.geoRestriction ?? false);
  const [customTerms, setCustomTerms] = useState(mod?.licensing?.customTerms ?? "");

  if (!mod) return <div className="p-4">❌ Modulo non trovato</div>;

  const handleSave = () => {
    updateLicensing(mod.id, {
      geoRestriction,
      customTerms
    });
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">💼 Licensing & Usage Rights</h2>

      <Card>
        <CardContent className="p-4 space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <Label>🌍 Restrizioni Geografiche</Label>
            <Switch checked={geoRestriction} onCheckedChange={setGeoRestriction} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="terms">📜 Termini di Licenza Personalizzati</Label>
            <Textarea
              id="terms"
              placeholder="Definisci i tuoi termini legali e d'uso (es. no uso commerciale in EU, proprietà IP esclusiva, ecc.)"
              value={customTerms}
              onChange={(e) => setCustomTerms(e.target.value)}
              className="min-h-[120px]"
            />
          </div>

          <Button className="mt-4" onClick={handleSave}>
            💾 Salva Termini
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
