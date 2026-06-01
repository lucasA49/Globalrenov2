import Footer from "../Composant/Footer";
import Header from "../Composant/Header";
import HeroServices from "../Composant/HeroServices";
import ServicesPage from "../Composant/ServicesPage";

export default function Services() {
  return (
    <>
      {/* --- SEO STRATÉGIQUE : Tes services --- */}
      <title>Nos Services de Rénovation | Isolation & Énergie - Global Reno</title>
      <meta name="description" content="Découvrez nos prestations : isolation thermique, menuiserie, rénovation de toiture et chauffage. Des solutions durables pour améliorer le confort de votre habitat avec Global Reno." />
      
      {/* Balises pour booster la confiance sur les réseaux */}
      <meta property="og:title" content="Prestations de Rénovation Globale par Global Reno" />
      <meta property="og:description" content="Améliorez l'efficacité énergétique de votre maison avec nos experts." />

      <Header />
      <main>
        {/* Un titre h1 caché pour dire à Google de quoi parle toute la page */}
        <h1 style={{ display: 'none' }}>Solutions de rénovation énergétique et travaux d'intérieur</h1>
        
        <HeroServices />
        <ServicesPage />
      </main>
      <Footer />
    </>
  );
}