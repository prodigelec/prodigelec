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
