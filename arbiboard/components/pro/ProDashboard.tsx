
import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const dummyROI = Array.from({ length: 6 }, (_, i) => ({
  week: `Week ${i + 1}`,
  ROI: Math.round((Math.random() * 10 + 2) * 100) / 100,
}));

const dummyUsers = [
  { id: 1, name: "BetKing LTD", accuracy: 92.1, totalPredictions: 140 },
  { id: 2, name: "SharpEdge Pro", accuracy: 88.4, totalPredictions: 170 },
];

export default function ProDashboard() {
  const [filter, setFilter] = useState("all");

  const handleExport = () => {
    const csv = ["Name,Accuracy,TotalPredictions"];
    dummyUsers.forEach(u =>
      csv.push(`${u.name},${u.accuracy},${u.totalPredictions}`)
    );
    const blob = new Blob([csv.join("\n")], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "pro_users_export.csv";
    link.click();
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">📊 B2B Pro Dashboard</h2>
      <div className="border p-4 rounded-xl shadow-sm bg-white">
        <h3 className="font-semibold mb-2">📈 ROI Settimanale</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={dummyROI}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="ROI" stroke="#4ade80" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="border p-4 rounded-xl shadow-sm bg-white">
        <h3 className="font-semibold mb-2">🏢 Utenti B2B</h3>
        <div className="mb-3">
          <label className="mr-2 font-medium">Filtro Accuracy:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border p-1 rounded">
            <option value="all">Tutti</option>
            <option value=">90">> 90%</option>
            <option value=">85">> 85%</option>
          </select>
        </div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="text-left">Nome</th>
              <th className="text-left">Accuracy (%)</th>
              <th className="text-left"># Predizioni</th>
            </tr>
          </thead>
          <tbody>
            {dummyUsers
              .filter(u => {
                if (filter === ">90") return u.accuracy > 90;
                if (filter === ">85") return u.accuracy > 85;
                return true;
              })
              .map((u) => (
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>{u.accuracy}</td>
                  <td>{u.totalPredictions}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <button onClick={handleExport} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
          ⬇️ Esporta CSV
        </button>
      </div>
    </div>
  );
}
