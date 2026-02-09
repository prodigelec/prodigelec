"use client";
import { motion } from "framer-motion";
import { HiBolt } from "react-icons/hi2";

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
              <HiBolt className="w-4 h-4" />
              Intervention Rapide
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Panne ou court-circuit ?
            </h3>
            <p className="text-xl text-gray-300 mb-4">
              Je me déplace rapidement sur{" "}
              <span className="font-bold text-accent">
                Chartres, Broué, Dreux, Anet, Nonancourt, Nogent-le-Roi, Evreux
              </span>{" "}
              & leurs alentours. Diagnostic immédiat et réparation sécurisée.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                <span className="text-white font-bold text-sm whitespace-nowrap">
                  Lun - Ven : 9h - 18h
                </span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
                <span className="text-gray-300 font-medium text-sm whitespace-nowrap">
                  Samedi : Sur RDV
                </span>
              </div>
              <div className="bg-accent/20 backdrop-blur-md border border-accent/30 rounded-xl px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-ping shadow-[0_0_10px_rgba(var(--color-accent-rgb),0.8)]" />
                <span className="text-accent font-black text-sm whitespace-nowrap uppercase tracking-tight">
                  Urgence : 19h+
                </span>
              </div>
            </div>
            <br />
            <a
              href="tel:0638194752"
              className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-background rounded-full font-black hover:bg-accent-glow transition-all hover:scale-105 shadow-[0_10px_20px_-5px_rgba(var(--color-accent-rgb),0.4)] text-xl"
            >
              Appeler le 06 38 19 47 52
            </a>
          </div>

          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Appel & Sécurisation",
                desc: "Conseils immédiats pour sécuriser l'installation",
              },
              {
                step: "02",
                title: "Diagnostic Expert",
                desc: "Recherche de la panne via tests de continuité/isolement",
              },
              {
                step: "03",
                title: "Réparation Durable",
                desc: "Remplacement de l'organe défectueux (NF C 15-100)",
              },
              {
                step: "04",
                title: "Contrôle Final",
                desc: "Vérification de la remise en service et test 30mA",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#020617]/50 border border-white/10 p-4 rounded-xl flex items-center gap-4"
              >
                <span className="text-3xl font-black text-accent/50">
                  {item.step}
                </span>
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
