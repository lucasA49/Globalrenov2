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
  description: 'Entreprise de rénovation à Cholet — toiture, façade, isolation, peinture intérieure et extérieure.',
  url: SITE,
  telephone: '+33682312459',
  email: 'globalreno49@gmail.com',
  image: `${SITE}/globalreno.png`,
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cholet',
    addressRegion: 'Maine-et-Loire',
    postalCode: '49300',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.0603,
    longitude: -0.8798,
  },
  areaServed: ['Cholet', 'Maine-et-Loire', 'Mazières-en-Mauges', 'Beaupréau-en-Mauges'],
};

export default function Home() {
  return (
    <>
      <title>Global Réno | Expert Rénovation à Cholet — Toiture, Façade, Isolation</title>
      <meta name="description" content="Global Réno, entreprise de rénovation à Cholet (49). Toiture, ravalement de façade, isolation thermique, peinture. Devis gratuit — intervention dans tout le Maine-et-Loire." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${SITE}/`} />

      <meta property="og:title" content="Global Réno — Rénovation à Cholet" />
      <meta property="og:description" content="Toiture, façade, isolation, peinture. Devis gratuit à Cholet et dans tout le Maine-et-Loire." />
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
