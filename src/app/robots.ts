export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://my-template-kohl.vercel.app/sitemap.xml',
  };
}