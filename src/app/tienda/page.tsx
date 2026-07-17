import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { products } from "@/lib/products";

export const metadata = { title: "Tienda — MotoX" };

export default function TiendaPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex flex-wrap items-baseline gap-3 border-b border-brand-border pb-4">
          <h1 className="font-display text-3xl uppercase tracking-wide">Tienda</h1>
          <span className="rounded-full border border-brand-border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-gray">
            Catálogo de muestra
          </span>
        </div>
        <p className="mb-10 max-w-xl text-[15px] text-brand-gray">
          Merchandising oficial de MotoX. El checkout todavía no procesa pagos
          reales — puedes armar tu carrito y coordinar la compra con nosotros
          mientras conectamos un medio de pago.
        </p>

        <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.slug}
              className="flex flex-col overflow-hidden rounded-md border border-brand-border bg-brand-card"
            >
              <div className="aspect-square bg-gradient-to-br from-neutral-700 to-brand-card" />
              <div className="flex flex-1 flex-col p-4">
                <span className="text-[11px] font-bold uppercase tracking-wide text-brand-red">
                  {product.category}
                </span>
                <h2 className="mt-1 text-[16px] font-semibold leading-tight">{product.name}</h2>
                <p className="mt-1.5 flex-1 text-[13px] text-brand-gray">{product.description}</p>
                <div className="mt-3 mb-3 text-xl font-extrabold">
                  €{product.price.toFixed(2)}
                </div>
                <AddToCartButton product={product} />
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
