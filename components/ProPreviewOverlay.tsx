
// components/ProPreviewOverlay.tsx
import React from 'react';

const ProPreviewOverlay = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-dashed border-purple-500 shadow-lg">
      <div className="backdrop-blur-sm bg-black/50 absolute inset-0 z-10 flex flex-col items-center justify-center">
        <h3 className="text-xl font-bold text-white mb-2">Funzionalità Pro</h3>
        <p className="text-white text-sm mb-4">Sblocca strumenti avanzati per ROI multi-bookmaker</p>
        <button className="px-4 py-2 bg-purple-500 text-white rounded-xl shadow hover:bg-purple-600 transition">
          Passa alla versione Pro
        </button>
      </div>
      {/* Contenuto Pro Preview visibile sotto blur */}
    </div>
  );
};

export default ProPreviewOverlay;
