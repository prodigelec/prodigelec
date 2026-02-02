'use client';

import { useState } from 'react';
import { X, FileText, ArrowRight, UserPlus } from 'lucide-react';
import CustomerTypeSelector from '@/components/ui/CustomerTypeSelector';

/**
 * Modale pour choisir le type de client avant de créer un nouveau devis
 * Permet de sélectionner un client existant ou d'en créer un nouveau
 */
export default function NewQuoteTypeModal({
    isOpen,
    onClose,
    onSelectExistingCustomer,  // Callback avec le type sélectionné
    onCreateNewCustomer        // Callback pour créer un nouveau client
}) {
    const [selectedType, setSelectedType] = useState('individual');

    if (!isOpen) return null;

    const handleContinue = () => {
        if (onSelectExistingCustomer) {
            onSelectExistingCustomer(selectedType);
        }
        onClose();
    };

    const handleNewCustomer = () => {
        if (onCreateNewCustomer) {
            onCreateNewCustomer(selectedType);
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                {/* Header */}
                <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-50 to-white">
                    <div className="flex items-center gap-3">
                        <div className="bg-[var(--color-primary-soft)] p-2.5 rounded-xl text-[var(--color-primary)]">
                            <FileText size={22} />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-900">Nouveau Devis</h2>
                            <p className="text-xs text-slate-500">Sélectionnez le type de client</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Type de client</label>
                        <CustomerTypeSelector
                            value={selectedType}
                            onChange={setSelectedType}
                            layout="vertical"
                            size="normal"
                        />
                    </div>

                    {/* Info box */}
                    <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-600">
                        <p>
                            {selectedType === 'individual' && (
                                <>👤 <strong>Particulier</strong> : Devis simplifié avec nom/prénom et coordonnées.</>
                            )}
                            {selectedType === 'professional' && (
                                <>🏢 <strong>Professionnel</strong> : Devis avec SIRET, TVA intracommunautaire et conditions de paiement.</>
                            )}
                            {selectedType === 'syndic' && (
                                <>🏛️ <strong>Syndic</strong> : Devis avec adresse de facturation (syndic) et adresse d'intervention (immeuble).</>
                            )}
                        </p>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between gap-3">
                    <button
                        type="button"
                        onClick={handleNewCustomer}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
                    >
                        <UserPlus size={18} />
                        Créer un nouveau client
                    </button>
                    <button
                        type="button"
                        onClick={handleContinue}
                        className="flex items-center gap-2 px-6 py-2.5 bg-[var(--color-primary)] text-white rounded-xl font-bold shadow-lg shadow-[var(--color-primary)]/20 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        Client existant
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
