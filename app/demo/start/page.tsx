// DEMO ENTRY POINT UI

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { mockUser } from '@/lib/mocks/mock-user';
import { mockDashboardData } from '@/lib/mocks/mock-dashboard-data';
import { useDashboardStore } from '@/lib/store/useDashboardStore';

export default function DemoStartPage() {
  const router = useRouter();
  const setUser = useDashboardStore((s: any) => s.setUser);
  const setData = useDashboardStore((s: any) => s.setDashboardData);

  useEffect(() => {
    setUser(mockUser);
    setData(mockDashboardData);
    router.push('/real-dashboard/demo-user-start');
  }, []);

  return (
    <div className="p-4 text-center text-gray-700">
      <h1 className="text-xl font-semibold mb-4">Loading demo UI...</h1>
      <p>This demo will redirect you to a full Arbiboard Start experience.</p>
    </div>
  );
}
