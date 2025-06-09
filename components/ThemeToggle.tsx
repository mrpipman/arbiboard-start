import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    setDark(saved === 'dark');
  }, []);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-700 text-sm font-medium text-neutral-800 dark:text-white transition hover:scale-105"
    >
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
