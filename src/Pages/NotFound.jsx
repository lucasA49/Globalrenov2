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
          <p className="text-6xl" role="img" aria-label="Triste">😢</p>
          <p className="mt-4 text-sm font-semibold text-[#4F7A28] uppercase tracking-wider">
            Erreur 404
          </p>
          <h1 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
            Il semblerait que vous vous soyez trompé d'adresse
          </h1>
          <p className="mt-4 text-gray-600">
            La page que vous cherchez n'existe pas ou plus. Revenez à l'accueil, ou contactez-nous directement si vous pensez qu'il s'agit d'une erreur.
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
