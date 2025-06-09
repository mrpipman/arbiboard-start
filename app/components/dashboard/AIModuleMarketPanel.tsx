
'use client';
import { useParams } from "next/navigation";
import { useAIModulesStore } from "@/lib/store/aiModules";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Label from "@/components/ui/label";
import { useState } from "react";

export default function AIModuleMarketPanel() {
  const { id } = useParams();
  const { modules, updateMarket } = useAIModulesStore();
  const mod = modules.find((m) => m.id === id);

  const [publicState, setPublicState] = useState(mod?.market?.public || false);
  const [stakePercent, setStakePercent] = useState(mod?.market?.stakePercent || 20);
  const [pricePerUse, setPricePerUse] = useState(mod?.market?.pricePerUse || 0.1);

  if (!mod) return <div className="p-4">❌ Modulo non trovato</div>;

  const handleSave = () => {
    updateMarket(mod.id, {
      public: publicState,
      stakePercent,
      pricePerUse
    });
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">🏪 Pubblicazione su ArbiMarket™</h2>

      <Card>
        <CardContent className="p-4 space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <Label>Modulo Pubblico</Label>
            <Switch checked={publicState} onCheckedChange={setPublicState} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">💰 Prezzo per utilizzo (in USDC)</Label>
            <input
              type="number"
              id="price"
              className="w-full px-3 py-2 border rounded"
              step="0.01"
              min="0"
              value={pricePerUse}
              onChange={(e) => setPricePerUse(parseFloat(e.target.value))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="stake">📈 Percentuale staking</Label>
            <input
              type="range"
              id="stake"
              min="0"
              max="100"
              value={stakePercent}
              onChange={(e) => setStakePercent(parseInt(e.target.value))}
              className="w-full"
            />
            <p>{stakePercent}% del ricavo va agli staker</p>
          </div>

          <Button className="mt-4" onClick={handleSave}>
            💾 Salva su ArbiMarket™
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
