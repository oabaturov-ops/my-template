import Link from 'next/link';
import { posts } from '@/data/posts';

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === Number(params.id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
          <p className="text-gray-500 mb-6">Статья не найдена</p>
          <Link href="/blog" className="text-blue-600 font-medium">← Назад к блогу</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto p-8">
        <Link href="/blog" className="text-blue-600 font-medium text-sm">
          ← Назад к блогу
        </Link>
        <div className="mt-6 bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
              Статья
            </span>
            <span className="text-gray-400 text-sm">{post.date}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>
          <div className="prose prose-lg text-gray-700 leading-relaxed">
            <p>{post.excerpt}</p>
            <p style={{ marginTop: '20px' }}>
              Это подробный текст статьи. В реальном проекте здесь будет полный текст,
              который хранится в базе данных или в отдельном файле markdown. Пока мы
              используем простой текст для демонстрации работы динамических маршрутов
              в Next.js.
            </p>
            <p style={{ marginTop: '20px' }}>
              Динамические маршруты позволяют создавать неограниченное количество страниц
              по одному шаблону. Папка с квадратными скобками [id] автоматически подставляет
              значение из URL, а компонент получает его через параметр params.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}