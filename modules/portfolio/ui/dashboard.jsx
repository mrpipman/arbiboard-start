import React from 'react';

export default function PortfolioDashboard({ data }) {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Predictive Wallet</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(data).map(([strategy, weight]) => (
          <div key={strategy} className="p-4 rounded-xl bg-white shadow">
            <h3 className="font-semibold">{strategy}</h3>
            <p>Weight: {(weight * 100).toFixed(1)}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
