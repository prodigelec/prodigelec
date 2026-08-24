const realisationsData = [
  {
    slug: "visiophone-tmezon-breval-yvelines",
    titre: "Installation visiophone et remplacement gâche électrique",
    description: "Le client avait acheté un visiophone Tmezon et une nouvelle gâche électrique. Pose de la platine extérieure et du poste intérieur en réutilisant la filerie existante, puis dépose de la gâche électrique hors d'usage et remplacement par celle fournie par le client.",
    ville: "Bréval",
    departement: "Yvelines",
    departementCode: "78",
    categorie: "securite",
    date: "2026-06-15",
    image: "/visiophone-tmezon-breval-yvelines-1.jpg",
    imageAlt: "Platine extérieure visiophone Tmezon installée sur un portillon à Bréval, Yvelines",
  },
  {
    slug: "depannage-alarme-somfy-villiers-saint-frederic",
    titre: "Dépannage alarme Somfy et remplacement prise",
    description: "L'alarme Somfy Link Essentiel ne fonctionnait plus après un changement de réseau internet. Réinitialisation complète du système, remplacement des piles de la sirène extérieure et des contacteurs de choc, et changement d'une prise électrique défectueuse dans le bureau.",
    ville: "Villiers-Saint-Frédéric",
    departement: "Yvelines",
    departementCode: "78",
    categorie: "securite",
    date: "2026-06-30",
    image: "/depannage-alarme-somfy-villiers-saint-frederic.jpg",
    imageAlt: "Centrale d'alarme Somfy Link Essentiel dépannée à Villiers-Saint-Frédéric, Yvelines",
  },
  {
    slug: "sonnette-urmet-la-queue-yvelines",
    titre: "Installation sonnette sans fil",
    description: "Le visiophone était hors service, le client avait besoin d'un accès fonctionnel rapidement. J'ai posé une sonnette sans fil Urmet en attendant le remplacement définitif.",
    ville: "La Queue-les-Yvelines",
    departement: "Yvelines",
    departementCode: "78",
    categorie: "securite",
    date: "2026-04-27",
    image: "/sonnette-urmet-la-queue-yvelines.jpg",
    imageAlt: "Installation sonnette sans fil Urmet à La Queue-les-Yvelines",
  },
  {
    slug: "four-bosch-branchement-la-queue-yvelines",
    titre: "Remplacement et branchement four encastrable",
    description: "Appel en urgence pour un four encastrable Bosch à remplacer. Dépose de l'ancien, branchement électrique du nouveau et mise en service le même jour.",
    ville: "La Queue-les-Yvelines",
    departement: "Yvelines",
    departementCode: "78",
    categorie: "electricite",
    date: "2026-04-27",
    image: "/four-bosch-branchement-la-queue-yvelines.jpg",
    imageAlt: "Branchement four encastrable Bosch à La Queue-les-Yvelines",
  },
  {
    slug: "tableau-electrique-marchezais",
    titre: "Branchement tableau électrique, prises et interrupteurs",
    description: "Travaux complets dans un garage : branchement du tableau électrique, pose des prises et interrupteurs étanches. Tout a été fait dans les règles pour une installation durable.",
    ville: "Marchezais",
    departement: "Eure-et-Loir",
    departementCode: "28",
    categorie: "electricite",
    date: "2026-05-18",
    image: "/tableau-electrique-marchezais.jpg",
    imageAlt: "Tableau électrique et prises étanches dans un garage à Marchezais",
  },
  {
    slug: "videophone-solaire-sans-fil-garencieres-yvelines",
    titre: "Installation visiophone solaire sans fil",
    description: "Le client avait acheté un visiophone solaire sans fil. Je me suis chargé de la pose et du paramétrage. Pas de câblage nécessaire, l'appareil fonctionne sur énergie solaire.",
    ville: "Garancières",
    departement: "Yvelines",
    departementCode: "78",
    categorie: "securite",
    date: "2025-12-19",
    image: "/videophone-solaire-sans-fil-garencieres-yvelines.jpg",
    imageAlt: "Installation visiophone solaire sans fil à Garancières, Yvelines",
  },
  {
    slug: "radiateur-electrique-conde-sur-vesgres-1",
    titre: "Remplacement radiateur par modèle à inertie",
    description: "Remplacement d'un vieux radiateur électrique par un radiateur à inertie. Le confort de chauffe est bien meilleur et la consommation diminue sur la durée.",
    ville: "Condé-sur-Vesgre",
    departement: "Yvelines",
    departementCode: "78",
    categorie: "electricite",
    date: "2026-01-13",
    image: "/installation-radiateur-electrique-conde-sur-vesgres.jpg",
    imageAlt: "Installation radiateur électrique à inertie à Condé-sur-Vesgre",
  },
  {
    slug: "radiateur-electrique-conde-sur-vesgres-2",
    titre: "Remplacement second radiateur à inertie",
    description: "Même maison, même intervention pour une seconde pièce. Deux radiateurs à inertie remplacés pour moderniser le chauffage et faire des économies d'électricité.",
    ville: "Condé-sur-Vesgre",
    departement: "Yvelines",
    departementCode: "78",
    categorie: "electricite",
    date: "2026-01-13",
    image: "/installation-radiateur-electrique-conde-sur-vesgres-2.jpg",
    imageAlt: "Pose radiateur électrique à Condé-sur-Vesgre, Yvelines",
  },
  {
    slug: "chauffe-eau-ariston-havelu-yvelines",
    titre: "Installation chauffe-eau électrique Ariston",
    description: "Pose d'un chauffe-eau électrique Ariston en cave. Raccordement électrique, mise en eau et mise en service. Travail soigné dans un espace contraint.",
    ville: "Havelu",
    departement: "Eure-et-Loir",
    departementCode: "28",
    categorie: "electricite",
    date: "2026-03-27",
    image: "/installation-chauffe-eau-ariston-havelu-yvelines.jpg",
    imageAlt: "Installation chauffe-eau électrique Ariston à Havelu, Eure-et-Loir",
  },
  {
    slug: "renovation-electrique-cuisine-sorel-moussel",
    titre: "Rénovation électrique d'une cuisine",
    description: "Reprise complète de l'installation électrique de la cuisine : création de circuits dédiés avec une protection par usage, saignées et pose des boîtes d'encastrement, puis tirage de la filerie jusqu'au tableau. L'appareillage et les protections étaient fournis par le client, la filerie par mes soins.",
    ville: "Sorel-Moussel",
    departement: "Eure-et-Loir",
    departementCode: "28",
    categorie: "electricite",
    date: "2026-07-13",
    image: "/renovation-electrique-cuisine-sorel-moussel.jpg",
    imageAlt: "Câblage électrique en cours dans une cuisine à Sorel-Moussel, Eure-et-Loir",
  },
  {
    slug: "pots-encastrement-prises-interrupteurs-mere-yvelines",
    titre: "Remplacement de pots d'encastrement et d'appareillage",
    description: "Les pots d'encastrement ne tenaient plus l'appareillage. Dépose des prises, remplacement des pots par des modèles étanches puis repose, avec changement des interrupteurs et boutons poussoirs fournis par le client.",
    ville: "Méré",
    departement: "Yvelines",
    departementCode: "78",
    categorie: "electricite",
    date: "2026-07-16",
    image: "/remplacement-pots-encastrement-mere-yvelines.jpg",
    imageAlt: "Illustration du remplacement d'un pot d'encastrement : ancienne boîte déposée dans le mur et boîte neuve prête à être posée, chantier de Méré, Yvelines",
  },
  {
    slug: "reglage-motorisation-portail-faac-marchezais",
    titre: "Réglage d'une motorisation de portail FAAC",
    description: "Le portail ne se refermait plus correctement, les deux vantaux n'étant plus synchronisés. Recherche de panne sur la motorisation FAAC e024s, puis reprise des réglages jusqu'au retour d'un cycle d'ouverture et de fermeture normal.",
    ville: "Marchezais",
    departement: "Eure-et-Loir",
    departementCode: "28",
    categorie: "automatismes",
    date: "2026-08-01",
    image: "/reglage-motorisation-portail-faac-marchezais.jpg",
    imageAlt: "Illustration d'un portail battant équipé d'une motorisation FAAC e024s à Marchezais, Eure-et-Loir",
  },
  {
    slug: "installation-fileries-cuisine-garnay",
    titre: "Installation de gaines et fileries dans une cuisine",
    description: "Reprise de l'alimentation électrique d'une cuisine : passage des gaines, tirage de la filerie jusqu'au tableau existant et raccordement des circuits. Une partie des prises était fournie par le client, les gaines et la filerie par mes soins.",
    ville: "Garnay",
    departement: "Eure-et-Loir",
    departementCode: "28",
    categorie: "electricite",
    date: "2026-07-20",
    image: "/installation-fileries-cuisine-garnay.jpg",
    imageAlt: "Illustration de gaines électriques en attente dans les murs d'une pièce en rénovation, chantier de Garnay, Eure-et-Loir",
  },
  {
    slug: "depannage-motorisation-enterree-came-ezy-sur-eure",
    titre: "Dépannage d'une motorisation de portail enterrée CAME",
    description: "Le portail battant ne terminait plus ses cycles : les fins de course ne coupaient plus au bon endroit, laissant les vantaux en butée ou à moitié ouverts. Ouverture des caissons de fondation et aspiration complète de la terre accumulée autour des moteurs enterrés CAME FROG-AE, dégrippage et graissage des mécanismes, puis reprise des réglages de fins de course sur l'armoire de commande CAME ZM3E jusqu'au retour d'un cycle d'ouverture et de fermeture normal.",
    ville: "Ézy-sur-Eure",
    departement: "Eure",
    departementCode: "27",
    categorie: "automatismes",
    date: "2026-08-16",
    image: "/depannage-motorisation-enterree-came-ezy-sur-eure.jpg",
    imageAlt: "Moteur enterré CAME FROG-AE et son bras de liaison dans le caisson de fondation d'un portail battant à Ézy-sur-Eure, Eure",
    // Chantier avant / après : trois vues complémentaires valent mieux qu'une
    // seule photo pour un moteur enterré, que le client lui-même ne voit jamais.
    photos: [
      {
        src: "/depannage-motorisation-enterree-came-ezy-sur-eure-caisson-avant.jpg",
        alt: "Caisson de fondation envahi par la terre autour du moteur enterré CAME avant l'intervention, Ézy-sur-Eure",
        legende: "À l'ouverture du caisson : le moteur enterré et son condensateur noyés sous la terre accumulée au fil des ans.",
      },
      {
        src: "/depannage-motorisation-enterree-came-ezy-sur-eure-etiquette-frog-ae.jpg",
        alt: "Étiquette constructeur du moteur enterré CAME FROG-AE, code 109FROG-AE, 230 V, relevée à Ézy-sur-Eure",
        legende: "L'étiquette dégagée donne le modèle exact : CAME FROG-AE, 230 V. C'est elle qui oriente les réglages.",
      },
      {
        src: "/depannage-motorisation-enterree-came-ezy-sur-eure-cablage.jpg",
        alt: "Moteur enterré CAME FROG-AE dégrippé et graissé dans son caisson après aspiration de la terre, Ézy-sur-Eure",
        legende: "Caisson aspiré, mécanisme dégrippé et graissé : le moteur est prêt pour la reprise des fins de course.",
      },
    ],
  },
  {
    slug: "tableau-electrique-mise-aux-normes-thoiry",
    titre: "Remplacement de tableau électrique et mise aux normes NF C 15-100",
    description: "Maison sans terre à l'étage et tableau d'origine arrivé en bout de course. Dépose de l'ancien tableau Hager et pose d'un tableau Legrand complet, réparti sur quatre rangées protégées par différentiels 30 mA. Montée de la terre à l'étage en remplaçant le câble de chaque prise, un par un, et raccordement sur l'araignée de distribution dans les combles. Remplacement de tout l'appareillage en gamme Dooxie de Legrand — prises, interrupteurs et sorties de câble — et reprise du câblage du télérupteur, passé de trois à quatre fils pour accepter un modèle récent. Déplacement d'un radiateur en faisant passer son alimentation derrière le doublage placo-polystyrène, sans une seule saignée dans le mur.",
    ville: "Thoiry",
    departement: "Yvelines",
    departementCode: "78",
    categorie: "electricite",
    date: "2026-08-20",
    image: "/tableau-electrique-legrand-mise-aux-normes-thoiry.jpg",
    imageAlt: "Tableau électrique Legrand posé et refermé par ses plastrons, quatre rangées protégées par différentiels 30 mA, porte ouverte, à Thoiry dans les Yvelines",
    photos: [
      {
        src: "/tableau-electrique-mise-aux-normes-thoiry-ancien-tableau.jpg",
        alt: "Ancien tableau électrique Hager jauni avec son télérupteur et ses étiquettes manuscrites, avant remplacement à Thoiry",
        legende: "L'ancien tableau Hager, saturé et étiqueté à la main. Le télérupteur d'origine est le module gris en bas à gauche.",
      },
      {
        src: "/tableau-electrique-mise-aux-normes-thoiry-prise-terre-dooxie.jpg",
        alt: "Prise de courant Legrand Dooxie neuve avec broche de terre visible, installée à l'étage d'une maison à Thoiry",
        legende: "Une prise de l'étage après reprise : la broche de terre est là, ce qui n'était le cas nulle part avant le chantier.",
      },
      {
        src: "/tableau-electrique-mise-aux-normes-thoiry-sortie-de-cable.jpg",
        alt: "Sortie de câble Legrand Dooxie neuve posée à côté de l'ancienne sortie jaunie, chantier de Thoiry",
        legende: "La sortie de câble neuve, à côté de celle qu'elle remplace. Vingt ans d'écart sur le même mur.",
      },
      {
        src: "/tableau-electrique-mise-aux-normes-thoiry-radiateur-depose.jpg",
        alt: "Mur avec alimentation en attente après dépose d'un radiateur, sans saignée dans le doublage placo-polystyrène, Thoiry",
        legende: "Radiateur déposé, alimentation en attente à son nouvel emplacement. Le doublage n'a pas été ouvert.",
      },
      {
        src: "/tableau-electrique-mise-aux-normes-thoiry-radiateur-repose.jpg",
        alt: "Radiateur électrique reposé à son nouvel emplacement après déplacement de son alimentation, Thoiry, Yvelines",
        legende: "Le radiateur à sa nouvelle place, alimenté par sa sortie de câble. Aucune reprise de peinture à prévoir.",
      },
    ],
  },
];

