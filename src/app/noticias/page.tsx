import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { newsItems } from "@/lib/news";

export const metadata = { title: "Noticias — MotoX" };

export default function NoticiasPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-8 border-b border-brand-border pb-4 font-display text-4xl uppercase tracking-wide">
          Noticias
        </h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {newsItems.map((item) => (
            <Link
              key={item.slug}
              href={`/noticias/${item.slug}`}
              className="block overflow-hidden rounded-md border border-brand-border bg-brand-card transition hover:-translate-y-0.5 hover:border-neutral-700"
            >
              <article>
                <div className="relative aspect-video bg-gradient-to-br from-neutral-700 to-brand-card">
                  <span className="absolute left-3.5 top-3.5 rounded bg-brand-red px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white">
                    {item.tag}
                  </span>
                </div>
                <div className="p-4">
                  <h2 className="text-[17px] font-semibold leading-tight">{item.title}</h2>
                  <div className="mt-2 text-xs uppercase tracking-wide text-brand-gray">{item.meta}</div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
