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
    eyebrow: "DEVIS GRATUIT",
    title: "À PARTIR DE 600€*",
    subtitle: "PRISE GREEN'UP POSÉE — PILOTAGE & HEURES CREUSES",
    capsule: { prefix: "À partir de", value: "600€", suffix: "TTC posé" },
    legal:
      "* Tarif indicatif à partir de 600€ TTC pour une prise renforcée Green'Up Legrand 2,3 kW posée et raccordée à proximité du tableau électrique. Hors complexité spécifique (tirage de câble > 5m, mise en conformité tableau, augmentation de puissance). Devis détaillé après visite technique gratuite.",
  },

  reassurance: [
    { icon: "ShieldCheck", label: "Installation Pro" },
    { icon: "Car", label: "Tous Véhicules" },
    { icon: "Droplets", label: "Étanche IP66" },
    { icon: "FileText", label: "Devis Gratuit" },
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
