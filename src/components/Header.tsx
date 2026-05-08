"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ background: '#0070f3', padding: '15px 30px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '20px' }}>
          Мой сайт
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer', display: 'block' }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      {menuOpen && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', paddingTop: '15px' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Главная</Link>
          <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>О нас</Link>
          <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Блог</Link>
          <Link href="/api-tasks" style={{ color: 'white', textDecoration: 'none' }}>API Задачи</Link>
          <Link href="/contacts" style={{ color: 'white', textDecoration: 'none' }}>Контакты</Link>
        </div>
      )}
    </header>
  );
}