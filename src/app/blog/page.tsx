import Link from 'next/link';
import { posts } from '@/data/posts';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Блог</h1>
        <p className="text-gray-500 mb-8">Статьи о веб-разработке и создании сайтов</p>
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="block bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                    Статья
                  </span>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                <div className="mt-4 text-blue-600 font-medium text-sm">
                  Читать далее →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}