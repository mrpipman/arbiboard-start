'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { mockUser } from '@/lib/mocks/mock-user';
import { mockDashboardData } from '@/lib/mocks/mock-dashboard-data';
import { useDashboardStore } from '@/lib/store/useDashboardStore';

export default function DemoStartPage() {
  const router = useRouter();
  const setUser = useDashboardStore((s) => s.setUser);
  const setData = useDashboardStore((s) => s.setDashboardData);

  useEffect(() => {
    setUser(mockUser);
    setData(mockDashboardData);
    router.push('/real-dashboard/demo-user-start');
  }, []);

  return <div className="p-4 text-center">Loading demo UI...</div>;
}