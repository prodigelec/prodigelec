import { HeroSection, BrandsSection, FeaturesSection, AboutSection, ServicesSection, ProcessSection, PartnersSection, ContactCTASection, NewsletterSection } from "@/components/home";

export const metadata = {
  title: "PRODIGELEC - Artisan Électricien & Serrurier | 28",
  description: "Un seul expert pour vos travaux d'électricité et de serrurerie. Intervention rapide à Broué, Dreux, Chartres & leurs alentours.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PRODIGELEC - Électricien & Serrurier | 28",
    description: "Expertise locale en Eure-et-Loir. Dépannage électricité et urgence serrurerie.",
    url: "https://beaveraid.fr",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-x-hidden relative w-full pb-24 md:pb-0">
      <div className="w-full overflow-x-hidden">
        <HeroSection />
        <BrandsSection />
        <FeaturesSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <PartnersSection />
        <NewsletterSection />
        <ContactCTASection />
      </div>
    </main>
  );
}
