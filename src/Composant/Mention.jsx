import React from 'react';

const MentionsLegales = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center uppercase tracking-wider">Mentions Légales</h1>
      
      <div className="space-y-8 text-sm md:text-base">
        {/* Éditeur du site */}
        <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-blue-900">1. ÉDITION DU SITE</h2>
          <p className="mb-2">Le site est édité par la société <strong>GLOBAL RENO</strong>, SASU au capital de 1 000,00 €.</p>
          <ul className="space-y-1">
            <li><strong>SIREN :</strong> 984 545 053</li>
            <li><strong>SIRET :</strong> 984 545 053 00022</li>
            <li><strong>RCS :</strong> Inscrit au greffe d'Angers sous le numéro 984 545 053</li>
            <li><strong>TVA Intracommunautaire :</strong> FR12984545053</li>
            <li><strong>Siège social :</strong> ZONE DE L'APPENTIERE, RUE DU CHAMP BLANC, 49280 MAZIERES-EN-MAUGES</li>
            <li><strong>Email :</strong> globalreno49@gmail.com </li>
          </ul>
        </section>

        {/* Responsable de publication */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-blue-900">2. RESPONSABLE DE LA PUBLICATION</h2>
          <p>Le directeur de la publication du site est <strong>Lucas AKSU</strong>, en sa qualité de représentant légal de GLOBAL RENO.</p>
        </section>

        {/* Hébergeur */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-blue-900">3. HÉBERGEUR</h2>
          <p>Le site est hébergé par la société <strong>Hostinger International Ltd.</strong></p>
          <p className="mt-2 italic text-gray-600">
            Siège social : 61 Lordou Vironos str., 6023 Larnaca, Chypre.<br />
            Contact : https://www.hostinger.fr/contact
          </p>
        </section>

        {/* Propriété intellectuelle */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-blue-900">4. PROPRIÉTÉ INTELLECTUELLE</h2>
          <p>
            Tous les éléments de ce site (textes, graphismes, logos, photos, etc.) sont la propriété exclusive de 
            <strong> GLOBAL RENO</strong>. Toute reproduction ou distribution non autorisée est passible de poursuites judiciaires 
            conformément au Code de la propriété intellectuelle.
          </p>
        </section>

        {/* Protection des données */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-blue-900">5. DONNÉES PERSONNELLES (RGPD)</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, 
            de rectification et de suppression des informations vous concernant. Pour exercer ce droit, 
            veuillez nous contacter par email à l'adresse indiquée dans la section 1.
          </p>
        </section>
      </div>

      <p className="text-xs text-center text-gray-400 mt-12">
        Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
      </p>
    </div>
  );
};

export default MentionsLegales;