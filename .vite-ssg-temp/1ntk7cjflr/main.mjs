import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React, { useState } from "react";
import { NavLink, createBrowserRouter, createMemoryRouter, RouterProvider } from "react-router-dom";
import { Phone, Mail, MapPin, Award, ShieldCheck, Leaf, Recycle, CheckCircle2, Search, FileText, HardHat, Handshake, User, Tag, MessageSquare, Send, Home as Home$1, Sparkles, BrickWall, Droplets, Coins, ThermometerSun, Globe, Check, MessageCircle, ThumbsUp, Briefcase, Users, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
function Header() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) => isActive ? "text-white font-bold border-b-2 border-white pb-1" : "text-white/90 hover:text-white hover:font-semibold transition pb-1";
  return (
    // 1. Le header a maintenant un fond VERT par défaut (pour la partie droite)
    /* @__PURE__ */ jsxs("header", { className: "fixed top-0 left-0 w-full z-50 bg-[#4F7A28] shadow-md h-20", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute top-0 left-0 h-full w-[70%] sm:w-[50%] md:w-[40%] lg:w-[35%] bg-white z-0",
          style: { clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-7xl mx-auto h-full flex items-center justify-between pr-6", children: [
        /* @__PURE__ */ jsx("div", { className: "pl-6 md:pl-12 lg:pl-24 h-full flex items-center", children: /* @__PURE__ */ jsx(NavLink, { to: "/", children: /* @__PURE__ */ jsx("img", { src: "/globalreno.png", alt: "Global Reno", className: "h-14 md:h-16" }) }) }),
        /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-8 text-sm font-medium", children: [
          /* @__PURE__ */ jsx(NavLink, { to: "/", className: linkClass, children: "Accueil" }),
          /* @__PURE__ */ jsx(NavLink, { to: "/services", className: linkClass, children: "Nos Services" }),
          /* @__PURE__ */ jsx(NavLink, { to: "/realisations", className: linkClass, children: "Réalisations" }),
          /* @__PURE__ */ jsx(NavLink, { to: "/contact", className: linkClass, children: "Contact" })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "md:hidden text-white",
            onClick: () => setOpen(!open),
            children: /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-8 w-8",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                )
              }
            )
          }
        )
      ] }),
      open && /* @__PURE__ */ jsx("div", { className: "md:hidden bg-[#4F7A28] border-t border-white/20 absolute w-full left-0 top-20 shadow-xl", children: /* @__PURE__ */ jsxs("nav", { className: "flex flex-col px-6 py-6 gap-6 text-white text-lg font-medium", children: [
        /* @__PURE__ */ jsx(NavLink, { to: "/", onClick: () => setOpen(false), children: "Accueil" }),
        /* @__PURE__ */ jsx(NavLink, { to: "/services", onClick: () => setOpen(false), children: "Nos Services" }),
        /* @__PURE__ */ jsx(NavLink, { to: "/realisations", onClick: () => setOpen(false), children: "Réalisations" }),
        /* @__PURE__ */ jsx(NavLink, { to: "/contact", onClick: () => setOpen(false), children: "Contact" }),
        /* @__PURE__ */ jsx(
          NavLink,
          {
            to: "/devis",
            onClick: () => setOpen(false),
            className: "bg-white text-[#4F7A28] text-center px-4 py-2 rounded font-bold",
            children: "Demander un devis"
          }
        )
      ] }) })
    ] })
  );
}
function HeroPrestation() {
  return /* @__PURE__ */ jsxs("section", { className: "relative h-[70vh] mt-20 mmin-h-[500px] w-full", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "/banniere-prestation.png",
        alt: "Travaux de rénovation professionnelle",
        className: "absolute inset-0 w-full h-full object-cover"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 h-full flex items-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 text-white", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]", children: [
        "Rénovation & Isolation",
        /* @__PURE__ */ jsx("span", { className: "block text-white", children: "pour les professionnels" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-white font-medium max-w-2xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]", children: "Global Reno accompagne les entreprises, syndics et collectivités dans leurs projets de rénovation, ravalement et isolation thermique extérieure." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsx(
          NavLink,
          {
            to: "/contact",
            className: "bg-white text-[#1F7A5A] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition",
            children: "Demander un devis"
          }
        ),
        /* @__PURE__ */ jsx(
          NavLink,
          {
            to: "/realisations",
            className: "border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#1F7A5A] transition",
            children: "Voir nos réalisations"
          }
        )
      ] })
    ] }) })
  ] });
}
function PrestationsCards() {
  return /* @__PURE__ */ jsx("section", { className: "bg-white py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl  mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold text-gray-900", children: "Nos prestations" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-gray-600", children: "Des solutions de rénovation et d’isolation adaptées aux exigences des professionnels." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/peinture-pro.png",
            alt: "Peinture professionnelle bâtiment",
            className: "h-56 w-full object-cover group-hover:scale-105 transition duration-300"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900", children: "Peinture intérieure & extérieure" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-gray-600 text-sm", children: "Travaux de peinture pour bâtiments tertiaires, locaux professionnels et copropriétés, avec des finitions durables et soignées." }),
          /* @__PURE__ */ jsx(
            NavLink,
            {
              to: "/prestations/peinture",
              className: "inline-block mt-6 text-[#1F7A5A] font-semibold hover:underline",
              children: "En savoir plus →"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/facade.png",
            alt: "Ravalement de façade professionnel",
            className: "h-56 w-full object-cover group-hover:scale-105 transition duration-300"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900", children: "Ravalement & enduit de façade" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-gray-600 text-sm", children: "Diagnostic, traitement et rénovation complète des façades pour préserver et valoriser le patrimoine immobilier." }),
          /* @__PURE__ */ jsx(
            NavLink,
            {
              to: "/prestations/ravalement",
              className: "inline-block mt-6 text-[#1F7A5A] font-semibold hover:underline",
              children: "En savoir plus →"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/isolation-exterieure.jpg",
            alt: "Isolation thermique extérieure",
            className: "h-56 w-full object-cover group-hover:scale-105 transition duration-300"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900", children: "Isolation thermique extérieure" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-gray-600 text-sm", children: "Solutions d’isolation performantes pour améliorer l’efficacité énergétique et réduire les coûts d’exploitation." }),
          /* @__PURE__ */ jsx(
            NavLink,
            {
              to: "/prestations/isolation-exterieure",
              className: "inline-block mt-6 text-[#1F7A5A] font-semibold hover:underline",
              children: "En savoir plus →"
            }
          )
        ] })
      ] })
    ] })
  ] }) });
}
function ValeursIcons() {
  return /* @__PURE__ */ jsx("section", { className: "bg-gray-50 py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold text-gray-900", children: "Pourquoi faire confiance à Global Reno" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-gray-600", children: "Une approche professionnelle, durable et conforme aux exigences des chantiers B2B." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 grid grid-cols-1 md:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-10 rounded-xl shadow-sm text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-16 h-16",
            viewBox: "0 0 64 64",
            fill: "#1F7A5A",
            children: /* @__PURE__ */ jsx("path", { d: "M8 30L32 10l24 20v22a2 2 0 0 1-2 2H38V40H26v14H10a2 2 0 0 1-2-2V30z" })
          }
        ) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 text-lg font-semibold text-gray-900", children: "Expertise bâtiment" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-gray-600 text-sm", children: "Une parfaite maîtrise des travaux de rénovation, peinture, ravalement et isolation pour bâtiments professionnels." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-10 rounded-xl shadow-sm text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "w-16 h-16",
            viewBox: "0 0 64 64",
            fill: "#1F7A5A",
            children: [
              /* @__PURE__ */ jsx("path", { d: "M32 6l20 8v14c0 14-9 24-20 30C21 52 12 42 12 28V14l20-8z" }),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M24 30l6 6 10-12",
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: "4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 text-lg font-semibold text-gray-900", children: "Qualité & conformité" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-gray-600 text-sm", children: "Respect strict des normes, matériaux certifiés et garanties professionnelles incluses." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-10 rounded-xl shadow-sm text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "w-16 h-16",
            viewBox: "0 0 64 64",
            fill: "#1F7A5A",
            children: [
              /* @__PURE__ */ jsx("path", { d: "M50 8C30 8 14 22 14 40c0 10 8 16 18 16 18 0 24-16 24-32-2-6-4-10-6-16z" }),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M20 44c10-12 20-20 30-26",
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: "3",
                  strokeLinecap: "round"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 text-lg font-semibold text-gray-900", children: "Solutions durables" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-gray-600 text-sm", children: "Des solutions d’isolation et de rénovation pensées pour la performance énergétique et la durabilité." })
      ] })
    ] })
  ] }) });
}
function CTAImages() {
  return /* @__PURE__ */ jsx("section", { className: "bg-white py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold text-gray-900", children: "Des chantiers maîtrisés de A à Z" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-gray-600", children: "Nous intervenons sur des projets professionnels avec une exigence constante de qualité, de sécurité et de durabilité." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-14 grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/chantier-1.jpg",
          alt: "Chantier rénovation professionnelle",
          className: "h-64 w-full object-cover rounded-xl"
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/chantier-2.jpg",
          alt: "Travaux de façade et ravalement",
          className: "h-64 w-full object-cover rounded-xl"
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/chantier-3.jpg",
          alt: "Isolation thermique extérieure bâtiment",
          className: "h-64 w-full object-cover rounded-xl"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 flex justify-center", children: /* @__PURE__ */ jsx(
      NavLink,
      {
        to: "/devis",
        className: "bg-[#1F7A5A] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#166A4C] transition",
        children: "Demander un devis professionnel"
      }
    ) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-[#1F7A5A] text-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-extrabold tracking-wide", children: [
          "GLOBAL ",
          /* @__PURE__ */ jsx("span", { className: "text-white/90", children: "RENO" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-white/90 leading-relaxed", children: "Entreprise spécialisée en rénovation, ravalement de façade et isolation thermique extérieure pour les professionnels." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-4", children: "Prestations" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-white/90", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/prestations/peinture", className: "hover:underline", children: "Peinture intérieure & extérieure" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/prestations/ravalement", className: "hover:underline", children: "Ravalement & enduit de façade" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/prestations/isolation-exterieure", className: "hover:underline", children: "Isolation thermique extérieure" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-4", children: "Navigation" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-white/90", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/prestations", className: "hover:underline", children: "Prestations" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/realisations", className: "hover:underline", children: "Réalisations" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/contact", className: "hover:underline", children: "Contact" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/devis", className: "hover:underline", children: "Demander un devis" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-white/90", children: [
          /* @__PURE__ */ jsx("li", { children: "📍 France" }),
          /* @__PURE__ */ jsx("li", { children: "📞 06 XX XX XX XX" }),
          /* @__PURE__ */ jsx("li", { children: "✉️ contact@global-reno.fr" }),
          /* @__PURE__ */ jsxs("li", { className: "pt-3 text-xs", children: [
            "Intervention exclusivement",
            /* @__PURE__ */ jsx("br", {}),
            "pour les professionnels"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-white/20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/80", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Global Reno – Tous droits réservés"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-3 md:mt-0", children: [
        /* @__PURE__ */ jsx(NavLink, { to: "/mentions-legales", className: "hover:underline", children: "Mentions légales" }),
        /* @__PURE__ */ jsx(NavLink, { to: "/politique-confidentialite", className: "hover:underline", children: "Confidentialité" })
      ] })
    ] }) })
  ] });
}
const ContactSection = () => {
  return /* @__PURE__ */ jsxs("section", { className: "relative w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
          alt: "Handshake background",
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-lime-900/70 mix-blend-multiply" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-3/5 text-white space-y-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold drop-shadow-md", children: "Demandez Votre Devis Gratuit!" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base font-light opacity-90 leading-relaxed max-w-lg", children: "Contactez-nous dès aujourd'hui pour un devis personnalisé, rapide et gratuit pour le devis." }),
        /* @__PURE__ */ jsx("button", { className: "mt-4 bg-[#D99018] hover:bg-[#b87a14] text-white text-sm font-bold py-3 px-8 rounded shadow-lg uppercase tracking-wide transition-colors duration-300 border-b-4 border-[#a66e12]", children: "Contactez-nous" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full md:w-2/5 max-w-sm", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#F2F2F2] shadow-xl rounded-sm overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "p-6 border-b border-gray-300", children: /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-700", children: "Contactez-nous" }) }),
        /* @__PURE__ */ jsxs("div", { className: "divide-y divide-gray-300", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 flex items-center gap-4 group hover:bg-white transition-colors", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(Phone, { className: "w-6 h-6 text-[#556B2F]", fill: "#556B2F" }) }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-gray-700", children: [
              "Téléphone : ",
              /* @__PURE__ */ jsx("span", { className: "font-normal text-gray-600", children: "06 12 34 56 78" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 flex items-center gap-4 group hover:bg-white transition-colors", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(Mail, { className: "w-6 h-6 text-[#556B2F]", fill: "#556B2F" }) }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-gray-700", children: [
              "Email : ",
              /* @__PURE__ */ jsx("a", { href: "mailto:contact@globalreno.fr", className: "font-normal text-gray-600 hover:underline", children: "contact@globalreno.fr" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 flex items-center gap-4 group hover:bg-white transition-colors", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(MapPin, { className: "w-6 h-6 text-[#556B2F]", fill: "#556B2F" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-gray-700", children: "Zone d'intervention:" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-normal text-gray-600", children: "Secteur régional" })
            ] })
          ] })
        ] })
      ] }) })
    ] })
  ] });
};
const certifications = [
  { id: 1, name: "QUALIBAT RGE", icon: Award, description: "Efficacité énergétique" },
  { id: 2, name: "FRENCH FAB", icon: ShieldCheck, description: "Industrie française" },
  { id: 3, name: "ISO 14001", icon: Leaf, description: "Management environnemental" },
  { id: 4, name: "Économie Circulaire", icon: Recycle, description: "Partenaire engagé" },
  { id: 5, name: "Garantie Décennale PRO", icon: CheckCircle2, description: "Assurance professionnelle" }
];
const steps = [
  {
    id: 1,
    title: "1. AUDIT & CONSEIL",
    description: "Analyse sur site, diagnostic thermique, définition des objectifs RSE.",
    icon: Search
  },
  {
    id: 2,
    title: "2. ÉTUDE & DEVIS",
    description: "Proposition technique chiffrée, planning prévisionnel et aides financières.",
    icon: FileText
  },
  {
    id: 3,
    title: "3. RÉALISATION",
    description: "Mise en œuvre par équipes qualifiées, suivi de chantier rigoureux.",
    icon: HardHat
  },
  {
    id: 4,
    title: "4. RÉCEPTION & SUIVI",
    description: "Contrôle qualité, remise des DOE, garantie et maintenance.",
    icon: Handshake
  }
];
function TrustAndProcessSection() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-white overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-extrabold text-center text-gray-900 mb-12 uppercase tracking-wide", children: "NOS CERTIFICATIONS & ENGAGEMENTS" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 justify-items-center", children: certifications.map((cert) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "group flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-white rounded-3xl p-4 text-center border border-green-50 transition-all duration-300 hover:-translate-y-2\n                           shadow-[0_0_15px_rgba(79,122,40,0.2)] hover:shadow-[0_0_25px_rgba(79,122,40,0.4)]",
          children: [
            /* @__PURE__ */ jsx(cert.icon, { className: "w-10 h-10 text-green-600 mb-3 group-hover:scale-110 transition-transform", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-800 text-sm md:text-base leading-tight mb-1", children: cert.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 hidden md:block", children: cert.description })
          ]
        },
        cert.id
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-extrabold text-center text-gray-900 mb-16 uppercase tracking-wide", children: "NOTRE MÉTHODOLOGIE PRO : EN 4 ÉTAPES CLAIRES" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-12 left-0 w-full h-2 bg-green-200 rounded-full -z-10", children: /* @__PURE__ */ jsx("div", { className: "h-full w-full bg-gradient-to-r from-green-400 to-green-600 opacity-30 rounded-full" }) }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4", children: steps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center relative z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30 mb-6 transform transition-transform hover:scale-105", children: /* @__PURE__ */ jsx(step.icon, { className: "w-10 h-10 text-white", strokeWidth: 1.5 }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900 mb-3", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed max-w-xs mx-auto", children: step.description }),
          index < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "md:hidden w-1 h-12 bg-green-200 my-4 rounded-full" })
        ] }, step.id)) })
      ] })
    ] })
  ] }) });
}
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("title", { children: "Global Reno | Expert en Rénovation Globale" }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: "Transformez votre habitat avec Global Reno. Excellence en rénovation, isolation et aménagement. Devis gratuit et accompagnement personnalisé." }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://votre-site.com/" }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Global Reno - Rénovation d'Excellence" }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Découvrez nos prestations et réalisations en rénovation globale." }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(HeroPrestation, {}),
    /* @__PURE__ */ jsx(PrestationsCards, {}),
    /* @__PURE__ */ jsx(ValeursIcons, {}),
    /* @__PURE__ */ jsx(CTAImages, {}),
    /* @__PURE__ */ jsx(TrustAndProcessSection, {}),
    /* @__PURE__ */ jsx(ContactSection, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    const serviceID = "service_9kofzwn";
    const templateID = "template_t2h9wro";
    const publicKey = "2-rIsdkp_jIJdCDjy";
    const templateParams = {
      full_name: formData.nom,
      email: formData.email,
      phone_number: formData.telephone,
      subject: formData.sujet,
      message_content: formData.message
    };
    emailjs.send(serviceID, templateID, templateParams, publicKey).then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ nom: "", email: "", telephone: "", sujet: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5e3);
    }).catch((err) => {
      console.error("FAILED...", err);
      setSubmitStatus("error");
      setIsSubmitting(false);
    });
  };
  const labelClass = "flex items-center gap-2 text-sm font-medium text-gray-700 mb-2";
  const inputWrapperClass = "relative";
  const inputClass = "w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 transition-all duration-200 ease-in-out focus:bg-white focus:border-[#1F7A5A] focus:ring-2 focus:ring-[#1F7A5A]/20 outline-none";
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mt-20 mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "Parlons de votre projet" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: "Remplissez le formulaire ci-dessous et notre équipe d'experts vous recontactera sous 24h pour discuter de vos besoins en rénovation." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10", children: [
      submitStatus === "success" && /* @__PURE__ */ jsxs("div", { className: "mb-8 p-4 bg-green-50 border-l-4 border-[#1F7A5A] text-green-800 rounded-r-lg", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Message envoyé avec succès !" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Merci de nous avoir contactés. Un email de confirmation vous a été envoyé." })
      ] }),
      submitStatus === "error" && /* @__PURE__ */ jsxs("div", { className: "mb-8 p-4 bg-red-50 border-l-4 border-red-500 text-red-800 rounded-r-lg", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Une erreur est survenue." }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Veuillez vérifier votre connexion ou nous contacter directement par téléphone." })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-1", children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "nom", className: labelClass, children: [
            /* @__PURE__ */ jsx(User, { className: "w-4 h-4 text-[#1F7A5A]" }),
            " Nom complet *"
          ] }),
          /* @__PURE__ */ jsx("div", { className: inputWrapperClass, children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "nom",
              name: "nom",
              required: true,
              value: formData.nom,
              onChange: handleChange,
              placeholder: "Jean Dupont",
              className: inputClass
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-1", children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "email", className: labelClass, children: [
            /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 text-[#1F7A5A]" }),
            " Adresse Email *"
          ] }),
          /* @__PURE__ */ jsx("div", { className: inputWrapperClass, children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              id: "email",
              name: "email",
              required: true,
              value: formData.email,
              onChange: handleChange,
              placeholder: "global.reno@example.com",
              className: inputClass
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-1", children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "telephone", className: labelClass, children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-[#1F7A5A]" }),
            " Téléphone"
          ] }),
          /* @__PURE__ */ jsx("div", { className: inputWrapperClass, children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "tel",
              id: "telephone",
              name: "telephone",
              value: formData.telephone,
              onChange: handleChange,
              placeholder: "06 12 34 56 78",
              className: inputClass
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-1", children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "sujet", className: labelClass, children: [
            /* @__PURE__ */ jsx(Tag, { className: "w-4 h-4 text-[#1F7A5A]" }),
            " Sujet de la demande *"
          ] }),
          /* @__PURE__ */ jsx("div", { className: inputWrapperClass, children: /* @__PURE__ */ jsxs(
            "select",
            {
              id: "sujet",
              name: "sujet",
              required: true,
              value: formData.sujet,
              onChange: handleChange,
              className: `${inputClass} appearance-none cursor-pointer`,
              style: { backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 1rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` },
              children: [
                /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Sélectionnez un sujet" }),
                /* @__PURE__ */ jsx("option", { value: "Devis", children: "Demande de devis" }),
                /* @__PURE__ */ jsx("option", { value: "Information", children: "Demande d'information" }),
                /* @__PURE__ */ jsx("option", { value: "Partenariat", children: "Proposition de partenariat" }),
                /* @__PURE__ */ jsx("option", { value: "Autre", children: "Autre" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "message", className: labelClass, children: [
            /* @__PURE__ */ jsx(MessageSquare, { className: "w-4 h-4 text-[#1F7A5A]" }),
            " Votre message *"
          ] }),
          /* @__PURE__ */ jsx("div", { className: inputWrapperClass, children: /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "message",
              name: "message",
              rows: "5",
              required: true,
              value: formData.message,
              onChange: handleChange,
              placeholder: "Décrivez votre projet en quelques lignes...",
              className: `${inputClass} resize-y min-h-[120px]`
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 mt-4", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: isSubmitting,
              className: `w-full md:w-auto md:min-w-[200px] flex items-center justify-center gap-2 px-8 py-4 font-bold text-white rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:ring-4 focus:ring-[#1F7A5A]/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
                  ${isSubmitting ? "bg-gray-400" : "bg-[#1F7A5A] hover:bg-[#166A4C] hover:shadow-xl"}`,
              children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsxs("svg", { className: "animate-spin -ml-1 mr-2 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                  /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
                ] }),
                "Envoi en cours..."
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                "Envoyer le message ",
                /* @__PURE__ */ jsx(Send, { className: "w-5 h-5" })
              ] })
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-4 text-center md:text-left", children: "En soumettant ce formulaire, vous acceptez que les informations saisies soient exploitées dans le cadre de votre demande." })
        ] })
      ] })
    ] })
  ] }) });
};
function Contact() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("title", { children: "Contactez Global Reno | Devis Gratuit Rénovation" }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: "Un projet de rénovation ? Contactez l'équipe de Global Reno. Réponse rapide, conseils d'experts et devis gratuit pour vos travaux." }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("h1", { style: { display: "none" }, children: "Formulaire de contact Global Reno" }),
      /* @__PURE__ */ jsx(ContactForm, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function HeroServices() {
  const headerColor = "#5E8D35";
  return /* @__PURE__ */ jsxs("section", { className: "relative h-[50vh] md:h-[60vh] mt-20 w-full flex items-center justify-center", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "/banniere-services.png",
        alt: "Nos Services de rénovation",
        className: "absolute inset-0 w-full  h-full object-cover"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/30" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center px-4 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-7xl font-extrabold text-white uppercase tracking-wider drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]", children: "Nos Services" }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "mt-4 mb-10 w-24 md:w-40 h-1 md:h-2 rounded-full",
          style: { backgroundColor: headerColor }
        }
      )
    ] })
  ] });
}
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
      { icon: Home$1, text: "Valorisation du bien", color: "text-green-600" },
      { icon: Sparkles, text: "Esthétique soignée", color: "text-yellow-500" }
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
      { icon: Leaf, text: "Traitement Eco", color: "text-green-600" }
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
      { icon: Globe, text: "Durable & Écolo", color: "text-green-600" }
    ]
  }
];
const ServiceSection = ({ service, isReversed }) => {
  return /* @__PURE__ */ jsxs("div", { className: `flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-16 mb-24 last:mb-0`, children: [
    /* @__PURE__ */ jsx("div", { className: "w-full lg:w-1/2", children: /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] rounded-3xl overflow-hidden shadow-xl", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: service.imageSrc,
        alt: service.title,
        className: "w-full h-full object-cover hover:scale-105 transition-transform duration-700"
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-1/2 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-gray-900 mb-4", children: service.title }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 leading-relaxed", children: service.description })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: service.checklist.map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center", children: /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-[#4F7A28]", strokeWidth: 3 }) }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-700 font-medium", children: item })
      ] }, index)) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-4", children: service.benefits.map((benefit, index) => /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-2xl p-4 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsx(benefit.icon, { className: `w-8 h-8 mx-auto mb-2 ${benefit.color}` }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-gray-800 leading-tight", children: benefit.text })
      ] }, index)) })
    ] })
  ] });
};
function ServicesPage() {
  return (
    // FOND BLANC PUR (bg-white) sans dégradés
    /* @__PURE__ */ jsx("section", { className: "bg-white py-24 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-extrabold text-gray-900 inline-block relative", children: [
          "NOS SERVICES",
          /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 left-0 w-full h-1.5 bg-[#4F7A28] rounded-full transform translate-y-4" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-xl text-gray-600 max-w-3xl mx-auto", children: "Des solutions techniques de pointe pour la rénovation et l'isolation, alliant esthétisme durable et performance énergétique." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-24", children: servicesData.map((service, index) => /* @__PURE__ */ jsx(
        ServiceSection,
        {
          service,
          isReversed: index % 2 !== 0
        },
        service.id
      )) })
    ] }) })
  );
}
function Services() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("title", { children: "Nos Services de Rénovation | Isolation & Énergie - Global Reno" }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: "Découvrez nos prestations : isolation thermique, menuiserie, rénovation de toiture et chauffage. Des solutions durables pour améliorer le confort de votre habitat avec Global Reno." }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Prestations de Rénovation Globale par Global Reno" }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Améliorez l'efficacité énergétique de votre maison avec nos experts." }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("h1", { style: { display: "none" }, children: "Solutions de rénovation énergétique et travaux d'intérieur" }),
      /* @__PURE__ */ jsx(HeroServices, {}),
      /* @__PURE__ */ jsx(ServicesPage, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const projects = [
  {
    id: 1,
    title: "Rénovation Façade & ITE - Immeuble Parisien",
    image: "https://images.unsplash.com/photo-1469022563328-4444306d27d2?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2025",
    location: "Paris 15e",
    surface: "2500 m²",
    testimonialIcon: MessageCircle,
    testimonialText: `Témoignage Client: "Transformation spectaculaire, économies d'énergie majeures." - Syndic de copropriété`
  },
  {
    id: 2,
    title: "Peinture Intérieure Écologique - Siège Social Tech",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2025",
    location: "Lyon",
    surface: "1200 m²",
    testimonialIcon: ThumbsUp,
    testimonialText: "Résultat: +40% de luminosité, qualité de l'air améliorée. Certification LEED Gold."
  },
  {
    id: 3,
    title: "Isolation Thermique Extérieure - Entrepôt Logistique",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2024",
    location: "Lille",
    surface: "5000 m²",
    testimonialIcon: Leaf,
    testimonialText: "Impact: Réduction de 30% des coûts de chauffage. Retour sur investissement en 5 ans."
  }
];
const stats = [
  { icon: Briefcase, number: "500+", label: "Projets Réalisés" },
  { icon: Users, number: "98%", label: "Clients Satisfaits" },
  { icon: Award, number: "15 Ans", label: "d'Expertise" }
];
function RealizationsSection() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-gray-600 max-w-3xl mx-auto", children: "Découvrez nos projets de rénovation et d'isolation thermique : l'excellence au service des professionnels." }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: projects.map((project) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-300", children: [
      /* @__PURE__ */ jsx("div", { className: "h-64 overflow-hidden", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: project.image,
          alt: project.title,
          className: "w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "p-8 flex flex-col flex-grow", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 leading-tight mb-3", children: project.title }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm font-medium text-gray-500 mb-6 flex flex-wrap gap-x-4 gap-y-2", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "Année: ",
            project.year
          ] }),
          /* @__PURE__ */ jsx("span", { children: "|" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Lieu: ",
            project.location
          ] }),
          /* @__PURE__ */ jsx("span", { children: "|" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Surface: ",
            project.surface
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 rounded-xl p-4 flex items-start gap-3 mb-8 flex-grow", children: [
          /* @__PURE__ */ jsx(project.testimonialIcon, { className: "w-6 h-6 text-green-600 flex-shrink-0 mt-1" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-800 font-medium leading-relaxed", children: project.testimonialText })
        ] }),
        /* @__PURE__ */ jsx("button", { className: "w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full shadow-md hover:from-green-600 hover:to-green-700 transition-all hover:shadow-lg active:scale-[0.98]", children: "Voir l'étude de cas" })
      ] })
    ] }, project.id)) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-24 bg-gray-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-inner", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-8 md:mb-0", children: "Statistiques Clés" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-12 md:gap-24", children: stats.map((stat, index) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-3 p-3 bg-green-100 rounded-2xl text-green-600", children: /* @__PURE__ */ jsx(stat.icon, { className: "w-8 h-8" }) }),
        /* @__PURE__ */ jsx("div", { className: "text-4xl font-extrabold text-gray-900", children: stat.number }),
        /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-600 mt-1 uppercase tracking-wider", children: stat.label })
      ] }, index)) })
    ] })
  ] }) });
}
const ImpactSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };
  return /* @__PURE__ */ jsxs("section", { className: "bg-white pb-0 pt-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-extrabold text-gray-900 uppercase tracking-wide", children: [
        "L'IMPACT VISUEL : ",
        /* @__PURE__ */ jsxs("span", { className: "relative inline-block", children: [
          "AVANT / APRÈS",
          /* @__PURE__ */ jsx("svg", { className: "absolute w-full h-3 -bottom-1 left-0 text-green-500", viewBox: "0 0 100 10", preserveAspectRatio: "none", children: /* @__PURE__ */ jsx("path", { d: "M0 5 Q 50 10 100 5", stroke: "currentColor", strokeWidth: "3", fill: "none" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group select-none", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
            alt: "Bâtiment rénové moderne",
            className: "absolute inset-0 w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm z-10", children: "Après" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "absolute inset-0 w-full h-full overflow-hidden",
            style: { clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` },
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "https://images.unsplash.com/photo-1563305360098-75c62174c669?q=80&w=2670&auto=format&fit=crop",
                  alt: "Ancien bâtiment délabré",
                  className: "absolute inset-0 w-full h-full object-cover"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm", children: "Avant" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "range",
            min: "0",
            max: "100",
            value: sliderPosition,
            onChange: handleSliderChange,
            className: "absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]",
            style: { left: `${sliderPosition}%` },
            children: /* @__PURE__ */ jsxs("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-green-600", children: [
              /* @__PURE__ */ jsx(ChevronLeft, { size: 16, strokeWidth: 3, className: "-mr-1" }),
              /* @__PURE__ */ jsx(ChevronRight, { size: 16, strokeWidth: 3, className: "-ml-1" })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto mt-12 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col md:flex-row items-center gap-6 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 border-t border-l border-gray-100 md:hidden" }),
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
            alt: "Sophie Dubois",
            className: "w-20 h-20 rounded-full object-cover border-4 border-green-50 shadow-md"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "text-center md:text-left", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center md:justify-start gap-2 mb-1", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900 text-lg", children: "Sophie Dubois" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "|" }),
            /* @__PURE__ */ jsx("p", { className: "text-green-600 font-medium text-sm", children: 'PDG "ImmoTech Solutions"' })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 italic leading-relaxed", children: '"Global Reno a non seulement amélioré notre DPE de trois classes, mais a aussi revalorisé notre actif de 20%. Un partenariat stratégique essentiel pour notre parc immobilier."' })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full bg-gradient-to-r from-green-500 to-[#1F7A5A] py-16 px-4 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -mr-20 -mt-0 w-96 h-96 bg-white opacity-5 rounded-full pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 -ml-20 -mb-0 w-64 h-64 bg-white opacity-5 rounded-full pointer-events-none" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto text-center relative z-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight", children: "Vous avez un projet d'envergure ?" }),
        /* @__PURE__ */ jsx("p", { className: "text-green-50 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium", children: "Audit énergétique, mise aux normes RSE, valorisation de patrimoine : discutons de vos objectifs dès maintenant." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [
          /* @__PURE__ */ jsxs("button", { className: "px-8 py-4 bg-gray-900 text-white rounded-full font-bold shadow-lg hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group", children: [
            "DEMANDER UN AUDIT GRATUIT",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "px-8 py-4 bg-white text-green-700 rounded-full font-bold shadow-md hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 fill-current" }),
            "CONTACTER L'ÉQUIPE PRO"
          ] })
        ] })
      ] })
    ] })
  ] });
};
function RealizationsBannerDesktop() {
  const greenBrandColor = "#4F7A28";
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "relative w-full min-h-[500px] lg:min-h-[650px] bg-cover bg-right-center bg-no-repeat flex items-center overflow-hidden",
      style: {
        // Assurez-vous que le chemin correspond à l'endroit où vous avez mis l'image_63.png
        backgroundImage: "url('/readesk.png')",
        backgroundColor: "#f9fafb"
        // Couleur de fond de secours (gris très clair)
      },
      children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-5/12 space-y-8 pl-4 md:pl-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative inline-block", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-extrabold text-gray-900 z-10 relative", children: "NOS RÉALISATIONS" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-1 left-0 w-full h-3 bg-green-500/30 -z-0 rounded-full transform -rotate-1" })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          NavLink,
          {
            to: "/realisations",
            className: "inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-bold text-white uppercase tracking-wider rounded shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out",
            style: { backgroundColor: greenBrandColor },
            children: "Découvrir tous nos projets"
          }
        ) })
      ] }) })
    }
  );
}
function Realisation() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("title", { children: "Nos Réalisations | Projets de Rénovation Global Reno" }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: "Découvrez nos derniers chantiers de rénovation. Avant/Après, isolation thermique et aménagements réalisés par Global Reno. La preuve de notre savoir-faire en images." }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Découvrez les chantiers de Global Reno" }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: "portfolio" }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("h1", { style: { display: "none" }, children: "Nos projets de rénovation globale et énergétique" }),
      /* @__PURE__ */ jsx(RealizationsBannerDesktop, {}),
      /* @__PURE__ */ jsx(RealizationsSection, {}),
      /* @__PURE__ */ jsx(ImpactSection, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const routes = [
  { path: "/", element: /* @__PURE__ */ jsx(Home, {}) },
  { path: "/contact", element: /* @__PURE__ */ jsx(Contact, {}) },
  { path: "/services", element: /* @__PURE__ */ jsx(Services, {}) },
  { path: "/realisations", element: /* @__PURE__ */ jsx(Realisation, {}) }
];
const createApp = (context) => {
  const isClient = typeof window !== "undefined";
  const path = context && context.path ? context.path : "/";
  const router = isClient ? createBrowserRouter(routes) : createMemoryRouter(routes, { initialEntries: [path] });
  return {
    app: /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(RouterProvider, { router }) })
  };
};
export {
  createApp
};
