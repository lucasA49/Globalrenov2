import React from 'react';
import { NavLink } from "react-router-dom";

export default function RealizationsBannerDesktop() {
  // La couleur verte utilisée dans vos maquettes pour le bouton
  const greenBrandColor = "#4F7A28";

  return (
    <section
      // Configuration de la section :
      // - Hauteur minimale pour garantir que l'image de fond est visible
      // - Image de fond centrée à droite et couvrant l'espace sans se répéter
      // - Flex et items-center pour centrer verticalement le texte
      className="relative w-full min-h-[500px] lg:min-h-[650px] bg-cover bg-right-center bg-no-repeat flex items-center overflow-hidden"
      style={{
        // Assurez-vous que le chemin correspond à l'endroit où vous avez mis l'image_63.png
        backgroundImage: "url('/readesk.png')",
        backgroundColor: '#f9fafb' // Couleur de fond de secours (gris très clair)
      }}
    >
      {/* Conteneur principal pour centrer le contenu sur la page */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">

        {/* Bloc de texte : limité à la moitié gauche de la largeur sur grand écran */}
        <div className="w-full lg:w-5/12 space-y-8 pl-4 md:pl-0">

          {/* Titre et Sous-titre */}
         <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 z-10 relative">
              NOS RÉALISATIONS
            </h2>
            {/* Soulignement vert effet "marqueur" */}
            <div className="absolute bottom-1 left-0 w-full h-3 bg-green-500/30 -z-0 rounded-full transform -rotate-1"></div>
           
          </div>

          {/* Bouton CTA */}
          <div>
            <NavLink
              to="/realisations" // Adaptez la route si nécessaire
              className="inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-bold text-white uppercase tracking-wider rounded shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
              style={{ backgroundColor: greenBrandColor }}
            >
              Découvrir tous nos projets
            </NavLink>
          </div>

        </div>

      </div>
    </section>
  );
}