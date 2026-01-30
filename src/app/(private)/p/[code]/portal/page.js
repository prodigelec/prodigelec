import {
    TrendingUp,
    Users,
    Construction,
    Wallet,
    ArrowRight,
    PlusCircle,
    FileText,
    History
} from 'lucide-react';

/**
 * Portal Dashboard - Pennylane Aesthetic Edition
 * Uses soft vibrant colors and airy card designs.
 */
export default function PortalDashboardPage() {
    const stats = [
        {
            name: 'Leads Chauds',
            value: '7',
            change: '+2',
            icon: <TrendingUp size={20} />,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50',
            iconBg: 'icon-box-primary'
        },
        {
            name: 'Clients Actifs',
            value: '148',
            change: '+12%',
            icon: <Users size={20} />,
            color: 'text-violet-600',
            bg: 'bg-violet-50',
            iconBg: 'icon-box-secondary'
        },
        {
            name: 'En Chantier',
            value: '4',
            change: 'Stable',
            icon: <Construction size={20} />,
            color: 'text-amber-600',
            bg: 'bg-amber-50',
            iconBg: 'icon-box-accent'
        },
        {
            name: 'Facturation (Mois)',
            value: '12.4k€',
            change: '+8%',
            icon: <Wallet size={20} />,
            color: 'text-sky-600',
            bg: 'bg-sky-50',
            iconBg: 'bg-gradient-to-br from-sky-500 to-sky-600'
        },
    ];

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-700">
            {/* Header Section */}
            <div className="flex flex-col gap-2">
                <span className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.2em]">Tableau de Bord</span>
                <h2 className="text-3xl font-black tracking-tight text-slate-900">
                    Content de vous revoir, <span className="text-slate-400">Admin</span> 👋
                </h2>
                <p className="text-slate-500 font-medium text-base">
                    Voici l'aperçu de votre activité PRODIGELEC pour aujourd'hui.
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.name} className="portal-card p-6 flex flex-col gap-4 group">
                        <div className="flex items-center justify-between">
                            <div className={`w-12 h-12 rounded-2xl ${stat.iconBg} flex items-center justify-center text-white shadow-lg shadow-current/20`}>
                                {stat.icon}
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-lg ${stat.bg} ${stat.color}`}>
                                {stat.change}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.name}</span>
                            <span className="text-3xl font-black tracking-tighter text-slate-900 mt-1">{stat.value}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Activity Feed */}
                <div className="xl:col-span-2 space-y-6">
                    <div className="portal-card p-8">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-6 bg-emerald-500 rounded-full"></div>
                                <h3 className="text-lg font-black tracking-tight text-slate-900">Activité Récente</h3>
                            </div>
                            <button className="text-[10px] font-black text-slate-400 hover:text-emerald-600 transition-colors uppercase tracking-[0.1em] flex items-center gap-2 group/btn">
                                Tout voir <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="space-y-6">
                            {[
                                { user: 'Jean Marc', action: 'Nouveau devis généré', time: '12 min', type: 'Devis', color: 'bg-amber-100 text-amber-600' },
                                { user: 'Sophie Bernard', action: 'Facture payée #FAC-04', time: '1h', type: 'Paiement', color: 'bg-emerald-100 text-emerald-600' },
                                { user: 'Lucas Dubois', action: 'Rendez-vous chantier fixé', time: '3h', type: 'RDV', color: 'bg-violet-100 text-violet-600' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors group/item">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center font-black text-slate-300 group-hover/item:text-emerald-500 transition-colors">
                                            {item.user[0]}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-900">{item.user}</span>
                                            <span className="text-xs font-medium text-slate-500">{item.action}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-1.5">
                                        <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{item.time}</span>
                                        <span className={`text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest ${item.color}`}>
                                            {item.type}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-6">
                    <div className="portal-card p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0 shadow-xl shadow-slate-200">
                        <h3 className="text-lg font-black mb-6 flex items-center gap-3">
                            <PlusCircle size={20} className="text-emerald-400" />
                            Actions Rapides
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                            <button className="w-full p-4 bg-white/10 hover:bg-white/20 rounded-2xl text-left transition-all duration-300 flex items-center justify-between group/act">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                                        <FileText size={16} />
                                    </div>
                                    <span className="text-sm font-bold">Nouveau Devis</span>
                                </div>
                                <ArrowRight size={14} className="opacity-0 group-hover/act:opacity-100 group-hover/act:translate-x-1 transition-all" />
                            </button>
                            <button className="w-full p-4 bg-white/10 hover:bg-white/20 rounded-2xl text-left transition-all duration-300 flex items-center justify-between group/act">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-amber-500/20 rounded-lg text-amber-400">
                                        <PlusCircle size={16} />
                                    </div>
                                    <span className="text-sm font-bold">Ajouter Client</span>
                                </div>
                                <ArrowRight size={14} className="opacity-0 group-hover/act:opacity-100 group-hover/act:translate-x-1 transition-all" />
                            </button>
                            <button className="w-full p-4 bg-white/10 hover:bg-white/20 rounded-2xl text-left transition-all duration-300 flex items-center justify-between group/act">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-violet-500/20 rounded-lg text-violet-400">
                                        <History size={16} />
                                    </div>
                                    <span className="text-sm font-bold">Historique Global</span>
                                </div>
                                <ArrowRight size={14} className="opacity-0 group-hover/act:opacity-100 group-hover/act:translate-x-1 transition-all" />
                            </button>
                        </div>
                    </div>

                    {/* Support card */}
                    <div className="portal-card p-6 bg-emerald-50 border-emerald-100">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                                <ShieldCheck size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-black text-emerald-900">Support Élite</span>
                                <span className="text-xs font-semibold text-emerald-600/80">Disponible 24h/7j</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
