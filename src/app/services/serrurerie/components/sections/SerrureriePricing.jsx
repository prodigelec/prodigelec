"use client";
import { Check } from "lucide-react";

export default function SerrureriePricing() {
  const prices = [
    {
      title: "Ouverture de Porte",
      price: "À partir de 120€ TTC",
      description: "Porte claquée ou clé perdue.",
      features: [
        "Ouverture fine (sans destruction) si possible",
        "Déplacement Zone 1 inclus",
        "Forfait Ouverture + 1h Main d'oeuvre",
        "Si hors zone : + Frais déplacement"
      ],
      highlight: true
    },
    {
      title: "Changement Serrure",
      price: "Sur Devis",
      description: "Remplacement cylindre ou serrure complète.",
      features: [
        "Cylindre standard ou sécurité",
        "Serrure 3 points",
        "Marques reconnues (Vachette, Bricard...)",
        "Jeu de clés fourni"
      ],
      highlight: false
    },
    {
      title: "Blindage / Sécurité",
      price: "Sur Devis",
      description: "Renforcement de votre entrée.",
      features: [
        "Cornières anti-pinces",
        "Poignée blindée",
        "Super-blindage",
        "Installation volets roulants"
      ],
      highlight: false
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Mes Tarifs <span className="text-blue-400">Serrurerie</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {prices.map((plan, idx) => (
          <div 
            key={idx} 
            className={`rounded-3xl p-8 border ${plan.highlight ? 'border-blue-400 bg-blue-400/5' : 'border-white/10 bg-white/5'} relative flex flex-col`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-400 text-black font-bold px-4 py-1 rounded-full text-sm">
                Urgence
              </div>
            )}
            <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
            <div className="text-3xl font-black text-blue-400 mb-4">{plan.price}</div>
            <p className="text-gray-400 mb-8">{plan.description}</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3 text-gray-300 text-sm">
                  <Check className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a 
              href="/contact#contact-form" 
              className={`w-full py-3 rounded-xl font-bold text-center transition-all ${
                plan.highlight 
                  ? 'bg-blue-400 text-black hover:bg-blue-300' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Demander un devis
            </a>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-500 text-sm mt-8">
        * Main d'oeuvre : 50€ TTC / h. Majoration possible de 50% soirs (après 19h), week-ends et jours fériés.
      </p>
    </section>
  );
}
