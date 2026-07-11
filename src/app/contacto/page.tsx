import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Contacto — MotoX" };

const channels = [
  {
    label: "Email",
    value: "prensa.motox@gmail.com",
    href: "mailto:prensa.motox@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@motox.es",
    href: "https://www.instagram.com/motox.es/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-6 py-20 text-center">
        <h1 className="font-display text-4xl uppercase tracking-wide">Contacto</h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] text-brand-gray">
          ¿Tienes una consulta, propuesta de prensa o quieres sumarte al equipo?
          Escríbenos por cualquiera de estos canales:
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-3 rounded border border-brand-border bg-brand-card px-6 py-8 transition-colors hover:border-brand-red"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                {c.icon}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wide text-brand-gray">
                {c.label}
              </span>
              <span className="text-[15px] font-semibold text-white">{c.value}</span>
            </a>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-md text-[13px] text-brand-gray">
          ¿Preferís WhatsApp? Muy pronto vamos a sumar un canal directo — por
          ahora, escríbenos por mail o Instagram y te respondemos a la
          brevedad.
        </p>
      </main>
      <Footer />
    </>
  );
}
