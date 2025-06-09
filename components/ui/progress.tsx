import React from "react";

interface ProgressProps {
  value: number; // da 0 a 100
  className?: string;
}

export function Progress({ value, className = "" }: ProgressProps) {
  return (
    <div className={`w-full bg-gray-200 rounded h-4 overflow-hidden ${className}`}>
      <div
        className="h-full bg-blue-600 transition-all duration-500 ease-in-out"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
