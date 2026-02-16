"use client";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import BrandName from "@/app/components/ui/BrandName";
import { useState, useRef } from "react";

export default function ContactForm() {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error('Erreur envoi email:', error);
      setStatus('error');
      setErrorMessage("Une erreur est survenue lors de l'envoi. Vous pouvez nous contacter directement par téléphone.");
    }
  };

  return (
    <motion.div
      id="contact-form"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden border border-white/10 scroll-mt-30"
    >
      {/* Left Side - Context */}
      <div className="lg:col-span-2 bg-linear-to-br from-slate-900 to-slate-800 p-6 md:p-10 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Envoyer un message</h2>
          <p className="text-gray-400 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
            Remplissez ce formulaire pour toute demande de devis ou d&apos;information. Je m&apos;engage à vous répondre sous 24h ouvrées.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Réponse rapide garantie
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              Devis gratuit et détaillé
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              Conseils personnalisés
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-12">
          <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group"><BrandName className="text-[10px]" /></div>
          <div className="text-white font-medium">L&apos;expertise artisanale 2.0</div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="lg:col-span-3 bg-[#0f172a] p-6 md:p-8">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="user_name" className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Nom complet</label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="user_phone" className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Téléphone</label>
              <input
                type="tel"
                name="user_phone"
                id="user_phone"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="user_email" className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Email</label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="user_city" className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Ville</label>
              <input
                type="text"
                name="user_city"
                id="user_city"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="service" className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Service concerné</label>
            <select
              name="service"
              id="service"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
            >
              <option value="depannage" className="bg-[#0f172a]">Dépannage / Urgence</option>
              <option value="electricite" className="bg-[#0f172a]">Travaux Électricité</option>
              <option value="serrurerie" className="bg-[#0f172a]">Travaux Serrurerie</option>
              <option value="autre" className="bg-[#0f172a]">Autre demande</option>
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Votre message</label>
            <textarea
              name="message"
              id="message"
              required
              rows={3}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all resize-none"
              placeholder="Décrivez votre besoin..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="w-full bg-linear-to-r from-primary to-primary-dark text-background font-bold text-base py-3 rounded-xl hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Envoi en cours...</span>
              </>
            ) : (
              <>
                <span>Envoyer le message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl flex items-center gap-3"
            >
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <p>Message envoyé avec succès ! Nous vous répondrons rapidement.</p>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-center gap-3"
            >
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p>{errorMessage}</p>
            </motion.div>
          )}
        </form>
      </div>
    </motion.div>
  );
}