export const realisations = [...realisationsData].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

export const categories = [
  { slug: "tous", label: "Tous" },
  { slug: "electricite", label: "Électricité" },
  { slug: "securite", label: "Sécurité" },
  { slug: "automatismes", label: "Automatismes" },
];

export const categoryColors = {
  electricite: { bg: "rgba(255,193,7,0.12)", border: "rgba(255,193,7,0.35)", text: "#ffc107", label: "Électricité" },
  securite:    { bg: "rgba(201,162,39,0.12)", border: "rgba(201,162,39,0.35)", text: "#c9a227", label: "Sécurité" },
  automatismes:{ bg: "rgba(201,162,39,0.12)", border: "rgba(201,162,39,0.35)", text: "#c9a227", label: "Automatismes" },
};

export function formatRealisationDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
}

// Les chantiers d'une commune, pour les afficher sur sa page ville.
// Le rapprochement se fait sur le nom exact de la commune : c'est
// volontaire, un rapprochement approximatif rattacherait des chantiers
// à la mauvaise ville.
export function getRealisationsByVille(ville) {
  return realisations.filter(
    (r) => r.ville.toLowerCase() === ville.toLowerCase()
  );
}

export function getRealisationBySlug(slug) {
  return realisations.find((r) => r.slug === slug);
}

// Suggestions en bas de page d'un chantier. La même commune passe avant la
// même catégorie : un visiteur venu d'une recherche locale est d'abord
// intéressé par ce qui a été fait près de chez lui.
export function getRelatedRealisations(realisation, limit = 3) {
  const others = realisations.filter((r) => r.slug !== realisation.slug);
  const sameVille = others.filter((r) => r.ville === realisation.ville);
  const sameCategorie = others.filter(
    (r) => r.ville !== realisation.ville && r.categorie === realisation.categorie
  );
  return [...sameVille, ...sameCategorie, ...others]
    .filter((r, i, arr) => arr.findIndex((x) => x.slug === r.slug) === i)
    .slice(0, limit);
}
