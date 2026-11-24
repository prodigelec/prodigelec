# Plan d'action SEO — PRODIGELEC

> Référence : `FULL-AUDIT-REPORT.md` (25 mai 2026)
> Score actuel : **72/100** → Cible après actions Critical+High : **88/100**

---

## 🔴 CRITIQUE — à corriger maintenant (1 sprint)

### C1 — Fix doublon `<title>` sur 9+ pages
**Effort** : 15 min — **Impact** : Très élevé — **Pages affectées** : 35+ (services × 3, cities × 30, blog, blog posts × 5, contact)

**Solution** : ne plus suffixer `| PRODIGELEC` dans les titres individuels — laisser le template du layout faire le job.

```js
// src/app/services/electricite/page.js:5
- title: "Électricien 27, 28 & 78 - Dépannage & Installation Électrique | PRODIGELEC",
+ title: "Électricien 27, 28 & 78 - Dépannage & Installation Électrique",

// src/app/services/securite/page.js
- title: "Sécurité Électronique 27, 28 & 78 - Digicode, Alarme, Vidéosurveillance | PRODIGELEC",
+ title: "Sécurité Électronique 27, 28 & 78 - Digicode, Alarme, Vidéosurveillance",

// src/app/services/automatismes/page.js — idem
// src/app/electricien/[city]/page.js:14
- const title = `Électricien ${city.name} (${city.postalCode}) — Dépannage & Sécurité | PRODIGELEC`;
+ const title = `Électricien ${city.name} (${city.postalCode}) — Dépannage & Sécurité`;

// Idem pour blog, contact, about, /blog/[slug]/page.js
```

Le template `layout.js:33` (`template: "%s | PRODIGELEC"`) se chargera d'ajouter `| PRODIGELEC` automatiquement.

**Vérification** : `curl -s https://www.prodigelec.fr/electricien/broue | grep -oE "<title>[^<]+</title>"` après deploy.

---

### C2 — Rendre les FAQ visibles sur les 30 pages villes
**Effort** : 30 min — **Impact** : Très élevé (rich snippets, AI citation) — **Pages** : 30

Les 3 FAQ par ville sont déjà générées dans `electricien/[city]/page.js:97-126`. Il faut :

1. Exporter `faqsForCity(city)` depuis `page.js` (ou recalculer dans `CityPageContent.jsx`)
2. Ajouter une section `<section id="faq">` dans `CityPageContent.jsx` qui affiche les 3 questions/réponses

```jsx
// dans CityPageContent.jsx, avant le footer/CTA :
<section id="faq" className="max-w-5xl mx-auto px-6 py-12">
  <h2 className="text-3xl font-bold mb-6">Questions fréquentes à {city.name}</h2>
  <div className="space-y-4">
    {[
      { q: `Êtes-vous disponible pour un dépannage électrique urgent à ${city.name} ?`,
        a: `Oui, PRODIGELEC intervient à ${city.name} (${city.postalCode}) du lundi au samedi, 24h/24. Pour les urgences électriques, contactez-nous au 06 38 19 47 52.` },
      { q: `Proposez-vous des devis gratuits à ${city.name} ?`,
        a: city.freeZone
          ? `Oui, le déplacement est gratuit à ${city.name}. Nous établissons votre devis sans frais et sans engagement.`
          : `Oui, nous établissons des devis gratuits pour toute intervention à ${city.name}. Contactez-nous pour convenir d'un rendez-vous.` },
      { q: `Quelles prestations proposez-vous à ${city.name} ?`,
        a: `À ${city.name}, PRODIGELEC réalise : dépannage et mise aux normes NF C 15-100, installation de tableaux électriques, pose de digicode et contrôle d'accès, alarme intrusion, vidéosurveillance, motorisation de volets et portails automatiques.` }
    ].map(({q, a}) => (
      <details key={q} className="rounded-lg border border-white/10 p-4">
        <summary className="font-semibold cursor-pointer">{q}</summary>
        <p className="mt-3 text-white/80">{a}</p>
      </details>
    ))}
  </div>
