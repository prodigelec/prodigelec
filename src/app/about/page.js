import AboutHero from "./components/sections/AboutHero";
import AboutStory from "./components/sections/AboutStory";
import AboutValues from "./components/sections/AboutValues";
import AboutCTA from "./components/sections/AboutCTA";

export const metadata = {
  title: "À Propos de PRODIGELEC - Artisan Électricien & Sécurité | Eure-et-Loir",
  description: "Découvrez le parcours de Petaccia Sébastien, artisan électricien avec 23 ans d'expérience. Fondateur de PRODIGELEC, expert en Eure (27) et Eure-et-Loir (28).",
  keywords: [
    "Petaccia Sébastien",
    "PRODIGELEC",
    "artisan électricien Broué",
    
    "23 ans expérience électricité",
    "entreprise individuelle Eure-et-Loir",
    "électricien Dreux Chartres",
    "artisan qualifié CAP électrotechnique"
  ],
  alternates: {
    canonical: "https://www.prodigelec.fr/about",
  },
  openGraph: {
    title: "Petaccia Sébastien — Fondateur de PRODIGELEC",
    description: "23 ans d'expertise terrain en électricité et sécurité & automatismes. Artisan de confiance en Eure (27) et Eure-et-Loir (28).",
    url: "https://www.prodigelec.fr/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-20 pb-8 my-8 md:pt-24 md:pb-20 md:my-16">
      <div className="max-w-7xl mx-auto px-6">
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutCTA />
      </div>
    </main>
  );
}
