// Contenu éditorial des pages marque (/marques/[slug]).
//
// À ne pas confondre avec `brands.js` : celui-ci est la taxonomie (quelles
// marques figurent au bandeau et au schema.org), celui-là porte le texte des
// pages. Même séparation qu'entre `cities.js` et `cityFaqs.js`.
//
// Une marque n'a de page que si elle génère de vraies recherches de panne ou
// de remplacement. Multiplier les pages sur des marques sans intention de
// recherche produirait du contenu mince, que Google sanctionne sur tout le
// lot — d'où ce fichier volontairement court.
//
// Aucune de ces pages ne revendique un agrément ou un partenariat
// constructeur : PRODIGELEC installe et dépanne ce matériel, ce qui est
// exact, mais n'est pas centre technique agréé.

export const brandPages = [
  {
    slug: "somfy",
    name: "Somfy",
    category: "Automatismes & Domotique",
    // Requête visée en priorité, celle qui porte l'intention commerciale.
    metaTitle: "Installateur & dépanneur Somfy — Dreux, Chartres, Évreux",
    metaDescription:
      "Artisan installateur Somfy en Eure-et-Loir, Eure et Yvelines : motorisation de volets RTS et io-homecontrol, box TaHoma, portails Ixengo, alarme Home Alarm. Dépannage et remplacement de moteur. Devis gratuit.",
    tagline: "Volets, portails, alarme et domotique Somfy",
    intro:
      "Somfy est la marque que je croise le plus souvent chez mes clients : la majorité des volets roulants motorisés posés depuis vingt ans en Eure-et-Loir et dans les Yvelines tournent avec un moteur Somfy. J'installe le matériel neuf, je remplace les moteurs hors service et je dépanne les installations existantes — y compris celles que je n'ai pas posées.",
    interventions: [
      {
        title: "Motorisation de volets roulants",
        description:
          "Pose de moteurs Somfy en neuf comme en rénovation, filaires ou radio. En rénovation, le moteur se remplace sans déposer le coffre dans la grande majorité des cas.",
      },
      {
        title: "Remplacement de moteur hors service",
        description:
          "Identification de la référence existante, choix du moteur compatible et du bon couple, repose et réglage des fins de course. Le volet remarche le jour même.",
      },
      {
        title: "Box domotique TaHoma",
        description:
          "Installation et configuration de la TaHoma Switch, appairage des volets, portails et éclairages, création des scénarios et prise en main sur smartphone.",
      },
      {
        title: "Motorisation de portail",
        description:
          "Pose et dépannage des motorisations Somfy pour portails battants et coulissants, réglage des fins de course et des cellules de sécurité.",
      },
      {
        title: "Alarme et sécurité",
        description:
          "Installation et dépannage des alarmes Somfy — remplacement de piles, remise en service après changement de box internet, ajout de détecteurs.",
      },
    ],
    gammes: [
      {
        name: "Oximo RTS / Altus RTS",
        description:
          "Moteurs radio les plus répandus sur les volets roulants. Protocole RTS unidirectionnel, compatibles télécommandes Situo et Smoove.",
      },
      {
        name: "Oximo io",
        description:
          "Protocole io-homecontrol bidirectionnel : le moteur confirme l'ordre et remonte sa position réelle. C'est ce qu'il faut pour exploiter pleinement une TaHoma.",
      },
      {
        name: "TaHoma Switch",
        description:
          "Box domotique qui centralise volets, portail, éclairage et chauffage sur une seule application, avec scénarios horaires.",
      },
      {
        name: "Situo, Smoove",
        description:
          "Télécommandes et points de commande muraux. Une télécommande perdue ou déprogrammée se remplace sans toucher au moteur.",
      },
    ],
    // Formulées comme un symptôme tel que le client le décrit au téléphone :
    // c'est exactement la requête qu'il tapera sur Google ou dans ChatGPT.
    pannes: [
      {
        symptome: "Le volet ne répond plus à la télécommande",
        cause:
          "Neuf fois sur dix la pile de la télécommande est morte ou le moteur a perdu sa mémorisation radio après une coupure de courant.",
      },
      {
        symptome: "Le volet s'arrête trop haut ou trop bas",
        cause:
          "Les fins de course se sont déréglées. Le réglage se refait sans démonter, en quelques minutes.",
      },
      {
        symptome: "Le moteur ronfle mais le tablier ne bouge pas",
        cause:
          "Souvent le tablier est désolidarisé de l'axe ou le moteur est en fin de vie. Diagnostic sur place avant devis de remplacement.",
      },
      {
        symptome: "La TaHoma ne voit plus mes équipements",
        cause:
          "Classique après un changement de box internet : la centrale a perdu le réseau. Une réinitialisation et un réappairage suffisent.",
      },
    ],
    faqs: [
      {
        question: "Peut-on remplacer un moteur Somfy sans changer tout le volet ?",
        answer:
          "Oui, dans la très grande majorité des cas. Le moteur se retire par le côté du coffre sans déposer le volet ni toucher à la maçonnerie. Je remplace uniquement le moteur, avec un modèle de couple équivalent. Le remplacement complet du volet ne se justifie que si le tablier ou les coulisses sont eux-mêmes abîmés.",
      },
      {
        question: "Quelle différence entre un moteur Somfy RTS et io-homecontrol ?",
        answer:
          "Le RTS est unidirectionnel : la télécommande envoie un ordre, le moteur l'exécute sans répondre. L'io-homecontrol est bidirectionnel, le moteur confirme l'ordre et remonte sa position exacte. Le RTS suffit pour un usage simple ; l'io prend tout son sens avec une box TaHoma, pour connaître l'état réel des volets à distance.",
      },
      {
        question: "Intervenez-vous sur une installation Somfy que vous n'avez pas posée ?",
        answer:
          "Oui, c'est même le cas le plus fréquent. Je dépanne les installations Somfy existantes quel qu'en soit l'installateur d'origine : remplacement de moteur, reprogrammation de télécommande, réglage des fins de course, remise en service d'une alarme ou d'une TaHoma.",
      },
      {
        question: "Combien coûte le remplacement d'un moteur de volet Somfy ?",
        answer:
          "Le prix dépend du couple du moteur et du protocole radio, et se chiffre après identification du modèle en place. Je me déplace pour établir le devis et le tarif est annoncé avant toute intervention — aucune surprise à la facture.",
      },
    ],
    realisationSlugs: ["depannage-alarme-somfy-villiers-saint-frederic"],
    services: [
      { label: "Automatismes & Motorisations", href: "/services/automatismes" },
      { label: "Sécurité Électronique", href: "/services/securite" },
    ],
  },

  {
    slug: "bubendorff",
    name: "Bubendorff",
    category: "Volets Roulants",
    metaTitle: "Dépannage & remplacement moteur volet Bubendorff — Dreux, Anet",
    metaDescription:
      "Réparation et remplacement de moteur de volet roulant Bubendorff en Eure-et-Loir, Eure et Yvelines. Gammes ID1, ID2, ID3, ID+ et MI. Identification de la génération, moteur radio adapté. Devis gratuit.",
    tagline: "Volets roulants Bubendorff — dépannage et remplacement moteur",
    intro:
      "Bubendorff est un système fermé : les moteurs, les émetteurs et les adaptateurs sont propres à la marque, et une pièce d'une génération ne va pas sur une autre. C'est ce qui fait échouer la plupart des réparations tentées avec du matériel universel. Je dépanne et je remplace les moteurs Bubendorff en identifiant d'abord précisément la génération du volet.",
    interventions: [
      {
        title: "Identification de la génération",
        description:
          "ID1, ID2, ID3, ID+ ou MI : l'année de pose et la forme du coffre déterminent le moteur et l'adaptateur compatibles. C'est la première chose que je vérifie sur place.",
      },
      {
        title: "Remplacement de moteur radio",
        description:
          "Pose d'un moteur radio Bubendorff au couple adapté (10 Nm ou 25 Nm selon la taille du tablier), avec l'adaptateur correspondant à la génération du volet.",
      },
      {
        title: "Remplacement d'émetteur",
        description:
          "Émetteur mural ou télécommande perdue, cassée ou déprogrammée : remplacement et réappairage sur le moteur existant, sans toucher au volet.",
      },
      {
        title: "Volet solaire",
        description:
          "Diagnostic des volets Bubendorff à panneau solaire : batterie en fin de vie, panneau encrassé ou mal exposé, moteur hors service.",
      },
    ],
    gammes: [
      {
        name: "ID2",
        description:
          "Gamme posée à partir de 2010, la plus courante aujourd'hui. Moteur radio avec adaptateur ID2 dédié, remplacement direct sans modification du coffre.",
      },
      {
        name: "ID1",
        description:
          "Génération plus ancienne. Le raccordement diffère selon que le volet est antérieur ou postérieur à 1998, ce qui change l'adaptateur nécessaire.",
      },
      {
        name: "ID3 / ID+",
        description:
          "Générations récentes, émetteurs communs avec l'ID2 pour certaines références. L'ID+ se monte sans adaptateur sur les gammes MI et MI2.",
      },
      {
        name: "Moteurs R radio 10 et 25 Nm",
        description:
          "Le couple se choisit selon le poids et la largeur du tablier. Un moteur sous-dimensionné force et casse prématurément.",
      },
    ],
    pannes: [
      {
        symptome: "Le volet ne bouge plus du tout",
        cause:
          "Moteur hors service ou émetteur désappairé. Le test consiste à vérifier d'abord la commande avant de conclure au moteur.",
      },
      {
        symptome: "Le volet descend mais ne remonte pas",
        cause:
          "Typiquement un moteur en fin de vie, ou un tablier qui force dans les coulisses. À diagnostiquer avant de commander la pièce.",
      },
      {
        symptome: "La télécommande a été perdue ou ne répond plus",
        cause:
          "Un émetteur de remplacement se réappaire sur le moteur en place — inutile de changer le moteur.",
      },
      {
        symptome: "Le volet solaire ne fonctionne plus l'hiver",
        cause:
          "Batterie en fin de vie ou panneau qui ne reçoit plus assez de lumière. Les deux se traitent séparément.",
      },
    ],
    faqs: [
      {
        question: "Peut-on mettre un moteur universel sur un volet Bubendorff ?",
        answer:
          "Non, et c'est la principale cause d'échec des réparations. Bubendorff utilise ses propres moteurs radio, ses propres émetteurs et des adaptateurs spécifiques à chaque génération. Un moteur universel ne se fixera pas dans le coffre et ne dialoguera pas avec les commandes en place. Il faut une pièce Bubendorff correspondant à la génération du volet.",
      },
      {
        question: "Comment savoir de quelle génération est mon volet Bubendorff ?",
        answer:
          "L'année de pose donne une première indication — l'ID2 équipe les volets posés à partir de 2010 environ — mais le repère fiable reste l'étiquette du moteur et la forme du coffre. Je vérifie ce point sur place avant de commander la moindre pièce, précisément pour éviter une erreur de compatibilité.",
      },
      {
        question: "Faut-il changer tout le volet quand le moteur Bubendorff lâche ?",
        answer:
          "Non. Le moteur se remplace seul dès lors que le tablier, les coulisses et le coffre sont en bon état. Le remplacement complet ne se justifie que si le volet lui-même est abîmé ou si la génération est trop ancienne pour trouver une pièce compatible.",
      },
      {
        question: "Intervenez-vous sur les volets Bubendorff dans le secteur de Dreux ?",
        answer:
          "Oui. J'interviens sur les volets Bubendorff à Dreux, Anet, Nonancourt, Nogent-le-Roi, Broué et dans toute la zone entre l'Eure-et-Loir, l'Eure et les Yvelines. Le déplacement pour établir le devis est gratuit dans le secteur proche de Broué.",
      },
    ],
    realisationSlugs: [],
    services: [{ label: "Automatismes & Motorisations", href: "/services/automatismes" }],
  },

  {
    slug: "faac",
    name: "FAAC",
    category: "Portails Automatiques",
    metaTitle: "Dépannage motorisation portail FAAC — Dreux, Anet, Évreux",
    metaDescription:
      "Réparation et réglage de motorisation de portail FAAC en Eure-et-Loir, Eure et Yvelines : gammes 390, 391, S418, portails coulissants. Fins de course, cellules, carte électronique. Dépannage portail toutes marques. Devis gratuit.",
    tagline: "Motorisation de portail FAAC — et dépannage toutes marques",
    intro:
      "FAAC équipe beaucoup de portails battants et coulissants du secteur, souvent posés il y a quinze ou vingt ans et toujours en service. La plupart des pannes que l'on m'appelle pour réparer ne sont pas des moteurs morts, mais des réglages partis ou des cellules de sécurité désalignées — une intervention courte qui évite un remplacement inutile. Je dépanne les portails automatiques toutes marques : FAAC, BFT, CAME, Nice, Somfy, Beninca et les autres.",
    interventions: [
      {
        title: "Réglage des fins de course",
        description:
          "Portail qui ne s'ouvre plus complètement, qui talonne ou qui force en fermeture : le réglage des butées et des temps de course remet le portail d'aplomb.",
      },
      {
        title: "Cellules de sécurité",
        description:
          "Réalignement ou remplacement des cellules photoélectriques. Un simple désalignement bloque le portail en position ouverte, sans autre panne.",
      },
      {
        title: "Carte électronique et alimentation",
        description:
          "Diagnostic électrique : fusible, condensateur, carte de commande. Je vérifie l'alimentation avant de conclure à une pièce défectueuse.",
      },
      {
        title: "Remplacement de motorisation",
        description:
          "Quand le vérin ou le bras est réellement en fin de vie, dépose et pose d'une motorisation neuve adaptée au poids et au type de vantail.",
      },
      {
        title: "Télécommandes et digicode",
        description:
          "Programmation de télécommandes supplémentaires, remplacement d'un clavier à code ou ajout d'un contrôle d'accès sur le portail existant.",
      },
    ],
    gammes: [
      {
        name: "FAAC 390",
        description:
          "Motorisation à bras articulé pour portail battant, 230 V, irréversible, jusqu'à 15 cycles par heure. Indice IP44, conçue pour fonctionner de -20 à 55 °C.",
      },
      {
        name: "FAAC 391",
        description:
          "Variante à bras articulé très répandue sur les portails battants du secteur, y compris sur les piliers larges.",
      },
      {
        name: "FAAC S418",
        description:
          "Motorisation à vérin. Sa patte arrière réglable permet de l'adapter à des configurations de piliers très différentes.",
      },
      {
        name: "Coulissants FAAC",
        description:
          "Motorisations à crémaillère pour portails coulissants, avec réglage des butées et de la détection d'obstacle.",
      },
    ],
    pannes: [
      {
        symptome: "Le portail s'ouvre puis se referme aussitôt",
        cause:
          "Détection d'obstacle mal réglée ou cellule qui coupe le cycle. Se corrige au réglage dans la majorité des cas.",
      },
      {
        symptome: "Le portail reste bloqué en position ouverte",
        cause:
          "Cellules photoélectriques désalignées ou encrassées : le système croit qu'un obstacle est présent et refuse de fermer.",
      },
      {
        symptome: "Un seul vantail bouge",
        cause:
          "Décalage des temps de course entre les deux moteurs, ou moteur d'un vantail hors service. Le diagnostic distingue les deux.",
      },
      {
        symptome: "Plus aucune réaction, aucun voyant",
        cause:
          "Coupure d'alimentation, fusible grillé ou carte de commande hors service. La vérification se fait dans cet ordre.",
      },
    ],
    faqs: [
      {
        question: "Mon portail FAAC ne se ferme plus, faut-il changer la motorisation ?",
        answer:
          "Rarement. Un portail qui refuse de fermer vient le plus souvent de cellules de sécurité désalignées ou sales : le système détecte un obstacle inexistant et interrompt le cycle. Un réalignement suffit. Le remplacement de la motorisation ne se justifie que si le vérin ou le bras est mécaniquement hors service.",
      },
      {
        question: "Peut-on encore dépanner une motorisation FAAC de vingt ans ?",
        answer:
          "Souvent oui. Les gammes FAAC comme la 390 ou la S418 sont robustes et de nombreuses pièces restent disponibles : condensateur, carte de commande, cellules, télécommandes. Je diagnostique d'abord ce qui est réellement en cause, puis je vous dis honnêtement si la réparation vaut le coup face à un remplacement.",
      },
      {
        question: "Programmez-vous des télécommandes FAAC supplémentaires ?",
        answer:
          "Oui. L'ajout d'une télécommande sur une installation FAAC existante est une intervention courte, qui ne demande ni démontage ni changement de matériel. C'est également possible d'ajouter un clavier à code ou un contrôle d'accès sur le portail en place.",
      },
      {
        question: "Intervenez-vous sur les portails d'autres marques que FAAC ?",
        answer:
          "Oui, sur toutes les marques. FAAC est celle que je croise le plus souvent, mais je dépanne aussi bien les motorisations BFT, CAME, Nice, Somfy, Beninca, Sommer, Hörmann, Novoferm, LiftMaster ou Avidsen. Le diagnostic est le même quelle que soit la marque : fins de course, cellules de sécurité, condensateur, carte de commande. Seules les pièces de rechange diffèrent.",
      },
      {
        question: "Intervenez-vous sur les portails FAAC autour de Dreux ?",
        answer:
          "Oui, j'interviens sur les motorisations FAAC à Dreux, Anet, Marchezais, Nonancourt, Nogent-le-Roi et dans tout le secteur entre l'Eure-et-Loir, l'Eure et les Yvelines. J'ai notamment réglé une motorisation FAAC à Marchezais, chantier visible dans mes réalisations.",
      },
    ],
    realisationSlugs: ["reglage-motorisation-portail-faac-marchezais"],
    services: [{ label: "Automatismes & Motorisations", href: "/services/automatismes" }],
  },
];

export function getBrandPageBySlug(slug) {
  return brandPages.find((b) => b.slug === slug);
}

// Le bandeau d'accueil et les pages services s'en servent pour savoir si une
// marque est cliquable : toutes les marques de `brands.js` n'ont pas de page.
const pagedBrandSlugs = new Map(brandPages.map((b) => [b.name.toLowerCase(), b.slug]));

export function getBrandPageSlugByName(name) {
  return pagedBrandSlugs.get(name.toLowerCase());
}
