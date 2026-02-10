import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Check, ShieldCheck, Home, Sparkles, 
  BrickWall, Droplets, Leaf, 
  Coins, ThermometerSun, Globe 
} from 'lucide-react';

const servicesData = [
  {
    id: 1,
    anchor: "service-1", // Doit matcher le NavLink (to="/services#service-1")
    title: "Peinture intérieure & extérieure",
    description: "Donnez vie à vos espaces avec nos services de peinture haut de gamme.",
    imageSrc: "/api/placeholder/800/600", 
    checklist: ["Protection durable", "Valorisation du bien", "Finitions parfaites"],
    benefits: [
      { icon: ShieldCheck, text: "Protection durable", color: "text-green-600" },
      { icon: Home, text: "Valorisation", color: "text-green-600" },
      { icon: Sparkles, text: "Esthétique", color: "text-yellow-500" },
    ]
  },
  {
    id: 2,
    anchor: "service-2",
    title: "Ravalement & enduit de façade",
    description: "Protégez votre structure contre les intempéries et redonnez-lui son éclat.",
    imageSrc: "/api/placeholder/800/600", 
    checklist: ["Traitement curatif", "Imperméabilisation", "Respect du bâti"],
    benefits: [
      { icon: BrickWall, text: "Renfort", color: "text-orange-600" },
      { icon: Droplets, text: "Imperméable", color: "text-blue-600" },
      { icon: Leaf, text: "Eco", color: "text-green-600" },
    ]
  },
  {
    id: 3,
    anchor: "service-3",
    title: "Isolation thermique extérieure",
    description: "Réduisez vos factures d'énergie et améliorez votre confort thermique.",
    imageSrc: "/api/placeholder/800/600", 
    checklist: ["Zéro ponts thermiques", "Gain de confort", "Éligible aides État"],
    benefits: [
      { icon: Coins, text: "Économies", color: "text-yellow-600" },
      { icon: ThermometerSun, text: "Confort", color: "text-red-500" },
      { icon: Globe, text: "Durable", color: "text-green-600" },
    ]
  }
];

const ServiceSection = ({ service, isReversed }) => (
  <div 
    id={service.anchor} 
    className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 mb-32 scroll-mt-28`}
  >
    <div className="w-full lg:w-1/2">
      <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
        <img src={service.imageSrc} alt={service.title} className="w-full h-full object-cover" />
      </div>
    </div>
    <div className="w-full lg:w-1/2 space-y-6">
      <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed">{service.description}</p>
      <ul className="space-y-2">
        {service.checklist.map((item, i) => (
          <li key={i} className="flex items-center space-x-3">
            <Check className="w-5 h-5 text-[#4F7A28]" />
            <span className="text-gray-700 font-medium">{item}</span>
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-3 gap-4">
        {service.benefits.map((b, i) => (
          <div key={i} className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100">
            <b.icon className={`w-6 h-6 mx-auto mb-2 ${b.color}`} />
            <p className="text-xs font-bold text-gray-800">{b.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function ServicesPage() {
  const { hash } = useLocation();

  useEffect(() => {
    // Si on a un hash (ex: #service-1)
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Timeout pour attendre que le rendu React et les images soient prêts
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      // Si pas de hash, on remonte en haut de page (important pour le changement de page)
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [hash]);

  return (
    <section className="bg-white py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900">NOS SERVICES</h2>
          <div className="w-24 h-1.5 bg-[#4F7A28] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-10">
          {servicesData.map((service, index) => (
            <ServiceSection 
              key={service.id} 
              service={service} 
              isReversed={index % 2 !== 0} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}