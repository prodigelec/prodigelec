import AboutHero from "./components/sections/AboutHero";
import AboutStory from "./components/sections/AboutStory";
import AboutValues from "./components/sections/AboutValues";
import AboutCTA from "./components/sections/AboutCTA";

export const metadata = {
  title: "À Propos de PRODIGELEC - Artisan Électricien & Serrurier | Eure-et-Loir",
  description: "Découvrez le parcours de PRODIGELEC, artisan électricien serrurier avec 20 ans d'expérience. Une expertise de terrain au service de vos projets.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "L'histoire de PRODIGELEC - Artisanat & Sécurité",
    description: "Un parcours de terrain au service de votre sécurité et de vos installations.",
    url: "https://beaveraid.fr/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutCTA />
      </div>
    </main>
  );
}
