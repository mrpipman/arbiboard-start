import * as React from "react";
import { cn } from "@/lib/utils";

export default function Card({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="border rounded-lg shadow-sm bg-white">
      {title && <div className="border-b px-4 py-2 font-semibold">{title}</div>}
      <div>{children}</div>
    </div>
  );
}