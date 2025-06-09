
'use client';
import React, { useState } from "react";
import { useAIModulesStore } from "@/lib/store/aiModules";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { v4 as uuidv4 } from "uuid";
import { Select, SelectItem } from "@/components/ui/select";

const categories = [
  "predictive",
  "arbitrage",
  "social",
  "risk mgmt",
  "scouting",
];

export default function AIModuleDashboard() {
  const { modules, totalROI, xp, reputation, setModules, incrementXP } = useAIModulesStore();
  const [newModuleName, setNewModuleName] = useState("");
  const [newCategory, setNewCategory] = useState(categories[0]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const toggleModuleStatus = (id: string) => {
    setModules(
      modules.map((mod) =>
        mod.id === id
          ? {
              ...mod,
              status: mod.status === "active" ? "paused" : "active",
            }
          : mod
      )
    );
    incrementXP(5);
    toast({
      title: "✅ Modulo aggiornato",
      description: "Lo stato del modulo è stato modificato.",
    });
  };

  const addNewModule = () => {
    if (!newModuleName.trim()) return;
    const newMod = {
      id: uuidv4(),
      name: newModuleName,
      category: newCategory,
      status: "paused",
    };
    setModules([...modules, newMod]);
    setNewModuleName("");
    toast({
      title: "➕ Nuovo Modulo Aggiunto",
      description: `Modulo "${newMod.name}" aggiunto correttamente.`,
    });
    incrementXP(10);
  };

  const getBadgeInfo = () => {
    if (xp >= 300) return { label: "Elite", color: "bg-purple-600", desc: "Top strategist AI" };
    if (xp >= 200) return { label: "Strategist", color: "bg-blue-600", desc: "Esperto AI builder" };
    if (xp >= 100) return { label: "Esperto", color: "bg-green-600", desc: "Utente avanzato" };
    return { label: "Novizio", color: "bg-gray-600", desc: "Nuovo utente AI" };
  };

  const badge = getBadgeInfo();

  const filteredModules = modules.filter((mod) =>
    mod.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter === "all" || mod.status === filter)
  );

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">🧠 Moduli AI Attivi</h2>
        <div className="text-sm text-muted-foreground">ROI Totale: <strong>{totalROI}%</strong></div>
        <div className="text-sm text-muted-foreground">XP: <strong>{xp}</strong></div>
        <div className="flex items-center gap-2">
          <Badge className={badge.color}>{badge.label}</Badge>
          <span className="text-xs text-muted-foreground">{badge.desc}</span>
        </div>
        <Progress value={Math.min(xp / 300, 100)} className="h-2" />
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <Input
          placeholder="Cerca moduli..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select defaultValue="all" onValueChange={(val) => setFilter(val)}>
          <SelectItem value="all">Tutti</SelectItem>
          <SelectItem value="active">Attivi</SelectItem>
          <SelectItem value="paused">In Pausa</SelectItem>
        </Select>
      </div>

      <div className="flex flex-col md:flex-row gap-2 mt-3">
        <Input
          placeholder="Nome modulo AI"
          value={newModuleName}
          onChange={(e) => setNewModuleName(e.target.value)}
        />
        <Select defaultValue={newCategory} onValueChange={setNewCategory}>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
          ))}
        </Select>
        <Button onClick={addNewModule}>Aggiungi</Button>
      </div>

      <ul className="space-y-3">
        {filteredModules.map((mod) => (
          <li key={mod.id} className="flex justify-between items-center p-3 border rounded-lg">
            <div>
              <div className="font-medium">{mod.name}</div>
              <div className="text-xs text-muted-foreground">
                {mod.status === "active" ? "In esecuzione" : "In pausa"} — <span className="italic">{mod.category}</span>
              </div>
            </div>
            <Button
              size="sm"
              variant={mod.status === "active" ? "destructive" : "default"}
              onClick={() => toggleModuleStatus(mod.id)}
            >
              {mod.status === "active" ? "Ferma" : "Avvia"}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
