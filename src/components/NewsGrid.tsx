import Link from "next/link";
import { newsItems } from "@/lib/news";

export default function NewsGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-baseline justify-between border-b border-brand-border pb-4">
        <h2 className="font-display text-3xl uppercase tracking-wide">Noticias destacadas</h2>
        <Link href="/noticias" className="text-[13px] font-bold uppercase tracking-wide text-brand-red">
          Ver todas →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2">
        {newsItems.map((item) => (
          <Link
            key={item.slug}
            href={`/noticias/${item.slug}`}
            className={`block overflow-hidden rounded-md border border-brand-border bg-brand-card transition hover:-translate-y-0.5 hover:border-neutral-700 ${
              item.feature ? "md:row-span-2" : ""
            }`}
          >
            <article>
              <div className="relative aspect-video bg-gradient-to-br from-neutral-700 to-brand-card">
                <span className="absolute left-3.5 top-3.5 rounded bg-brand-red px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white">
                  {item.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className={`font-semibold leading-tight ${item.feature ? "text-2xl" : "text-[17px]"}`}>
                  {item.title}
                </h3>
                <div className="mt-2 text-xs uppercase tracking-wide text-brand-gray">{item.meta}</div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
