import Seo from '../../components/Seo';
import Link from 'next/link';

export default function Blog() {
  const posts = [
    { slug: 'introduccion-seo', title: 'Introducción al SEO' },
    { slug: 'optimizar-imagenes', title: 'Cómo optimizar imágenes' },
  ];

  return (
    <>
      <Seo
        title="Blog"
        description="Artículos sobre optimización web, SEO, buenas prácticas y rendimiento."
        url="https://mi-proyecto-seo-1-6zbj.onrender.com/blog"
        image="/images/blog-og.png"
      />

      <main style={{ maxWidth: 900, margin: '2rem auto', padding: '0 1rem' }}>
        <h1>Blog</h1>
        <p>Listado de artículos de ejemplo.</p>

        <ul>
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
