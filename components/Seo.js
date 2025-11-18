import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Seo({ title, description, url, image, keywords }) {
  const siteName = 'Mi Sitio Optimizado';
  const router = useRouter();
  const canonical = url || `http://localhost:3000${router.asPath === '/' ? '/' : router.asPath}`;

  const defaultImage = image || '/images/seo-image.png';
  const metaDescription = description || 'Sitio optimizado con Next.js — Laboratorio de Optimización y SEO';
  const metaKeywords = keywords || 'SEO, Next.js, optimización, rendimiento, imágenes optimizadas';

  return (
    <Head>
      <title>{title ? `${title} — ${siteName}` : siteName}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={defaultImage} />
    </Head>
  );
}
