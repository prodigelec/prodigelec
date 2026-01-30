import { ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

/**
 * Minimalist Portal Dashboard
 * Optimized for clarity and elegance.
 */
export default async function PortalDashboardPage({ params }) {
    const { code } = await params;

    return (
        <div className="h-[calc(100vh-160px)] flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-1000">
            {/* Minimal Welcome Hero */}
            <div className="max-w-2xl w-full text-center space-y-10">
                <div className="flex justify-center">
                    <div className="w-24 h-24 bg-emerald-500 rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl shadow-emerald-500/20 ring-8 ring-emerald-50">
                        <ShieldCheck size={48} strokeWidth={1.5} />
                    </div>
                </div>

                <div className="space-y-4">
                    <span className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.4em]">Accès Autorisé</span>
                    <h1 className="text-5xl font-black tracking-tighter text-slate-900 leading-tight">
                        Bienvenue dans votre <br />
                        <span className="text-slate-300">Espace Élite</span>
                    </h1>
                    <p className="text-slate-400 font-medium text-lg max-w-md mx-auto leading-relaxed">
                        Votre plateforme de gestion PRODIGELEC est prête. Utilisez la barre de navigation pour gérer vos activités.
                    </p>
                </div>

                <div className="pt-8 flex items-center justify-center gap-6">
                    <Link
                        href={`/p/${code}/customers`}
                        className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-600 transition-all duration-500 shadow-xl shadow-slate-200"
                    >
                        Gérer les Clients
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Subtle bottom decoration */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-20 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="h-px w-12 bg-slate-300"></div>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.5em]">Architecture Zero-Trust Active</span>
                <div className="h-px w-12 bg-slate-300"></div>
            </div>
        </div>
    );
}
