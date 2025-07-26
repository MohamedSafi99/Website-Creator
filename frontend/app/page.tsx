// frontend/app/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitPrompt } from '@/lib/api';

export default function HomePage() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const idea = await submitPrompt(prompt);
      router.push(`/preview/${idea._id}`);
    } catch (err) {
      alert('Something went wrong.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">🌐 Website Generator</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Describe your website idea:
          </label>
          <input
            type="text"
            placeholder="e.g. landing page for bakery"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            {loading ? 'Generating...' : '🚀 Generate'}
          </button>
        </form>
      </div>
    </main>
  );
}
