import Header from "../Composant/Header";
import Footer from "../Composant/Footer";
import ContactForm from "../Composant/ContactForm";

const SITE = 'https://globalreno-renovation.fr';

export default function Contact() {
  return (
    <>
      <title>Contactez Global Réno | Devis Gratuit Rénovation Cholet</title>
      <meta name="description" content="Demandez un devis gratuit à Global Réno. Toiture, façade, isolation, peinture à Cholet et dans le Maine-et-Loire. Réponse rapide." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${SITE}/contact`} />

      <meta property="og:title" content="Devis Gratuit Rénovation — Global Réno Cholet" />
      <meta property="og:description" content="Contactez nos experts pour un devis gratuit. Intervention à Cholet et dans tout le Maine-et-Loire." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${SITE}/contact`} />
      <meta property="og:image" content={`${SITE}/globalreno.png`} />
      <meta property="og:site_name" content="Global Réno" />

      <Header />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
