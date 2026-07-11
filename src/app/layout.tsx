import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      <body className={`${bebas.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
