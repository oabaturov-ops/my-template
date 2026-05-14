"use client";

import { useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState('');

  function addTask() {
    if (input.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput('');
  }

  function toggleTask(id: number) {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  function deleteTask(id: number) {
    const task = tasks.find(t => t.id === id);
    if (task) {
      setModalText(task.text);
      setModal(true);
    }
  }

  function confirmDelete() {
    setTasks(tasks.filter(t => t.text !== modalText));
    setModal(false);
    setModalText('');
  }

  function cancelDelete() {
    setModal(false);
    setModalText('');
  }

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>Мои задачи</h1>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          value={input}
          onChange={(e: any) => setInput(e.target.value)}
          onKeyDown={(e: any) => e.key === 'Enter' && addTask()}
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
            <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
            <span style={{ 
              flex: 1, textDecoration: task.done ? 'line-through' : 'none', 
              color: task.done ? '#999' : '#333' 
            }}>{task.text}</span>
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

      {modal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)', display: 'flex',
          alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}>
          <div style={{
            background: 'white', padding: '30px', borderRadius: '16px',
            maxWidth: '400px', width: '90%', boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
          }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>Удалить задачу?</h2>
            <p style={{ color: '#666', marginBottom: '24px' }}>
              Вы уверены, что хотите удалить: «{modalText}»?
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button
                onClick={cancelDelete}
                style={{ padding: '10px 20px', background: '#eee', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '15px' }}
              >
                Отмена
              </button>
              <button
                onClick={confirmDelete}
                style={{ padding: '10px 20px', background: '#e53e3e', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '15px' }}
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}