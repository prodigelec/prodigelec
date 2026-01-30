import ContactHero from "./components/sections/ContactHero";
import ContactInfo from "./components/sections/ContactInfo";
import ContactForm from "./components/sections/ContactForm";

export const metadata = {
  title: "Contactez Beaver'Aid - Devis Gratuit Électricité & Web | 28",
  description: "Besoin d'un dépannage urgent ou d'un projet web ? Contactez Beaver'Aid au 06 38 19 47 52. Intervention sur Broué, Dreux, Chartres et alentours.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020617] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  );
}
