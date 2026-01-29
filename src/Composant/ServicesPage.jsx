import React from 'react';
import { 
  Check, 
  ShieldCheck, Home, Sparkles, // Icônes Peinture
  BrickWall, Droplets, Leaf, // Icônes Ravalement
  Coins, ThermometerSun, Globe // Icônes Isolation
} from 'lucide-react';

// Données des services pour faciliter la maintenance
const servicesData = [
  {
    id: 1,
    title: "Peinture intérieure & extérieure",
    description: "Donnez vie à vos espaces avec nos services de peinture haut de gamme. Nous utilisons des peintures durables et écologiques pour un rendu impeccable qui résiste au temps.",
    // REMPLACE PAR TON IMAGE : /images/peintre.jpg
    imageSrc: "/api/placeholder/800/600", 
    checklist: [
      "Protection durable des surfaces",
      "Valorisation immédiate du bien",
      "Esthétique soignée et finitions parfaites"
    ],
    benefits: [
      { icon: ShieldCheck, text: "Protection durable", color: "text-green-600" },
      { icon: Home, text: "Valorisation du bien", color: "text-green-600" },
      { icon: Sparkles, text: "Esthétique soignée", color: "text-yellow-500" },
    ]
  },
  {
    id: 2,
    title: "Ravalement & enduit de façade",
    description: "Protégez votre structure contre les intempéries et redonnez-lui son éclat d'origine. Nos solutions de ravalement traitent les fissures et imperméabilisent vos murs.",
    // REMPLACE PAR TON IMAGE : /images/ravalement.jpg
    imageSrc: "/api/placeholder/800/600", 
    checklist: [
      "Traitement curatif et préventif",
      "Imperméabilisation longue durée",
      "Respect du bâti ancien ou moderne"
    ],
    benefits: [
      { icon: BrickWall, text: "Renfort structurel", color: "text-orange-600" },
      { icon: Droplets, text: "Imperméable", color: "text-blue-600" },
      { icon: Leaf, text: "Traitement Eco", color: "text-green-600" },
    ]
  },
  {
    id: 3,
    title: "Isolation thermique extérieure",
    description: "Réduisez drastiquement vos factures d'énergie et améliorez votre confort thermique été comme hiver grâce à nos systèmes d'isolation performants.",
    // REMPLACE PAR TON IMAGE : /images/isolation.jpg
    imageSrc: "/api/placeholder/800/600", 
    checklist: [
      "Élimination des ponts thermiques",
      "Gain de confort immédiat",
      "Éligible aux aides de l'État"
    ],
    benefits: [
      { icon: Coins, text: "Économies d'énergie", color: "text-yellow-600" },
      { icon: ThermometerSun, text: "Confort thermique", color: "text-red-500" },
      { icon: Globe, text: "Durable & Écolo", color: "text-green-600" },
    ]
  }
];

// Sous-composant pour une section de service
const ServiceSection = ({ service, isReversed }) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16 mb-24 last:mb-0`}>
      
      {/* Bloc Image */}
      <div className="w-full lg:w-1/2">
        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
          <img 
            src={service.imageSrc} 
            alt={service.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Bloc Contenu */}
      <div className="w-full lg:w-1/2 space-y-8">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {service.title}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Checklist */}
        <ul className="space-y-3">
          {service.checklist.map((item, index) => (
            <li key={index} className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-4 h-4 text-[#4F7A28]" strokeWidth={3} />
              </div>
              <span className="text-gray-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>

        {/* Cartes Bénéfices */}
        <div className="grid grid-cols-3 gap-4">
          {service.benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <benefit.icon className={`w-8 h-8 mx-auto mb-2 ${benefit.color}`} />
              <p className="text-sm font-bold text-gray-800 leading-tight">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Composant Principal de la Page
export default function ServicesPage() {
  return (
    // FOND BLANC PUR (bg-white) sans dégradés
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 inline-block relative">
            NOS SERVICES
            {/* Soulignement vert moderne */}
            <span className="absolute bottom-0 left-0 w-full h-1.5 bg-[#4F7A28] rounded-full transform translate-y-4"></span>
          </h2>
          <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions techniques de pointe pour la rénovation et l'isolation, alliant esthétisme durable et performance énergétique.
          </p>
        </div>

        {/* Liste des sections */}
        <div className="space-y-24">
          {servicesData.map((service, index) => (
            <ServiceSection 
              key={service.id} 
              service={service} 
              // Alterne la disposition (image à gauche puis à droite)
              isReversed={index % 2 !== 0} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}