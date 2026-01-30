"use client";
import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, MonitorPlay } from "lucide-react";

export default function WebUrgency() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="mb-24"
    >
      <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] -mr-32 -mt-32" />
        
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 font-bold mb-6 text-sm uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4" />
              Service de proximité
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              L'informatique vous fait peur ?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Pas de panique ! Que ce soit pour une panne, une installation ou simplement pour apprendre, je me déplace chez vous pour vous aider avec pédagogie et bienveillance.
            </p>
            <a href="tel:0638194752" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-400 text-black rounded-full font-bold hover:bg-cyan-300 transition-colors text-lg">
              Appeler le 06 38 19 47 52
            </a>
          </div>

          <div className="space-y-4">
            {[
              { icon: ShieldCheck, title: "Dépannage Rapide", desc: "Diagnostic et réparation de vos pannes matérielles ou logicielles." },
              { icon: MonitorPlay, title: "Formation sur mesure", desc: "Apprenez à votre rythme sur votre propre matériel." },
              { icon: HeartHandshake, title: "Pédagogie & Patience", desc: "Des explications claires, sans jargon technique compliqué." }
            ].map((item, i) => (
              <div key={i} className="bg-[#020617]/50 border border-white/10 p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
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
