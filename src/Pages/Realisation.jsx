import RealizationsSection from "../Composant/RealizationsSection";
import Header from "../Composant/Header";
import Footer from "../Composant/Footer";
import ImpactSection from "../Composant/ImpactSection";
import RealizationsBannerDesktop from "../Composant/RealizationsBannerDesktop";

const SITE = 'https://globalreno-renovation.fr';

export default function Realisation() {
  return (
    <>
      <title>Nos Réalisations | Chantiers de Rénovation à Cholet — Global Réno</title>
      <meta name="description" content="Découvrez nos chantiers de rénovation avant/après à Cholet et dans le Maine-et-Loire. Toiture, façade, isolation thermique réalisés par Global Réno." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${SITE}/realisations`} />

      <meta property="og:title" content="Réalisations Global Réno — Chantiers à Cholet" />
      <meta property="og:description" content="Avant/après : toiture, façade, isolation. La preuve de notre savoir-faire en images." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${SITE}/realisations`} />
      <meta property="og:image" content={`${SITE}/apresfacade.jpg`} />
      <meta property="og:site_name" content="Global Réno" />

      <Header />
      <main>
        <RealizationsBannerDesktop />
        <RealizationsSection />
        <ImpactSection />
      </main>
      <Footer />
    </>
  );
}
