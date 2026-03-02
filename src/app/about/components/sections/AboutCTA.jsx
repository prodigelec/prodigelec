"use client";
import { m } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-6 md:p-12 text-center border border-white/10 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-2xl mx-auto">
        <h3 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6">Un projet ? Une question ?</h3>
        <p className="text-gray-100 mb-6 md:mb-8 text-sm md:text-lg">
          Que vous ayez besoin d&apos;un dépannage urgent ou d&apos;un devis en électricité ou serrurerie, je suis à votre écoute.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="tel:0638194752" className="inline-flex items-center gap-2 px-5 py-3 md:px-8 md:py-4 bg-primary text-black rounded-full font-medium md:font-bold hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center text-sm md:text-base">
            <Phone size={20} /> 06 38 19 47 52
          </Link>
          <Link href="/contact#contact-form" className="inline-flex items-center gap-2 px-5 py-3 md:px-8 md:py-4 bg-white/10 text-white rounded-full font-medium md:font-bold hover:bg-white/20 transition-colors w-full sm:w-auto justify-center text-sm md:text-base">
            M&apos;envoyer un message <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </m.div>
  );
}
