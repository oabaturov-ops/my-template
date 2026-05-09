import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Мой сайт';

export const metadata: Metadata = {
  title: siteName,
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