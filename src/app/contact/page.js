import ContactHero from "./components/sections/ContactHero";
import ContactInfo from "./components/sections/ContactInfo";
import ContactForm from "./components/sections/ContactForm";

export const metadata = {
  title: "Contact & Devis Gratuit — Électricien 27, 28 & 78",
  description: "Contactez PRODIGELEC au 06 38 19 47 52. Devis gratuit, dépannage urgent. Intervention rapide sur Dreux, Chartres, Évreux, Houdan & alentours (27, 28, 78).",
  alternates: {
    canonical: "https://www.prodigelec.fr/contact",
  },
  openGraph: {
    title: "Contact PRODIGELEC — Devis gratuit & intervention rapide (27/28/78)",
    description: "Urgence ou projet ? 23 ans d'expertise. Réponse rapide garantie. Appelez le 06 38 19 47 52 ou envoyez un message.",
    url: "https://www.prodigelec.fr/contact",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact PRODIGELEC",
  "url": "https://www.prodigelec.fr/contact",
  "description": "Contactez PRODIGELEC pour un devis gratuit ou un dépannage électrique urgent en Eure-et-Loir (28), Eure (27) et Yvelines (78).",
  "mainEntity": {
    "@id": "https://www.prodigelec.fr/#business"
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <main className="min-h-screen bg-background pt-20 pb-8 md:pt-24 md:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <ContactHero />
          <ContactInfo />
          <ContactForm />
        </div>
      </main>
    </>
  );
}
