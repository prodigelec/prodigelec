"use client";
import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

export default function SerrurerieUrgency() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="mb-24"
    >
      <div className="bg-gradient-to-r from-primary/20 to-primary-light/20 border border-primary/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />

        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-bold mb-6 text-sm uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              Intervention Rapide
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Porte claquée ou serrure bloquée ?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Je me déplace rapidement sur Chartres, Broué, Dreux, Anet & leurs alentours. Tarifs annoncés avant intervention, pas de surprise.
            </p>
            <a href="tel:0638194752" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background rounded-full font-bold hover:bg-primary-light transition-colors text-lg">
              Appeler le 06 38 19 47 52
            </a>
          </div>

          <div className="space-y-4">
            {[
              { step: "01", title: "Appel & Diagnostic", desc: "Estimation du prix par téléphone si possible" },
              { step: "02", title: "Intervention", desc: "Ouverture fine ou remplacement soigné" },
              { step: "03", title: "Sécurisation", desc: "Vérification du bon fonctionnement" }
            ].map((item, i) => (
              <div key={i} className="bg-[#020617]/50 border border-white/10 p-4 rounded-xl flex items-center gap-4">
                <span className="text-3xl font-black text-primary/50">{item.step}</span>
                <div>
                  <div className="font-bold text-white">{item.title}</div>
                  <div className="text-sm text-gray-400">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
