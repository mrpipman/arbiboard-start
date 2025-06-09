'use client';
import { useParams } from 'next/navigation';
import AIModuleAnalyticsOverview from '../../app/components/dashboard/AIModuleAnalyticsOverview';
import WalletStatus from '../../app/components/shared/WalletStatus';
import AIModuleDeployPanel from '../../app/components/dashboard/AIModuleDeployPanel';
import AIModulePerformancePanel from '../../app/components/dashboard/AIModulePerformancePanel';
import AIModulePlaygroundPanel from '../../app/components/dashboard/AIModulePlaygroundPanel';

export default function RealDashboardPage() {
  const { id } = useParams() || { id: 'demo' };

  return (
    <>
      <h1>🚀 Arbiboard Start – Demo</h1>
      <AIModuleAnalyticsOverview id={id} />
      <WalletStatus />
      <AIModulePerformancePanel id={id} />
      <AIModuleDeployPanel id={id} />
      <AIModulePlaygroundPanel id={id} />
    </>
  );
}
