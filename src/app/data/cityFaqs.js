export function buildCityFaqs(city) {
  return [
    {
      question: `Êtes-vous disponible pour un dépannage électrique urgent à ${city.name} ?`,
      answer: `Oui, PRODIGELEC intervient à ${city.name} (${city.postalCode}) du lundi au samedi, 24h/24. Pour les urgences électriques, contactez-nous au 06 38 19 47 52.`,
    },
    {
      question: `Proposez-vous des devis gratuits à ${city.name} ?`,
      answer: city.freeZone
        ? `Oui, le déplacement est gratuit à ${city.name}. Nous établissons votre devis sans frais et sans engagement.`
        : `Oui, nous établissons des devis gratuits pour toute intervention à ${city.name}. Contactez-nous pour convenir d'un rendez-vous.`,
    },
    {
      question: `Quelles prestations proposez-vous à ${city.name} ?`,
      answer: `À ${city.name}, PRODIGELEC réalise : dépannage et mise aux normes NF C 15-100, installation de tableaux électriques, pose de digicode et contrôle d'accès, alarme intrusion, vidéosurveillance, motorisation de volets et portails automatiques.`,
    },
  ];
}
