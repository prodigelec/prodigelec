"use client";
import { motion } from "framer-motion";
import { Send, Bell, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState("");
    const [agreedToGdpr, setAgreedToGdpr] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!agreedToGdpr) return;

        setStatus("loading");
        setErrorMessage("");

        try {
            // Envoi à EmailJS
            const result = await emailjs.send(
                'service_gw6xwxl',
                'template_iua9x0s',
                {
                    user_email: email,
                    user_name: 'Abonné Newsletter',
                    service: 'Inscription Newsletter',
                    message: 'Nouvelle inscription reçue depuis le site.',
                    user_city: ''
                },
                '9JhtcKKMCdzRo6WPB'
            );

            if (result.text === 'OK') {
                setStatus("success");
                setEmail("");
                setAgreedToGdpr(false);
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch (error) {
            console.error('Erreur inscription newsletter:', error);
            setStatus("error");
            setErrorMessage("Une erreur est survenue lors de l'inscription.");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <section id="newsletter" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-background">
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-accent/20 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="bg-linear-to-b from-white/10 via-white/5 to-black/30 backdrop-blur-xl border border-white/10 ring-1 ring-white/10 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden relative shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_18px_50px_rgba(0,0,0,0.5)]">

                    {/* Decorative Elements */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
                                <Bell className="w-3.5 h-3.5" />
                                Restez informé
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                                Conseils d&apos;artisan & <br />
                                <span className="text-primary italic">Offres exclusives.</span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed max-w-md">
                                Recevez nos astuces techniques pour sécuriser votre habitat et profitez de remises saisonnières réservées à nos abonnés.
                            </p>
                        </motion.div>

                        {/* Right Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <form onSubmit={handleSubmit} className="relative group/form">
                                <div className="absolute -inset-0.5 bg-linear-to-r from-primary/50 to-accent/50 rounded-2xl blur opacity-20 group-hover/form:opacity-40 transition duration-500" />
                                <div className="relative bg-background/50 border border-white/10 p-2 rounded-2xl flex flex-col md:flex-row gap-2">
                                    <input
                                        required
                                        type="email"
                                        placeholder="votre@email.fr"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 bg-transparent px-6 py-4 text-white placeholder:text-gray-500 focus:outline-hidden text-lg"
                                        disabled={status === "success"}
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === "loading" || status === "success" || !agreedToGdpr}
                                        className={`relative overflow-hidden px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 min-w-[180px] ${status === "success"
                                                ? "bg-success text-white shadow-lg shadow-success/20"
                                                : status === "error"
                                                    ? "bg-error text-white shadow-lg shadow-error/20"
                                                    : !agreedToGdpr && status === "idle"
                                                        ? "bg-white/5 text-white/30 cursor-not-allowed border border-white/10"
                                                        : "bg-primary text-background hover:bg-primary-light shadow-lg shadow-primary/20"
                                            }`}
                                    >
                                        {(status === "idle" || status === "error") && (
                                            <>
                                                <span>{status === "error" ? "Réessayer" : "S'abonner"}</span>
                                                <Send className={`w-5 h-5 transition-transform ${agreedToGdpr ? 'group-hover:translate-x-1 group-hover:-translate-y-1' : ''}`} />
                                            </>
                                        )}
                                        {status === "loading" && (
                                            <div className="w-6 h-6 border-3 border-background/30 border-t-background rounded-full animate-spin" />
                                        )}
                                        {status === "success" && (
                                            <>
                                                <span>C&apos;est fait !</span>
                                                <CheckCircle2 className="w-5 h-5 animate-in zoom-in duration-300" />
                                            </>
                                        )}
                                    </button>
                                </div>

                                <div className="mt-4 flex items-start gap-3 px-2">
                                    <div className="relative flex items-center mt-1">
                                        <input
                                            id="gdpr-consent"
                                            type="checkbox"
                                            checked={agreedToGdpr}
                                            onChange={(e) => setAgreedToGdpr(e.target.checked)}
                                            className="w-4 h-4 rounded border-white/10 bg-white/5 text-primary focus:ring-primary/50 cursor-pointer"
                                            required
                                        />
                                    </div>
                                    <label htmlFor="gdpr-consent" className="text-xs text-gray-500 leading-snug cursor-pointer select-none">
                                        J&apos;accepte de recevoir vos conseils techniques et offres commerciales par e-mail. Vous pouvez vous désinscrire à tout moment. Voir notre <a href="/politique-de-confidentialite" className="text-primary hover:underline">politique de confidentialité</a>.
                                    </label>
                                </div>

                                {status === "success" && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-6 text-sm text-success flex items-center gap-2"
                                    >
                                        <CheckCircle2 className="w-4 h-4" />
                                        Merci ! Vous recevrez bientôt nos conseils.
                                    </motion.p>
                                )}

                                {status === "error" && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-6 text-sm text-error flex items-center gap-2"
                                    >
                                        <div className="w-4 h-4 rounded-full bg-error flex items-center justify-center text-[10px] font-bold">!</div>
                                        {errorMessage}
                                    </motion.p>
                                )}

                                <p className="mt-4 text-[10px] text-gray-500 uppercase tracking-widest text-center md:text-left">
                                    * Désinscription possible à tout moment. Pas de spam, promis.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
