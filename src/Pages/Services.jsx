import Footer from "../Composant/Footer";
import Header from "../Composant/Header";
import HeroServices from "../Composant/HeroServices";
import ServicesPage from "../Composant/ServicesPage";

const SITE = 'https://globalreno-renovation.fr';

export default function Services() {
  return (
    <>
      <title>Nos Services de Rénovation à Cholet | Isolation, Toiture, Façade — Global Réno</title>
      <meta name="description" content="Isolation thermique, toiture, ravalement de façade, menuiserie, peinture. Global Réno intervient à Cholet et dans tout le Maine-et-Loire. Devis gratuit." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${SITE}/services`} />

      <meta property="og:title" content="Services de Rénovation — Global Réno Cholet" />
      <meta property="og:description" content="Isolation, toiture, façade, menuiserie. Devis gratuit à Cholet et alentours." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${SITE}/services`} />
      <meta property="og:image" content={`${SITE}/globalreno.png`} />
      <meta property="og:site_name" content="Global Réno" />

      <Header />
      <main>
        <HeroServices />
        <ServicesPage />
      </main>
      <Footer />
    </>
  );
}
