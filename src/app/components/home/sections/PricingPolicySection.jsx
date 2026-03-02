"use client";
import { useState } from 'react';
import { m, AnimatePresence } from "framer-motion";
import { MapPin, CheckCircle2, AlertCircle, ChevronRight, X } from "lucide-react";

const CITIES_28 = [
  "Broué", "Dreux", "Saint-Rémy-sur-Avre", "Anet", "Nogent-le-Roi", "Maintenon", "Épernon", "Châteauneuf-en-Thymerais",
  "Tremblay-les-Villages", "Dampierre-sur-Avre", "Prudemanche", "Abondant", "Bû", "Cherisy", "Marchezais", "Oulins",
  "Serville", "Vernouillet", "Gallardon", "Sorel-Moussel", "Saussay", "Boutigny-Prouais", "Champagne", "Goussainville",
  "Havelu", "Ecluzelles", "Mézières-en-Drouais", "Luray", "Sainte-Gemme-Moronval", "Garnay", "Tréon", "Aunay-sous-Crécy",
  "Crécy-Couvé", "Saulnières", "Thimert-Gâtelles", "Germainville", "Boncourt", "Montreuil", "Saint-Ouen-Marchefroy",
  "Le Mesnil-Simon", "La Chapelle-Forainvilliers"
];

const CITIES_27 = [
  "Ezy-sur-Eure", "Ivry-la-Bataille", "Saint-André-de-l'Eure", "Marcilly-sur-Eure", "Nonancourt", "Saint-Lubin-des-Joncherets",
  "La Madeleine-de-Nonancourt", "Saint-Germain-sur-Avre", "La Couture-Boussey", "Garennes-sur-Eure", "Bueil", "Croth",
  "L'Habit", "Mouettes", "Mousseaux-Neuville"
];

const CITIES_28_ZONE3 = [
  "Chartres", "Lucé", "Mainvilliers", "Luisant", "Lèves", "Auneau-Bleury-Saint-Symphorien",
  "Courville-sur-Eure", "Senonches"
];

const CITIES_27_ZONE3 = [
  "Évreux", "Vernon", "Saint-Marcel", "Pacy-sur-Eure", "Verneuil d'Avre et d'Iton",
  "Breteuil", "Conches-en-Ouche", "Mesnils-sur-Iton"
];

