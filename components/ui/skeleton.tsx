import React from "react";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`bg-gray-700 animate-pulse rounded ${className ?? "h-4 w-full"}`} />
  );
}
