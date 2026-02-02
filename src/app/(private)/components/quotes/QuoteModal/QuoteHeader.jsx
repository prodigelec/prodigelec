'use client';

import { FileText, X } from 'lucide-react';

export default function QuoteHeader({ quote, onClose, quoteNumber, status }) {
    return (
        <div className="p-4 md:px-10 md:py-8 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
            <div className="flex items-center gap-4">
                <div className="bg-[var(--color-primary-soft)] p-3 rounded-2xl text-[var(--color-primary)]">
                    <FileText size={24} />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900">
                        {quote ? 'Modifier le devis' : 'Nouveau Devis'}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-md">
                            {quoteNumber}
                        </span>
                        {status === 'signed' && (
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md uppercase tracking-wider border border-emerald-100">
                                Signé
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <button
                onClick={onClose}
                className="group p-2 hover:bg-slate-100 rounded-full transition-all duration-200 text-slate-400 hover:text-slate-600 hover:rotate-90"
            >
                <X size={24} />
            </button>
        </div>
    );
}
