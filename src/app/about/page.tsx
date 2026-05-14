"use client";

import { useState } from 'react';

export default function About() {
  const [tab, setTab] = useState('mission');

  const tabs = [
    { id: 'mission', label: 'Наша миссия' },
    { id: 'team', label: 'Команда' },
    { id: 'values', label: 'Ценности' },
  ];

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '30px' }}>О нас</h1>
      
      <div style={{ display: 'flex', gap: '8px', marginBottom: '30px' }}>
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              padding: '10px 24px',
              background: tab === t.id ? '#0070f3' : '#f0f0f0',
              color: tab === t.id ? 'white' : '#333',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: tab === t.id ? 'bold' : 'normal',
              transition: 'all 0.2s',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ 
        padding: '30px', 
        background: 'white', 
        borderRadius: '12px', 
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)' 
      }}>
        {tab === 'mission' && (
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>Наша миссия</h2>
            <p style={{ lineHeight: '1.8', color: '#444' }}>
              Мы стремимся создавать качественные веб-решения, которые помогают бизнесу 
              расти и достигать своих целей. Каждый проект — это индивидуальный подход, 
              внимание к деталям и стремление к совершенству. Мы верим, что хороший сайт — 
              это не просто красивая картинка, а мощный инструмент для развития.
            </p>
          </div>
        )}

        {tab === 'team' && (
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>Команда</h2>
            <p style={{ lineHeight: '1.8', color: '#444' }}>
              Наша команда состоит из профессионалов с многолетним опытом в веб-разработке, 
              дизайне и маркетинге. Мы работаем как единое целое, чтобы каждый проект 
              был выполнен на высшем уровне. Индивидуальный подход к каждому клиенту — 
              наш главный принцип.
            </p>
          </div>
        )}

        {tab === 'values' && (
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>Наши ценности</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { title: 'Качество', desc: 'Делаем хорошо или не делаем вообще' },
                { title: 'Честность', desc: 'Прозрачные цены и сроки' },
                { title: 'Надёжность', desc: 'Сайты работают без сбоев' },
                { title: 'Развитие', desc: 'Всегда учимся новому' },
              ].map((v, i) => (
                <div key={i} style={{ padding: '16px', background: '#f8f9fa', borderRadius: '8px' }}>
                  <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>{v.title}</h3>
                  <p style={{ color: '#666', fontSize: '14px' }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}