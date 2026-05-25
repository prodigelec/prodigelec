export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/facebook-post'],
      },
      { userAgent: 'Bytespider', disallow: '/' },
    ],
    sitemap: 'https://www.prodigelec.fr/sitemap.xml',
  }
}
