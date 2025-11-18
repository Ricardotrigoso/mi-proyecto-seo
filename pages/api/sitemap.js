const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

export default async function handler(req, res) {
  // Aquí puedes obtener rutas dinámicas desde una DB o CMS.
  // Ejemplo estático (puedes reemplazar por fetch a tu CMS)
  const posts = [
    { slug: 'introduccion-seo', lastmod: '2025-02-10' },
    { slug: 'optimizar-imagenes', lastmod: '2025-02-11' },
  ];

  const staticPaths = ['/', '/blog', '/contact'];
  const postPaths = posts.map((p) => `/blog/${p.slug}`);

  const allPaths = [...staticPaths, ...postPaths];

  const sitemapEntries = allPaths
    .map((path) => {
      const post = posts.find((p) => `/blog/${p.slug}` === path);
      const lastmod = post ? post.lastmod : new Date().toISOString().split('T')[0];
      return `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapEntries}
  </urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(sitemap);
}
