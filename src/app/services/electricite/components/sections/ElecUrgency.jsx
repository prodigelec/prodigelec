"use client";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function ElecUrgency() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="mb-24"
    >
      <div className="bg-gradient-to-r from-accent/20 to-accent-glow/20 border border-accent/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -mr-32 -mt-32" />

        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent font-bold mb-6 text-sm uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              Service d&apos;urgence
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Besoin d&apos;un dépannage rapide ?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Une panne de courant ? Une prise qui chauffe ? J&apos;interviens rapidement sur le secteur de Chartres, Broué, Dreux & leurs alentours pour diagnostiquer et réparer la panne.
            </p>
            <a href="tel:0638194752" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-backgound rounded-full font-bold hover:bg-accent-glow transition-colors text-lg text-black">
              Appeler le 06 38 19 47 52
            </a>
          </div>

          <div className="space-y-4">
            {[
              { step: "01", title: "Diagnostic Précis", desc: "Recherche de l&apos;origine de la panne" },
              { step: "02", title: "Mise en sécurité", desc: "Protection immédiate des biens et personnes" },
              { step: "03", title: "Réparation", desc: "Remise en état durable de l&apos;installation" }
            ].map((item, i) => (
              <div key={i} className="bg-[#0b1a2a]/50 border border-white/10 p-4 rounded-xl flex items-center gap-4">
                <span className="text-3xl font-black text-accent/50">{item.step}</span>
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
