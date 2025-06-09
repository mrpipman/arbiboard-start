
'use client';

import React, { Suspense } from "react";

// UI Base
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";

// ✅ Fallback temporaneo per Skeleton
const Skeleton = ({ className }: { className?: string }) => (
  <div className={`bg-gray-300 animate-pulse rounded ${className ?? "h-4 w-full"}`} />
);

// ✅ Fallback temporaneo per GridLayout
const GridLayout = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'grid', gap: '1rem' }}>{children}</div>
);

// ✅ Placeholder temporanei per moduli mancanti
const WalletStatus = () => <div className="text-sm text-gray-600">[WalletStatus placeholder]</div>;
const GovernancePanel = () => <div className="text-sm text-gray-600">[GovernancePanel placeholder]</div>;
const AIModuleDashboard = () => <div className="text-sm text-gray-600">[AI Module Dashboard placeholder]</div>;

export default function MainOverviewDashboard() {
  return (
    <GridLayout>
      <Card title="Wallet">
        <WalletStatus />
      </Card>

      <Card title="Governance">
        <GovernancePanel />
      </Card>

      <Card title="Statistiche">
        <div>
          <p>Totale Ordini: 42</p>
          <p>Volume: € 12.500</p>
          <Badge>Attivo</Badge>
        </div>
      </Card>

      <Card title="Modulo AI">
        <Suspense fallback={<Skeleton className="h-8 w-full" />}>
          <AIModuleDashboard />
        </Suspense>
      </Card>
    </GridLayout>
  );
}
