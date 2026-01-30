import ContactHero from "./components/sections/ContactHero";
import ContactInfo from "./components/sections/ContactInfo";
import ContactForm from "./components/sections/ContactForm";

export const metadata = {
  title: "Contactez PRODIGELEC - Devis Gratuit Électricité & Serrurerie | 28",
  description: "Besoin d'un dépannage urgent ? Contactez PRODIGELEC au 06 38 19 47 52. Intervention sur Broué, Dreux, Chartres & leurs alentours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contactez PRODIGELEC - Devis Gratuit & Intervention Rapide",
    description: "Une urgence ou un projet ? Appelez-nous ou envoyez un message. Réponse rapide garantie.",
    url: "https://beaveraid.fr/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  );
}
