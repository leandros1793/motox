import Link from "next/link";
import { categories } from "@/lib/categories";

export default function Categories() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 border-b border-brand-border pb-4">
        <h2 className="font-display text-3xl uppercase tracking-wide">Categorías</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 xs:grid-cols-3 xs:gap-3.5 md:grid-cols-4 lg:grid-cols-7">
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="rounded-md border border-brand-border bg-brand-card px-3.5 py-6 text-center transition hover:border-brand-red hover:bg-[#1a1010]"
          >
            <div className="mx-auto mb-3.5 h-8 w-8 rounded-full bg-brand-red opacity-85" />
            <div className="font-display text-base tracking-wide">{cat.label}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
