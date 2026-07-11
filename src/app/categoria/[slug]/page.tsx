import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categories } from "@/lib/categories";

const competitionSlugs = categories
  .filter((c) => c.href.startsWith("/categoria/"))
  .map((c) => ({ slug: c.href.replace("/categoria/", ""), label: c.label }));

export function generateStaticParams() {
  return competitionSlugs.map(({ slug }) => ({ slug }));
}

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = competitionSlugs.find((c) => c.slug === slug);
  if (!category) notFound();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-20 text-center">
        <span className="mb-4 inline-block rounded bg-brand-red px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white">
          Categoría
        </span>
        <h1 className="font-display text-4xl uppercase tracking-wide">{category.label}</h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] text-brand-gray">
          Estamos preparando la cobertura completa de {category.label}. Muy pronto vas a
          encontrar acá noticias, resultados y fotos de la categoría.
        </p>
      </main>
      <Footer />
    </>
  );
}
