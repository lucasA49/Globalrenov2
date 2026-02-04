import Header from "../Composant/Header";
import HeroPrestation from "../Composant/HeroPrestation";
import PrestationsCards from "../Composant/PrestationsCards";
import ValeursIcons from "../Composant/ValeursIcons";
import CTAImages from "../Composant/CTAImages";
import Footer from "../Composant/Footer";
import ContactSection from "../Composant/ContactSection";
import TrustAndProcessSection from "../Composant/TrustAndProcessSection";
export default function Home() {
  return (
    <>
      <Header />
      <HeroPrestation />
      <PrestationsCards />
      <ValeursIcons />
        <CTAImages />
        <TrustAndProcessSection/>
        <ContactSection />
        <Footer />
    </>
  );
}