export default function PricingPolicySection() {
  const [activeModal, setActiveModal] = useState(null); // 'free' | 'paid' | null

  return (
    <section className="py-12 md:py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6 uppercase tracking-tight">
            Politique de <span className="text-primary">Déplacement</span>
          </h2>
          <p className="text-foreground-subtle text-sm md:text-lg max-w-2xl mx-auto">
            Une transparence totale sur les frais de déplacement. Pas de surprise : tout est clair avant mon intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">

          {/* Zone Gratuite */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-primary/30 transition-colors flex flex-col"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <MapPin className="w-16 h-16 md:w-24 md:h-24 text-primary" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-500 font-bold text-[10px] md:text-xs uppercase tracking-wider mb-4 md:mb-6 w-fit">
              <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
              Zone 1 & 2
            </div>

            <h3 className="text-lg md:text-2xl font-bold text-white mb-2">Devis & Déplacement Gratuits</h3>
            <p className="text-sm md:text-base text-foreground-subtle mb-4 md:mb-6 grow">Pour toute intervention située dans un rayon de <span className="text-white font-bold">30km autour de Broué</span>.</p>

            <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 md:p-4 mb-4 md:mb-6">
              <p className="text-xs md:text-sm text-primary font-medium">
                <span className="font-bold">✨ Avantage Client :</span> Le déplacement et le devis sont <span className="underline decoration-2 underline-offset-2">100% offerts</span>, sans aucun frais caché.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4 text-gray-100 mt-auto">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-xs md:text-base">Zone d'intervention immédiate</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <div className="text-xs md:text-sm">
                  <strong className="text-white block mb-1">Eure-et-Loir (28) :</strong>
                  <p className="leading-relaxed">
                    {CITIES_28.slice(0, 4).join(", ") + "..."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <div className="text-xs md:text-sm">
                  <strong className="text-white block mb-1">Eure (27) :</strong>
                  <p className="leading-relaxed">
                    {CITIES_27.slice(0, 4).join(", ") + "..."}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveModal('free')}
                aria-label="Voir toutes les villes de la zone gratuite"
                className="w-full mt-4 py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-primary uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                Voir toutes les villes <ChevronRight className="w-3 h-3" />
              </button>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="font-bold text-xs md:text-sm text-white">Déplacement 100% offert</span>
              </div>
            </div>
          </m.div>

          {/* Zone Payante mais Déductible */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-accent/30 transition-colors flex flex-col"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <MapPin className="w-16 h-16 md:w-24 md:h-24 text-accent" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent font-bold text-[10px] md:text-xs uppercase tracking-wider mb-4 md:mb-6 w-fit">
              <AlertCircle className="w-3 h-3 md:w-4 md:h-4" />
              Zone 3 & 4 (+30km)
            </div>

            <h3 className="text-lg md:text-2xl font-bold text-white mb-2">Frais Déductibles</h3>
            <p className="text-sm md:text-base text-foreground-subtle mb-4 md:mb-6 grow">Au-delà de 30km, une participation aux frais est demandée pour le déplacement.</p>

            <div className="bg-accent/10 border border-accent/20 rounded-xl p-3 md:p-4 mb-4 md:mb-6">
              <p className="text-xs md:text-sm text-accent font-medium">
                <span className="font-bold">✨ Avantage Client :</span> Ces frais sont <span className="underline decoration-2 underline-offset-2">intégralement déduits</span> de votre facture finale si vous acceptez le devis.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4 text-gray-100 mt-auto">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-xs md:text-base">Entre 50€ et 70€ selon la distance</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <div className="text-xs md:text-sm">
                  <strong className="text-white block mb-1">Eure-et-Loir (28) :</strong>
                  <p className="leading-relaxed">
                    {CITIES_28_ZONE3.slice(0, 4).join(", ") + "..."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <div className="text-xs md:text-sm">
                  <strong className="text-white block mb-1">Eure (27) :</strong>
                  <p className="leading-relaxed">
                    {CITIES_27_ZONE3.slice(0, 4).join(", ") + "..."}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveModal('paid')}
                aria-label="Voir toutes les villes de la zone payante"
                className="w-full mt-4 py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-accent uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                Voir toutes les villes <ChevronRight className="w-3 h-3" />
              </button>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="font-bold text-xs md:text-sm text-white">Remboursé si travaux effectués</span>
              </div>
            </div>
          </m.div>

        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {activeModal && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          >
            <m.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`bg-[#1a1a1a] border rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative ${activeModal === 'free' ? 'border-primary/20' : 'border-accent/20'
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-100 hover:text-white transition-colors"
                aria-label="Fermer la liste des villes"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider mb-4 ${activeModal === 'free' ? 'bg-green-500/20 text-green-500' : 'bg-accent/20 text-accent'
                  }`}>
                  {activeModal === 'free' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                  {activeModal === 'free' ? 'Zone 1 & 2' : 'Zone 3 & 4'}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {activeModal === 'free' ? "Zone d'intervention Gratuite" : "Zone Payante (Déductible)"}
                </h3>
                <p className="text-gray-100 mt-2">
                  {activeModal === 'free'
                    ? "Liste complète des villes où le déplacement et le devis sont 100% offerts."
                    : "Liste des villes nécessitant une participation aux frais (déductible du devis)."}
                </p>
              </div>

              <div className="space-y-8">
                {/* Eure-et-Loir */}
                <div>
                  <h4 className={`text-lg font-bold mb-4 flex items-center gap-2 ${activeModal === 'free' ? 'text-primary' : 'text-accent'
                    }`}>
                    <div className={`w-2 h-2 rounded-full ${activeModal === 'free' ? 'bg-primary' : 'bg-accent'}`} />
                    Eure-et-Loir (28)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(activeModal === 'free' ? CITIES_28 : CITIES_28_ZONE3).map(city => (
                      <span key={city} className="px-3 py-1.5 rounded-lg bg-white/5 text-sm text-gray-100 border border-white/5 hover:border-white/20 transition-colors">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Eure */}
                <div>
                  <h4 className={`text-lg font-bold mb-4 flex items-center gap-2 ${activeModal === 'free' ? 'text-primary' : 'text-accent'
                    }`}>
                    <div className={`w-2 h-2 rounded-full ${activeModal === 'free' ? 'bg-primary' : 'bg-accent'}`} />
                    Eure (27)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(activeModal === 'free' ? CITIES_27 : CITIES_27_ZONE3).map(city => (
                      <span key={city} className="px-3 py-1.5 rounded-lg bg-white/5 text-sm text-gray-100 border border-white/5 hover:border-white/20 transition-colors">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
