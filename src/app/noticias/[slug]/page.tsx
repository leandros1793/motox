import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { newsItems } from "@/lib/news";

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export default async function NoticiaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) notFound();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/noticias" className="text-[13px] font-bold uppercase tracking-wide text-brand-red">
          ← Volver a noticias
        </Link>
        <span className="mt-6 inline-block rounded bg-brand-red px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white">
          {item.tag}
        </span>
        <h1 className="mt-4 font-display text-3xl uppercase leading-tight tracking-wide">
          {item.title}
        </h1>
        <div className="mt-3 text-xs uppercase tracking-wide text-brand-gray">{item.meta}</div>
        <div className="mt-8 aspect-video rounded-md bg-gradient-to-br from-neutral-700 to-brand-card" />
        <p className="mt-8 text-[16px] leading-relaxed text-neutral-300">{item.body}</p>
      </main>
      <Footer />
    </>
  );
}
