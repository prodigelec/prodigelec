"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-6">Un projet ? Une question ?</h3>
        <p className="text-gray-300 mb-8 text-lg">
          Que vous ayez besoin d&apos;un dépannage urgent ou d&apos;un devis en électricité ou serrurerie, je suis à votre écoute.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="tel:0638194752" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black rounded-full font-bold hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center">
            <Phone size={20} /> 06 38 19 47 52
            </Link>
            <Link href="/contact#contact-form" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors w-full sm:w-auto justify-center">
            M&apos;envoyer un message <ArrowRight size={20} />
            </Link>
        </div>
      </div>
    </motion.div>
  );
}
