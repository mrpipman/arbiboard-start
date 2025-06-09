
'use client';
import { useParams } from "next/navigation";
import { useAIModulesStore } from "@/lib/store/aiModules";
import Card from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AIModuleWalletPanel() {
  const { id } = useParams();
  const { modules } = useAIModulesStore();
  const mod = modules.find((m) => m.id === id);

  if (!mod) return <div className="p-4">❌ Modulo non trovato</div>;

  const wallet = mod.revenue?.wallet || "0x000...000";
  const totalRevenue = mod.revenue?.totalRevenue || 0;
  const staked = mod.revenue?.staked || 0;
  const share = mod.revenue?.revenueShare || 0;

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">🪙 Wallet & Revenue Sharing</h2>

      <Card>
        <div className="p-4 space-y-4 text-sm">
          <div className="flex justify-between">
            <span>👤 Wallet Creator</span>
            <span className="font-mono text-xs">{wallet}</span>
          </div>

          <div className="flex justify-between">
            <span>💰 Ricavi Totali</span>
            <span><strong>{totalRevenue.toFixed(2)} ARBI</strong></span>
          </div>

          <div className="flex justify-between">
            <span>🔐 Stake attivo</span>
            <span>{staked.toFixed(2)} ARBI</span>
          </div>

          <div className="flex justify-between">
            <span>📈 Revenue Share</span>
            <Badge variant="outline">{(share * 100).toFixed(0)}%</Badge>
          </div>
        </div>
      </Card>
    </div>
  );
}
