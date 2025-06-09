
import React, { useEffect, useState } from "react";

const regions = ["US", "SEA", "LATAM"];

export default function GeoStatus() {
  const [selected, setSelected] = useState("US");
  const [licenses, setLicenses] = useState<string[]>([]);

  useEffect(() => {
    fetch(`/api/geo_regulation?region=${selected}`)
      .then(res => res.json())
      .then(data => setLicenses(data.licenses || []));
  }, [selected]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">🌍 Regolamentazioni per Regione</h2>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="border p-2 mt-4 mb-4 rounded"
      >
        {regions.map((r) => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>
      <ul className="list-disc list-inside bg-white p-4 rounded-xl shadow">
        {licenses.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </div>
  );
}
