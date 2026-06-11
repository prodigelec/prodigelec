export const borneRechargeData = {
  editorTitle: "Flyer Borne VE",
  defaultOffer: { day: "31", month: "JUILLET", year: "2026" },

  accroche: { line1: "Roulez", line2: "100% électrique !" },

  partnerBadge: "Solutions Legrand certifiées",

  mainTitle: {
    line1Prefix: "ROULEZ",
    line1Highlight: "ÉLECTRIQUE",
    line2: "À DOMICILE",
  },
  subText: {
    highlights: ["Prise renforcée", "borne connectée"],
    suffix: " — jusqu'à 3,7 kW.",
  },

  scenes: [
    {
      number: "01",
      bgImage: "/flyer/borne-recharge/app-smartphone.jpg",
      eyebrow: "Vous",
      title: "Pilotez votre recharge",
      caption: "Programmation et suivi sur votre mobile.",
    },
    {
      number: "02",
      bgImage: "/flyer/borne-recharge/femme-recharge-voiture.jpg",
      eyebrow: "Votre installation",
      title: "Recharge à domicile",
      caption: "Prise étanche ou borne connectée — pose pro.",
    },
  ],
  sceneSeparator: "et chez\nvous...",

  offerBand: {
    eyebrow: "CRÉDIT D'IMPÔT VE",
    title: "75% REMBOURSÉS*",
    subtitle: "SUR INSTALLATION BORNE OU PRISE RENFORCÉE",
    badge: "75% Remboursés !",
    capsule: { prefix: "Jusqu'à", value: "500€", suffix: "déduits" },
    legal:
      "* Crédit d'impôt pour la transition énergétique (art. 200 quater B du CGI). 75% du coût d'acquisition et de pose plafonné à 500€ par système et par logement, pour résidence principale, location ou occupation gratuite. Sous conditions, à confirmer lors du devis.",
  },

  reassurance: [
    { icon: "ShieldCheck", label: "Installation Pro" },
    { icon: "Car", label: "Tous Véhicules" },
    { icon: "Droplets", label: "Étanche IP66" },
    { icon: "FileText", label: "Crédit d'Impôt" },
  ],

  norm: {
    label: "NF C 15-100",
    description: "norme électrique française — attestation fournie",
  },

  footer: {
    seal: ["ÉCOLOGIE", "ÉCONOMIES", "CONFORT"],
    sealCursive: "Roulez l'esprit tranquille !",
    band: ["Particuliers & Professionnels", "Conseil & Accompagnement", "Solutions Évolutives"],
  },
};
