import React from 'react';
import { MessageCircle, ThumbsUp, Leaf, Briefcase, Users, Award } from 'lucide-react';


// Données des projets (à remplacer par vos vraies données et images)
const projects = [
  {
    id: 1,
    title: "Rénovation Façade ",
    image: "/facadeserv.png",
    year: "2025",
    location: "Grand Ouest",
    surface: "300 m²",
    testimonialIcon: MessageCircle,
    testimonialText: "Témoignage Client: \"Transformation spectaculaire, économies d'énergie majeures.",
  },
  {
    id: 2,
    title: "Peinture Intérieure ",
    image: "/peinture-pro.png",
    year: "2025",
    location: "Grand ouest",
    surface: "240 m²",
    testimonialIcon: ThumbsUp,
    testimonialText: "Résultat: +40% de luminosité, qualité de l'air améliorée. Certification LEED GoldPlus qu'une simple peinture, c'est un véritable soin pour nos espaces. Luminosité décuplée, finitions impeccables et une certification environnementale qui prouve notre engagement pour la santé de nos collaborateurs.",
  },
  {
    id: 3,
    title: "Isolation Thermique Extérieure ",
    image: "/ite.png",
    year: "2024",
    location: "Grand Ouest",
    surface: "600 m²",
    testimonialIcon: Leaf,
    testimonialText: "L'alliance parfaite de la technique et de l'économie. Le confort est total dès le premier hiver, avec une baisse de 30% des dépenses énergétiques. Un projet maîtrisé de A à Z dont la rentabilité est assurée en 5 ans.",
  },
];

// Données des statistiques
const stats = [
  { icon: Briefcase, number: "280+", label: "Projets Réalisés" },
  { icon: Users, number: "98%", label: "Clients Satisfaits" },
];

export default function RealizationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>   
        {/* --- Header de la section --- */}
       
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos projets de rénovation et d'isolation thermique : l'excellence au service des professionnels.
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

        {/* --- Barre des Statistiques --- */}
        <div className="mt-24 bg-gray-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-inner">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 md:mb-0">
            Statistiques Clés
          </h3>
          
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-3 p-3 bg-green-100 rounded-2xl text-green-600">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-extrabold text-gray-900">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-gray-600 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}