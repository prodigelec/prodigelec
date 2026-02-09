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
            <p className="text-xl text-gray-300 mb-4">
              Je me déplace rapidement sur{" "}
              <span className="font-bold text-primary">
                Chartres, Broué, Dreux, Anet, Nonancourt, Nogent-le-Roi, Evreux
              </span>{" "}
              & leurs alentours. Tarifs annoncés avant intervention, pas de
              surprise.
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
              <div className="bg-primary/20 backdrop-blur-md border border-primary/30 rounded-xl px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-ping shadow-[0_0_10px_rgba(201,162,39,0.8)]" />
                <span className="text-primary font-black text-sm whitespace-nowrap uppercase tracking-tight">
                  Urgence : 19h+
                </span>
              </div>
            </div>
            <br />
            <a
              href="tel:0638194752"
              className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-background rounded-full font-black hover:bg-primary-light transition-all hover:scale-105 shadow-[0_10px_20px_-5px_rgba(201,162,39,0.4)] text-xl"
            >
              Appeler le 06 38 19 47 52
            </a>
          </div>

          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Appel & Diagnostic",
                desc: "Estimation du prix par téléphone si possible",
              },
              {
                step: "02",
                title: "Intervention",
                desc: "Ouverture fine ou remplacement soigné",
              },
              {
                step: "03",
                title: "Stock & Sécurité",
                desc: "Matériel en camion pour sécurisation immédiate",
              },
              {
                step: "04",
                title: "Garantie",
                desc: "Vérification finale et essai de bon fonctionnement",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#020617]/50 border border-white/10 p-4 rounded-xl flex items-center gap-4"
              >
                <span className="text-3xl font-black text-primary/50">
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
