export default function PortalPage() {
   

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <div className="flex flex-col gap-3">
                <h2 className="text-4xl font-black tracking-tight text-slate-900">Bienvenue au Portal, <span className="text-slate-400">Admin</span></h2>
                <p className="text-slate-500 font-semibold text-lg max-w-2xl">L'interface de gestion privilégiée de PRODIGELEC. Gérez vos opportunités et vos clients avec excellence.</p>
            </div>

           

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
                {/* Main Feed */}
                <div className="xl:col-span-2 space-y-8">
                    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
                        <div className="flex items-center justify-between mb-10">
                            <h3 className="text-xl font-black tracking-tight">Flux de données</h3>
                            <button className="text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest underline decoration-2 underline-offset-8">Voir tout</button>
                        </div>

                        <div className="space-y-8">
                            {[
                                { user: 'Jean Marc', action: 'Demande de devis serrurerie', time: '12 min', type: 'Lead' },
                                { user: 'Sophie Bernard', action: 'Validation facture #452', time: '1h', type: 'Facture' },
                                { user: 'Client Inconnu', action: 'Nouveau message formulaire', time: '3h', type: 'Email' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between group">
                                    <div className="flex items-center gap-6">
                                        <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center font-bold text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                                            {item.user[0]}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-base font-bold text-slate-900">{item.user}</span>
                                            <span className="text-sm font-medium text-slate-400">{item.action}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{item.time}</span>
                                        <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest bg-indigo-50 px-2 py-0.5 rounded-md">{item.type}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Action Sidebar */}
                <div className="space-y-8">
                    <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-2xl shadow-slate-200 flex flex-col gap-8 relative overflow-hidden group">
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full -mb-24 -mr-24 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-black mb-2">Actions Élite</h3>
                            <p className="text-slate-400 text-sm font-medium">Accédez rapidement à vos outils de production.</p>
                        </div>

                        <div className="space-y-4 relative z-10">
                            <button className="w-full py-4 px-6 bg-white/10 hover:bg-white text-white hover:text-slate-900 rounded-2xl font-black text-sm transition-all duration-300 flex items-center justify-between group/btn">
                                <span>Créer un devis PDF</span>
                                <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity">→</span>
                            </button>
                            <button className="w-full py-4 px-6 bg-white/10 hover:bg-white text-white hover:text-slate-900 rounded-2xl font-black text-sm transition-all duration-300 flex items-center justify-between group/btn">
                                <span>Ajouter un client</span>
                                <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity">→</span>
                            </button>
                            <button className="w-full py-4 px-6 bg-white/10 hover:bg-white text-white hover:text-slate-900 rounded-2xl font-black text-sm transition-all duration-300 flex items-center justify-between group/btn">
                                <span>Générer Rapport</span>
                                <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
