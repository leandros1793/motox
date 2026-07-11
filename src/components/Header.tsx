"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/categories";

const navLinks = [
  { label: "Noticias", href: "/noticias" },
  { label: "Fotografía", href: "/fotografia" },
  { label: "En Vivo", href: "/en-vivo" },
  { label: "Planes", href: "/planes" },
  { label: "Sobre MotoX", href: "/sobre-motox" },
  { label: "Staff", href: "/staff" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-bg/90 backdrop-blur-sm">
      <div className="bg-brand-red px-3 py-1.5 text-center text-[10px] font-bold uppercase tracking-widest text-white xs:text-[11px]">
        Sin publicidad · Sin pop-ups · Experiencia 100% enfocada en el usuario
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 xs:px-6">
        <Link href="/" className="flex items-center" aria-label="MotoX — inicio">
          <Image
            src="/logo/motox-logo-white.png"
            alt="MotoX Racing"
            width={1964}
            height={790}
            priority
            className="h-7 w-auto xs:h-8 sm:h-9"
          />
        </Link>

        <nav className="hidden gap-7 text-[13px] font-semibold uppercase tracking-wide text-brand-gray md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 xs:gap-3">
          <Link
            href="/login"
            className="hidden rounded border border-neutral-700 px-4 py-2 text-[13px] font-bold uppercase tracking-wide hover:border-white sm:inline-block"
          >
            Iniciar sesión
          </Link>
          <Link
            href="/suscribirse"
            className="rounded bg-brand-red px-3 py-2 text-[12px] font-bold uppercase tracking-wide text-white hover:bg-brand-red-dark xs:px-4 xs:text-[13px]"
          >
            Suscribirse
          </Link>

          {/* Toggle de menu mobile (MS-9): los links de navegacion no
              tenian forma de accederse por debajo del breakpoint md */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            className="ml-1 flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded border border-neutral-700 md:hidden"
          >
            <span
              className={`h-0.5 w-4.5 bg-white transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-4.5 bg-white transition ${menuOpen ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-4.5 bg-white transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col border-t border-brand-border bg-brand-bg px-4 py-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-brand-border py-3 text-sm font-semibold uppercase tracking-wide text-brand-gray last:border-none hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-sm font-semibold uppercase tracking-wide text-brand-gray hover:text-white"
          >
            Iniciar sesión
          </Link>
        </nav>
      )}

      <div className="overflow-x-auto border-t border-brand-border bg-brand-bg-alt">
        <div className="mx-auto flex max-w-6xl">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="whitespace-nowrap border-b-2 border-transparent px-3.5 py-3 text-[11px] font-bold uppercase tracking-wider text-brand-gray hover:border-brand-red hover:text-white xs:px-4 xs:text-[12px]"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
