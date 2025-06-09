import React from "react";
export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
      {children}
    </span>
  );
}
