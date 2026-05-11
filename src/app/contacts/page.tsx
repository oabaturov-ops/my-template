"use client";

import { useState } from 'react';

export default function Contacts() {
  const [form, setForm] = useState<any>({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState('');

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleFile(e: any) {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
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
      setFileName('');
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
      <p style={{ color: '#666', marginBottom: '20px' }}>Заполните форму или прикрепите файл</p>
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
        <div style={{ padding: '20px', border: '2px dashed #ccc', borderRadius: '8px', textAlign: 'center' }}>
          <input
            type="file"
            onChange={handleFile}
            style={{ display: 'none' }}
            id="file-upload"
          />
          <label htmlFor="file-upload" style={{ 
            cursor: 'pointer', color: '#0070f3', fontSize: '16px' 
          }}>
            {fileName || '📎 Прикрепить файл'}
          </label>
          {fileName && <p style={{ color: '#666', fontSize: '14px', marginTop: '8px' }}>{fileName}</p>}
        </div>
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