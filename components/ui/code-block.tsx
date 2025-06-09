export function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
      <code>{code}</code>
    </pre>
  );
}
