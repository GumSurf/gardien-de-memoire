import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import AvisClients from "@/components/AvisClients";
import ZoneIntervention from "@/components/ZoneIntervention";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Quote />
        <Services />
        <ZoneIntervention />
        <AvisClients />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
