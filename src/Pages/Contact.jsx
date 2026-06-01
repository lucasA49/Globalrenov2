import Header from "../Composant/Header";
import Footer from "../Composant/Footer";
import ContactForm from "../Composant/ContactForm";

export default function Contact() {
  return (
    <>
      {/* --- SEO Spécifique à la page Contact --- */}
      <title>Contactez Global Reno | Devis Gratuit Rénovation</title>
      <meta name="description" content="Un projet de rénovation ? Contactez l'équipe de Global Reno. Réponse rapide, conseils d'experts et devis gratuit pour vos travaux." />
      
      <Header />
      <main>
        {/* On peut ajouter un titre invisible pour les robots si le formulaire n'en a pas */}
        <h1 style={{ display: 'none' }}>Formulaire de contact Global Reno</h1>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}