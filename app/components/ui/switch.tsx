import * as React from "react";

export function Switch({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={\`w-12 h-6 rounded-full \${checked ? 'bg-blue-500' : 'bg-gray-300'} relative\`}
    >
      <span className={\`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all \${checked ? 'left-6' : 'left-1'}\`} />
    </button>
  );
}