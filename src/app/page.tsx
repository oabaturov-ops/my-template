"use client";

import { useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [input, setInput] = useState('');

  function addTask() {
    if (input.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput('');
  }

  function toggleTask(id: number) {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>Мои задачи</h1>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Новая задача..."
          style={{ flex: 1, padding: '12px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '8px' }}
        />
        <button
          onClick={addTask}
          style={{ padding: '12px 24px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}
        >
          Добавить
        </button>
      </div>

      <div>
        {tasks.map((task) => (
          <div key={task.id} style={{ 
            display: 'flex', alignItems: 'center', gap: '12px', 
            padding: '12px', borderBottom: '1px solid #eee' 
          }}>
            <input 
              type="checkbox" 
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            <span style={{ 
              flex: 1, 
              textDecoration: task.done ? 'line-through' : 'none', 
              color: task.done ? '#999' : '#333' 
            }}>
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer', fontSize: '18px' }}
            >
              ✕
            </button>
          </div>
        ))}
        {tasks.length === 0 && (
          <p style={{ color: '#999', textAlign: 'center', padding: '20px' }}>Задач пока нет</p>
        )}
      </div>
    </div>
  );
}