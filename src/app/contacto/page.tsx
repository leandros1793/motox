import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Contacto — MotoX" };

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-6 py-20 text-center">
        <h1 className="font-display text-4xl uppercase tracking-wide">Contacto</h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] text-brand-gray">
          El formulario de contacto está en construcción. Mientras tanto, podés
          escribirnos directamente:
        </p>
        <a
          href="mailto:prensa.motox@gmail.com"
          className="mt-6 inline-block rounded bg-brand-red px-5 py-2.5 text-[13px] font-bold uppercase tracking-wide text-white hover:bg-brand-red-dark"
        >
          prensa.motox@gmail.com
        </a>
      </main>
      <Footer />
    </>
  );
}
