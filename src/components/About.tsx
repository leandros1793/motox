export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
        <div>
          <h2 className="mb-4 font-display text-4xl uppercase tracking-wide">Sobre MotoX</h2>
          <p className="mb-3.5 text-[15px] text-neutral-300">
            <strong className="text-white">Todo el motociclismo en un solo rugido.</strong>{" "}
            Cubrimos MotoGP, Moto2, Moto3, Superbikes, el Mundial Femenino y
            categorías clásicas con noticias, entrevistas y fotografía profesional.
          </p>
          <p className="mb-3.5 text-[15px] text-neutral-300">
            Ofrecemos servicios de cobertura audiovisual, producción de
            fotografía y video, y gestión de redes sociales para pilotos,
            equipos y marcas del motociclismo.
          </p>
          <a
            href="/sobre-motox"
            className="inline-block rounded bg-brand-red px-5 py-2.5 text-[13px] font-bold uppercase tracking-wide text-white hover:bg-brand-red-dark"
          >
            Conocé el equipo
          </a>
        </div>
        <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-brand-red-dark to-brand-bg" />
      </div>
    </section>
  );
}
