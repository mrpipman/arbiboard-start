'use client';
import { create } from 'zustand';

type AIModule = {
  id: string;
  name: string;
  analytics: { date: string; value: number }[];
};

type Store = {
  modules: AIModule[];
};

export const useAIModulesStore = create<Store>(() => ({
  modules: [
    {
      id: "demo",
      name: "Arbitrage AI Pro",
      analytics: [
        { date: "Lun", value: 45 },
        { date: "Mar", value: 80 },
        { date: "Mer", value: 130 },
        { date: "Gio", value: 95 },
        { date: "Ven", value: 160 }
      ]
    }
  ]
}));
