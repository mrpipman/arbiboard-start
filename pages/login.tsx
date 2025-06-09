'use client';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    document.cookie = `token=mock-jwt-token; path=/`;
    router.push('/real-dashboard/demo');
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Login Arbiboard</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ padding: 10, width: '100%', marginBottom: 10 }}
      />
      <button onClick={handleLogin} style={{ padding: 10, background: 'blue', color: 'white' }}>
        Login
      </button>
    </div>
  );
}
