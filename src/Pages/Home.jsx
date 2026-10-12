import Header from "../Composant/Header";
import HeroPrestation from "../Composant/HeroPrestation";
import PrestationsCards from "../Composant/PrestationsCards";
import ValeursIcons from "../Composant/ValeursIcons";
import Footer from "../Composant/Footer";
import ContactSection from "../Composant/ContactSection";
import TrustAndProcessSection from "../Composant/TrustAndProcessSection";
import FaqSection from "../Composant/FaqSection";
import { SITE, faqSchema } from "../lib/business";

// La fiche entreprise (LocalBusiness) est injectée sur toutes les pages
// au build par scripts/prerender.js ; ici on ajoute seulement la FAQ.

export default function Home() {
  return (
    <>
      <title>Global Réno | Toiture, Façade & Isolation RGE à Cholet</title>
      <meta name="description" content="Global Réno, entreprise certifiée RGE à Cholet (49). Toiture, isolation thermique extérieure éligible MaPrimeRénov', ravalement de façade, peinture. Devis gratuit." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${SITE}/`} />

      <meta property="og:title" content="Global Réno — Rénovation à Cholet" />
      <meta property="og:description" content="Entreprise certifiée RGE. Toiture, isolation, façade, peinture. Devis gratuit à Cholet et dans tout le Maine-et-Loire." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${SITE}/`} />
      <meta property="og:image" content={`${SITE}/globalreno.png`} />
      <meta property="og:site_name" content="Global Réno" />

      <script type="application/ld+json">{JSON.stringify(faqSchema())}</script>

      <Header />
      <HeroPrestation />
      <PrestationsCards />
      <ValeursIcons />
      <TrustAndProcessSection/>
      <FaqSection />
      <ContactSection />
      <Footer />
    </>
  );
}
