// pages/index.tsx
"use client"

import { useEffect, useState } from 'react';

export default function Home() {
    const [idea, setIdea] = useState<string>('…loading');

    useEffect(() => {
        fetch('/api')
            .then(async res => {
                const body = await res.text();
                if (!res.ok) {
                    throw new Error(body || `Request failed with status ${res.status}`);
                }
                return body;
            })
            .then(setIdea)
            .catch(err => setIdea('Error: ' + err.message));
    }, []);

    return (
        <main className="p-8 font-sans">
            <h1 className="text-3xl font-bold mb-4">
                Business Idea Generator
            </h1>
            <div className="w-full max-w-2xl p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm">
                <p className="text-gray-900 dark:text-gray-100 whitespace-pre-wrap">
                    {idea}
                </p>
            </div>
        </main>
    );
}