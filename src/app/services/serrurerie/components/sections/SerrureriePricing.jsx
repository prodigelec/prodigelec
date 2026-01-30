"use client";
import { Check } from "lucide-react";

export default function SerrureriePricing() {
  const prices = [
    {
      title: "Porte Claquée",
      price: "120€ TTC",
      description: "Ouverture simple (sans dégâts).",
      features: [
        "Ouverture à la radio (bypass)",
        "Déplacement Zone 1 inclus",
        "1h de main d'œuvre incluse",
        "Hors zone : Frais déplacement +"
      ],
      highlight: true
    },
    {
      title: "Porte Fermée / Clé perdue",
      price: "Sur Devis",
      description: "Ouverture technique (perçage).",
      features: [
        "Ouverture destructive (si nécessaire)",
        "Diagnostic sécurité complet",
        "Matériel de remplacement en supplément",
        "Déplacement & Devis gratuit"
      ],
      highlight: false
    },
    {
      title: "Mise en Sécurité",
      price: "Sur Devis",
      description: "Blindage et renforcement.",
      features: [
        "Changement de serrure 3 points",
        "Installation cornières anti-pinces",
        "Blindage de porte existante",
        "Poignée de sécurité renforcée"
      ],
      highlight: false
    },
    {
      title: "Autres demandes",
      price: "Sur Devis",
      description: "Toute autre prestation.",
      features: [
        "Réparation de volets",
        "Réglage de portes",
        "Maintenance préventive",
        "Conseils personnalisés"
      ],
      highlight: false
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Mes Tarifs <span className="text-primary">Serrurerie</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {prices.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-3xl p-8 border ${plan.highlight ? 'border-primary bg-primary/5' : 'border-white/10 bg-white/5'} relative flex flex-col`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background font-bold px-4 py-1 rounded-full text-sm">
                Urgence
              </div>
            )}
            <h3 className="text-xl font-bold text-white mb-2 min-h-[56px] flex items-center">{plan.title}</h3>
            <div className="text-3xl font-black text-primary mb-4">{plan.price}</div>
            <p className="text-sm text-gray-400 mb-8 min-h-[48px]">{plan.description}</p>

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
              className={`w-full py-3 rounded-xl font-bold text-center transition-all ${plan.highlight
                ? 'bg-primary text-background hover:bg-primary-light'
                : 'bg-white/10 text-white hover:bg-white/20'
                }`}
            >
              Demander un devis
            </a>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-500 text-sm mt-8">
        * Main d&apos;oeuvre : 50€ TTC / h. Majoration possible de 50% soirs (après 19h), week-ends et jours fériés.
      </p>
    </section>
  );
}
