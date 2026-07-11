"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import { Product } from "@/lib/products";

type CartItem = { product: Product; qty: number };

type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (slug: string) => void;
  updateQty: (slug: string, qty: number) => void;
  totalItems: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addItem(product: Product) {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.slug === product.slug);
      if (existing) {
        return prev.map((i) =>
          i.product.slug === product.slug ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { product, qty: 1 }];
    });
  }

  function removeItem(slug: string) {
    setItems((prev) => prev.filter((i) => i.product.slug !== slug));
  }

  function updateQty(slug: string, qty: number) {
    if (qty <= 0) {
      removeItem(slug);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.product.slug === slug ? { ...i, qty } : i))
    );
  }

  const totalItems = useMemo(
    () => items.reduce((sum, i) => sum + i.qty, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.qty * i.product.price, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQty, totalItems, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de CartProvider");
  return ctx;
}
