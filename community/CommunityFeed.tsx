
import React, { useState, useEffect } from "react";

type Thread = {
  id: string;
  title: string;
  body: string;
  author: string;
  xp: number;
  likes: number;
};

export default function CommunityFeed() {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    fetch("/api/community/threads")
      .then(res => res.json())
      .then(data => setThreads(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🧵 Community Feed</h1>
      {threads.map((thread) => (
        <div key={thread.id} className="border p-4 mb-3 rounded-xl shadow">
          <h2 className="text-lg font-semibold">{thread.title}</h2>
          <p className="text-sm text-gray-600 mb-2">{thread.body}</p>
          <div className="text-xs text-gray-500">
            By {thread.author} • XP: {thread.xp} • ❤️ {thread.likes}
          </div>
        </div>
      ))}
    </div>
  );
}
