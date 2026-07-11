export type Category = {
  label: string;
  href: string;
};

// Orden y contenido segun MS-3: MotoGP, Moto3, Moto2, Superbikes,
// Mundial Femenino, Trial y Contacto (7 categorias en total).
// "Contacto" no es una categoria de competicion: apunta directo a /contacto.
// MS-14: se sumo "Tienda" al final para que el catalogo de e-commerce
// quede enlazado desde la misma barra, sin tocar el orden original.
export const categories: Category[] = [
  { label: "MotoGP", href: "/categoria/motogp" },
  { label: "Moto3", href: "/categoria/moto3" },
  { label: "Moto2", href: "/categoria/moto2" },
  { label: "Superbikes", href: "/categoria/superbikes" },
  { label: "Mundial Femenino", href: "/categoria/femenino" },
  { label: "Trial", href: "/categoria/trial" },
  { label: "Contacto", href: "/contacto" },
  { label: "Tienda", href: "/tienda" },
];
