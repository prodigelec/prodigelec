import { HeroSection, FeaturesSection, AboutSection, ServicesSection, ProcessSection, PartnersSection, ContactCTASection } from "@/components/home";

export const metadata = {
  title: "Beaver'Aid - Artisan Électricien, Serrurier & Webmaster | 28",
  description: "Un seul expert pour vos travaux d'électricité, de serrurerie et votre création de site web. Intervention rapide à Broué, Dreux, Chartres et alentours.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Beaver'Aid - Électricien, Serrurier & Webmaster | 28",
    description: "Expertise locale en Eure-et-Loir. Dépannage électricité, urgence serrurerie et services numériques.",
    url: "https://beaveraid.fr",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-x-hidden relative w-full pb-24 md:pb-0">
      <div className="w-full overflow-x-hidden">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <PartnersSection />
        <ContactCTASection />
      </div>
    </main>
  );
}
