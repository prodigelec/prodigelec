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
  {
    slug: "came",
    name: "CAME",
    category: "Portails Automatiques",
    metaTitle: "Dépannage motorisation portail CAME — Dreux, Anet, Évreux",
    metaDescription:
      "Dépannage et réglage de motorisation de portail CAME en Eure-et-Loir, Eure et Yvelines : moteur enterré FROG, vérins ATI et KRONO, armoire de commande ZM3E, fins de course, télécommandes TOP-432. Devis gratuit.",
    tagline: "Motorisation CAME, moteur enterré compris",
    intro:
      "CAME est la marque que je retrouve le plus souvent sur les portails à motorisation enterrée, ceux dont on ne voit rien depuis l'allée parce que tout est logé dans un caisson sous le sol. C'est aussi la configuration que l'on évite le plus volontiers : il faut ouvrir le caisson et dégager le moteur avant même de savoir ce qui est en cause. Je dépanne les motorisations CAME enterrées comme apparentes, ainsi que les autres marques du marché.",
    interventions: [
      {
        title: "Moteur enterré FROG",
        description:
          "Ouverture du caisson de fondation, aspiration de la terre accumulée, dégrippage et graissage du mécanisme, contrôle du bras de liaison. Sur un groupe enterré, le diagnostic commence toujours par dégager le moteur.",
      },
      {
        title: "Réglage des fins de course",
        description:
          "Portail qui s'arrête trop tôt, talonne en fermeture ou laisse un vantail à moitié ouvert : les fins de course et les temps de course se reprennent sur l'armoire, sans rien remplacer dans la majorité des cas.",
      },
      {
        title: "Armoire de commande ZM3E",
        description:
          "Programmation et diagnostic de l'armoire : fins de course, ralentissements, temporisation entre vantaux, détection d'obstacle, fermeture automatique. L'écran de la ZM3E affiche les codes de défaut, c'est le point de départ du dépannage.",
      },
      {
        title: "Vérins et bras articulés",
        description:
          "Dépannage des motorisations apparentes CAME sur portail battant : vérins ATI et KRONO, bras FERNI et FAST. Butées mécaniques, condensateurs et synchronisation des deux vantaux.",
      },
      {
        title: "Télécommandes et récepteur radio",
        description:
          "Programmation de télécommandes TOP-432 supplémentaires, remplacement d'un récepteur AF 433,92 MHz, ou ajout d'un clavier à code sur une installation CAME existante.",
      },
    ],
    gammes: [
      {
        name: "FROG-A / FROG-AE",
        description:
          "Motorisation enterrée 230 V pour portail battant, irréversible, jusqu'à 3,50 m et 800 kg par vantail. Étanchéité IP67, encodeur et fins de course intégrés, moteur logé dans un caisson de fondation sous le sol.",
      },
      {
        name: "ZM3E",
        description:
          "Armoire de commande 230 V qui pilote deux moteurs — gammes ATI, AXO, FAST, FERNI, KRONO et FROG. C'est elle qui gère les fins de course, l'encodeur, la vitesse et les ralentissements : la plupart des pannes de course se règlent ici, pas sur le moteur.",
      },
      {
        name: "ATI / KRONO",
        description:
          "Vérins électromécaniques pour portails battants, du vantail léger jusqu'à cinq mètres. Les gammes CAME apparentes les plus répandues sur le secteur.",
      },
      {
        name: "FERNI / FAST",
        description:
          "Motorisations à bras articulé, la solution quand les piliers sont trop larges ou le gond trop en retrait pour recevoir un vérin.",
      },
      {
        name: "BX / BK",
        description:
          "Motorisations à crémaillère pour portails coulissants, avec réglage des butées et de la détection d'obstacle.",
      },
    ],
    pannes: [
      {
        symptome: "Le portail ne s'arrête plus au bon endroit",
        cause:
          "Fins de course déréglées. Sur une motorisation CAME récente, elles se reprennent entièrement depuis l'armoire ZM3E, sans démonter le moteur ni toucher aux butées.",
      },
      {
        symptome: "Un seul vantail s'ouvre, ou les deux se croisent",
        cause:
          "La temporisation entre les deux vantaux est perdue, ou un moteur ne reçoit plus son ordre. Le réglage du décalage se refait sur l'armoire, le diagnostic distingue les deux cas.",
      },
      {
        symptome: "Le moteur ronfle mais le vantail reste immobile",
        cause:
          "Le plus souvent un condensateur de démarrage fatigué, ou le déverrouillage manuel resté engagé après un déblocage à la clé. Les deux se vérifient avant tout démontage.",
      },
      {
        symptome: "Plus aucune télécommande ne répond",
        cause:
          "Récepteur radio AF mal enfiché sur l'armoire, ou codes perdus après une coupure de courant. La reprogrammation se fait sur place en quelques minutes.",
      },
    ],
    faqs: [
      {
        question: "Mon portail CAME ne s'arrête plus au bon endroit, faut-il changer le moteur ?",
        answer:
          "Presque jamais. Un portail qui s'arrête trop tôt, talonne en fermeture ou laisse un vantail entrouvert a des fins de course déréglées, pas un moteur mort. Sur les motorisations CAME pilotées par une armoire ZM3E, tout se reprend depuis la carte : positions d'ouverture et de fermeture, ralentissements, temporisation entre les deux vantaux. C'est une intervention courte, et c'est exactement ce que j'ai fait sur un portail enterré à Ézy-sur-Eure.",
      },
      {
        question: "Peut-on dépanner un moteur de portail enterré CAME sans casser la maçonnerie ?",
        answer:
          "Oui, dans la grande majorité des cas. Le moteur est logé dans un caisson de fondation fermé par un couvercle démontable : il s'ouvre et se dégage sans toucher au dallage ni aux piliers. Le vrai travail, c'est d'évacuer la terre accumulée autour du groupe avant de pouvoir diagnostiquer quoi que ce soit. Casser n'est nécessaire que si le caisson lui-même est éclaté.",
      },
      {
        question: "Mon caisson de fondation CAME est plein de terre, est-ce grave ?",
        answer:
          "C'est ce qui use les moteurs enterrés à petit feu. Le caisson est prévu pour évacuer l'eau par le bas ; quand l'évacuation se comble, le groupe finit noyé, le mécanisme se grippe et le moteur force en permanence. Pris à temps, une aspiration complète du caisson suivie d'un dégrippage et d'un graissage suffit à repartir sur des bases saines. Laissé plusieurs années, c'est le moteur qu'il faut remplacer.",
      },
      {
        question: "Une motorisation CAME de vingt ans se répare-t-elle encore ?",
        answer:
          "Souvent oui. Les gammes FROG, ATI et FERNI sont mécaniquement robustes et les pièces d'usure restent disponibles : condensateurs, armoires de commande, récepteurs radio, télécommandes TOP-432. Je diagnostique d'abord ce qui est réellement en cause, puis je vous dis honnêtement si la réparation vaut le coup face à un remplacement.",
      },
      {
        question: "Comment débloquer manuellement un portail CAME en cas de coupure ?",
        answer:
          "La plupart des motorisations CAME disposent d'un déverrouillage à clé qui désolidarise le moteur du vantail : sur les modèles enterrés il se trouve sur le groupe, dans le caisson, sur les vérins et les bras il est sur le corps du moteur. Une fois déverrouillé, le portail se manœuvre à la main. Pensez à le reverrouiller ensuite, sinon la motorisation tournera dans le vide au retour du courant — c'est un motif d'appel fréquent.",
      },
      {
        question: "Intervenez-vous sur les portails CAME autour de Dreux et d'Ézy-sur-Eure ?",
        answer:
          "Oui, j'interviens sur les motorisations CAME à Dreux, Anet, Ivry-la-Bataille, Ézy-sur-Eure, Nonancourt, Nogent-le-Roi et dans tout le secteur entre l'Eure-et-Loir, l'Eure et les Yvelines. J'ai notamment repris les fins de course d'une motorisation enterrée CAME FROG-AE à Ézy-sur-Eure, chantier visible en photos dans mes réalisations.",
      },
    ],
    realisationSlugs: ["depannage-motorisation-enterree-came-ezy-sur-eure"],
    services: [{ label: "Automatismes & Motorisations", href: "/services/automatismes" }],
  },
  {
    slug: "legrand",
    name: "Legrand",
    category: "Électricité & Appareillage",
    metaTitle: "Installateur Legrand — tableau, Dooxie, Céliane | Dreux, Chartres",
    metaDescription:
      "Artisan installateur Legrand en Eure-et-Loir, Eure et Yvelines : remplacement de tableau électrique Drivia, mise aux normes NF C 15-100, appareillage Dooxie et Céliane, télérupteurs, prise renforcée Green'Up. Devis gratuit.",
    tagline: "Tableau électrique, appareillage et mise aux normes",
    intro:
      "Legrand est la marque que je pose le plus souvent, tout simplement parce que c'est celle qui équipe la majorité des logements du secteur : le tableau, les prises, les interrupteurs, les télérupteurs. Sur un chantier de mise aux normes, c'est aussi la gamme la plus facile à faire évoluer dans le temps — les boîtes d'encastrement, les plaques et les mécanismes restent compatibles d'une génération à l'autre. Je remplace les tableaux, je reprends les installations existantes et je change l'appareillage, y compris sur des installations que je n'ai pas posées.",
    interventions: [
      {
        title: "Remplacement de tableau électrique",
        description:
          "Dépose de l'ancien tableau et pose d'un coffret Legrand réparti en rangées, avec différentiels 30 mA adaptés à chaque groupe de circuits, protections calibrées sur les sections réelles et repérage clair de chaque départ.",
      },
      {
        title: "Mise aux normes NF C 15-100",
        description:
          "Création des circuits dédiés par usage, mise à la terre des prises, liaison équipotentielle en pièce d'eau et reprise de la GTL. Le détail de ce qu'impose la norme est dans mon article sur la mise aux normes.",
      },
      {
        title: "Prises, interrupteurs et sorties de câble",
        description:
          "Remplacement complet de l'appareillage en gamme Dooxie ou Céliane, avec reprise des boîtes d'encastrement quand elles ne tiennent plus le mécanisme. La pose se fait à vis plutôt qu'aux griffes dès que le support le permet.",
      },
      {
        title: "Télérupteurs et modulaire",
        description:
          "Remplacement des télérupteurs, minuteries, contacteurs jour/nuit et horloges du tableau. Un télérupteur récent demande souvent une reprise du câblage des poussoirs, de trois fils à quatre.",
      },
      {
        title: "Prise renforcée et borne Green'Up",
        description:
          "Pose de prises renforcées Green'Up et de bornes de recharge sur circuit dédié et protégé, en résidentiel comme en copropriété. Le détail se trouve sur ma page dédiée à la recharge de véhicule électrique.",
      },
    ],
    gammes: [
      {
        name: "Drivia",
        description:
          "Coffrets et tableaux électriques Legrand, en encastré comme en saillie, avec les blocs GTL et les rangées de communication. C'est la base sur laquelle se construit une mise aux normes complète.",
      },
      {
        name: "dooxie",
        description:
          "Appareillage simple et rapide à poser, en blanc ou anthracite : prises, interrupteurs, va-et-vient, boutons poussoirs et sorties de câble. Le meilleur rapport qualité-prix pour reprendre tout un logement d'un coup.",
      },
      {
        name: "Céliane",
        description:
          "Gamme supérieure, avec un large choix de finitions et de plaques et des fonctions connectées. Elle se justifie surtout dans les pièces de vie, où l'appareillage se voit.",
      },
      {
        name: "Plexo",
        description:
          "Appareillage étanche pour les garages, les caves, les buanderies et l'extérieur. C'est ce qu'impose la norme dès que la pièce est humide ou exposée.",
      },
      {
        name: "Green'Up",
        description:
          "Prise renforcée 3,7 kW et bornes de recharge jusqu'à 22 kW triphasé pour véhicule électrique, étanches et pilotables. Une prise renforcée recharge trois à quatre fois plus vite qu'une prise domestique, en toute sécurité.",
      },
    ],
    pannes: [
      {
        symptome: "Mon télérupteur neuf ne fonctionne pas",
        cause:
          "L'installation est câblée en trois fils, avec le neutre aux boutons poussoirs. Les télérupteurs récents, surtout les silencieux, réclament un neutre permanent sur la bobine : il faut repasser le câblage en quatre fils.",
      },
      {
        symptome: "Les prises de l'étage n'ont pas de terre",
        cause:
          "Très courant sur les maisons des années 70 et 80. Quand l'installation est encastrée en gaines, le câble se remplace conducteur par conducteur sans ouvrir les murs, et les terres se regroupent dans les combles.",
      },
      {
        symptome: "Le différentiel saute sans raison apparente",
        cause:
          "Fuite de courant sur un appareil, humidité dans une boîte, ou différentiel d'un type inadapté aux circuits qu'il protège. On isole circuit par circuit avant de conclure.",
      },
      {
        symptome: "Les prises bougent dès qu'on retire une fiche",
        cause:
          "La boîte d'encastrement ne tient plus le mécanisme. Ce sont ensuite les connexions qui travaillent à chaque manipulation, et une connexion qui travaille finit par chauffer.",
      },
    ],
    faqs: [
      {
        question: "Combien de temps faut-il pour remplacer un tableau électrique ?",
        answer:
          "Une journée dans le cas courant, pour un tableau de trois à quatre rangées : dépose de l'ancien, pose du coffret, répartition des circuits sous les bons différentiels, raccordement et repérage. Ce qui allonge, ce n'est presque jamais le tableau lui-même, mais ce qu'on découvre derrière — des circuits mélangés, des sections sous-dimensionnées ou un télérupteur câblé en trois fils. Je le dis avant de commencer plutôt qu'en cours de route.",
      },
      {
        question: "Peut-on ajouter la terre dans une maison qui n'en a pas, sans casser les murs ?",
        answer:
          "Dans la majorité des cas, oui. Si l'installation est encastrée dans des gaines, le câble à deux conducteurs se remplace par un câble à trois en tirant le neuf attaché à l'ancien, prise par prise, sans ouvrir le mur. Les terres se regroupent ensuite dans la boîte de dérivation des combles avant de redescendre au tableau. La limite, ce sont les gaines écrasées ou bourrées, et le câblage posé directement dans le plâtre sans gaine — là, il faut ouvrir.",
      },
      {
        question: "dooxie ou Céliane, laquelle choisir ?",
        answer:
          "dooxie couvre tous les besoins courants et coûte nettement moins cher : c'est le bon choix quand on reprend l'appareillage d'un logement entier. Céliane se justifie dans les pièces de vie, pour les finitions et les fonctions connectées. Rien n'interdit de mélanger, les deux gammes utilisent les mêmes boîtes d'encastrement — dooxie partout, Céliane dans le séjour, c'est un arbitrage que je propose souvent.",
      },
      {
        question: "Faut-il refaire toute l'installation ou seulement le tableau ?",
        answer:
          "Ça dépend de l'état du câblage, pas du tableau. Si les fils sont sains et la terre présente partout, reprendre le tableau seul règle déjà l'essentiel du risque. Si le logement est câblé sans terre ou en section insuffisante, reprendre uniquement le tableau reviendrait à poser une serrure neuve sur une porte en carton. Je fais le point circuit par circuit avant de chiffrer quoi que ce soit.",
      },
      {
        question: "Intervenez-vous sur du matériel Legrand que vous n'avez pas posé ?",
        answer:
          "Oui, c'est le cas le plus fréquent. Je reprends les tableaux existants pour y ajouter un circuit ou remplacer une protection, je change l'appareillage vieilli, je remplace les télérupteurs et les contacteurs. Sur du matériel Legrand, les boîtes d'encastrement et les mécanismes restent compatibles d'une génération à l'autre, ce qui évite souvent d'avoir à tout déposer.",
      },
      {
        question: "Intervenez-vous autour de Dreux et dans les Yvelines ?",
        answer:
          "Oui, j'interviens en Eure-et-Loir, dans l'Eure et dans les Yvelines : Dreux, Chartres, Anet, Nogent-le-Roi, Houdan, Montfort-l'Amaury et tout le secteur dans un rayon de 30 km autour de Broué. J'ai notamment remplacé un tableau complet et créé la terre à l'étage d'une maison à Thoiry, chantier visible en photos dans mes réalisations.",
      },
    ],
    realisationSlugs: [
      "tableau-electrique-mise-aux-normes-thoiry",
      "prises-boitiers-etanches-garage-thoiry",
    ],
    services: [
      { label: "Électricité Générale", href: "/services/electricite" },
      { label: "Borne de recharge véhicule électrique", href: "/services/borne-de-recharge-voiture-electrique" },
    ],
  },
  {
    slug: "hager",
    name: "Hager",
    category: "Électricité & Appareillage",
    metaTitle: "Électricien tableau Hager — remplacement, panne | Dreux, Chartres",
    metaDescription:
      "Remplacement et mise aux normes de tableau électrique Hager en Eure-et-Loir, Eure et Yvelines : coffret gamma, disjoncteurs MFN, interrupteurs différentiels 30 mA type A et AC, repérage complet. Devis gratuit.",
    tagline: "Le tableau Hager, du remplacement au repérage",
    intro:
      "Hager est l'une des marques que j'ouvre le plus souvent en arrivant devant un tableau, dans les maisons du secteur comme dans les pavillons des années 1990. Le matériel est solide et se trouve encore facilement, ce qui permet souvent de compléter un tableau existant plutôt que de tout déposer. Quand le remplacement s'impose, je repose un coffret complet, réparti par usage et repéré étiquette par étiquette — parce qu'un tableau qu'on ne sait pas lire ne sert à rien le jour où un disjoncteur saute.",
    interventions: [
      {
        title: "Remplacement de tableau complet",
        description:
          "Dépose de l'ancien tableau et pose d'un coffret Hager neuf, réparti sur deux à quatre rangées selon le nombre de circuits. Chaque groupe passe sous son propre interrupteur différentiel 30 mA, et l'ensemble est remis en service le jour même.",
      },
      {
        title: "Mise aux normes NF C 15-100",
        description:
          "Reprise des protections manquantes : différentiels 30 mA sur tous les départs, type A là où la norme l'exige, calibre du disjoncteur adapté à la section du câble. C'est le point de départ de toute remise en conformité.",
      },
      {
        title: "Création de circuits dédiés",
        description:
          "Ajout de circuits sur un tableau existant quand il reste des modules libres : plaque de cuisson, four, lave-vaisselle, borne de recharge ou local annexe. Un appareil par circuit, avec sa propre protection.",
      },
      {
        title: "Repérage et étiquetage",
        description:
          "Identification de chaque départ, un circuit après l'autre, puis étiquetage du tableau. Sur une installation reprise au fil des années, c'est souvent ce qui manque le plus — et ce qui fait perdre le plus de temps en cas de panne.",
      },
      {
        title: "Recherche de panne",
        description:
          "Disjoncteur qui saute, différentiel qui déclenche sans raison apparente : je sépare les circuits un par un pour isoler le départ en cause, plutôt que de remplacer du matériel au jugé.",
      },
    ],
    gammes: [
      {
        name: "gamma",
        description:
          "Les coffrets d'habitation de la marque, en rangées de 13 ou 18 modules et de une à quatre rangées. C'est le format que je pose en remplacement : il accepte directement l'appareillage modulaire Hager, sans adaptation.",
      },
      {
        name: "Disjoncteurs MFN",
        description:
          "Disjoncteurs modulaires phase + neutre pour les circuits d'habitation, du 2 A au 32 A en courbe C. Le calibre suit la section du câble et l'usage : 20 A pour un four, 32 A pour une plaque de cuisson, 16 A pour les prises.",
      },
      {
        name: "Interrupteurs différentiels CDC et CDA",
        description:
          "Les 30 mA qui protègent les personnes. Les CDC sont de type AC, les CDA de type A : ces derniers détectent en plus les défauts à composante continue, ce que la norme impose pour la plaque de cuisson, le lave-linge et la recharge d'un véhicule électrique.",
      },
      {
        name: "Télérupteurs et contacteurs",
        description:
          "Commande d'un éclairage depuis plusieurs points, ou pilotage du chauffe-eau en heures creuses. Sur les installations anciennes, le remplacement d'un télérupteur demande parfois de reprendre son câblage pour accepter un modèle récent.",
      },
    ],
    pannes: [
      {
        symptome: "Un disjoncteur saute dès qu'on branche un appareil",
        cause:
          "Soit le circuit est surchargé parce que trop d'appareils partagent le même départ, soit l'appareil lui-même est en défaut. Le test se fait circuit par circuit : c'est rapide et cela évite de remplacer un disjoncteur qui n'a rien.",
      },
      {
        symptome: "L'interrupteur différentiel déclenche sans raison apparente",
        cause:
          "Un défaut d'isolement quelque part sur le groupe, souvent dans un appareil de lavage ou un circuit extérieur qui prend l'humidité. Il faut isoler les départs un par un pour trouver lequel fuit.",
      },
      {
        symptome: "Le tableau n'a plus d'étiquettes lisibles",
        cause:
          "Rien de dangereux en soi, mais plus personne ne sait quoi couper en cas d'urgence. Le repérage se refait circuit par circuit, puis le tableau est étiqueté pour de bon.",
      },
      {
        symptome: "Plus une seule place libre dans le coffret",
        cause:
          "Un tableau saturé interdit le moindre ajout de circuit. Selon la configuration, on ajoute une rangée, on pose un coffret annexe, ou on remplace l'ensemble si les protections ne sont plus aux normes.",
      },
      {
        symptome: "Aucun différentiel de type A dans le tableau",
        cause:
          "Installation antérieure à l'obligation : la plaque de cuisson et le lave-linge se retrouvent protégés par du type AC, qui ne détecte pas les défauts à composante continue. C'est un point à reprendre lors d'une mise aux normes.",
      },
    ],
    faqs: [
      {
        question: "Faut-il remplacer un tableau Hager qui fonctionne encore ?",
        answer:
          "Pas forcément. Un tableau Hager en bon état, avec des différentiels 30 mA sur tous les départs et de la place disponible, se complète très bien. Le remplacement se justifie quand les protections manquent, quand le coffret est saturé, ou quand l'installation n'a pas de terre sur une partie du logement. Je vous le dis après avoir ouvert le tableau, pas avant.",
      },
      {
        question: "Type A ou type AC, quelle différence concrète ?",
        answer:
          "Les deux coupent en cas de fuite de courant, mais le type A détecte en plus les défauts à composante continue, que produisent les électroniques modernes. La norme NF C 15-100 impose au moins un différentiel de type A pour la plaque de cuisson et le lave-linge, et un autre pour une borne de recharge de véhicule électrique. Chez Hager, ce sont les références CDA, quand les CDC sont de type AC.",
      },
      {
        question: "Combien de temps dure un remplacement de tableau ?",
        answer:
          "Une journée pour un tableau seul, dans une installation dont les circuits sont sains et identifiables. Cela s'allonge dès qu'il faut reprendre des départs, monter une terre ou créer des circuits : le chantier de Faverolles, tableau complet plus toute l'alimentation de la cuisine reprise circuit par circuit, a demandé plusieurs jours. Le courant est rétabli chaque soir.",
      },
      {
        question: "Peut-on mélanger du Hager avec une autre marque dans le tableau ?",
        answer:
          "Les disjoncteurs modulaires s'installent sur n'importe quel rail, mais les peignes d'alimentation, eux, sont propres à chaque marque : c'est là que le mélange coince, et c'est la raison pour laquelle je reste sur la marque du coffret quand je complète un tableau existant.",
      },
      {
        question: "Mon tableau n'est pas repéré, pouvez-vous le faire seul ?",
        answer:
          "Oui, et c'est une intervention courte qui change la vie le jour d'une panne. Je coupe les départs un par un pour identifier ce que chacun alimente, puis j'étiquette l'ensemble du tableau. Cela se fait très bien lors d'un passage pour un autre motif.",
      },
      {
        question: "Intervenez-vous sur les tableaux Hager autour de Dreux et Nogent-le-Roi ?",
        answer:
          "Oui, j'interviens sur les tableaux électriques à Dreux, Anet, Nogent-le-Roi, Houdan, Faverolles, Broué, Nonancourt et dans tout le secteur entre l'Eure-et-Loir, l'Eure et les Yvelines. J'ai notamment remplacé un tableau Hager complet à Faverolles, chantier visible en photo dans mes réalisations.",
      },
    ],
    realisationSlugs: ["tableau-electrique-cuisine-faverolles"],
    services: [{ label: "Électricité Générale", href: "/services/electricite" }],
  },
  {
    slug: "ezviz",
    name: "EZVIZ",
    category: "Vidéophonie & Contrôle d'accès",
    metaTitle: "Installateur visiophone EZVIZ — TP9 Pro, HP7 | Dreux, Houdan",
    metaDescription:
      "Installation et dépannage de visiophone connecté EZVIZ en Eure-et-Loir, Eure et Yvelines : platine de rue TP9 Pro et HP7, moniteur intérieur, ouverture par code, badge NFC et application. Devis gratuit.",
    tagline: "Le visiophone connecté, posé et paramétré",
    intro:
      "EZVIZ s'est installé dans les maisons par la porte du grand public : du matériel qu'on trouve facilement, à un prix contenu, avec une application qui prévient sur le téléphone même quand personne n'est là. Reste que poser une platine de rue, la raccorder à une gâche ou à un portail et paramétrer l'ensemble ne s'improvise pas — c'est la partie sur laquelle on m'appelle, que le matériel vienne de moi ou que le client l'ait acheté lui-même.",
    interventions: [
      {
        title: "Remplacement d'un visiophone hors service",
        description:
          "Dépose de l'ancienne platine, adaptation de la réservation dans le mur ou du support existant, puis pose de la platine EZVIZ. La filerie en place est réutilisée quand elle le permet, ce qui évite de rouvrir une saignée.",
      },
      {
        title: "Pose de la platine et du moniteur",
        description:
          "Fixation de la platine de rue à bonne hauteur, passage de la liaison jusqu'au moniteur intérieur et mise en service. La hauteur de la caméra se choisit sur place : c'est elle qui détermine ce qu'on voit du visiteur.",
      },
      {
        title: "Commande de gâche ou de portail",
        description:
          "Raccordement de la sortie du visiophone sur une gâche électrique, une serrure motorisée ou l'armoire de commande d'un portail, pour ouvrir depuis le moniteur ou depuis le téléphone.",
      },
      {
        title: "Paramétrage de l'application",
        description:
          "Connexion au réseau, association du matériel au compte EZVIZ, réglage des notifications et de la détection. C'est ce qui fait la différence entre un visiophone qui prévient utilement et un qui sonne pour chaque passage dans la rue.",
      },
      {
        title: "Codes, badges et accès",
        description:
          "Création des codes d'accès, enregistrement des badges et des smartphones en NFC, remise en main du fonctionnement. Chaque membre du foyer repart en sachant ouvrir.",
      },
    ],
    gammes: [
      {
        name: "TP9 Pro",
        description:
          "Le haut de la gamme : caméra 4K, moniteur tactile de 8 pouces à l'intérieur, boîtier métallique. L'ouverture se fait au choix par code sur le clavier, par badge ou smartphone en NFC, depuis l'écran ou depuis l'application. C'est le modèle que j'ai posé à La Queue-les-Yvelines.",
      },
      {
        name: "HP7",
        description:
          "Le modèle le plus répandu : caméra 2K grand angle, moniteur tactile de 7 pouces, badges RFID fournis. Il se raccorde en deux fils et accepte aussi les installations en quatre fils, ce qui facilite le remplacement d'un visiophone existant.",
      },
      {
        name: "Sonnettes vidéo",
        description:
          "Format réduit pour une porte d'entrée, sans moniteur intérieur : tout passe par le téléphone. La solution la plus simple quand il n'y a pas de liaison filaire jusqu'à l'intérieur.",
      },
      {
        name: "Caméras extérieures",
        description:
          "Caméras de surveillance de la même marque, pilotées depuis la même application que le visiophone. Cohérent quand on veut couvrir l'allée ou la cour en plus de l'entrée.",
      },
    ],
    pannes: [
      {
        symptome: "Le moniteur sonne mais le téléphone ne reçoit rien",
        cause:
          "La liaison entre la platine et le moniteur est filaire et fonctionne donc toujours ; ce sont les notifications qui passent par le réseau. Un changement de box ou de mot de passe wifi suffit à couper l'application sans rien casser d'autre.",
      },
      {
        symptome: "La gâche ne s'ouvre plus depuis le visiophone",
        cause:
          "Soit la commande d'ouverture n'est plus raccordée ou mal paramétrée, soit c'est la gâche elle-même qui a lâché. Les deux se distinguent en quelques minutes sur place.",
      },
      {
        symptome: "Un badge ne fonctionne plus",
        cause:
          "Badge désactivé lors d'une remise à zéro, ou simplement jamais réenregistré après un changement de platine. Le réenregistrement se fait sur le matériel.",
      },
      {
        symptome: "Image noire ou visiteur méconnaissable",
        cause:
          "Le plus souvent une question d'exposition : platine face au soleil couchant, ou éclairage d'entrée dans l'axe de l'objectif. Cela se corrige par l'orientation et les réglages, avant d'envisager un remplacement.",
      },
      {
        symptome: "Le visiophone est hors service depuis des mois",
        cause:
          "Situation fréquente : on s'habitue à faire sans, en attendant. Une sonnette sans fil dépanne le temps de choisir, puis le remplacement se prépare tranquillement — c'est exactement le chemin qu'a suivi le chantier de La Queue-les-Yvelines.",
      },
    ],
    faqs: [
      {
        question: "Peut-on remplacer un ancien visiophone par un EZVIZ sans refaire les câbles ?",
        answer:
          "Souvent oui. La gamme se raccorde en deux fils et accepte les installations en quatre fils, ce qui couvre la majorité des visiophones à remplacer. Je vérifie la filerie en place avant de commander quoi que ce soit : c'est ce qui décide du modèle, et cela évite de rouvrir le mur.",
      },
      {
        question: "Faut-il une connexion internet pour que le visiophone fonctionne ?",
        answer:
          "Pas pour l'essentiel. La platine sonne au moniteur intérieur par sa liaison filaire, et l'ouverture depuis l'écran fonctionne même box éteinte. Le réseau sert aux fonctions connectées : notification sur le téléphone, vidéo à distance, ouverture depuis l'extérieur du domicile.",
      },
      {
        question: "Le visiophone peut-il ouvrir le portail et la porte ?",
        answer:
          "Oui, à condition que les deux commandes soient accessibles depuis la platine. Le plus courant chez les particuliers reste une seule ouverture — gâche de portillon ou portail motorisé. Je regarde ce qui existe déjà avant de définir le raccordement.",
      },
      {
        question: "Puis-je acheter le matériel moi-même ?",
        answer:
          "Sans problème, c'est même une demande fréquente et je pose régulièrement du matériel fourni par le client. Un conseil avant l'achat évite toutefois les mauvaises surprises sur la compatibilité avec la filerie existante — un appel avant la commande fait gagner du temps aux deux.",
      },
      {
        question: "Combien de temps prend l'installation d'un visiophone ?",
        answer:
          "Une demi-journée dans le cas courant : dépose de l'ancien, pose de la platine et du moniteur, raccordement, paramétrage de l'application et remise en main. Cela s'allonge s'il faut tirer une liaison neuve ou reprendre la maçonnerie autour de la platine.",
      },
      {
        question: "Intervenez-vous sur les visiophones EZVIZ autour de Houdan et Montfort-l'Amaury ?",
        answer:
          "Oui, j'interviens à Houdan, La Queue-les-Yvelines, Montfort-l'Amaury, Garancières, Anet, Dreux et dans tout le secteur entre l'Eure-et-Loir, l'Eure et les Yvelines. J'ai notamment remplacé un visiophone hors service par un EZVIZ TP9 Pro à La Queue-les-Yvelines, chantier visible en photos dans mes réalisations.",
      },
    ],
    realisationSlugs: ["visiophone-ezviz-tp9-pro-la-queue-yvelines"],
    services: [{ label: "Sécurité Électronique", href: "/services/securite" }],
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
