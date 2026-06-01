import { NavLink } from "react-router-dom";

export default function CTAImages() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITRE */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Des chantiers maîtrisés de A à Z
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nous intervenons sur des projets professionnels avec une exigence
            constante de qualité, de sécurité et de durabilité.
          </p>
        </div>

        {/* IMAGES */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="/images/chantier-1.jpg"
            alt="Chantier rénovation professionnelle"
            className="h-64 w-full object-cover rounded-xl"
          />

          <img
            src="/images/chantier-2.jpg"
            alt="Travaux de façade et ravalement"
            className="h-64 w-full object-cover rounded-xl"
          />

          <img
            src="/images/chantier-3.jpg"
            alt="Isolation thermique extérieure bâtiment"
            className="h-64 w-full object-cover rounded-xl"
          />
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <NavLink
            to="/devis"
            className="bg-[#1F7A5A] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#166A4C] transition"
          >
            Demander un devis professionnel
          </NavLink>
        </div>

      </div>
    </section>
  );
}
