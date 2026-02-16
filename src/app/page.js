import dynamic from "next/dynamic";
import { HeroSection } from "@/app/components/home";

// Chargement dynamique des sections sous le pli pour optimiser le LCP et le JS initial
const BrandsSection = dynamic(() => import("@/app/components/home/sections/BrandsSection"));
const FeaturesSection = dynamic(() => import("@/app/components/home/sections/FeaturesSection"));
const AboutSection = dynamic(() => import("@/app/components/home/sections/AboutSection"));
const ServicesSection = dynamic(() => import("@/app/components/home/sections/ServicesSection"));
const ProcessSection = dynamic(() => import("@/app/components/home/sections/ProcessSection"));
const PricingPolicySection = dynamic(() => import("@/app/components/home/sections/PricingPolicySection"));
const ContactCTASection = dynamic(() => import("@/app/components/home/sections/ContactCTASection"));

export const metadata = {
  title: "PRODIGELEC - Artisan Électricien & Serrurier | 27 & 28",
  description: "Expertise en électricité et serrurerie avec 23 ans d'expérience. Intervention rapide en Eure (27) et Eure-et-Loir (28) : Broué, Dreux, Chartres & alentours.",
  alternates: {
    canonical: "https://www.prodigelec.fr/",
  },
  openGraph: {
    title: "PRODIGELEC - Électricien & Serrurier | 27 & 28",
    description: "Expertise locale en Eure et Eure-et-Loir. Dépannage électricité et urgence serrurerie.",
    url: "https://www.prodigelec.fr/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-x-hidden relative w-full pb-8 md:pb-0">
      <div className="w-full overflow-x-hidden">
        <HeroSection />
        <BrandsSection />
        <FeaturesSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <PricingPolicySection />
        <ContactCTASection />
      </div>
    </main>
  );
}
