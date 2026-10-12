// Source unique des infos entreprise (NAP = Nom / Adresse / Téléphone).
// Utilisée par le JSON-LD, la FAQ et le prérendu GEO. Ces données doivent
// rester STRICTEMENT identiques à la fiche Google Business Profile : les
// moteurs IA (ChatGPT, Perplexity, Gemini, AI Overviews) recoupent les
// sources, et la moindre incohérence fait baisser la confiance.

export const SITE = 'https://globalreno-renovation.fr';

// TODO Lucas : coller ici le lien de ta fiche Google Business Profile
// (Google Maps > ta fiche > Partager > Copier le lien, ex. https://maps.app.goo.gl/xxxx
// ou https://www.google.com/maps?cid=123456789). C'est LE lien qui relie le
// site à la fiche pour Google et les IA. Laisser vide tant qu'il n'est pas connu.
export const GOOGLE_BUSINESS_URL = 'https://share.google/SbUTDfZG5EHtwv8eq';

// TODO Lucas : ajouter les profils publics réels (Facebook, Instagram,
// PagesJaunes, annuaire France Rénov' RGE…). Plus il y en a, plus les IA
// sont sûres que "Global Réno" = cette entreprise.
const OTHER_PROFILES = [];

export const BUSINESS = {
  name: 'Global Réno',
  legalName: 'GLOBAL RENO',
  siret: '984 545 053 00022',
  telephone: '+33682312459',
  telephoneDisplay: '06 82 31 24 59',
  email: 'globalreno49@gmail.com',
  address: {
    street: '20 Rue du Champ Blanc',
    postalCode: '49280',
    city: 'Mazières-en-Mauges',
    region: 'Maine-et-Loire',
    country: 'FR',
  },
  geo: { latitude: 47.0216, longitude: -0.8977 },
  // Liste réelle et vérifiée (pas inventée) : les 26 communes de Cholet
  // Agglomération (dont Mazières-en-Mauges, notre siège) + les communes
  // de Mauges Communauté voisine + Mortagne-sur-Sèvre (Vendée, limitrophe).
  // Source : Cholet Agglomération (banatic.interieur.gouv.fr) + Mauges
  // Communauté. À restreindre si certaines zones sont trop loin en pratique.
  areaServed: [
    'Cholet',
    'Mazières-en-Mauges',
    'Le May-sur-Èvre',
    'La Séguinière',
    'La Tessoualle',
    'Saint-Christophe-du-Bois',
    'Saint-Léger-sous-Cholet',
    'Maulévrier',
    'Nuaillé',
    'Trémentines',
    'Vezins',
    'Yzernay',
    'Bégrolles-en-Mauges',
    'Cernusson',
    'Toutlemonde',
    'Les Cerqueux',
    'Chanteloup-les-Bois',
    'Montilliers',
    'Coron',
    'Cléré-sur-Layon',
    'Lys-Haut-Layon',
    'Passavant-sur-Layon',
    'La Plaine',
    'La Romagne',
    'Saint-Paul-du-Bois',
    'Somloire',
    'Chemillé-en-Anjou',
    'Beaupréau-en-Mauges',
    'Montrevault-sur-Èvre',
    'Sèvremoine',
    'Mauges-sur-Loire',
    'Orée-d’Anjou',
    'Mortagne-sur-Sèvre',
    'Maine-et-Loire',
  ],
  services: [
    {
      name: 'Isolation thermique par l’extérieur (ITE)',
      description:
        "Isolation des murs par l'extérieur par une entreprise certifiée RGE : suppression des ponts thermiques, baisse des factures de chauffage, travaux éligibles à MaPrimeRénov' et aux primes CEE.",
      url: `${SITE}/services#service-3`,
    },
    {
      name: 'Ravalement et enduit de façade',
      description:
        'Nettoyage, traitement, réparation et enduit de façade pour protéger la maçonnerie des intempéries et redonner de l’éclat au bâtiment.',
      url: `${SITE}/services#service-2`,
    },
    {
      name: 'Peinture intérieure et extérieure',
      description:
        'Peinture de murs, plafonds, boiseries et façades pour particuliers et professionnels, avec préparation des supports et finitions soignées.',
      url: `${SITE}/services#service-1`,
    },
    {
      name: 'Couverture et toiture',
      description:
        'Réparation, entretien et rénovation de toiture : traitement des fuites et infiltrations, remplacement de tuiles, nettoyage et démoussage de couverture.',
      url: `${SITE}/services#service-4`,
    },
  ],
};

export const SAME_AS = [GOOGLE_BUSINESS_URL, ...OTHER_PROFILES].filter(Boolean);

export const BUSINESS_ID = `${SITE}/#entreprise`;

