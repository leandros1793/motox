import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsGrid from "@/components/NewsGrid";
import Categories from "@/components/Categories";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NewsGrid />
        <Categories />
        <Pricing />
        <Gallery />
        <About />
      </main>
      <Footer />
    </>
  );
}
