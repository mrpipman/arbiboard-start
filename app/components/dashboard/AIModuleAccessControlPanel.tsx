'use client';
import { useParams } from "next/navigation";
import { useAIModulesStore } from "@/lib/store/aiModules";
import Card from "@/components/ui/card";
import Label from "@/components/ui/label";
import Checkbox from "@/components/ui/checkbox";
import { useState } from "react";

const roles = ["Admin", "Creator", "Tester", "Viewer"];

export default function AIModuleAccessControlPanel() {
  const { id } = useParams() as Record<string, string>;
  const { modules, updateAccess } = useAIModulesStore();
  const mod = modules.find((m) => m.id === id);

  const [access, setAccess] = useState(mod?.access || {});

  if (!mod) return <div className="p-4">❌ Modulo non trovato</div>;

  const handleChange = (role: string, value: boolean) => {
    const updated = { ...access, [role]: value };
    setAccess(updated);
    updateAccess(mod.id, updated);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">🔐 Access Control per il Modulo</h2>

      <Card title="">
        <div className="p-4 space-y-4">
          <p className="text-sm text-muted-foreground">
            Imposta chi può vedere, testare o modificare questo modulo AI.
          </p>

          {roles.map((role) => (
            <div key={role} className="flex items-center space-x-3">
              <Checkbox
                id={role}
                checked={access?.[role] || false}
                onCheckedChange={(val) => handleChange(role, Boolean(val))}
              />
              <Label htmlFor={role}>{role}</Label>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
