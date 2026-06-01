import { NavLink } from "react-router-dom";

export default function PrestationsCards() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITRE */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Nos prestations
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Des solutions de rénovation et d’isolation sur mesure, pour professionnels et particuliers.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 - PEINTURE */}
          <div className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <img
              src="/peinture-pro.png"
              alt="Peinture professionnelle bâtiment"
              className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900">Peinture intérieure & extérieure</h3>
              <p className="mt-4 text-gray-600 text-sm">
                Travaux de peinture pour bâtiments tertiaires, locaux professionnels et copropriétés...
              </p>
              {/* LIEN VERS ID service-1 */}
              <NavLink
                to="/services#service-1"
                className="inline-block mt-6 text-[#1F7A5A] font-semibold hover:underline"
              >
                En savoir plus →
              </NavLink>
            </div>
          </div>

          {/* CARD 2 - RAVALEMENT */}
          <div className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <img
              src="/facade.png"
              alt="Ravalement de façade professionnel"
              className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900">Ravalement & enduit de façade</h3>
              <p className="mt-4 text-gray-600 text-sm">
                Diagnostic, traitement et rénovation complète des façades...
              </p>
              {/* LIEN VERS ID service-2 */}
              <NavLink
                to="/services#service-2"
                className="inline-block mt-6 text-[#1F7A5A] font-semibold hover:underline"
              >
                En savoir plus →
              </NavLink>
            </div>
          </div>

          {/* CARD 3 - ISOLATION */}
          <div className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <img
              src="/ite.png"
              alt="Isolation thermique extérieure"
              className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900">Isolation thermique extérieure</h3>
              <p className="mt-4 text-gray-600 text-sm">
                Solutions d’isolation performantes pour améliorer l’efficacité énergétique...
              </p>
              {/* LIEN VERS ID service-3 */}
              <NavLink
                to="/services#service-3"
                className="inline-block mt-6 text-[#1F7A5A] font-semibold hover:underline"
              >
                En savoir plus →
              </NavLink>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}