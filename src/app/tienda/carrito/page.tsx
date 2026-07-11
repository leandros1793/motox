"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/components/cart/CartContext";

export default function CarritoPage() {
  const { items, updateQty, removeItem, subtotal } = useCart();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-8 border-b border-brand-border pb-4 font-display text-4xl uppercase tracking-wide">
          Carrito
        </h1>

        {items.length === 0 ? (
          <div className="py-10 text-center">
            <p className="text-brand-gray">Tu carrito está vacío por ahora.</p>
            <Link
              href="/tienda"
              className="mt-5 inline-block rounded bg-brand-red px-5 py-2.5 text-[13px] font-bold uppercase tracking-wide text-white hover:bg-brand-red-dark"
            >
              Ir a la tienda
            </Link>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              {items.map(({ product, qty }) => (
                <div
                  key={product.slug}
                  className="flex items-center gap-4 rounded-md border border-brand-border bg-brand-card p-4"
                >
                  <div className="h-16 w-16 flex-none rounded bg-gradient-to-br from-neutral-700 to-brand-card" />
                  <div className="flex-1">
                    <div className="font-semibold">{product.name}</div>
                    <div className="text-sm text-brand-gray">€{product.price.toFixed(2)}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQty(product.slug, qty - 1)}
                      className="h-7 w-7 rounded border border-neutral-700 hover:border-white"
                      aria-label="Restar"
                    >
                      −
                    </button>
                    <span className="w-6 text-center">{qty}</span>
                    <button
                      onClick={() => updateQty(product.slug, qty + 1)}
                      className="h-7 w-7 rounded border border-neutral-700 hover:border-white"
                      aria-label="Sumar"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(product.slug)}
                    className="text-[12px] font-bold uppercase tracking-wide text-brand-gray hover:text-brand-red"
                  >
                    Quitar
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-brand-border pt-6">
              <span className="text-lg font-bold uppercase tracking-wide">Subtotal</span>
              <span className="text-2xl font-extrabold">€{subtotal.toFixed(2)}</span>
            </div>

            <a
              href={`mailto:prensa.motox@gmail.com?subject=${encodeURIComponent(
                "Pedido MotoX Tienda"
              )}&body=${encodeURIComponent(
                items
                  .map((i) => `${i.qty}x ${i.product.name} - €${(i.qty * i.product.price).toFixed(2)}`)
                  .join("\n") + `\n\nSubtotal: €${subtotal.toFixed(2)}`
              )}`}
              className="mt-6 block rounded bg-brand-red px-5 py-3 text-center text-[13px] font-bold uppercase tracking-wide text-white hover:bg-brand-red-dark"
            >
              Finalizar pedido por mail
            </a>
            <p className="mt-3 text-center text-xs text-brand-gray">
              El pago online todavía no está disponible. Al finalizar te
              contactamos para coordinar el pago y el envío.
            </p>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
