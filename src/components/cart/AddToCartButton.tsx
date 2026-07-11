"use client";

import { useState } from "react";
import { Product } from "@/lib/products";
import { useCart } from "./CartContext";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <button
      onClick={handleClick}
      className={`w-full rounded px-4 py-2.5 text-[13px] font-bold uppercase tracking-wide transition-colors ${
        added
          ? "bg-emerald-600 text-white"
          : "bg-brand-red text-white hover:bg-brand-red-dark"
      }`}
    >
      {added ? "Agregado ✓" : "Agregar al carrito"}
    </button>
  );
}
