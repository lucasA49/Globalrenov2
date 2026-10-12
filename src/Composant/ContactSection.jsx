import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ContactSection = () => {
  return (
    <section className="relative w-full">
      {/* Image de fond avec superposition verte */}
      <div className="absolute  inset-0 z-0">
        <img 
          src="/contact.png" 
          alt="Handshake background" 
          className="w-full h-full pb-12 object-cover"
        />
        {/* Filtre vert pour matcher l'image originale */}
        <div className="absolute inset-0 bg-lime-900/70 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Partie Gauche : Texte et Bouton */}
        <div className="w-full md:w-3/5 text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold drop-shadow-md">
            Demandez Votre Devis Gratuit!
          </h2>
          <p className="text-sm md:text-base font-light opacity-90 leading-relaxed max-w-lg">
            Contactez-nous dès aujourd'hui pour un devis gratuit et rapide, personnalisé à votre projet.
          </p>

          <div className="flex flex-wrap gap-3">
            <NavLink
              to="/contact"
              className="mt-4 inline-block bg-[#D99018] hover:bg-[#b87a14] text-white text-sm font-bold py-3 px-8 rounded shadow-lg uppercase tracking-wide transition-colors duration-300 border-b-4 border-[#a66e12]"
            >
              Contactez-nous
            </NavLink>
            <a
              href="tel:+33682312459"
              className="mt-4 inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#4F7A28] text-sm font-bold py-3 px-8 rounded shadow-lg uppercase tracking-wide transition-colors duration-300"
            >
              <Phone className="w-4 h-4" /> Appeler maintenant
            </a>
          </div>
        </div>

        {/* Partie Droite : Carte Contact */}
        <div className="w-full md:w-2/5 max-w-sm">
          <div className="bg-[#F2F2F2] shadow-xl rounded-sm overflow-hidden">
            {/* Titre de la carte */}
            <div className="p-6 border-b border-gray-300">
              <h3 className="text-xl font-bold text-gray-700">
                Contactez-nous
              </h3>
            </div>

            {/* Liste des infos */}
            <div className="divide-y divide-gray-300">
              
              {/* Téléphone */}
              <div className="p-5 flex items-center gap-4 group hover:bg-white transition-colors">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#556B2F]" fill="#556B2F" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700">
                    Téléphone :{" "}
                    <a href="tel:+33682312459" className="font-normal text-gray-600 hover:underline">
                      06 82 31 24 59
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 flex items-center gap-4 group hover:bg-white transition-colors">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#556B2F]" fill="#556B2F" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700">Email : <a href="mailto:globalreno49@gmail.com" className="font-normal text-gray-600 hover:underline">globalreno49@gmail.com</a></p>
                </div>
              </div>

              {/* Zone d'intervention */}
              <div className="p-5 flex items-center gap-4 group hover:bg-white transition-colors">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#556B2F]" fill="#556B2F" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700">Zone d'intervention :</p>
                  <p className="text-sm font-normal text-gray-600">
                    Cholet, Mazières-en-Mauges, Chemillé-en-Anjou, Beaupréau-en-Mauges, Mortagne-sur-Sèvre et tout le Maine-et-Loire
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;