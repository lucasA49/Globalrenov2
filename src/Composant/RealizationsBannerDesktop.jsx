import React from 'react';
import { NavLink } from "react-router-dom";

export default function RealizationsBannerDesktop() {
  const greenBrandColor = "#4F7A28";

  return (
    <section
      className="relative w-full min-h-[500px] lg:min-h-[650px] bg-cover lg:bg-[length:100%_auto] bg-right-center bg-no-repeat flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/readesk.png')",
        backgroundColor: '#f9fafb',
      }}
    >
      {/* Conteneur principal centré */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        {/* Bloc texte */}
        <div className="w-full lg:w-5/12 space-y-8 pl-4 md:pl-0">

          {/* Titre avec soulignement */}
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 z-10 relative">
              NOS RÉALISATIONS
            </h2>
            <div className="absolute bottom-1 left-0 w-full h-3 bg-green-500/30 -z-0 rounded-full transform -rotate-1"></div>
          </div>

          {/* Bouton CTA */}
          <div>
            <NavLink
              to="/realisations"
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
