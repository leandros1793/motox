import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/categories";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-bg/90 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-2 bg-brand-red px-3 py-2 text-center text-[10px] font-bold uppercase tracking-widest text-white xs:text-[11px]">
        <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 flex-none xs:h-4 xs:w-4">
          <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="1.6" />
          <path d="M6 10.5l2.5 2.5L14 7.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
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

        {/* MS-10: se elimino el menu principal (Noticias, Fotografia, En Vivo,
            Planes, Sobre MotoX, Staff) porque eran secciones no vigentes o sin
            pagina real. La navegacion queda a cargo de las categorias de abajo
            y del propio contenido de la home. */}
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
        </div>
      </div>

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
