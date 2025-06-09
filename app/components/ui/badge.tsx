import * as React from "react";
import { cn } from "@/lib/utils";

export default function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "outline" }) {
  const variants = {
    default: "bg-blue-500 text-white",
    outline: "border border-gray-500 text-gray-800",
  };
  return (
    <div className={cn("px-2 py-1 rounded text-xs inline-block", variants[variant], className)} {...props} />
  );
}