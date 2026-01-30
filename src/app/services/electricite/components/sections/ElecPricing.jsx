"use client";
import { Check } from "lucide-react";

export default function ElecPricing() {
  const prices = [
    {
      title: "Dépannage Électrique",
      price: "À partir de 120€ TTC",
      description: "Recherche de panne et réparation rapide.",
      features: [
        "Déplacement Zone 1 inclus",
        "Forfait Diagnostic + 1h Main d'oeuvre",
        "Petites fournitures incluses",
        "Si hors zone : + Frais déplacement"
      ],
      highlight: true
    },
    {
      title: "Mise en Sécurité",
      price: "Sur Devis",
      description: "Protection des personnes et des biens.",
      features: [
        "Remplacement tableau électrique",
        "Mise à la terre",
        "Protection différentielle 30mA",
        "Attestation de conformité"
      ],
      highlight: false
    },
    {
      title: "Installation Neuve / Rénov",
      price: "Sur Devis",
      description: "Projet complet ou extension.",
      features: [
        "Étude personnalisée gratuite",
        "Respect norme NF C 15-100",
        "Appareillage Legrand / Schneider",
        "Garantie décennale"
      ],
      highlight: false
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Mes Tarifs <span className="text-amber-400">Électricité</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {prices.map((plan, idx) => (
          <div 
            key={idx} 
            className={`rounded-3xl p-8 border ${plan.highlight ? 'border-amber-400 bg-amber-400/5' : 'border-white/10 bg-white/5'} relative flex flex-col`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-black font-bold px-4 py-1 rounded-full text-sm">
                Le plus demandé
              </div>
            )}
            <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
            <div className="text-3xl font-black text-amber-400 mb-4">{plan.price}</div>
            <p className="text-gray-400 mb-8">{plan.description}</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3 text-gray-300 text-sm">
                  <Check className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a 
              href="/contact#contact-form" 
              className={`w-full py-3 rounded-xl font-bold text-center transition-all ${
                plan.highlight 
                  ? 'bg-amber-400 text-black hover:bg-amber-300' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Demander un devis
            </a>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-500 text-sm mt-8">
        * Main d'oeuvre : 50€ TTC / h. Tarifs indicatifs. Majoration possible soirs et week-ends.
      </p>
    </section>
  );
}
