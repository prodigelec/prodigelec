"use client";
import { Check } from "lucide-react";

export default function WebPricing() {
  const prices = [
    {
      title: "Dépannage Informatique",
      price: "50€ TTC /h",
      description: "Assistance à domicile ou à distance.",
      features: [
        "Nettoyage virus / lenteurs",
        "Installation imprimante / Box",
        "Récupération de données",
        "Formation seniors / débutants"
      ],
      highlight: false
    },
    {
      title: "Site Vitrine 'Start'",
      price: "À partir de 490€",
      description: "Votre présence essentielle sur le web.",
      features: [
        "Site 1 page (Landing Page)",
        "Design moderne & Mobile friendly",
        "Formulaire de contact",
        "Hébergement & Nom de domaine inclus (1 an)"
      ],
      highlight: true
    },
    {
      title: "Site Vitrine 'Pro'",
      price: "À partir de 890€",
      description: "Un site complet pour votre activité.",
      features: [
        "Site multipages (Accueil, Services, Contact...)",
        "Optimisation SEO (Référencement)",
        "Intégration avis Google",
        "Formation à la modification"
      ],
      highlight: false
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Mes Tarifs <span className="text-primary">Web & Informatique</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {prices.map((plan, idx) => (
          <div 
            key={idx} 
            className={`rounded-3xl p-8 border ${plan.highlight ? 'border-primary bg-primary/5' : 'border-white/10 bg-white/5'} relative flex flex-col`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black font-bold px-4 py-1 rounded-full text-sm">
                Recommandé
              </div>
            )}
            <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
            <div className="text-3xl font-black text-primary mb-4">{plan.price}</div>
            <p className="text-gray-400 mb-8">{plan.description}</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3 text-gray-300 text-sm">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a 
              href="/contact#contact-form" 
              className={`w-full py-3 rounded-xl font-bold text-center transition-all ${
                plan.highlight 
                  ? 'bg-primary text-black hover:bg-cyan-300' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Me contacter
            </a>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-500 text-sm mt-8">
        * Main d'oeuvre : 50€ TTC / h. Devis gratuit et personnalisé pour tout projet web. TVA non applicable, art. 293 B du CGI.
      </p>
    </section>
  );
}
