import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-brand-border py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Logo mas grande y version "Alternativo" para que tenga la
              misma presencia que el header, en linea con referencias como
              MotoGP/F1 donde el logo domina visualmente la barra. */}
          <Image
            src="/logo/motox-alt-red.png"
            alt="MotoX Racing"
            width={1357}
            height={790}
            className="h-16 w-auto sm:h-20"
          />
          <div className="flex gap-5 text-sm text-brand-gray">
            <a href="https://www.instagram.com/motox.es/" className="hover:text-white">Instagram</a>
            <a href="mailto:prensa.motox@gmail.com" className="hover:text-white">prensa.motox@gmail.com</a>
            <a href="/contacto" className="hover:text-white">Contacto</a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-neutral-600">
          © {new Date().getFullYear()} MOTOX — Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
