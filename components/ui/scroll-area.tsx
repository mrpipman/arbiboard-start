export function ScrollArea({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`overflow-y-auto max-h-64 ${className ?? ""}`}>
      {children}
    </div>
  );
}
