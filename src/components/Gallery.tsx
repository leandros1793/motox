export default function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-baseline justify-between border-b border-brand-border pb-4">
        <h2 className="font-display text-3xl uppercase tracking-wide">Fotografía</h2>
        <a href="/fotografia" className="text-[13px] font-bold uppercase tracking-wide text-brand-red">
          Ver galería completa →
        </a>
      </div>
      <div className="grid grid-cols-2 gap-2 xs:grid-cols-3 xs:gap-2.5 md:grid-cols-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded bg-gradient-to-br from-neutral-700 to-neutral-900"
          />
        ))}
      </div>
    </section>
  );
}
