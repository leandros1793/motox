export default function Hero() {
  return (
    <section className="relative flex h-[82vh] min-h-[520px] items-end overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://framerusercontent.com/assets/xxjZutDk6A7TquH6SRLF4oU0UIc.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/55 to-brand-bg/25" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14">
        <span className="mb-4 inline-flex items-center gap-2 rounded bg-brand-red px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-white">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
          En vivo — Test Privado, Mugello
        </span>
        <h1 className="max-w-3xl font-display text-[clamp(40px,7vw,84px)] uppercase leading-[0.95] tracking-wide">
          Todo el motociclismo
          <br />
          en un solo rugido
        </h1>
        <p className="mt-4 max-w-lg text-[17px] text-neutral-300">
          Noticias, entrevistas, fotografía y coberturas exclusivas del
          motociclismo de competición en todas sus categorías.
        </p>
        <div className="mt-6 flex flex-wrap gap-3.5">
          <a href="/noticias" className="rounded bg-brand-red px-5 py-2.5 text-[13px] font-bold uppercase tracking-wide text-white hover:bg-brand-red-dark">
            Ver noticias
          </a>
          <a href="/fotografia" className="rounded border border-neutral-700 px-5 py-2.5 text-[13px] font-bold uppercase tracking-wide hover:border-white">
            Ver galería
          </a>
        </div>
      </div>
    </section>
  );
}