</section>
```

Pour éviter le duplication entre `page.js` (schema) et `CityPageContent.jsx` (rendu), factoriser dans `src/app/data/cityFaqs.js`.

---

### C3 — Retirer ou justifier `aggregateRating`
**Effort** : 10 min — **Impact** : Élevé (protection contre pénalité Google) — **Pages** : toutes (via global JsonLd)

**Risque actuel** : `aggregateRating: 5/5 (4 reviews)` est hardcodé dans `JsonLd.js:59-65`, présent sur **toutes** les pages (y compris `/blog`, `/mentions-legales`). Google peut :
- Marquer le site comme "structured data spam"
- Retirer les rich snippets étoiles
- Baisser la confiance globale

**Option A — retirer purement** (rapide, safe) :
```js
// src/app/components/JsonLd.js — supprimer les lignes 59-65
- "aggregateRating": {
-   "@type": "AggregateRating",
-   "ratingValue": "5",
-   "reviewCount": "4",
-   "bestRating": "5",
-   "worstRating": "1"
- },
```

**Option B — afficher de vrais avis on-page** (recommandée long terme) :
1. Récupérer les 4 avis Google Business Profile (API Places ou copier-coller manuel)
2. Créer un composant `<ClientReviews />` qui les affiche sur la home + pages services
3. Garder `aggregateRating` puisqu'il est désormais sourcé

---

### C4 — Décider : autoriser ou interdire les bots IA
**Effort** : 5 min — **Impact** : Élevé pour la visibilité AI search

**Recommandation forte** : autoriser. Pour un électricien local, **les requêtes vocales et les AI Overviews** sont en croissance rapide.

```js
// src/app/robots.js
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/facebook-post'],
      },
      // Bots IA autorisés explicitement
      { userAgent: 'GPTBot', allow: '/', disallow: ['/api/', '/facebook-post'] },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      // Optionnel : on garde Bytespider bloqué (TikTok scraper agressif)
      { userAgent: 'Bytespider', disallow: '/' },
    ],
    sitemap: 'https://www.prodigelec.fr/sitemap.xml',
  }
}
```

Si refus → supprimer `public/llms.txt`.

---

## 🟠 HAUT — à corriger sous 1 semaine

### H1 — Remplacer les photos Wikipedia par de vraies photos terrain
**Effort** : 2-4h (selon dispo photos) — **Impact** : Élevé (authenticité locale, perf)

**Problème actuel** : 12+ villes partagent la photo "Place Mesirard Dreux", autres partagent "Château d'Anet". Risque de signal d'inauthenticité.

**Solutions par ordre de préférence** :

1. **Vraies photos terrain** : photos de chantiers réalisés à Broué, Anet, Dreux, Chartres (avec autorisation client). Si pas possible pour les 30 villes :
2. **OG image générée dynamiquement** : utiliser le fichier `src/app/electricien/[city]/opengraph-image.js` détecté pour générer une image text-based avec nom de ville + accent doré. Branchement dans `generateMetadata`.
3. **Fallback unique** : si toutes les autres options échouent, utiliser une seule image neutre (logo + accent doré) pour toutes les villes plutôt que de mentir avec Dreux.

```js
// src/app/electricien/[city]/page.js:17-19 — remplacer la branche photo
- const ogImage = city.photo
-   ? city.photo
-   : "https://www.prodigelec.fr/img_carousel_hero_home/tableau-electrique.optimized.jpg";
+ // L'OG image est servie par opengraph-image.js (text-based)
+ const ogImage = `https://www.prodigelec.fr/electricien/${city.slug}/opengraph-image`;
```

Et passer en revue `src/app/data/cities.js` pour retirer les `photo` Wikipedia. Si besoin de garder un visuel d'intro dans le contenu, utiliser l'image générée ou un visuel générique (tableau, prise…).

**Bonus** : ajouter l'attribution Wikipedia tant que les photos restent (obligation CC BY-SA).

---

### H2 — Promouvoir le H1 de la home
**Effort** : 5 min — **Impact** : Moyen-élevé

Le H1 actuel `<h1 class="text-xs ... opacity-60">` est sémantiquement présent mais visuellement caché. Le visiteur perçoit comme "titre" un H2 plus bas.

```jsx
// Dans HomeHero ou équivalent — passer le H1 à une taille de titre principal
- <h1 className="text-xs font-bold uppercase tracking-[0.3em] opacity-60" style={{color:"var(--primary)"}}>
-   Artisan électricien & sécurité — Eure-et-Loir, Eure & Yvelines
- </h1>
+ <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
+   Artisan électricien & sécurité électronique
+   <span className="block text-primary text-2xl md:text-3xl mt-2">
+     Eure-et-Loir, Eure & Yvelines · 23 ans d'expérience
+   </span>
+ </h1>
```

Si le design actuel est volontaire (le label est l'"avant-titre" et le gros titre est en dessous), alors :
- **rétrograder l'avant-titre en `<p>`** (au lieu de H1)
- **promouvoir le titre principal actuel en H1**

---

### H3 — Réécrire les descriptions des 13 villages "concurrence nulle"
**Effort** : 2-3h — **Impact** : Élevé (lutte contre thin/duplicate content)

Pages concernées (dans `src/app/data/cities.js`) :
- broue, bu, vert-en-drouais, sorel-moussel, charpont, garnay, marville-moutiers-brule, ezy-sur-eure, tilly, saint-lubin-des-joncherets, marcilly-sur-eure, saint-remy-sur-avre, brezolles, saint-ange-et-torcay, happonvilliers, laons, rueil-la-gadeliere

Pour chacune, ajouter :
- Une **anecdote locale** vérifiable (rue, lieu-dit, monument, particularité)
- Un **projet réel** ou type de demande spécifique ("J'ai installé un tableau Hager dans une longère du chemin de la Plaine…")
- Un **temps d'intervention concret** depuis Broué ("12 min en voiture")
- Une **mention d'un commerce/voisin** ("après la boulangerie de la place")

Cible : 250-400 mots uniques de contenu local par village.

---

### H4 — Créer une page "/zones-intervention" hub
**Effort** : 1h — **Impact** : Moyen-élevé (maillage interne, UX)

Page qui liste les 30 villes avec :
- Carte interactive (Leaflet déjà présent)
- Liste groupée par département (28, 27, 78)
- Distance depuis Broué + zone gratuite/payante
- Liens vers chaque page ville

Ajouter au menu principal + footer.

---

### H5 — Supprimer le bourrage de keywords
**Effort** : 10 min — **Impact** : Faible-moyen (lisibilité, "modernité" du site)

`src/app/services/electricite/page.js:7-44` : 80+ mots-clés `<meta keywords>`. Google n'utilise plus ce tag depuis 2009. Garder 5-10 mots-clés principaux maximum, ou supprimer entièrement.

---

## 🟡 MOYEN — à planifier ce mois-ci

### M1 — Réduire le poids du JSON-LD inline
**Effort** : 30 min — **Impact** : Performance

Le `<JsonLd />` global injecte ~3,8 KB de schéma sur 46 pages = 174 KB inutiles. Options :
- Garder uniquement `WebSite` et un `LocalBusiness` minimal global
- Mettre le détail (offerCatalog, areaServed, ratings) uniquement sur `/` et `/about`

### M2 — Témoignages on-page
**Effort** : 1h (sourcing + UI) — **Impact** : E-E-A-T + AI citation

Afficher les 4 avis Google + photo client ou initiales. Schema `Review` associé. Sur la home + pages services + pages villes (idéalement avec un avis local par ville).

### M3 — Page `/certifications`
**Effort** : 1h — **Impact** : E-E-A-T

QualiFelec, Qualibat, CONSUEL agrément, assurance décennale, SIRET. Signaler chacune avec logo + numéro. Schema `OrganizationRole` ou simplement section visible.

### M4 — Tester PageSpeed Insights mobile
**Effort** : 5 min — **Impact** : informer la suite

Une fois le quota PSI restauré : https://pagespeed.web.dev/?url=https%3A%2F%2Fwww.prodigelec.fr&form_factor=mobile

Cibler LCP < 2,5s, INP < 200ms, CLS < 0,1.

### M5 — Activer Vercel Analytics ou Web Vitals reporting
**Effort** : 15 min — **Impact** : visibilité continue sur les Core Web Vitals réels

```bash
npm i @vercel/analytics @vercel/speed-insights
```

Et ajouter `<Analytics />` + `<SpeedInsights />` dans `layout.js`.

### M6 — Sourcer Bing Webmaster Tools
**Effort** : 30 min — **Impact** : visibilité moteurs alternatifs + IndexNow officiel

Ajouter le site dans Bing Webmaster (https://www.bing.com/webmasters), soumettre le sitemap, vérifier l'indexation. Bing est utilisé par DuckDuckGo et certains LLM scrapers.

### M7 — Ajouter Content-Security-Policy
**Effort** : 30 min (config Vercel) — **Impact** : Sécurité, signal de qualité

Ajouter via `next.config.js` `headers()` :
```js
{
  source: '/(.*)',
  headers: [
    { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self'; ..." }
  ]
}
```

### M8 — Fixer `lastModified` dynamique du sitemap
**Effort** : 20 min — **Impact** : Moyen

Plutôt que `today` à chaque build, utiliser la vraie date de modif (depuis git, ou ajouter `lastModified` dans `cities.js` et frontmatter blog posts).

---

## 🟢 BAS — backlog (nice-to-have)

### B1 — Schema `Review` individuel pour chaque avis
### B2 — Schema `HowTo` sur les articles de blog explicatifs
### B3 — Vidéos YouTube de chantiers + `VideoObject` schema
### B4 — Programme de parrainage / témoignages clients filmés
### B5 — Pages "Tarifs détaillés" type matrice (input/output)
### B6 — Newsletter d'astuces électriques (lead magnet)
### B7 — Schema `Event` si participation à salons artisanaux
### B8 — Migration Image Wikipedia → CDN Vercel (si tu gardes des fallbacks)
### B9 — Ajouter Apple Touch Icon dédié (180×180)
### B10 — Améliorer l'attribution Creative Commons des photos Wikipedia restantes

---

## Récapitulatif effort vs impact

| ID | Action | Effort | Impact |
|----|--------|--------|--------|
| C1 | Fix titles dupliqués | 15 min | 🔴🔴🔴 |
| C2 | FAQ visibles villes | 30 min | 🔴🔴🔴 |
| C3 | Retirer aggregateRating | 10 min | 🔴🔴🔴 |
| C4 | Débloquer bots IA | 5 min | 🔴🔴 |
| H1 | Photos villes authentiques | 2-4h | 🟠🟠 |
| H2 | H1 home promu | 5 min | 🟠🟠 |
| H3 | Réécrire 13 villages | 2-3h | 🟠🟠🟠 |
| H4 | Page /zones-intervention | 1h | 🟠 |
| H5 | Nettoyer keywords | 10 min | 🟢 |
| M1-M8 | Optimisations divers | 30 min - 1h chacune | 🟡 |

**Sprint 1 (1 journée)** : C1 + C2 + C3 + C4 + H2 + H5 + M4 = **~1h30 de dev**, gain estimé **+10 points**.
**Sprint 2 (1 semaine)** : H1 + H3 + H4 + M2 + M3 + M5 = **~8-12h**, gain estimé **+8 points**.
**Sprint 3 (1 mois)** : tout M + audit follow-up = **+3-5 points**.

Cible **88/100** après Sprint 1+2.

---

## Comment je suivrais l'avancement

Après chaque sprint, relancer une mini-vérif :
```bash
# Vérifier les titles
for u in / /services/electricite /services/securite /services/automatismes /electricien/broue /electricien/dreux /blog; do
  echo "=== $u ==="
  curl -s "https://www.prodigelec.fr$u" | grep -oE "<title>[^<]+</title>"
done

# Vérifier robots
curl -s https://www.prodigelec.fr/robots.txt

# Vérifier FAQ visible sur ville
curl -s https://www.prodigelec.fr/electricien/broue | grep -c "Êtes-vous disponible"
```

Et PageSpeed quand le quota revient :
- Mobile : https://pagespeed.web.dev/?url=https%3A%2F%2Fwww.prodigelec.fr&form_factor=mobile
- Desktop : https://pagespeed.web.dev/?url=https%3A%2F%2Fwww.prodigelec.fr&form_factor=desktop
