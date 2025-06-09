import { create } from 'zustand';

export const useDashboardStore = create((set) => ({
  user: null,
  dashboardData: null,
  setUser: (user) => set({ user }),
  setDashboardData: (data) => set({ dashboardData: data }),
}));