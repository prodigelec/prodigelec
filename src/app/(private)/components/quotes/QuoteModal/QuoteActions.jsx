'use client';

import { Save, Send, PenTool } from 'lucide-react';

export default function QuoteActions({ loading, status, onClose, onSave, onSign, onSend, isEditMode }) {
    return (
        <div className="px-10 py-8 border-t border-slate-100 flex items-center justify-between bg-white z-10">
            <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-all"
            >
                Annuler
            </button>
            <div className="flex items-center gap-3">
                {isEditMode && (
                    <button
                        type="button"
                        onClick={onSign}
                        className="flex items-center gap-2 bg-[var(--color-primary-soft)] text-[var(--color-primary)] px-6 py-2.5 rounded-xl font-bold border border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/30 active:scale-[0.98] transition-all"
                    >
                        <PenTool size={18} />
                        {status === 'signed' ? 'Voir Signature' : 'Signer'}
                    </button>
                )}
                <button
                    type="submit"
                    onClick={onSave}
                    disabled={loading}
                    className="flex items-center gap-2 bg-slate-900 text-white px-8 py-2.5 rounded-xl font-bold shadow-lg shadow-slate-900/10 hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Save size={18} />
                    {loading ? 'Enregistrement...' : 'Enregistrer'}
                </button>
                <button
                    type="button"
                    onClick={onSend}
                    className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-2.5 rounded-xl font-bold shadow-lg shadow-[var(--color-primary)]/20 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                >
                    <Send size={18} />
                    Envoyer
                </button>
            </div>
        </div>
    );
}
