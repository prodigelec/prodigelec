"use client";
import { motion } from "framer-motion";
import { PhoneCall, FileText, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <PhoneCall className="w-6 h-6" />,
    title: "Prise de Contact",
    description: "Vous m&apos;appelez ou m&apos;envoyez un email. On discute de votre besoin et je vous donne une première estimation ou un rendez-vous.",
    color: "text-primary",
    ring: "ring-primary/40",
    glow: "from-primary/30 via-primary/10 to-transparent",
    delay: 0
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Diagnostic & Devis",
    description: "Je me déplace (gratuit < 5km). Devis clair envoyé par email avec signature électronique sécurisée pour un accord rapide.",
    color: "text-accent",
    ring: "ring-accent/40",
    glow: "from-accent/30 via-accent/10 to-transparent",
    delay: 0.2
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Intervention",
    description: "Une fois le devis validé, je réalise les travaux avec soin, en respectant les normes de sécurité et votre domicile.",
    color: "text-primary-light",
    ring: "ring-primary-light/40",
    glow: "from-primary-light/30 via-primary-light/10 to-transparent",
    delay: 0.4
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Paiement & Garantie",
    description: "Signature devis en ligne, facturation numérique et paiement sécurisé (CB, lien de paiement, virement). Garantie décennale incluse.",
    color: "text-success",
    ring: "ring-success/40",
    glow: "from-success/30 via-success/10 to-transparent",
    delay: 0.6
  }
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[140px]" />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Comment ça se passe ?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Un processus simple et transparent pour votre tranquillité d&apos;esprit.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className={`absolute inset-0 rounded-full blur-xl opacity-70 bg-gradient-to-br ${step.glow}`} />
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-b from-white/15 via-white/5 to-black/30 border border-white/15 ring-1 ${step.ring} flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_10px_30px_rgba(0,0,0,0.45)] relative`}>
                    <span className={`${step.color}`}>{step.icon}</span>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-white/10 via-white/5 to-black/30 border border-white/10 ring-1 ring-white/10 p-6 rounded-3xl w-full h-full transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_12px_30px_rgba(0,0,0,0.45)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_16px_40px_rgba(0,0,0,0.55)]">
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-300/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
