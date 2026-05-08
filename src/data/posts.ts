export interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Как создать сайт на Next.js",
    excerpt: "Пошаговая инструкция по созданию первого сайта с нуля.",
    date: "2026-05-01",
  },
  {
    id: 2,
    title: "Что такое Tailwind CSS",
    excerpt: "Обзор популярного фреймворка для стилизации сайтов.",
    date: "2026-05-03",
  },
  {
    id: 3,
    title: "SEO для начинающих",
    excerpt: "Как оптимизировать сайт для поисковых систем.",
    date: "2026-05-05",
  },
];