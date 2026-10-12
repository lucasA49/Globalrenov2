import { NavLink } from "react-router-dom";

export default function HeroPrestation() {
  return (
    <section className="relative h-[70vh] mt-20 mmin-h-[500px] w-full">
      
      {/* IMAGE */}
      <img
        src="/banniere-prestation.png"
        alt="Travaux de rénovation professionnelle"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY
      <div className="absolute inset-0 bg-[#1F7A5A]/85"></div> */}

      {/* CONTENU */}
 <div className="relative z-10 h-full flex items-center">
  <div className="max-w-7xl mx-auto px-6 text-white">
    
    {/* Ajout de drop-shadow pour le contraste */}
    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
      Votre maison perd sa chaleur ?
      <span className="block text-white">
       Façade qui noircit ?
      </span>
    </h1>

    <p className="mt-6 text-lg text-white font-medium max-w-2xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
    Global Réno accompagne les propriétaires et les professionnels à Cholet et dans tout le Maine-et-Loire pour leurs travaux de rénovation, ravalement de façade et isolation thermique par l'extérieur.
    </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <NavLink
              to="/contact"
              className="bg-white text-[#1F7A5A] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Devis gratuit et rapide
            </NavLink>

            <NavLink
              to="/realisations"
              className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#1F7A5A] transition"
            >
              Voir nos réalisations
            </NavLink>

            <a
              href="tel:+33682312459"
              className="flex items-center gap-2 bg-[#D99018] hover:bg-[#b87a14] px-6 py-3 rounded-md font-semibold transition"
            >
              📞 06 82 31 24 59
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
