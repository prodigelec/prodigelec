import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPost, getAllPosts } from '@/lib/blog'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const { meta } = getPost(slug)
  return {
    title: `${meta.titre} | PRODIGELEC`,
    description: meta.description,
    alternates: { canonical: `https://www.prodigelec.fr/blog/${slug}` },
    openGraph: {
      title: meta.titre,
      description: meta.description,
      url: `https://www.prodigelec.fr/blog/${slug}`,
    },
  }
}

const categoryColors = {
  electricite: { bg: "rgba(255,193,7,0.12)", border: "rgba(255,193,7,0.35)", text: "#ffc107", label: "Électricité" },
  securite:    { bg: "rgba(201,162,39,0.12)", border: "rgba(201,162,39,0.35)", text: "#c9a227", label: "Sécurité" },
  automatismes:{ bg: "rgba(201,162,39,0.12)", border: "rgba(201,162,39,0.35)", text: "#c9a227", label: "Automatismes" },
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const { meta, content } = getPost(slug)
  const cat = categoryColors[meta.categorie]

  return (
    <main className="min-h-screen bg-background text-foreground pt-20 pb-16 mt-16 md:pt-24 md:mt-16">
      <div className="max-w-3xl mx-auto px-6">

        {/* Retour */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-white"
          style={{ color: "var(--foreground-subtle)" }}
        >
          <ArrowLeft size={15} />
          Retour au blog
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{ background: cat.bg, border: `1px solid ${cat.border}`, color: cat.text }}
            >
              {cat.label}
            </span>
            <span className="flex items-center gap-1 text-xs" style={{ color: "var(--foreground-subtle)" }}>
              <Calendar size={12} />
              {formatDate(meta.date)}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">{meta.titre}</h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--foreground-subtle)" }}>{meta.description}</p>
        </div>

        {/* Image principale */}
        {meta.image && (
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-10">
            <Image
              src={meta.image}
              alt={meta.imageAlt || meta.titre}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        )}

        {/* Contenu MDX */}
        <div className="prose-blog">
          <MDXRemote source={content} />
        </div>

        {/* CTA */}
        <div
          className="mt-16 rounded-3xl p-8 md:p-10 text-center"
          style={{ background: "linear-gradient(135deg, rgba(201,162,39,0.12) 0%, rgba(201,162,39,0.04) 100%)", border: "1px solid rgba(201,162,39,0.25)" }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>Votre projet</p>
          <h2 className="text-xl md:text-2xl font-bold mb-3">Un chantier à réaliser ?</h2>
          <p className="text-sm mb-6" style={{ color: "var(--foreground-subtle)" }}>
            Devis gratuit jusqu&apos;à 30 km de Broué — Eure-et-Loir, Eure et Yvelines.
          </p>
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:brightness-110"
            style={{ background: "var(--primary)", color: "var(--background)" }}
          >
            Demander un devis <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </main>
  )
}
