export default function ValeursIcons() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITRE */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Pourquoi faire confiance à Global Reno
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Une approche professionnelle, durable et conforme aux exigences
            des chantiers B2B.
          </p>
        </div>

        {/* BLOCS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* BLOC 1 */}
          <div className="bg-white p-10 rounded-xl shadow-sm text-center">
            <div className="flex justify-center">
              {/* MAISON / BATIMENT */}
              <svg
                className="w-16 h-16"
                viewBox="0 0 64 64"
                fill="#1F7A5A"
              >
                <path d="M8 30L32 10l24 20v22a2 2 0 0 1-2 2H38V40H26v14H10a2 2 0 0 1-2-2V30z" />
              </svg>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              Expertise bâtiment
            </h3>
            <p className="mt-3 text-gray-600 text-sm">
              Une parfaite maîtrise des travaux de rénovation, peinture,
              ravalement et isolation pour bâtiments professionnels.
            </p>
          </div>

          {/* BLOC 2 */}
          <div className="bg-white p-10 rounded-xl shadow-sm text-center">
            <div className="flex justify-center">
              {/* BOUCLIER / QUALITÉ */}
              <svg
                className="w-16 h-16"
                viewBox="0 0 64 64"
                fill="#1F7A5A"
              >
                <path d="M32 6l20 8v14c0 14-9 24-20 30C21 52 12 42 12 28V14l20-8z" />
                <path
                  d="M24 30l6 6 10-12"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              Qualité & conformité
            </h3>
            <p className="mt-3 text-gray-600 text-sm">
              Respect strict des normes, matériaux certifiés
              et garanties professionnelles incluses.
            </p>
          </div>

          {/* BLOC 3 */}
          <div className="bg-white p-10 rounded-xl shadow-sm text-center">
            <div className="flex justify-center">
              {/* FEUILLE / DURABLE */}
              <svg
                className="w-16 h-16"
                viewBox="0 0 64 64"
                fill="#1F7A5A"
              >
                <path d="M50 8C30 8 14 22 14 40c0 10 8 16 18 16 18 0 24-16 24-32-2-6-4-10-6-16z" />
                <path
                  d="M20 44c10-12 20-20 30-26"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              Solutions durables
            </h3>
            <p className="mt-3 text-gray-600 text-sm">
              Des solutions d’isolation et de rénovation pensées
              pour la performance énergétique et la durabilité.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
