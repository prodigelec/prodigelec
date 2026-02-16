import ContactHero from "./components/sections/ContactHero";
import ContactInfo from "./components/sections/ContactInfo";
import ContactForm from "./components/sections/ContactForm";

export const metadata = {
  title: "Contactez PRODIGELEC - Devis Gratuit Électricité & Serrurerie | 27 & 28",
  description: "23 ans d'expérience à votre service. Besoin d'un dépannage urgent ? Contactez PRODIGELEC au 06 38 19 47 52. Intervention rapide sur l'Eure (27) et l'Eure-et-Loir (28).",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contactez PRODIGELEC - Devis Gratuit & Intervention Rapide (27/28)",
    description: "Une urgence ou un projet ? Profitez de 23 ans d'expertise. Appel ou message, réponse rapide garantie.",
    url: "https://prodigelec.fr/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-20 pb-8 md:pt-24 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  );
}
