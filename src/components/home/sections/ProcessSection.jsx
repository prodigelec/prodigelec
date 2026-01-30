"use client";
import { motion } from "framer-motion";
import { PhoneCall, FileText, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <PhoneCall className="w-6 h-6" />,
    title: "Prise de Contact",
    description: "Vous m'appelez ou m'envoyez un email. On discute de votre besoin et je vous donne une première estimation ou un rendez-vous.",
    color: "bg-blue-500",
    delay: 0
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Diagnostic & Devis",
    description: "Je me déplace (gratuit < 10km). Devis clair envoyé par email avec signature électronique sécurisée pour un accord rapide.",
    color: "bg-amber-500",
    delay: 0.2
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Intervention",
    description: "Une fois le devis validé, je réalise les travaux avec soin, en respectant les normes de sécurité et votre domicile.",
    color: "bg-primary",
    delay: 0.4
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Paiement & Garantie",
    description: "Signature devis en ligne, facturation numérique et paiement sécurisé (CB, lien de paiement, virement). Garantie décennale incluse.",
    color: "bg-emerald-500",
    delay: 0.6
  }
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Comment ça se passe ?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Un processus simple et transparent pour votre tranquillité d'esprit.
          </p>
        </div>

        <div className="relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />

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
                        <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-white shadow-lg shadow-black/50 mb-6 relative group-hover:scale-110 transition-transform duration-300`}>
                            {step.icon}
                            {/* Pulse effect */}
                            <div className={`absolute inset-0 rounded-full ${step.color} opacity-40 animate-ping`} />
                        </div>
                        
                        <div className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-2xl w-full h-full hover:bg-white/10 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
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
