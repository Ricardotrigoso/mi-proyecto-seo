import dynamic from 'next/dynamic';
import Image from 'next/image';
import Seo from '../components/Seo';

const DynamicLarge = dynamic(() => import('../components/LargeComponent'), { ssr: false });

export default function Home() {
  return (
    <>
      <Seo
        title="Inicio"
        description="Página principal - Optimización y SEO con Next.js. Aprende cómo mejorar rendimiento y presencia en buscadores."
        url="https://mi-proyecto-seo-1-6zbj.onrender.com/"
        image="/images/seo-image.png"
      />

      <main style={{ maxWidth: 960, margin: '2rem auto', padding: '0 1rem' }}>
        <h1>Laboratorio: Optimización y SEO</h1>
        <p>
          Implementación de meta tags dinámicos, sitemap dinámico, robots.txt, imágenes optimizadas y carga
          diferida de componentes.
        </p>

        <article style={{ marginTop: '1.5rem' }}>
          <h2>Imagen optimizada con next/image</h2>
          <p>La imagen de abajo usa el componente <code>Image</code> de Next.js.</p>

          <div style={{ width: '100%', height: 'auto', position: 'relative', minHeight: 240 }}>
            <Image
              src="/images/seo-image.png"
              alt="Ejemplo SEO"
              fill
              sizes="(max-width: 600px) 100vw, 800px"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </article>

        <DynamicLarge />
      </main>
    </>
  );
}
