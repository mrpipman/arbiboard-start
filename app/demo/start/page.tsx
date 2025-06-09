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
    <div className="p-8 text-center text-gray-800">
      <h1 className="text-2xl font-semibold mb-4">Loading Arbiboard Start Demo...</h1>
      <p className="text-sm">Redirecting to the full dashboard view.</p>
    </div>
  );
}
