export default function LargeComponent() {
  // Componente de ejemplo para demostrar carga dinámica (lazy)
  return (
    <section style={{ padding: '1rem', border: '1px solid #eee', marginTop: '1rem' }}>
      <h2>Componente pesado (lazy loaded)</h2>
      <p>
        Este componente se usa para demostrar la carga dinámica con <code>next/dynamic</code>. En
        un proyecto real podría contener galerías, mapas o librerías pesadas.
      </p>
    </section>
  );
}
