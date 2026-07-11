export type Product = {
  slug: string;
  name: string;
  price: number;
  category: string;
  description: string;
};

// Catalogo MVP (MS-14): productos de ejemplo hasta definir el mix real
// de merchandising con Flor. Precios en EUR, sin impuestos calculados.
export const products: Product[] = [
  {
    slug: "remera-motox-negra",
    name: "Remera MotoX Negra",
    price: 19.99,
    category: "Indumentaria",
    description: "Remera de algodón 100% con logo MotoX estampado al frente.",
  },
  {
    slug: "gorra-motox-roja",
    name: "Gorra MotoX Roja",
    price: 16.5,
    category: "Indumentaria",
    description: "Gorra ajustable con logo bordado, edición temporada actual.",
  },
  {
    slug: "buzo-motox-canguro",
    name: "Buzo Canguro MotoX",
    price: 39.99,
    category: "Indumentaria",
    description: "Buzo con capucha y bolsillo canguro, logo en pecho y espalda.",
  },
  {
    slug: "pack-stickers-motox",
    name: "Pack de Stickers MotoX",
    price: 6.99,
    category: "Accesorios",
    description: "Set de 8 stickers con los logos de las categorías del sitio.",
  },
  {
    slug: "termo-motox",
    name: "Termo MotoX 1L",
    price: 24.99,
    category: "Accesorios",
    description: "Termo de acero inoxidable con logo MotoX grabado.",
  },
  {
    slug: "mochila-motox",
    name: "Mochila MotoX Paddock",
    price: 44.99,
    category: "Accesorios",
    description: "Mochila resistente al agua con compartimento para notebook.",
  },
];
