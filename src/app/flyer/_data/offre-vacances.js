export const offreVacancesData = {
  editorTitle: "Éditeur de Flyer",
  defaultOffer: { day: "30", month: "SEPTEMBRE", year: "2026" },

  accroche: { line1: "Partez l'esprit", line2: "tranquille !" },

  partnerBadge: "Solutions Delta Dore certifiées",

  mainTitle: {
    line1Prefix: "PROTÉGEZ",
    line1Highlight: "VOTRE MAISON",
    line2: "PENDANT VOS VACANCES",
  },
  subText: {
    highlights: ["Alarme connectée", "vidéosurveillance"],
    suffix: " — sécurité totale.",
  },

  scenes: [
    {
      number: "01",
      bgImage: "/flyer/offre-vacances/story-vacances.jpg",
      eyebrow: "Vous",
      title: "Profitez sereinement",
      caption: "Notifications temps réel sur votre mobile.",
    },
    {
      number: "02",
      bgImage: "/flyer/offre-vacances/story-maison.jpg",
      eyebrow: "Votre maison",
      title: "Veille sur elle-même",
      caption: "Alarme + sirène + caméra connectées 24h/24.",
    },
  ],
  sceneSeparator: "pendant\nce temps...",

  offerBand: {
    eyebrow: "OFFRE VACANCES",
    title: "1 DÉTECTEUR D'OUVERTURE OFFERT*",
    subtitle: "POUR TOUTE INSTALLATION D'UN SYSTÈME D'ALARME",
    badge: "Offert !",
    legalTemplate:
      "* Offre valable jusqu'au {date} pour toute installation d'un système d'alarme Delta Dore. Non cumulable avec d'autres offres en cours.",
  },

  reassurance: [
    { icon: "ShieldCheck", label: "Installation Pro" },
    { icon: "Smartphone", label: "Pilotage Mobile" },
    { icon: "MapPin", label: "Artisan Local" },
    { icon: "BadgeCheck", label: "Garantie SAV" },
  ],

  norm: {
    label: "EN 50131-2",
    description:
      "Compatible Assurances — protection brouillage, autoprotection, codes sécurisés",
  },

  footer: {
    seal: ["SÉCURITÉ", "CONFORT", "SÉRÉNITÉ"],
    sealCursive: "Nous veillons sur ce qui compte pour vous !",
    band: ["Particuliers & Professionnels", "Conseil & Accompagnement", "Solutions Évolutives"],
  },
};
