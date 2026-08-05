// Source unique des marques installées. Trois consommateurs lisent ce fichier :
// le bandeau d'accueil (BrandsSection), le schema.org du business (JsonLd) et
// llms.txt. Ajouter une marque ici la propage partout — avant, la liste ne
// vivait que dans le bandeau, invisible pour Google et pour les moteurs IA.
//
// `duration` et `reverse` pilotent le défilement du bandeau : ils restent ici
// pour garder une catégorie décrite d'un seul tenant.
export const brandCategories = [
  {
    name: "Électricité & Domotique",
    summary:
      "Appareillage, tableaux électriques, chauffage, VMC et pilotage domotique.",
    brands: [
      "Legrand",
      "Schneider",
      "Hager",
      "Somfy",
      "Bticino",
      "Atlantic",
      "Theben",
      "Arnould",
      "Delta Dore",
    ],
    duration: 30,
  },
  {
    name: "Automatisation Volets",
    summary:
      "Motorisation de volets roulants, en neuf comme en rénovation, et remplacement de moteurs existants.",
    brands: [
      "Somfy",
      "Nice",
      "Bubendorff",
      "Delta Dore",
      "Profalux",
      "Simu",
      "Eveno",
      "Lakal",
    ],
    duration: 25,
    reverse: true,
  },
  {
    name: "Sécurité & Automatismes",
    summary:
      "Alarmes intrusion, vidéosurveillance, vidéophonie, serrures connectées et motorisations de portails.",
    brands: [
      "Netatmo",
      "Nuki",
      "Yale",
      "Tedee",
      "EZVIZ",
      "Somfy",
      "Aiphone",
      "Comelit",
      "Fermax",
      "2N",
    ],
    duration: 35,
  },
  {
    name: "Contrôle d'Accès",
    summary:
      "Digicodes, interphonie collective, platines de rue et systèmes à badges.",
    brands: [
      "Noralsy",
      "Urmet",
      "CDVI",
      "Aiphone",
      "Intratone",
      "EZVIZ",
      "Cofrel",
      "Comelit",
    ],
    duration: 28,
    reverse: true,
  },
];

// Liste à plat et dédoublonnée (plusieurs marques couvrent deux catégories),
// utilisée pour le `knowsAbout` du schema.org.
export const allBrands = [
  ...new Set(brandCategories.flatMap((category) => category.brands)),
];
