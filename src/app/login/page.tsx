import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Iniciar sesión — MotoX" };

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-sm px-6 py-20">
        <div className="rounded-lg border border-brand-border bg-brand-card p-8">
          <span className="mb-4 inline-block rounded bg-brand-red px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white">
            Próximamente
          </span>
          <h1 className="font-display text-4xl uppercase tracking-wide">Iniciar sesión</h1>
          <p className="mt-3 text-sm text-brand-gray">
            El sistema de cuentas de MotoX todavía está en desarrollo. Vas a
            poder crear tu cuenta y acceder a contenido exclusivo apenas
            lancemos las suscripciones.
          </p>

          <form className="mt-6 flex flex-col gap-4">
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-brand-gray">
                Email
              </label>
              <input
                type="email"
                disabled
                placeholder="nombre@email.com"
                className="w-full rounded border border-neutral-700 bg-transparent px-3 py-2 text-sm text-white placeholder:text-neutral-600 disabled:opacity-50"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-brand-gray">
                Contraseña
              </label>
              <input
                type="password"
                disabled
                placeholder="••••••••"
                className="w-full rounded border border-neutral-700 bg-transparent px-3 py-2 text-sm text-white placeholder:text-neutral-600 disabled:opacity-50"
              />
            </div>
            <button
              type="button"
              disabled
              className="mt-2 w-full cursor-not-allowed rounded bg-neutral-700 px-5 py-2.5 text-[13px] font-bold uppercase tracking-wide text-neutral-300"
            >
              Próximamente
            </button>
          </form>

          <a
            href="/suscribirse"
            className="mt-6 block text-center text-[13px] font-bold uppercase tracking-wide text-brand-red hover:text-white"
          >
            Ver planes de suscripción →
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
