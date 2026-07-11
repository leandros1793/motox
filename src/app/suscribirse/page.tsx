import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

export const metadata = { title: "Suscribirse — MotoX" };

export default function SuscribirsePage() {
  return (
    <>
      <Header />
      <main>
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
