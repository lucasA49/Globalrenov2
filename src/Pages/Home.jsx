import Header from "../Composant/Header";
import HeroPrestation from "../Composant/HeroPrestation";
import PrestationsCards from "../Composant/PrestationsCards";
import ValeursIcons from "../Composant/ValeursIcons";
import Footer from "../Composant/Footer";
import ContactSection from "../Composant/ContactSection";
import TrustAndProcessSection from "../Composant/TrustAndProcessSection";

const SITE = 'https://globalreno-renovation.fr';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Global Réno',
  description: 'Entreprise certifiée RGE de rénovation à Cholet — isolation thermique extérieure, façade, peinture intérieure et extérieure.',
  url: SITE,
  telephone: '+33682312459',
  email: 'globalreno49@gmail.com',
  image: `${SITE}/globalreno.png`,
  priceRange: '€€',
  address: {
    // Adresse du siège social réel (voir mentions légales).
    // À garder identique à la fiche Google Business pour éviter toute
    // incohérence NAP (Nom/Adresse/Téléphone), mauvaise pour le SEO local.
    '@type': 'PostalAddress',
    streetAddress: '20 Rue du Champ Blanc',
    addressLocality: 'Mazières-en-Mauges',
    addressRegion: 'Maine-et-Loire',
    postalCode: '49280',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.0216,
    longitude: -0.8977,
  },
  areaServed: [
    'Cholet',
    'Mazières-en-Mauges',
    'Chemillé-en-Anjou',
    'Beaupréau-en-Mauges',
    'Mortagne-sur-Sèvre',
    'Maine-et-Loire',
  ],
};

export default function Home() {
  return (
    <>
      <title>Global Réno | Entreprise RGE Isolation & Façade à Cholet</title>
      <meta name="description" content="Global Réno, entreprise certifiée RGE à Cholet (49). Isolation thermique extérieure éligible MaPrimeRénov', ravalement de façade, peinture. Devis gratuit." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${SITE}/`} />

      <meta property="og:title" content="Global Réno — Rénovation à Cholet" />
      <meta property="og:description" content="Entreprise certifiée RGE. Isolation, façade, peinture. Devis gratuit à Cholet et dans tout le Maine-et-Loire." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${SITE}/`} />
      <meta property="og:image" content={`${SITE}/globalreno.png`} />
      <meta property="og:site_name" content="Global Réno" />

      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>

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
