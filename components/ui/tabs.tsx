import React from "react";

interface TabsProps {
  children: React.ReactNode;
  defaultValue?: string;
}

export function Tabs({ children, defaultValue }: TabsProps) {
  return <div data-default={defaultValue}>{children}</div>;
}

export function TabsList({ children }: { children: React.ReactNode }) {
  return <div className="tabs-list">{children}</div>;
}

export function TabsTrigger({
  children,
  value
}: {
  children: React.ReactNode;
  value: string;
}) {
  return <button className="tabs-trigger" data-value={value}>{children}</button>;
}

export function TabsContent({
  children,
  value
}: {
  children: React.ReactNode;
  value: string;
}) {
  return <div className="tabs-content" data-value={value}>{children}</div>;
}
