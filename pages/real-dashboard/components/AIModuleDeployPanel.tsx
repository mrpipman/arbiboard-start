'use client';
import React, { useState } from 'react';
import Card from '@/components/ui/card';

export default function AIModuleDeployPanel() {
  const [status, setStatus] = useState("pronto");

  const handleDeploy = () => {
    setStatus("in corso...");
    setTimeout(() => setStatus("✅ completato"), 2000);
  };

  return (
    <Card title="Deploy">
      <button onClick={handleDeploy} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
        Deploy strategia
      </button>
      <p className="mt-2 text-sm text-gray-300">Stato: {status}</p>
    </Card>
  );
}
