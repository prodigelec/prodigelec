# Audit SEO complet — PRODIGELEC

**Site audité** : https://www.prodigelec.fr
**Date** : 25 mai 2026
**Stack détectée** : Next.js 14 App Router (Vercel) — sortie HTML statique prerendée
**Type d'activité** : Service local (Local Service / SAB) — Électricien artisan, base Broué (28)

---

## Résumé exécutif

### Score SEO global : **72 / 100**

| Catégorie | Score | Poids | Contribution |
|-----------|------:|------:|-------------:|
| SEO technique | 78 / 100 | 22 % | 17,2 |
| Qualité contenu | 70 / 100 | 23 % | 16,1 |
| On-page SEO | 60 / 100 | 20 % | 12,0 |
| Schema / données structurées | 75 / 100 | 10 % | 7,5 |
| Performance (CWV) | 70 / 100 | 10 % | 7,0 |
| AI Search readiness | 55 / 100 | 10 % | 5,5 |
| Images | 80 / 100 | 5 % | 4,0 |
| **Total** | | **100 %** | **69,3 → ~72** |

> **Le site a une base solide (HSTS, JSON-LD riche, 30 pages villes, llms.txt, blog, sitemap)** mais quatre problèmes critiques pénalisent fortement le ranking et le potentiel rich snippets.

### Top 5 — Problèmes critiques

