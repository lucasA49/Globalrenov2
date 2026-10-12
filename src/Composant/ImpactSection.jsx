import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Phone } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ImpactSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <section className="bg-white pb-0 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- TITRE --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase tracking-wide">
            L'IMPACT VISUEL : <span className="relative inline-block">
              AVANT / APRÈS
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-green-500" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h2>
        </div>

        {/* --- SLIDER AVANT / APRÈS --- */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[4/5] md:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group select-none">
          
          {/* Image APRÈS */}
          <img 
            src="/apresfacade.jpg" 
            alt="Bâtiment rénové" 
            className="absolute inset-0 w-full h-full object-cover object-[center_30%]" 
          />
          
          <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md z-10">
            Après
          </div>

          {/* Image AVANT */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src="/avantfacade.jpg" 
              alt="Bâtiment avant" 
              className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
            />
            <div className="absolute top-4 left-4 bg-gray-800/90 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
              Avant
            </div>
          </div>

          {/* Input invisible pour le contrôle */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={handleSliderChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          />

          {/* Barre de séparation */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.3)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl text-green-600 border-2 border-green-500">
              <ChevronLeft size={20} strokeWidth={3} className="-mr-1" />
              <ChevronRight size={20} strokeWidth={3} className="-ml-1" />
            </div>
          </div>
        </div>

        {/* --- AVIS CLIENTS GOOGLE ---
            TODO : remplacer ce bloc par de vrais avis Google (widget ou
            copier-coller) une fois que les clients auront laissé leurs avis.
            Ne jamais afficher un témoignage ou une photo inventée. */}
        <div className="max-w-3xl mx-auto mt-12 mb-20 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-gray-700 font-medium mb-4">
              Vous avez fait appel à Global Réno ? Votre avis compte pour les prochains clients.
            </p>
            <a
              href="https://www.google.com/search?q=global+reno+mazi%C3%A8res-en-mauges+avis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-700 font-bold hover:underline"
            >
              ⭐ Laisser un avis Google
            </a>
          </div>
        </div>

      </div>

      {/* --- BANNIÈRE CTA --- */}
      <div className="w-full bg-gradient-to-r from-green-500 to-[#1F7A5A] py-16 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
            Vous avez un projet d'envergure ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NavLink to="/contact" className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold shadow-lg hover:bg-gray-800 transition-all flex items-center gap-2 group">
              DEMANDER UN DEVIS GRATUIT
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </NavLink>
            <a 
              href="tel:+33682312459"
              className="px-8 py-4 bg-white text-green-700 rounded-full font-bold shadow-md hover:bg-gray-50 transition-all flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              CONTACTER L'ÉQUIPE PRO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;