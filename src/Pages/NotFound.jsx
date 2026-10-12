import { NavLink } from "react-router-dom";
import Header from "../Composant/Header";
import Footer from "../Composant/Footer";

export default function NotFound() {
  return (
    <>
      <title>Page introuvable — Global Réno</title>
      <meta name="robots" content="noindex, follow" />

      <Header />
      <main className="min-h-[70vh] flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-lg">
          <p className="text-6xl font-extrabold text-[#4F7A28]">404</p>
          <h1 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">
            Cette page n'existe pas
          </h1>
          <p className="mt-4 text-gray-600">
            Le lien que vous avez suivi est peut-être incorrect, ou la page a été déplacée.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <NavLink
              to="/"
              className="bg-[#4F7A28] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#3f621f] transition"
            >
              Retour à l'accueil
            </NavLink>
            <NavLink
              to="/contact"
              className="border border-[#4F7A28] text-[#4F7A28] px-6 py-3 rounded-md font-semibold hover:bg-[#4F7A28] hover:text-white transition"
            >
              Nous contacter
            </NavLink>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
