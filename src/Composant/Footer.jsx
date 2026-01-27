import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1F7A5A] text-white">
      
      {/* PARTIE HAUTE */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* LOGO */}
        <div>
          <h3 className="text-2xl font-extrabold tracking-wide">
            GLOBAL <span className="text-white/90">RENO</span>
          </h3>
          <p className="mt-4 text-sm text-white/90 leading-relaxed">
            Entreprise spécialisée en rénovation, ravalement de façade
            et isolation thermique extérieure pour les professionnels.
          </p>
        </div>

        {/* PRESTATIONS */}
        <div>
          <h4 className="font-semibold mb-4">Prestations</h4>
          <ul className="space-y-2 text-sm text-white/90">
            <li>
              <NavLink to="/prestations/peinture" className="hover:underline">
                Peinture intérieure & extérieure
              </NavLink>
            </li>
            <li>
              <NavLink to="/prestations/ravalement" className="hover:underline">
                Ravalement & enduit de façade
              </NavLink>
            </li>
            <li>
              <NavLink to="/prestations/isolation-exterieure" className="hover:underline">
                Isolation thermique extérieure
              </NavLink>
            </li>
          </ul>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-white/90">
            <li>
              <NavLink to="/prestations" className="hover:underline">
                Prestations
              </NavLink>
            </li>
            <li>
              <NavLink to="/realisations" className="hover:underline">
                Réalisations
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:underline">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/devis" className="hover:underline">
                Demander un devis
              </NavLink>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-white/90">
            <li>📍 France</li>
            <li>📞 06 XX XX XX XX</li>
            <li>✉️ contact@global-reno.fr</li>
            <li className="pt-3 text-xs">
              Intervention exclusivement
              <br />
              pour les professionnels
            </li>
          </ul>
        </div>

      </div>

      {/* PARTIE BASSE */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/80">
          <p>© {new Date().getFullYear()} Global Reno – Tous droits réservés</p>

          <div className="flex gap-4 mt-3 md:mt-0">
            <NavLink to="/mentions-legales" className="hover:underline">
              Mentions légales
            </NavLink>
            <NavLink to="/politique-confidentialite" className="hover:underline">
              Confidentialité
            </NavLink>
          </div>
        </div>
      </div>

    </footer>
  );
}
