import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { Calendar, ArrowRight } from 'lucide-react'

export const metadata = {
  title: "Blog — Conseils électricité, sécurité & automatismes | PRODIGELEC",
  description: "Conseils pratiques d'un artisan électricien : installation électrique, sécurité, portails motorisés — interventions en Eure-et-Loir, Eure et Yvelines.",
  alternates: { canonical: "https://www.prodigelec.fr/blog" },
  openGraph: {
    title: "Blog PRODIGELEC — Conseils de votre électricien",
    description: "Astuces et conseils pratiques en électricité, sécurité et automatismes par un artisan de terrain.",
    url: "https://www.prodigelec.fr/blog",
  },
}

const categoryColors = {
  electricite: { bg: "rgba(255,193,7,0.12)", border: "rgba(255,193,7,0.35)", text: "#ffc107", label: "Électricité" },
  securite:    { bg: "rgba(201,162,39,0.12)", border: "rgba(201,162,39,0.35)", text: "#c9a227", label: "Sécurité" },
  automatismes:{ bg: "rgba(201,162,39,0.12)", border: "rgba(201,162,39,0.35)", text: "#c9a227", label: "Automatismes" },
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("fr-FR", { month: "long", year: "numeric" })
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-background text-foreground pt-20 pb-16 mt-16 md:pt-24 md:mt-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10 md:mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>
            Conseils & expertise
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Le <span style={{ background: "linear-gradient(135deg, #c9a227, #ffd60a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>blog</span>
          </h1>
          <p className="text-sm md:text-base max-w-xl" style={{ color: "var(--foreground-subtle)" }}>
            Conseils pratiques en électricité, sécurité et automatismes — rédigés par un artisan de terrain en Eure-et-Loir, Eure et Yvelines.
          </p>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => {
            const cat = categoryColors[post.categorie]
            return (
              <article
                key={post.slug}
                className="rounded-2xl flex flex-col"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: cat.bg, border: `1px solid ${cat.border}`, color: cat.text }}
                    >
                      {cat.label}
                    </span>
                  </div>
                  <h2 className="font-bold text-base mb-3 leading-snug">{post.titre}</h2>
                  <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--foreground-subtle)" }}>
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs" style={{ color: "var(--foreground-subtle)" }}>
                      <Calendar size={12} />
                      {formatDate(post.date)}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-xs font-semibold transition-all hover:gap-2"
                      style={{ color: "var(--primary)" }}
                    >
                      Lire <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </main>
  )
}
