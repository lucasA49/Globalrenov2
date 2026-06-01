import Header from "../Composant/Header";
import HeroPrestation from "../Composant/HeroPrestation";
import PrestationsCards from "../Composant/PrestationsCards";
import ValeursIcons from "../Composant/ValeursIcons";
import Footer from "../Composant/Footer";
import ContactSection from "../Composant/ContactSection";
import TrustAndProcessSection from "../Composant/TrustAndProcessSection";

export default function Home() {
  return (
    <>
      {/* --- BLOC SEO RÉEL (Natif React 19) --- */}
      <title>Global Reno | Expert en Rénovation Globale</title>
      <meta name="description" content="Transformez votre habitat avec Global Reno. Excellence en rénovation, isolation et aménagement. Devis gratuit et accompagnement personnalisé." />
      <link rel="canonical" href="https://votre-site.com/" />
      
      {/* Balises Open Graph (pour Facebook/LinkedIn/WhatsApp) */}
      <meta property="og:title" content="Global Reno - Rénovation d'Excellence" />
      <meta property="og:description" content="Découvrez nos prestations et réalisations en rénovation globale." />
      <meta property="og:type" content="website" />

      {/* --- TES COMPOSANTS --- */}
      <Header />
      <HeroPrestation />
      <PrestationsCards />
      <ValeursIcons />
      <TrustAndProcessSection/>
      <ContactSection />
      <Footer />
    </>
  );
}