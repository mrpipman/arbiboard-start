
import { create } from "zustand";

type AIModule = {
  id: string;
  name: string;
  status: "active" | "paused" | "error";
};

type AIModuleStore = {
  modules: AIModule[];
  totalROI: number;
  xp: number;
  reputation: string;
  setModules: (mods: AIModule[]) => void;
  setROI: (roi: number) => void;
  incrementXP: (amount: number) => void;
  setReputation: (rep: string) => void;
};

export const useAIModulesStore = create<AIModuleStore>((set) => ({
  modules: [
    { id: "1", name: "SureBet Scanner", status: "active" },
    { id: "2", name: "ValueBet Analyzer", status: "paused" },
    { id: "3", name: "FixedMatch Detector", status: "active" }
  ],
  totalROI: 12.4,
  xp: 380,
  reputation: "Strategist",
  setModules: (mods) => set({ modules: mods }),
  setROI: (roi) => set({ totalROI: roi }),
  incrementXP: (amount) => set((state) => ({ xp: state.xp + amount })),
  setReputation: (rep) => set({ reputation: rep }),
}));
