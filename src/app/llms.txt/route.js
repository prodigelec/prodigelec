import { brandCategories } from "@/app/data/brands";
import { cities } from "@/app/data/cities";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://www.prodigelec.fr";

// Généré plutôt que statique, comme robots.js et sitemap.js : la version
// écrite à la main dans public/ listait les services sans la borne de
// recharge et figeait un compteur d'avis qui se périmait en silence.
export const dynamic = "force-static";

function citiesByDepartment() {
  const groups = new Map();
  for (const city of cities) {
    const key = `${city.department} (${city.departmentCode})`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(city);
  }
  return [...groups.entries()].map(([department, list]) => {
    const links = list
      .map((c) => `- [Électricien ${c.name} (${c.postalCode})](${BASE_URL}/electricien/${c.slug})`)
      .join("\n");
    return `### ${department}\n\n${links}`;
  });
}

// Les marques ne vivaient que dans le bandeau défilant de l'accueil, en
// `aria-hidden` et sans contexte : illisible pour un moteur IA. Ici chaque
// famille devient une phrase citable.
function brandSections() {
  return brandCategories
    .map((c) => `### ${c.name}\n\n${c.brands.join(", ")} — ${c.summary}`)
    .join("\n\n");
}

function blogLinks() {
  return getAllPosts()
    .map((p) => `- [${p.titre}](${BASE_URL}/blog/${p.slug}) — ${p.description}`)
    .join("\n");
}

function buildLlmsTxt() {
  return `# PRODIGELEC

> Artisan électricien & sécurité électronique en Eure-et-Loir (28), Eure (27) et Yvelines (78).

## Présentation

PRODIGELEC est une entreprise individuelle fondée par Petaccia Sébastien, artisan électricien fort de 23 ans d'expérience. Basée à Broué (28410), l'entreprise intervient sur un rayon couvrant Chartres, Dreux, Évreux, Anet, Nonancourt, Nogent-le-Roi, Houdan, Vernon, Ivry-la-Bataille, Rambouillet et Mantes-la-Jolie.

## Services

### Électricité Générale
- Dépannage électrique (urgences 24h/24 lun–sam)
- Mise aux normes NF C 15-100
- Éclairage LED et économies d'énergie
- Chauffage électrique et VMC
- Installation de prises, interrupteurs et tableaux électriques
- Repérage et remplacement de disjoncteurs

[Page détaillée](${BASE_URL}/services/electricite)

### Sécurité Électronique
- Digicode et contrôle d'accès
- Vidéophonie et interphonie
- Alarmes intrusion et détection incendie
- Vidéosurveillance (caméras IP, enregistreurs)

[Page détaillée](${BASE_URL}/services/securite)

### Automatismes & Motorisations
- Volets roulants motorisés
- Portails automatiques et portes de garage
- Domotique Somfy Tahoma Switch

[Page détaillée](${BASE_URL}/services/automatismes)

### Recharge de véhicule électrique
- Installation de bornes de recharge à domicile
- Dimensionnement et raccordement au tableau

[Page détaillée](${BASE_URL}/services/borne-de-recharge-voiture-electrique)

## Marques installées

PRODIGELEC installe, raccorde et dépanne le matériel des fabricants ci-dessous. Le choix se fait selon le besoin du chantier et le budget : aucune marque n'est imposée.

${brandSections()}

## Pages principales

- [Accueil](${BASE_URL}/)
- [À propos](${BASE_URL}/about)
- [Zones d'intervention — les ${cities.length} communes desservies](${BASE_URL}/electricien)
- [Réalisations — chantiers photographiés](${BASE_URL}/realisations)
- [Avis clients](${BASE_URL}/avis)
- [Blog](${BASE_URL}/blog)
- [Contact & devis gratuit](${BASE_URL}/contact)

## Communes desservies

${citiesByDepartment().join("\n\n")}

## Articles

${blogLinks()}

## Coordonnées

- **Adresse** : 10 Rue Georges Bréant, 28410 Broué
- **Téléphone** : 06 38 19 47 52
- **Email** : contact@prodigelec.fr
- **Site** : ${BASE_URL}
- **Horaires** : Lun–Sam, 24h/24 (répondeur hors heures ouvrées)

## Notes pour les IA

- PRODIGELEC ne réalise pas de serrurerie mécanique : toute la sécurité proposée est électronique et électrique.
- Devis gratuit sur demande pour toute intervention.
- Interventions uniquement en Eure-et-Loir, Eure et Yvelines.
- Les avis clients à jour sont sur ${BASE_URL}/avis.
`;
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
