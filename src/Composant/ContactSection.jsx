import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="relative w-full">
      {/* Image de fond avec superposition verte */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
          alt="Handshake background" 
          className="w-full h-full object-cover"
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
            Contactez-nous dès aujourd'hui pour un devis personnalisé, rapide et gratuit pour le devis.
          </p>
          
          <button className="mt-4 bg-[#D99018] hover:bg-[#b87a14] text-white text-sm font-bold py-3 px-8 rounded shadow-lg uppercase tracking-wide transition-colors duration-300 border-b-4 border-[#a66e12]">
            Contactez-nous
          </button>
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
                  <p className="text-sm font-semibold text-gray-700">Téléphone : <span className="font-normal text-gray-600">06 12 34 56 78</span></p>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 flex items-center gap-4 group hover:bg-white transition-colors">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#556B2F]" fill="#556B2F" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700">Email : <a href="mailto:contact@globalreno.fr" className="font-normal text-gray-600 hover:underline">contact@globalreno.fr</a></p>
                </div>
              </div>

              {/* Zone d'intervention */}
              <div className="p-5 flex items-center gap-4 group hover:bg-white transition-colors">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#556B2F]" fill="#556B2F" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700">Zone d'intervention:</p>
                  <p className="text-sm font-normal text-gray-600">Secteur régional</p>
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