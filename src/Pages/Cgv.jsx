import Footer from "../Composant/Footer";
import Header from "../Composant/Header";
import MentionsLegales from "../Composant/Mention";

const SITE = 'https://globalreno-renovation.fr';

export default function Cgv() {
  return (
    <>
      <title>Mentions Légales — Global Réno</title>
      <meta name="description" content="Mentions légales de Global Réno, entreprise de rénovation à Cholet (Maine-et-Loire)." />
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" href={`${SITE}/mentions-legales`} />

      <Header />
      <MentionsLegales />
      <Footer />
    </>
  );
}
