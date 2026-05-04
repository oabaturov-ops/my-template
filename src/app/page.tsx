"use client";

import { useState } from 'react';
import Card from '@/components/Card';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Мой первый сайт
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 text-center">
          <h2 className="text-xl font-bold mb-4">Счётчик</h2>
          <p className="text-5xl font-bold mb-4">{count}</p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => setCount(count + 1)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer"
            >
              Плюс 1
            </button>
            <button 
              onClick={() => setCount(0)}
              className="bg-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-500 cursor-pointer"
            >
              Сбросить
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card title="Быстро" description="Сайт загружается мгновенно" />
          <Card title="Красиво" description="Современный дизайн" />
          <Card title="Надёжно" description="Работает без сбоев" />
        </div>
      </div>
    </div>
  );
}