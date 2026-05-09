"use client";

import { useState } from 'react';

export default function Contacts() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

    function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }
  }

  if (sent) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Спасибо!</h1>
        <p style={{ fontSize: '18px' }}>Ваше сообщение отправлено. Мы свяжемся с вами.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Контакты</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          name="name"
          placeholder="Ваше имя"
          value={form.name}
          onChange={handleChange}
          required
          style={{ padding: '12px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '8px' }}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ padding: '12px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '8px' }}
        />
        <textarea
          name="message"
          placeholder="Ваше сообщение"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          style={{ padding: '12px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '8px' }}
        />
        <button
          type="submit"
          style={{ padding: '14px', fontSize: '16px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
        >
          Отправить
        </button>
      </form>
    </div>
  );
}