import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartContext";

// MS-17: unificacion de identidad de marca. Aeonik reemplaza a Bebas Neue
// (titulos) e Inter (texto de cuerpo) en todo el sitio, segun los archivos
// y el comentario de Flor en el ticket. Se usan 4 pesos: Regular y Medium
// para texto, Bold y Black para titulos/enfasis.
const aeonik = localFont({
  src: [
    { path: "../fonts/aeonik/Aeonik-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/aeonik/Aeonik-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/aeonik/Aeonik-Bold.otf", weight: "700", style: "normal" },
    { path: "../fonts/aeonik/Aeonik-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-aeonik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MotoX — Todo el motociclismo en un solo rugido",
  description:
    "Noticias, entrevistas, fotografía y coberturas exclusivas del motociclismo de competición: MotoGP, Moto2, Moto3, Superbikes, Mundial Femenino y Clásicas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${aeonik.variable} font-sans antialiased`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
