import RealizationsSection from "../Composant/RealizationsSection";
import Header from "../Composant/Header";
import Footer from "../Composant/Footer";
import ImpactSection from "../Composant/ImpactSection";
import RealizationsBannerDesktop from "../Composant/RealizationsBannerDesktop";

export default function Realisation() {
  return (
    <>
      {/* --- SEO : Prouver l'expertise --- */}
      <title>Nos Réalisations | Projets de Rénovation Global Reno</title>
      <meta name="description" content="Découvrez nos derniers chantiers de rénovation. Avant/Après, isolation thermique et aménagements réalisés par Global Reno. La preuve de notre savoir-faire en images." />
      
      {/* Balises Open Graph pour le partage (ex: montrer tes travaux sur LinkedIn) */}
      <meta property="og:title" content="Découvrez les chantiers de Global Reno" />
      <meta property="og:type" content="portfolio" />

      <Header />
      <main>
        {/* On ajoute un titre H1 explicite pour les moteurs de recherche */}
        <h1 style={{ display: 'none' }}>Nos projets de rénovation globale et énergétique</h1>
        
        <RealizationsBannerDesktop />
        <RealizationsSection />
        <ImpactSection />
      </main>
      <Footer />
    </>
  );
}