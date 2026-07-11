import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsGrid from "@/components/NewsGrid";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";

// MS-10: se sacaron de la home las secciones obsoletas (Galeria, Sobre MotoX
// y Precios). Los componentes (Gallery.tsx, About.tsx, Pricing.tsx) se dejan
// en el repo sin usar por si se retoman mas adelante (ver MS-14, e-commerce).
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NewsGrid />
        <Categories />
      </main>
      <Footer />
    </>
  );
}
