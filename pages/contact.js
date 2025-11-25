import Seo from '../components/Seo';

export default function Contact() {
  return (
    <>
      <Seo
        title="Contacto"
        description="Ponte en contacto para consultas sobre SEO y optimización web."
        url="https://mi-proyecto-seo-1-6zbj.onrender.com/contact"
        image="/images/contact-og.png"
      />

      <main style={{ maxWidth: 800, margin: '2rem auto', padding: '0 1rem' }}>
        <h1>Contacto</h1>
        <p>Formulario de contacto (simulado).</p>

        <form style={{ display: 'grid', gap: '0.5rem', maxWidth: 480 }}>
          <label>
            Nombre
            <input name="name" placeholder="Tu nombre" />
          </label>

          <label>
            Correo
            <input name="email" type="email" placeholder="tu@correo.com" />
          </label>

          <label>
            Mensaje
            <textarea name="message" placeholder="Escribe tu mensaje" rows="5" />
          </label>

          <button type="button">Enviar (simulado)</button>
        </form>
      </main>
    </>
  );
}
