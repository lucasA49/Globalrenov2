import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Leaf,
  CheckCircle2,
  Search,
  FileText,
  HardHat,
  Handshake,
} from "lucide-react";

/* =========================
   DONNÉES CERTIFICATIONS
========================= */
const certifications = [
  { id: 1, name: "QUALIBAT RGE", icon: Award, description: "Efficacité énergétique" },
  { id: 2, name: "ISO 14001", icon: Leaf, description: "Management environnemental" },
  { id: 3, name: "Garantie Décennale PRO", icon: CheckCircle2, description: "Assurance professionnelle" },
];

/* =========================
   DONNÉES MÉTHODOLOGIE
========================= */
const steps = [
  {
    id: 1,
    title: "1. AUDIT & CONSEIL",
    description: "Analyse sur site, diagnostic thermique, définition des objectifs RSE.",
    icon: Search,
  },
  {
    id: 2,
    title: "2. ÉTUDE & DEVIS",
    description: "Proposition technique chiffrée, planning prévisionnel et aides financières.",
    icon: FileText,
  },
  {
    id: 3,
    title: "3. RÉALISATION",
    description: "Mise en œuvre par équipes qualifiées, suivi de chantier rigoureux.",
    icon: HardHat,
  },
  {
    id: 4,
    title: "4. RÉCEPTION & SUIVI",
    description: "Contrôle qualité, remise des DOE, garantie et maintenance.",
    icon: Handshake,
  },
];

/* =========================
   ANIMATIONS
========================= */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function TrustAndProcessSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* =========================================
            SECTION 1 : CERTIFICATIONS & ENGAGEMENTS
        ========================================= */}
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12 uppercase tracking-wide">
            NOS CERTIFICATIONS & ENGAGEMENTS
          </h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 place-items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="group flex flex-col items-center justify-center
                           w-40 h-40
                           bg-white rounded-3xl p-5 text-center
                           border border-green-50
                           transition-all duration-300 hover:-translate-y-2
                           shadow-[0_0_12px_rgba(79,122,40,0.18)]
                           hover:shadow-[0_0_22px_rgba(79,122,40,0.35)]"
              >
                <cert.icon
                  className="w-10 h-10 text-green-600 mb-3 group-hover:scale-110 transition-transform"
                  strokeWidth={1.5}
                />

                <h3 className="font-bold text-gray-800 text-base mb-1 leading-tight">
                  {cert.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* =========================================
            SECTION 2 : MÉTHODOLOGIE (Timeline)
        ========================================= */}
        <div>
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-16 uppercase tracking-wide">
            NOTRE MÉTHODOLOGIE PRO : EN 4 ÉTAPES CLAIRES
          </h2>

          <div className="relative">
            {/* Ligne horizontale desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-2 bg-green-200 rounded-full -z-10">
              <div className="h-full w-full bg-gradient-to-r from-green-400 to-green-600 opacity-30 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center text-center relative z-10"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30 mb-6 transition-transform hover:scale-105">
                    <step.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>

                  {/* Connecteur mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden w-1 h-12 bg-green-200 my-4 rounded-full" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
