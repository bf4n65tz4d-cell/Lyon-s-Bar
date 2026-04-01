import Splash from "@/components/Splash";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HorairesBar from "@/components/HorairesBar";
import Concept from "@/components/Concept";
import Privatisation from "@/components/Privatisation";
import Carte from "@/components/Carte";
import Galerie from "@/components/Galerie";
import Evenements from "@/components/Evenements";
import Avis from "@/components/Avis";
import InstagramBand from "@/components/InstagramBand";
import Maps from "@/components/Maps";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Splash />
      <main>
        <Navbar />
        <Hero />
        <HorairesBar />
        <Concept />
        <Privatisation />
        <Carte />
        <Galerie />
        <Evenements />
        <Avis />
        <InstagramBand />
        <Maps />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
