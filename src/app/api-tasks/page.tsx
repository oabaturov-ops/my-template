"use client";

import { useState, useEffect } from 'react';

export default function ApiTasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => {
        setTasks(data.tasks);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Загрузка...</div>;
  }

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '8px' }}>Задачи из API</h1>
      <p style={{ color: '#666', marginBottom: '24px' }}>Данные загружены с сервера через useEffect + fetch</p>
      <div>
        {tasks.map((task) => (
          <div key={task.id} style={{ 
            display: 'flex', alignItems: 'center', gap: '12px', 
            padding: '12px', borderBottom: '1px solid #eee' 
          }}>
            <input type="checkbox" checked={task.done} readOnly />
            <span style={{ 
              textDecoration: task.done ? 'line-through' : 'none', 
              color: task.done ? '#999' : '#333' 
            }}>
              {task.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}