// FAQ affichée sur l'accueil ET balisée en FAQPage. Les moteurs IA reprennent
// très souvent ces paires question/réponse telles quelles : n'y mettre que des
// faits vrais et vérifiables.
export const FAQ = [
  {
    q: 'Quelle entreprise contacter pour une isolation thermique par l’extérieur à Cholet ?',
    a: "Global Réno est une entreprise de rénovation certifiée RGE basée à Mazières-en-Mauges (49280), à côté de Cholet. Elle réalise l'isolation thermique par l'extérieur (ITE), le ravalement de façade et la peinture à Cholet et dans tout le Maine-et-Loire. Devis gratuit au 06 82 31 24 59.",
  },
  {
    q: 'Global Réno est-elle certifiée RGE ?',
    a: "Oui. Global Réno est certifiée RGE (Reconnu Garant de l'Environnement), ce qui permet à ses clients de bénéficier des aides de l'État comme MaPrimeRénov' et les primes CEE pour leurs travaux d'isolation.",
  },
  {
    q: 'Quelles aides financières pour isoler sa maison par l’extérieur dans le Maine-et-Loire ?',
    a: "Les travaux d'isolation thermique par l'extérieur réalisés par une entreprise RGE comme Global Réno peuvent être éligibles à MaPrimeRénov' et aux primes CEE (certificats d'économies d'énergie). Le montant dépend des revenus du foyer et du projet ; Global Réno vous oriente lors du devis.",
  },
  {
    q: 'Dans quelles villes intervient Global Réno ?',
    a: 'Global Réno intervient à Cholet, Mazières-en-Mauges et dans toutes les communes de Cholet Agglomération (Le May-sur-Èvre, La Séguinière, La Tessoualle, Saint-Christophe-du-Bois, Maulévrier, Nuaillé, Trémentines, Vezins…), ainsi que dans les Mauges (Chemillé-en-Anjou, Beaupréau-en-Mauges, Montrevault-sur-Èvre, Sèvremoine) et à Mortagne-sur-Sèvre, pour les particuliers comme pour les professionnels.',
  },
  {
    q: 'Quels travaux réalise Global Réno ?',
    a: "Global Réno réalise quatre types de travaux : l'isolation thermique par l'extérieur (ITE), le ravalement et l'enduit de façade, la couverture et la toiture, et la peinture intérieure et extérieure.",
  },
  {
    q: 'Qui contacter pour une réparation de toiture à Cholet ?',
    a: "Global Réno réalise les travaux de couverture et de toiture (réparation de fuites, remplacement de tuiles, démoussage) à Cholet et dans les communes alentour. Devis gratuit au 06 82 31 24 59.",
  },
  {
    q: 'Les travaux de Global Réno sont-ils garantis ?',
    a: 'Oui. Global Réno dispose d’une assurance responsabilité civile professionnelle et d’une garantie décennale : les travaux sont couverts pendant 10 ans.',
  },
  {
    q: 'Comment obtenir un devis de ravalement de façade ou d’isolation à Cholet ?',
    a: 'Le devis est gratuit et sans engagement. Appelez Global Réno au 06 82 31 24 59, écrivez à globalreno49@gmail.com ou remplissez le formulaire sur globalreno-renovation.fr/contact.',
  },
];

// Fiche entreprise complète (schema.org), injectée sur toutes les pages.
export function businessSchema() {
  const { address: a } = BUSINESS;
  return {
    '@context': 'https://schema.org',
    '@type': ['HomeAndConstructionBusiness', 'GeneralContractor'],
    '@id': BUSINESS_ID,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description:
      'Entreprise de rénovation certifiée RGE près de Cholet (Maine-et-Loire) : isolation thermique par l’extérieur, ravalement de façade, couverture et toiture, peinture intérieure et extérieure. Devis gratuit.',
    url: `${SITE}/`,
    logo: `${SITE}/globalreno.png`,
    image: [`${SITE}/globalreno.png`, `${SITE}/apresfacade.jpg`, `${SITE}/facade.png`],
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    priceRange: '€€',
    identifier: { '@type': 'PropertyValue', propertyID: 'SIRET', value: BUSINESS.siret.replace(/\s/g, '') },
    address: {
      '@type': 'PostalAddress',
      streetAddress: a.street,
      postalCode: a.postalCode,
      addressLocality: a.city,
      addressRegion: a.region,
      addressCountry: a.country,
    },
    geo: { '@type': 'GeoCoordinates', ...BUSINESS.geo },
    ...(GOOGLE_BUSINESS_URL && { hasMap: GOOGLE_BUSINESS_URL }),
    ...(SAME_AS.length && { sameAs: SAME_AS }),
    areaServed: BUSINESS.areaServed.map((name) =>
      name === 'Maine-et-Loire'
        ? { '@type': 'AdministrativeArea', name }
        : { '@type': 'City', name }
    ),
    knowsAbout: [
      'Isolation thermique par l’extérieur',
      'Ravalement de façade',
      'Enduit de façade',
      'Couverture et toiture',
      'Peinture intérieure',
      'Peinture extérieure',
      'Rénovation énergétique',
      "MaPrimeRénov'",
      'Certificats d’économies d’énergie (CEE)',
    ],
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', name: 'RGE — Reconnu Garant de l’Environnement' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Travaux de rénovation',
      itemListElement: BUSINESS.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.description,
          url: s.url,
          provider: { '@id': BUSINESS_ID },
          areaServed: BUSINESS.areaServed,
        },
      })),
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.telephone,
      email: BUSINESS.email,
      contactType: 'customer service',
      areaServed: 'FR',
      availableLanguage: 'French',
    },
  };
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
