import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ 
      padding: '80px 40px', 
      textAlign: 'center',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '80px', fontWeight: 'bold', color: '#0070f3', marginBottom: '10px' }}>404</h1>
      <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '20px' }}>Страница не найдена</h2>
      <p style={{ color: '#666', marginBottom: '30px', maxWidth: '400px' }}>
        Запрошенная страница не существует. Возможно, она была перемещена или удалена.
      </p>
      <Link 
        href="/" 
        style={{ 
          padding: '12px 30px', 
          background: '#0070f3', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: '8px' 
        }}
      >
        ← На главную
      </Link>
    </div>
  );
}