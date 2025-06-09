import React from "react";

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
  className?: string;
}

export function Switch({ checked, onChange, className = "" }: SwitchProps) {
  return (
    <label className={`inline-flex items-center cursor-pointer ${className}`}>
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={onChange}
      />
      <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300 relative">
        <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${checked ? 'translate-x-5' : ''}`}></div>
      </div>
    </label>
  );
}
