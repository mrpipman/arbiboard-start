import React from "react";
export default function Card({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-md p-4 mb-4 w-full">
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
      {children}
    </div>
  );
}
