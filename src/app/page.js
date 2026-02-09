import {
  HeroSection,
  BrandsSection,
  FeaturesSection,
  AboutSection,
  ServicesSection,
  ProcessSection,
  PartnersSection,
  ContactCTASection,
  NewsletterSection,
} from "@/app/components/home";

export const metadata = {
  title: "PRODIGELEC - Artisan Électricien & Serrurier | 27 & 28",
  description:
    "Expertise en électricité et serrurerie avec 23 ans d'expérience. Intervention rapide en Eure (27) et Eure-et-Loir (28) : Broué, Dreux, Chartres & alentours.",
  alternates: {
    canonical: "https://www.prodigelec.fr/",
  },
  openGraph: {
    title: "PRODIGELEC - Électricien & Serrurier | 27 & 28",
    description:
      "Expertise locale en Eure et Eure-et-Loir. Dépannage électricité et urgence serrurerie.",
    url: "https://www.prodigelec.fr",
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
