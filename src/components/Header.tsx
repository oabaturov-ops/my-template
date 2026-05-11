"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '@/lib/ThemeContext';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { dark, toggle } = useTheme();

  return (
    <header style={{ 
      background: dark ? '#1a1a2e' : '#0070f3', 
      padding: '15px 30px' 
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '20px' }}>
          Мой сайт
        </Link>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button
            onClick={toggle}
            style={{ background: 'none', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}
          >
            {dark ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer' }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', paddingTop: '15px' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Главная</Link>
          <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>О нас</Link>
          <Link href="/contacts" style={{ color: 'white', textDecoration: 'none' }}>Контакты</Link>
          <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Блог</Link>
          <Link href="/api-tasks" style={{ color: 'white', textDecoration: 'none' }}>API Задачи</Link>
        </div>
      )}
    </header>
  );
}