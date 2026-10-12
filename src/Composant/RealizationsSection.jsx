import React from 'react';
import { MessageCircle, ThumbsUp, Leaf, Briefcase, Users, Award } from 'lucide-react';


// Données des projets
// ⚠️ À remplacer par de vraies réalisations (photos + lieu + surface réels)
// dès que possible. Ne jamais afficher un chiffre ou une certification
// qui ne peut pas être justifiée au client.
const projects = [
  {
    id: 1,
    title: "Rénovation de façade",
    image: "/facadeserv.png",
    year: "2025",
    location: "Cholet",
    surface: "300 m²",
    testimonialIcon: MessageCircle,
    testimonialText: "Une façade abîmée retrouve son éclat et protège mieux la maison des intempéries.",
  },
  {
    id: 2,
    title: "Peinture intérieure",
    image: "/peinture-pro.png",
    year: "2025",
    location: "Mazières-en-Mauges",
    surface: "240 m²",
    testimonialIcon: ThumbsUp,
    testimonialText: "Des finitions soignées et des espaces repeints avec des matériaux de qualité.",
  },
  {
    id: 3,
    title: "Isolation thermique extérieure",
    image: "/ite.png",
    year: "2024",
    location: "Chemillé-en-Anjou",
    surface: "600 m²",
    testimonialIcon: Leaf,
    testimonialText: "Un meilleur confort dès le premier hiver et des économies sur la facture de chauffage.",
  },
];

export default function RealizationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>   
        {/* --- Header de la section --- */}
       
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos chantiers de rénovation et d'isolation thermique, au service des propriétaires comme des professionnels.
          </p>
        </div>

        {/* --- Grille des Cartes Projets --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
              
              {/* Image du projet */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Contenu de la carte */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-3">
                  {project.title}
                </h3>
                
                {/* Détails (Année, Lieu, Surface) */}
                <div className="text-sm font-medium text-gray-500 mb-6 flex flex-wrap gap-x-4 gap-y-2">
                  <span>Année: {project.year}</span>
                  <span>|</span>
                  <span>Lieu: {project.location}</span>
                  <span>|</span>
                  <span>Surface: {project.surface}</span>
                </div>

                {/* Bloc Témoignage/Impact avec fond vert clair */}
                <div className="bg-green-50 rounded-xl p-4 flex items-start gap-3 mb-8 flex-grow">
                  <project.testimonialIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-800 font-medium leading-relaxed">
                    {project.testimonialText}
                  </p>
                </div>

                
              </div>
            </div>
          ))}
        </div>

        {/* --- Nos engagements ---
            Remplace les anciens chiffres invérifiables ("280+ projets",
            "98% satisfaits") par des engagements réels. À réactiver avec
            de vrais chiffres (nombre de chantiers, avis Google) une fois
            que vous les aurez mesurés. */}
        <div className="mt-24 bg-gray-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-inner gap-8">
          <h3 className="text-2xl font-bold text-gray-900">
            Nos engagements
          </h3>

          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {[
              { icon: Award, label: "Garantie décennale" },
              { icon: Briefcase, label: "Devis gratuit" },
              { icon: Users, label: "Entreprise locale, Mazières-en-Mauges" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center max-w-[160px] text-center">
                <div className="mb-3 p-3 bg-green-100 rounded-2xl text-green-600">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="text-sm font-medium text-gray-600 mt-1 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}