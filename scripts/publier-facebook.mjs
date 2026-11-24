// Publie les réalisations du site sur la Page Facebook Prodigelec.
//
// Source : src/app/data/realisations.js — la même donnée que la page
// /realisations du site, donc rien à ressaisir. Les réalisations déjà
// publiées sont mémorisées dans scripts/facebook-publies.json pour qu'aucune
// ne parte deux fois.
//
// Usage (depuis la racine du repo) :
//   npm run facebook -- --dry-run        aperçu de ce qui serait publié, sans rien envoyer
//   npm run facebook                     publie la plus ancienne réalisation pas encore publiée
//   npm run facebook -- --max 3          en publie jusqu'à 3
//   npm run facebook -- --slug <slug>    publie une réalisation précise
//   npm run facebook -- --init           marque toutes les réalisations actuelles comme
//                                        déjà publiées (à lancer une fois, pour ne publier
//                                        ensuite que les nouvelles)
//
// Variables à définir dans .env.local (jamais commité) :
//   FACEBOOK_PAGE_ID      identifiant de la Page Prodigelec
//   FACEBOOK_PAGE_TOKEN   jeton d'accès de la Page (droit pages_manage_posts)

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { realisations } from "../src/app/data/realisations.js"

const ICI = path.dirname(fileURLToPath(import.meta.url))
const RACINE = path.resolve(ICI, "..")
const FICHIER_ETAT = path.join(ICI, "facebook-publies.json")
const SITE = "https://www.prodigelec.fr"
const GRAPH = `https://graph.facebook.com/${process.env.FACEBOOK_GRAPH_VERSION || "v23.0"}`

// ── Arguments ────────────────────────────────────────────────────────────────

const args = process.argv.slice(2)
const option = (nom) => args.includes(nom)
const valeur = (nom) => { const i = args.indexOf(nom); return i >= 0 ? args[i + 1] : undefined }
const DRY_RUN = option("--dry-run")
const MAX = Number(valeur("--max") ?? 1)
const SLUG = valeur("--slug")

// ── État : réalisations déjà publiées ────────────────────────────────────────

function lireEtat() {
  if (!fs.existsSync(FICHIER_ETAT)) return {}
  return JSON.parse(fs.readFileSync(FICHIER_ETAT, "utf8"))
}

function ecrireEtat(etat) {
  fs.writeFileSync(FICHIER_ETAT, JSON.stringify(etat, null, 2) + "\n")
}

// ── Texte du post ────────────────────────────────────────────────────────────

/**
 * Le post reprend le titre et la description de la réalisation. Deux règles
 * du site s'appliquent aussi sur Facebook : aucun prix, et un visuel généré
 * par IA reste présenté comme une illustration, jamais comme une photo du
 * chantier.
 */
function texteDuPost(r) {
  if (/\d[\d\s.,]*\s?(€|euros?)\b/i.test(`${r.titre} ${r.description}`)) {
    throw new Error(`« ${r.slug} » contient un prix : retirez-le du site avant de publier.`)
  }
  const lignes = [
    r.titre,
    "",
    r.description,
    "",
    `Intervention à ${r.ville} (${r.departementCode}).`,
  ]
  if (/^illustration/i.test(r.imageAlt ?? "")) lignes.push("Image d'illustration.")
  lignes.push("", `Voir la réalisation : ${SITE}/realisations/${r.slug}`)
  return lignes.join("\n")
}

// ── Envoi à Facebook ─────────────────────────────────────────────────────────

/**
 * L'image est envoyée depuis le dossier public du repo plutôt que par son URL
 * sur le site : la réalisation peut ainsi partir avant même la mise en ligne.
 */
async function publier(r) {
  const fichierImage = path.join(RACINE, "public", r.image)
  if (!fs.existsSync(fichierImage)) throw new Error(`Image introuvable : public${r.image}`)

  const form = new FormData()
  form.append("caption", texteDuPost(r))
  form.append("access_token", process.env.FACEBOOK_PAGE_TOKEN)
  form.append("source", new Blob([fs.readFileSync(fichierImage)]), path.basename(fichierImage))

  const reponse = await fetch(`${GRAPH}/${process.env.FACEBOOK_PAGE_ID}/photos`, { method: "POST", body: form })
  const donnees = await reponse.json()
  if (!reponse.ok || donnees.error) {
    throw new Error(`Facebook a refusé la publication : ${donnees.error?.message ?? reponse.status}`)
  }
  return donnees.post_id ?? donnees.id
}

// ── Programme ────────────────────────────────────────────────────────────────

const etat = lireEtat()

if (option("--init")) {
  const date = new Date().toISOString()
  for (const r of realisations) etat[r.slug] ??= { publieLe: date, postId: null, init: true }
  if (DRY_RUN) {
    console.log(`[aperçu] ${realisations.length} réalisations seraient marquées comme déjà publiées.`)
  } else {
    ecrireEtat(etat)
    console.log(`${realisations.length} réalisations marquées comme déjà publiées. Seules les nouvelles partiront désormais.`)
  }
  process.exit(0)
}

const candidates = SLUG
  ? realisations.filter((r) => r.slug === SLUG)
  : [...realisations]
      .filter((r) => !etat[r.slug])
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(0, MAX)

if (SLUG && candidates.length === 0) {
  console.error(`Aucune réalisation « ${SLUG} ».`)
  process.exit(1)
}
if (candidates.length === 0) {
  console.log("Rien à publier : toutes les réalisations sont déjà sur Facebook.")
  process.exit(0)
}

if (!DRY_RUN && (!process.env.FACEBOOK_PAGE_ID || !process.env.FACEBOOK_PAGE_TOKEN)) {
  console.error("FACEBOOK_PAGE_ID et FACEBOOK_PAGE_TOKEN doivent être définis dans .env.local.")
  process.exit(1)
}

let erreurs = 0
for (const r of candidates) {
  try {
    if (DRY_RUN) {
      texteDuPost(r)
      if (!fs.existsSync(path.join(RACINE, "public", r.image))) throw new Error(`Image introuvable : public${r.image}`)
      console.log(`\n───── [aperçu] ${r.slug}  —  image : public${r.image}\n${texteDuPost(r)}`)
      continue
    }
    const postId = await publier(r)
    etat[r.slug] = { publieLe: new Date().toISOString(), postId }
    ecrireEtat(etat)
    console.log(`Publié : ${r.slug} (post ${postId})`)
  } catch (e) {
    erreurs++
    console.error(`Échec pour ${r.slug} : ${e.message}`)
  }
}
process.exit(erreurs ? 1 : 0)
