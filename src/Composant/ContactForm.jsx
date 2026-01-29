import React, { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare, Tag } from 'lucide-react';

const ContactForm = () => {
  // État pour gérer les données du formulaire
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  // État pour gérer l'envoi (simulation)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Gestion des changements dans les champs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi de données à une API
    try {
      console.log("Données envoyées:", formData);
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      
      // Simulation d'un délai réseau
      setTimeout(() => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        // Reset du formulaire après succès
        setFormData({ nom: '', email: '', telephone: '', sujet: '', message: '' });
        // Effacer le message de succès après 5 secondes
        setTimeout(() => setSubmitStatus(null), 5000);
      }, 1500);

    } catch (error) {
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  // Classes Tailwind réutilisables pour le style des inputs
  const labelClass = "flex items-center gap-2 text-sm font-medium text-gray-700 mb-2";
  const inputWrapperClass = "relative";
  // Notez l'utilisation de focus:border-[#1F7A5A] et focus:ring-[#1F7A5A] pour utiliser votre couleur de marque
  const inputClass = "w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 transition-all duration-200 ease-in-out focus:bg-white focus:border-[#1F7A5A] focus:ring-2 focus:ring-[#1F7A5A]/20 outline-none";

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête du formulaire */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Parlons de votre projet
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous et notre équipe d'experts vous recontactera sous 24h pour discuter de vos besoins en rénovation.
          </p>
        </div>

        {/* Carte du formulaire */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10">
          
          {/* Messages de succès/erreur */}
          {submitStatus === 'success' && (
            <div className="mb-8 p-4 bg-green-50 border-l-4 border-[#1F7A5A] text-green-800 rounded-r-lg">
              <p className="font-medium">Message envoyé avec succès !</p>
              <p className="text-sm">Merci de nous avoir contactés. Nous revenons vers vous très vite.</p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 text-red-800 rounded-r-lg">
              <p className="font-medium">Une erreur est survenue.</p>
              <p className="text-sm">Veuillez réessayer plus tard ou nous contacter directement par téléphone.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Champ Nom */}
            <div className="md:col-span-1">
              <label htmlFor="nom" className={labelClass}>
                <User className="w-4 h-4 text-[#1F7A5A]" /> Nom complet *
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Champ Email */}
            <div className="md:col-span-1">
              <label htmlFor="email" className={labelClass}>
                <Mail className="w-4 h-4 text-[#1F7A5A]" /> Adresse Email *
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="global.reno@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Champ Téléphone */}
            <div className="md:col-span-1">
              <label htmlFor="telephone" className={labelClass}>
                <Phone className="w-4 h-4 text-[#1F7A5A]" /> Téléphone
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="06 12 34 56 78"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Champ Sujet */}
            <div className="md:col-span-1">
              <label htmlFor="sujet" className={labelClass}>
                <Tag className="w-4 h-4 text-[#1F7A5A]" /> Sujet de la demande *
              </label>
              <div className={inputWrapperClass}>
                <select
                  id="sujet"
                  name="sujet"
                  required
                  value={formData.sujet}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none cursor-pointer`}
                  style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 1rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em`}}
                >
                  <option value="" disabled>Sélectionnez un sujet</option>
                  <option value="devis">Demande de devis</option>
                  <option value="information">Demande d'information</option>
                  <option value="partenariat">Proposition de partenariat</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            {/* Champ Message (prend toute la largeur) */}
            <div className="md:col-span-2">
              <label htmlFor="message" className={labelClass}>
                <MessageSquare className="w-4 h-4 text-[#1F7A5A]" /> Votre message *
              </label>
              <div className={inputWrapperClass}>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet en quelques lignes..."
                  className={`${inputClass} resize-y min-h-[120px]`}
                ></textarea>
              </div>
            </div>

            {/* Bouton de soumission et mention légale */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto md:min-w-[200px] flex items-center justify-center gap-2 px-8 py-4 font-bold text-white rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:ring-4 focus:ring-[#1F7A5A]/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
                  ${isSubmitting ? 'bg-gray-400' : 'bg-[#1F7A5A] hover:bg-[#166A4C] hover:shadow-xl'}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message <Send className="w-5 h-5" />
                  </>
                )}
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
                En soumettant ce formulaire, vous acceptez que les informations saisies soient exploitées dans le cadre de votre demande et de la relation commerciale qui peut en découler.
              </p>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;