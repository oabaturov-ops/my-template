import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ 
      background: '#0070f3', 
      padding: '15px 30px', 
      display: 'flex', 
      gap: '20px' 
    }}>
      <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
        Мой сайт
      </Link>
      <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>
        О нас
      </Link>
      <Link href="/contacts" style={{ color: 'white', textDecoration: 'none' }}>
        Контакты
      </Link>
    </header>
  );
}