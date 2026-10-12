import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Classe pour les liens (Texte blanc sur fond vert, avec effet hover)
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white font-bold border-b-2 border-white pb-1"
      : "text-white/90 hover:text-white hover:font-semibold transition pb-1";

  return (
    // 1. Le header a maintenant un fond VERT par défaut (pour la partie droite)
    <header className="fixed top-0 left-0 w-full z-50 bg-[#4F7A28] shadow-md h-20">
      
      {/* 2. LA FORME BLANCHE EN BIAIS (Background blanc trapézoïdal) */}
      {/* - absolute : se place par dessus le fond vert
          - w-[65%] md:w-[45%] : largeur de la zone blanche selon l'écran
          - clip-path : Crée la découpe en diagonale
      */}
      <div 
        className="absolute top-0 left-0 h-full w-[70%] sm:w-[50%] md:w-[40%] lg:w-[35%] bg-white z-0"
        style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
      ></div>

      {/* Conteneur principal du contenu (z-10 pour être au-dessus du fond) */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center justify-between pr-6">
        
        {/* LOGO (Zone Blanche) */}
        {/* J'ai ajouté 'pl-6 md:pl-12 lg:pl-24' pour décoller le logo du bord gauche */}
        <div className="pl-6 md:pl-12 lg:pl-24 h-full flex items-center">
          <NavLink to="/">
            <img src="/globalreno.png" alt="Global Reno" className="h-14 md:h-16" />
          </NavLink>
        </div>

        {/* NAV DESKTOP (Zone Verte) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink to="/" className={linkClass}>
            Accueil
          </NavLink>

          <NavLink to="/services" className={linkClass}>
            Nos Services
          </NavLink>

          <NavLink to="/realisations" className={linkClass}>
            Réalisations
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

          <NavLink to="/blog" className={linkClass}>
            Blog
          </NavLink>

          {/* Téléphone cliquable, toujours visible sur desktop */}
          <a
            href="tel:+33682312459"
            className="flex items-center gap-2 bg-white text-[#4F7A28] px-4 py-2 rounded-full font-bold hover:bg-gray-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            06 82 31 24 59
          </a>
        </nav>

        {/* MOBILE : téléphone cliquable + burger */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="tel:+33682312459"
            aria-label="Appeler Global Réno"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#4F7A28]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </a>

          <button
            className="text-white"
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* NAV MOBILE (Dropdown) */}
      {open && (
        <div className="md:hidden bg-[#4F7A28] border-t border-white/20 absolute w-full left-0 top-20 shadow-xl">
          <nav className="flex flex-col px-6 py-6 gap-6 text-white text-lg font-medium">
            <NavLink to="/" onClick={() => setOpen(false)}>
              Accueil
            </NavLink>
            <NavLink to="/services" onClick={() => setOpen(false)}>
              Nos Services
            </NavLink>
           
            <NavLink to="/realisations" onClick={() => setOpen(false)}>
              Réalisations
            </NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              Contact
            </NavLink>
            <NavLink to="/blog" onClick={() => setOpen(false)}>
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="bg-white text-[#4F7A28] text-center px-4 py-2 rounded font-bold"
            >
              Demander un devis
            </NavLink>
            <a
              href="tel:+33682312459"
              onClick={() => setOpen(false)}
              className="bg-[#D99018] text-white text-center px-4 py-2 rounded font-bold flex items-center justify-center gap-2"
            >
              📞 Appeler le 06 82 31 24 59
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}