import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#1F7A5A] font-semibold"
      : "text-gray-700 hover:text-[#1F7A5A] transition";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <NavLink
          to="/"
          className="text-2xl font-extrabold tracking-wide text-gray-900"
        >
          GLOBAL <span className="text-[#1F7A5A]">RENO</span>
        </NavLink>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/prestations" className={linkClass}>
            Prestations
          </NavLink>

          <NavLink to="/secteurs" className={linkClass}>
            Secteurs
          </NavLink>

          <NavLink to="/realisations" className={linkClass}>
            Réalisations
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

          {/* CTA */}
          <NavLink
            to="/devis"
            className="ml-4 bg-[#1F7A5A] text-white px-5 py-2 rounded-md hover:bg-[#166A4C] transition"
          >
            Demander un devis
          </NavLink>
        </nav>

        {/* BURGER */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                open
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* NAV MOBILE */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm">
            <NavLink to="/prestations" className={linkClass} onClick={() => setOpen(false)}>
              Prestations
            </NavLink>

            <NavLink to="/secteurs" className={linkClass} onClick={() => setOpen(false)}>
              Secteurs
            </NavLink>

            <NavLink to="/realisations" className={linkClass} onClick={() => setOpen(false)}>
              Réalisations
            </NavLink>

            <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
              Contact
            </NavLink>

            <NavLink
              to="/devis"
              onClick={() => setOpen(false)}
              className="mt-2 bg-[#1F7A5A] text-white text-center px-4 py-2 rounded-md hover:bg-[#166A4C]"
            >
              Demander un devis
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
