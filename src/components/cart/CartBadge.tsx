"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function CartBadge() {
  const { totalItems } = useCart();

  return (
    <Link
      href="/tienda/carrito"
      aria-label="Ver carrito"
      className="relative flex h-9 w-9 items-center justify-center rounded border border-neutral-700 hover:border-white"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4.5 w-4.5">
        <path d="M3 4h2l1.6 10.2a2 2 0 0 0 2 1.8h8a2 2 0 0 0 2-1.7L20 8H6" />
        <circle cx="9.5" cy="20" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="17.5" cy="20" r="1.3" fill="currentColor" stroke="none" />
      </svg>
      {totalItems > 0 && (
        <span className="absolute -right-1.5 -top-1.5 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-brand-red px-1 text-[10px] font-bold text-white">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
