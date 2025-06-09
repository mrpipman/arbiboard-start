'use client';

import { useParams } from 'next/navigation';

export default function DebugParamsPage() {
  const params = useParams();

  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
      <h1>🧪 Debug Params</h1>
      <p><strong>typeof useParams():</strong> {typeof params}</p>
      <pre>{JSON.stringify(params, null, 2)}</pre>

      {params && typeof params === 'object' && 'id' in params ? (
        <p>✅ <strong>ID rilevato:</strong> <code>{(params as any).id}</code></p>
      ) : (
        <p>❌ <strong>ID NON presente nei parametri</strong></p>
      )}
    </div>
  );
}
