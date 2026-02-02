'use client';

export default function QuoteSummary({
    formData,
    totals,
    onChange, // Generic handler
    quote, // Pour la signature (si on veut l'afficher ici, mais c'est géré par QuoteModal pour l'instant via Signature image)
    signatureUrl // Si on veut afficher la signature
}) {
    return (
        <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
                <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Notes (Privées)
                    </label>
                    <textarea
                        name="notes"
                        value={formData.notes || ''}
                        onChange={onChange}
                        placeholder="Notes internes, ne sera pas visible sur le devis..."
                        rows="3"
                        className="w-full bg-white border border-slate-100 hover:border-slate-200 focus:border-[var(--color-primary)] rounded-2xl p-4 text-sm focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none resize-none transition-all"
                    />
                </div>
                <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Conditions
                    </label>
                    <textarea
                        name="terms"
                        value={formData.terms || ''}
                        onChange={onChange}
                        placeholder="Conditions spécifiques pour ce devis..."
                        rows="2"
                        className="w-full bg-white border border-slate-100 hover:border-slate-200 focus:border-[var(--color-primary)] rounded-2xl p-4 text-sm focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none resize-none transition-all"
                    />
                </div>

                {/* Signature Preview if signed */}
                {quote?.signature_data && (
                    <div className="mt-4 bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
                        <label className="block text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-2">
                            Devis Signé par le client
                        </label>
                        <img
                            src={quote.signature_data}
                            alt="Signature Client"
                            className="max-h-24 opacity-80 mix-blend-multiply"
                        />
                    </div>
                )}
            </div>
            <div className="space-y-4">
                <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">Répartition</h4>
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-medium text-slate-600">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                                Prestations
                            </span>
                            <span>{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(totals.services)}</span>
                        </div>
                        <div className="flex justify-between text-xs font-medium text-slate-600">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                Matériel
                            </span>
                            <span>{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(totals.materials)}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl shadow-slate-900/20">
                    <div className="space-y-3 pb-6 border-b border-white/10">
                        <div className="flex justify-between items-center text-sm text-slate-400 font-medium">
                            <span>Total HT</span>
                            <span>{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(totals.ht)}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-slate-400 font-medium">
                            <span>Total TVA</span>
                            <span>{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(totals.tva)}</span>
                        </div>
                    </div>
                    <div className="pt-6 flex justify-between items-end">
                        <span className="text-sm font-bold text-slate-300 uppercase tracking-wide">Total TTC</span>
                        <span className="text-3xl font-bold tracking-tight">
                            {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(totals.ttc)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
