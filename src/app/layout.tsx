import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Мой первый сайт на Next.js",
  description: "Учебный сайт, созданный в рамках обучения веб-разработке на Next.js",
  keywords: ["Next.js", "React", "веб-разработка", "обучение"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}