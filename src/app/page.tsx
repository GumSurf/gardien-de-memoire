import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Quote />
        <Services />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
