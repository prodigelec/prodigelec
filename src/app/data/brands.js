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
  {
    name: "Recharge Véhicule Électrique",
    summary:
      "Prises renforcées Green'Up et bornes Green'Up HOME de 3,7 à 22 kW triphasé, certifiées NF C 15-100, étanches IP66 et pilotables par smartphone.",
    // Legrand figure deja plus haut : c'est justement le probleme que cette
    // entree corrige. Rien ne reliait la marque au service de recharge VE,
    // alors que la page /services/borne-de-recharge-voiture-electrique ne
    // parle que de ca.
    brands: ["Legrand", "Green'Up"],
    // Hors bandeau : une ligne defilante avec deux marques rendrait mal.
    // L'entree ne sert qu'au schema.org et a llms.txt.
    inBanner: false,
  },
];

// Catégories affichées dans le bandeau défilant de l'accueil. Certaines
// entrées existent uniquement pour le référencement (`inBanner: false`).
export const bannerCategories = brandCategories.filter(
  (category) => category.inBanner !== false,
);

// Liste à plat et dédoublonnée (plusieurs marques couvrent deux catégories),
// utilisée pour le `knowsAbout` du schema.org.
export const allBrands = [
  ...new Set(brandCategories.flatMap((category) => category.brands)),
];
