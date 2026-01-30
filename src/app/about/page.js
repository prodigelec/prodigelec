import AboutHero from "./components/sections/AboutHero";
import AboutStory from "./components/sections/AboutStory";
import AboutValues from "./components/sections/AboutValues";
import AboutCTA from "./components/sections/AboutCTA";

export const metadata = {
  title: "À Propos de Beaver'Aid - Artisan & Développeur | Eure-et-Loir",
  description: "Découvrez le parcours de Beaver'Aid, artisan électricien serrurier avec 20 ans d'expérience devenu développeur web. Une double compétence unique à votre service.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "L'histoire de Beaver'Aid - Artisanat & Numérique",
    description: "De l'artisanat traditionnel au développement web : découvrez l'expert derrière vos travaux.",
    url: "https://beaveraid.fr/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutCTA />
      </div>
    </main>
  );
}