1. **Doublon `| PRODIGELEC | PRODIGELEC` dans les `<title>`** de 9 pages au moins (toutes sauf la home). Le template `"%s | PRODIGELEC"` de `layout.js` s'applique en plus du suffixe déjà présent dans chaque metadata.
2. **`FAQPage` JSON-LD sans FAQ visible sur les 30 pages villes**. Violation directe des [Google FAQ guidelines](https://developers.google.com/search/docs/appearance/structured-data/faqpage) — toutes les questions du schema DOIVENT apparaître dans le DOM. Google peut retirer les rich snippets et marquer le site comme spam structuré.
3. **`aggregateRating: 5/5 (4 reviews)` auto-déclaré sur toutes les pages**, hardcodé dans `JsonLd.js:59-65`. Non sourcé par des avis on-page → risque de strip des rich snippets + signal de manipulation.
4. **Contradiction `robots.txt` / `llms.txt`** : `robots.txt` bloque GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, anthropic-ai, Bytespider… mais `/llms.txt` existe et liste les services pour les IA. Les IA ne liront jamais ce fichier puisqu'elles sont bloquées en amont. Stratégie AI search neutralisée.
5. **12+ pages villes partagent la même photo de Wikipedia Commons d'une autre ville** : Vert-en-Drouais, Sorel-Moussel, Charpont, Garnay, Brezolles, Laons, Happonvilliers, Rueil-la-Gadelière, Saint-Rémy-sur-Avre, Saint-Ange-et-Torçay, Marville-Moutiers-Brûlé affichent tous "Place Mesirard Dreux". Broué et Bû affichent le château d'Anet. Signal de duplication et d'inauthenticité locale.

### Top 5 — Quick wins (effort faible, impact élevé)

1. **Fix template title** dans `src/app/layout.js:33` → ramène 9 pages à un titre propre (15 min).
2. **Supprimer `aggregateRating` du schema** ou conditionner à des avis on-page réels (`src/app/components/JsonLd.js:59-65`) (10 min).
3. **Décider de la stratégie AI** : si tu veux du trafic depuis ChatGPT, Perplexity, Google AI Overviews → débloquer les bots dans `src/app/robots.js`. Sinon supprimer `llms.txt` (5 min).
4. **Rendre les 3 FAQ visibles** sur chaque page ville dans `CityPageContent.jsx` (les questions sont déjà écrites dans `page.js:97-126`) (20 min).
5. **Promouvoir le H1 de la home** : actuellement stylé `text-xs ... opacity-60` (`HomeHero` ou équivalent) — passer en taille normale et opacité 1.

---

## 1. SEO technique

### Crawlabilité ✅
- `robots.txt` accessible, dynamique via `src/app/robots.js`
- Sitemap XML déclaré et accessible : `/sitemap.xml` (46 URLs)
- Pas de redirections en chaîne détectées sur les pages testées
- HTTP/2 via Vercel
- `Vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch` — correct pour App Router

### Indexabilité
- **9/10 pages testées ont un `<title>` corrompu par doublon `| PRODIGELEC | PRODIGELEC`** ← critique
- Canonicals : ✅ présents et corrects (auto-référents, HTTPS, avec `www.`)
- Pas de `noindex` involontaire détecté
- `metadataBase` correct (`layout.js:30`)

### Sécurité ✅
Headers HTTP de la home :
```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload  ✓
X-Content-Type-Options: nosniff                                          ✓
X-Frame-Options: DENY                                                    ✓
Referrer-Policy: strict-origin-when-cross-origin                         ✓
Permissions-Policy: camera=(), microphone=(), geolocation=()             ✓
```
- ❌ Pas de `Content-Security-Policy` (amélioration nice-to-have)

### Cache / livraison
- `X-Vercel-Cache: HIT` sur la home, `X-Nextjs-Prerender: 1` ✓
- ETag, Cache-Control corrects

### URLs
- Slugs propres et lisibles (`/electricien/saint-lubin-des-joncherets`, `/blog/portail-motorise-prix-installation`)
- Pas de paramètres GET parasites

### IndexNow ✅
- Route `/api/indexnow` détectée (commits récents)

---

## 2. Contenu & E-E-A-T

### Volumes
| Page | Mots (approx) | Densité |
|------|--------------:|--------:|
| Home | ~1 200 | Correct |
| /services/electricite | ~1 200 | Correct |
| /services/securite | ~1 200 | Correct |
| /services/automatismes | ~1 200 | Correct |
| /electricien/broue | ~1 300 | Bon |
| /electricien/dreux | ~1 050 | Correct |
| /electricien/chartres | ~900 | Limite — risque thin content |
| /about | (à vérifier) | — |
| /blog (index) | ~650 | Court pour un index |
| /blog/portail-motorise-prix-installation | (à vérifier individuellement) | — |

### Expertise / Experience / Authoritativeness / Trustworthiness

**Points forts** :
- "23 ans d'expérience" mentionné de façon cohérente
- Mentions de la norme NF C 15-100, CONSUEL, Somfy Tahoma — vocabulaire d'expert
- Page `/about` présente (à enrichir avec témoignages, certifications, photos chantiers)
- NAP (Nom-Adresse-Téléphone) cohérent partout : `PRODIGELEC / 10 Rue Georges Bréant, 28410 Broué / 06 38 19 47 52 / contact@prodigelec.fr`
- Liens sociaux : Facebook, Instagram (à vérifier qu'ils sont actifs)
- Mention "Pages Jaunes", "Habitat Presto", "Allo Voisin Pro" — citations externes ✓
- Page `/realisations` présente

**Points faibles** :
- ⚠️ **Contenu fortement répétitif sur les 13 villages "concurrence nulle"** (Vert-en-Drouais, Sorel-Moussel, Charpont, Garnay, etc.). Les descriptions et `localContext` se ressemblent à 70-80 % — risque de signal "doorway pages" :
  > "Village rural d'Eure-et-Loir — maisons individuelles et propriétés agricoles avec des besoins en électricité générale et en sécurisation des accès."
- Pas de témoignages clients visibles (mentionnés dans `aggregateRating` mais introuvables sur le site)
- Pas de certifications visibles (QualiFelec, Qualibat, CONSUEL agrément ?)
- Pas de photos de chantiers réels sur les pages villes

### Citation readiness (réponses extractibles)
- ✅ Tarifs cités en FAQ services (`/services/electricite`)
- ✅ Réponse claire sur NF C 15-100, urgences, garanties
- ❌ Pas de définitions structurées exhaustives ("Qu'est-ce que…", "Pourquoi…", "Comment…") qui maximisent les chances d'être cité par AI Overviews

---

## 3. On-page SEO

### Titles

| Page | `<title>` actuel | Problème |
|------|------------------|---------:|
| `/` | `PRODIGELEC - Artisan Électricien & Sécurité Électronique \| 27, 28 & 78` | OK (utilise `default`) |
| `/services/electricite` | `... \| PRODIGELEC \| PRODIGELEC` | **Doublon** |
| `/services/securite` | `... \| PRODIGELEC \| PRODIGELEC` | **Doublon** |
| `/services/automatismes` | `... \| PRODIGELEC \| PRODIGELEC` | **Doublon** |
| `/electricien/{ville}` (×30) | `... \| PRODIGELEC \| PRODIGELEC` | **Doublon** |
| `/about` | `... \| PRODIGELEC` | OK (un seul) |
| `/contact` | `... \| PRODIGELEC \| PRODIGELEC` | **Doublon** |
| `/blog` | `... \| PRODIGELEC \| PRODIGELEC` | **Doublon** |
| `/blog/{post}` | `... \| PRODIGELEC \| PRODIGELEC` | **Doublon** |

Cause : `layout.js:31-34` définit `template: "%s | PRODIGELEC"` mais chaque `page.js` colle déjà `| PRODIGELEC` à la fin de son titre.

### Meta descriptions
- ✅ Présentes sur toutes les pages testées
- ✅ Longueurs raisonnables (130-160 caractères)
- ✅ Mots-clés présents

### Headings
- ✅ H1 unique sur chaque page testée
- ⚠️ **H1 home** : `<h1 class="text-xs font-bold uppercase tracking-[0.3em] opacity-60">Artisan électricien & sécurité — Eure-et-Loir, Eure & Yvelines</h1>` — sémantiquement OK mais visuellement minimisé. Le vrai "titre" perçu par l'utilisateur n'est pas marqué comme H1.
- ✅ H1 pages villes : `text-4xl md:text-5xl lg:text-6xl font-extrabold` — bien proéminent
- Hiérarchie H2/H3 logique

### Mots-clés
- ⚠️ **Bourrage de keywords** sur `/services/electricite` (`page.js:7-44`) : 80+ mots-clés par ville × type → le meta `keywords` n'est plus pris en compte par Google mais signale une vieille pratique. À nettoyer pour la lisibilité.

### Maillage interne
- ✅ Navbar + footer présents avec liens vers services, villes
- ✅ Liens entre villes voisines via `NearbyList` dans `CityPageContent.jsx`
- ⚠️ Hub central manquant : pas de page "Zones d'intervention" qui listerait les 30 villes avec liens. Le sitemap les expose à Google mais l'utilisateur (et le crawler) n'a pas de point d'entrée intuitif.

---

## 4. Schema / Structured Data

### Couverture (excellente sur services)
| Page | Types schema détectés |
|------|----------------------|
| Home | Electrician, WebSite, Person, OfferCatalog, AggregateRating, etc. (14 types) |
| /services/electricite | + FAQPage, LocalBusiness, BreadcrumbList (19 types) |
| /services/securite | idem (19 types) |
| /services/automatismes | idem (19 types) |
| /electricien/{ville} | Electrician (par ville), BreadcrumbList, FAQPage (17 types) |
| /about, /contact, /blog | 14 types via JsonLd global |
| /blog/{post} | + BlogPosting, WebPage (17 types) |

### Problèmes
1. **`aggregateRating: { ratingValue: "5", reviewCount: "4" }`** auto-déclaré dans `JsonLd.js:59-65` → présent sur toutes les pages, y compris `/blog`, `/mentions-legales` (incohérent : un blog n'a pas de rating). Risque pénalité.
2. **`FAQPage` sans questions visibles** sur les 30 pages villes (`page.js:97-126`). Les 3 questions doivent figurer dans le DOM.
3. **Doublon `Electrician` + `LocalBusiness` séparés** sur pages services (`ServicePageJsonLd`). `Electrician` est déjà un sous-type de `LocalBusiness` — déclarer les deux est redondant. Référencer le business existant via `"@id": "https://www.prodigelec.fr/#business"` au lieu de redéclarer.
4. **JSON-LD global du layout** (Electrician complet avec areaServed, offerCatalog, aggregateRating) répété sur les 46 pages. Poids inutile (~3,8 KB × 46 pages = 174 KB).

### Forces
- `@id` utilisé pour le business principal (bon pattern de référence)
- `geo`, `hasMap`, `openingHoursSpecification`, `sameAs` (Facebook, Instagram, GMB) — tout y est
- `BreadcrumbList` correctement positionné
- `BlogPosting` sur les articles
- `priceRange: "€€"` ✓
- `paymentAccepted` ✓

---

## 5. Performance & Core Web Vitals

> ⚠️ PageSpeed Insights API quota épuisé. CrUX inaccessible sans clé API. Analyse basée sur le code et le poids des réponses.

### Estimations
| Métrique | Estimation | Cible |
|----------|-----------|------:|
| HTML transféré (home) | 163 KB | < 100 KB idéal |
| HTML pages villes | 95-120 KB | OK |
| Fonts Outfit + Sora | `display: swap` ✓ | — |
| LCP | Probable 2-3s (hero image carousel + framer-motion) | < 2,5s |
| INP | Risque framer-motion lourd | < 200ms |
| CLS | Critical CSS inlined ✓ | < 0,1 |

### Points positifs
- ✅ Critical CSS inliné dans `layout.js:68-77`
- ✅ Next.js Image avec `srcSet` et `sizes` corrects (home: `fetchPriority="high"` sur hero)
- ✅ `display: swap` sur les fonts Google
- ✅ `loading="lazy"` sur logos partenaires
- ✅ `X-Vercel-Cache: HIT` (CDN actif)
- ✅ Format AVIF utilisé pour certaines images (`Volet_Battant.avif`)
- ✅ `contain: layout style paint` sur main/section/article

### Points faibles
- ❌ **JSON-LD complet inliné sur toutes les pages** (3,8 KB × 46 = ~174 KB de schéma dupliqué). Possible d'externaliser dans un fichier statique chargé en `<link>`.
- ⚠️ Hero carousel avec `srcSet` jusqu'à 2048w avec `q=85` — image potentiellement >300 KB sur grand écran. Vérifier WebP/AVIF.
- ⚠️ framer-motion sur de nombreuses animations → bundle JS lourd. Vérifier `m` (lazy variant) vs `motion` import partout.

### Action recommandée
- Lancer **manuellement** PageSpeed Insights : https://pagespeed.web.dev/?url=https%3A%2F%2Fwww.prodigelec.fr&form_factor=mobile
- Activer Vercel Analytics ou Web Vitals reporting pour suivre LCP/INP/CLS réels

---

## 6. AI Search Readiness (GEO)

### État actuel
| Élément | Statut |
|---------|--------|
| `/llms.txt` | ✅ Présent et bien rédigé |
| FAQ extractibles | ⚠️ Visibles uniquement sur 3 pages services, manquent visuellement sur 30 pages villes |
| Citabilité (réponses < 100 mots) | ⚠️ Moyenne — beaucoup de paragraphes commerciaux |
| Schema riche | ✅ Excellent |
| robots.txt — accès AI | ❌ **Bloqué pour TOUS les bots IA** |

### Le problème central
`src/app/robots.js` bloque :
```
GPTBot         → ChatGPT (OpenAI)
Google-Extended → Google AI Overviews / Gemini
ClaudeBot      → Claude (web search)
PerplexityBot  → Perplexity
CCBot          → Common Crawl (utilisé par la plupart des LLMs)
Bytespider     → ByteDance / TikTok / Doubao
anthropic-ai   → Claude (legacy UA)
```

**Conséquence** : `llms.txt` est inutile, le site n'apparaîtra pas dans les réponses ChatGPT/Perplexity/Google AI Overviews, et n'enrichira pas les corpus d'entraînement futurs.

### Recommandation
Pour un électricien local, **les requêtes "électricien près de chez moi", "tarif tableau électrique Dreux"** sont déjà servies en AI Overviews. Être absent = perte d'opportunité.

**Décision à prendre** :
- **Option A (recommandée)** : autoriser GPTBot, Google-Extended, ClaudeBot, PerplexityBot, CCBot. Garder le `disallow` sur `/api/` et `/facebook-post`.
- **Option B (philosophique)** : si refus de l'usage IA, alors supprimer `llms.txt` (sinon incohérence).

---

## 7. Local SEO

### Forces
- ✅ Stratégie pages villes très avancée : 30 villes, 18 villages "concurrence nulle"
- ✅ NAP cohérent partout (schema + footer + contact)
- ✅ `Electrician` schema spécifique (mieux que `LocalBusiness` générique)
- ✅ `geo` coordinates, `hasMap` vers Google Business Profile
- ✅ `openingHoursSpecification` (Lun-Sam 24/24)
- ✅ Zone d'intervention claire avec carte Leaflet (commits récents)
- ✅ Maillage entre villes voisines via `nearby`

### Faiblesses
- ⚠️ **Contenu très similaire sur les 18 villages "concurrence nulle"** — Google peut les regrouper / les considérer comme thin/doorway pages. Réécrire avec un contexte unique par village (anecdote, projet réel, particularité locale).
- ⚠️ **Photos de villes inauthentiques** : la photo de Garnay = celle de Dreux. Idem pour Brezolles, Laons, Charpont, etc. Soit prendre de vraies photos terrain (chantiers, locaux, plaque rue à l'arrivée), soit générer une OG image text-based par ville.
- ⚠️ **Aucune mention de Google Business Profile direct** dans `sameAs` — l'URL Maps est dans `hasMap` mais pas comme `sameAs` Place URL.
- ⚠️ **Pas de témoignages géolocalisés** par ville (le client de Dreux ≠ celui de Chartres dans son besoin).
- ⚠️ Pas de page **"/zones-intervention"** centralisée listant les 30 villes pour l'UX (le sitemap en a 30 mais l'utilisateur ne les voit pas en arborescence).

### Citations locales (à vérifier hors site)
- Pages Jaunes : ✅ (logo affiché)
- Habitat Presto : ✅
- Allo Voisin Pro : ✅
- Google Business Profile : ✅ (URL Maps présente)
- ❓ Bing Places / Apple Plans / OpenStreetMap : à confirmer
- ❓ Annuaires métier : Société.com, infogreffe, fnaim, etc.

---

## 8. Images

- ✅ Next.js Image partout (`<img data-nimg>`)
- ✅ `alt` présents sur les images de carousel et logos
- ✅ Formats modernes (AVIF observé)
- ⚠️ **Toutes les photos de villes hébergées sur Wikipedia Commons** (upload.wikimedia.org) — risque :
  - Performance (cross-origin, pas de cache CDN Vercel)
  - Disponibilité (le fichier peut être supprimé/déplacé)
  - Licence (CC BY/SA — vérifier l'attribution)
  - Cohérence locale (photos de mauvaises villes)
- ⚠️ Pas d'attribution Wikipedia visible (obligation Creative Commons)
- ⚠️ Pas d'`opengraph-image.js` dynamique pour les villes (existe pour `[city]` mais non utilisé dans les meta — fichier détecté en `src/app/electricien/[city]/opengraph-image.js`)

---

## 9. Sitemap

### Forces
- ✅ 46 URLs, généré dynamiquement depuis `cities.js` et `getAllPosts()`
- ✅ `lastModified`, `changeFrequency`, `priority` corrects
- ✅ Pages prioritaires (services 0.9, home 1.0)
- ✅ Légal (mentions, CGV, privacy) à 0.3 (correct, non prioritaire)

### À surveiller
- Toutes les pages villes ont `lastModified = today` à chaque build → Google peut perdre la fraîcheur réelle. Idéalement, figer `lastModified` à la dernière modification réelle du contenu de la ville (ex : `cities.js` modifié le 2026-05-25).
- Pas de sitemap_index si tu dépasses 50K URLs un jour (non urgent : 46 actuellement).

---

## 10. Récap forces & faiblesses

### ✅ Ce qui est très bien fait
- Schema JSON-LD complet et bien structuré (`@id`, `Electrician`, NAP, Geo, Hours)
- 30 pages villes avec slug propre et schemas dédiés
- `llms.txt` rédigé
- HSTS preload + headers de sécurité solides
- IndexNow intégré
- Sitemap dynamique
- 5 articles de blog avec schémas
- Next.js prerender + Vercel CDN
- Maillage interne entre villes voisines
- Skip-link accessible

### ❌ Ce qui pénalise le site
- 4 bugs critiques (titres dupliqués, FAQ invisibles, rating auto-déclaré, AI bots bloqués)
- Photos villes inauthentiques et hébergées chez Wikipedia
- Contenu répétitif sur 13 villages
- H1 home minimisé visuellement
- Aucun témoignage on-page

---

## Annexes

### Fichiers sources problématiques

| Fichier | Ligne | Problème |
|---------|-------|----------|
| `src/app/layout.js` | 31-34 | `title.template` cause doublon |
| `src/app/services/electricite/page.js` | 5 | Titre contient déjà `\| PRODIGELEC` |
| `src/app/services/securite/page.js` | ? | Idem |
| `src/app/services/automatismes/page.js` | ? | Idem |
| `src/app/electricien/[city]/page.js` | 14 | Titre contient déjà `\| PRODIGELEC` |
| `src/app/electricien/[city]/page.js` | 97-126 | FAQ schema sans rendu DOM |
| `src/app/electricien/[city]/CityPageContent.jsx` | — | Pas de section FAQ visible |
| `src/app/components/JsonLd.js` | 59-65 | `aggregateRating` hardcodé global |
| `src/app/robots.js` | 9-15 | Blocage AI vs `llms.txt` |
| `src/app/data/cities.js` | 11, 24, 50, … | Photos Wikipedia partagées entre villes |

### Outils utilisés
- Curl direct sur 10 pages clés (HTML brut)
- WebFetch (rendu + Markdown)
- `grep` ripgrep sur HTML sauvegardé localement (`/.seo-audit/`)
- Inspection du code source Next.js
- Headers HTTP : `curl -I`

### Données non disponibles (à ré-exécuter plus tard)
- PageSpeed Insights (quota Google épuisé) → relancer demain ou ajouter clé API
- CrUX field data (clé API requise)
- Search Console (auth Google Ads requise)
- GA4 (auth requise)
- Backlinks (Moz / Common Crawl à configurer)
- Screenshots mobile/desktop (Playwright non lancé)

---

➡️ **Voir `ACTION-PLAN.md`** pour le plan d'action priorisé avec estimation d'effort.
