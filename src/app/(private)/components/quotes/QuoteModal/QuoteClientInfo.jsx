'use client';

import { useState } from 'react';
import { Calendar, ChevronDown, MapPin, Pencil, X } from 'lucide-react';
import InterventionAddressModal from './InterventionAddressModal';

export default function QuoteClientInfo({
    formData,
    customers,
    preselectedType,
    onChange, // Generic handler
    showInterventionAddress,
    onToggleInterventionAddress,
}) {
    // Calcul des dates min/max pour les inputs date
    const today = new Date().toISOString().split('T')[0];
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

    const handleSaveIntervention = (data) => {
        // Handle clearing (string) or updating (object)
        if (typeof data === 'string') {
            onChange({ target: { name: 'intervention_address', value: data } });
            onChange({ target: { name: 'intervention_contact', value: '' } });
            return;
        }

        const { address, contactName } = data;
        onChange({ target: { name: 'intervention_address', value: address } });
        onChange({ target: { name: 'intervention_contact', value: contactName } });
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 relative overflow-hidden">
            {/* Décoration d'arrière-plan */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 z-0">
                {/* Client Selection */}
                <div className="col-span-1 md:col-span-5">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                        Client <span className="text-red-400 text-sm">*</span>
                    </label>
                    <div className="relative group">
                        <select
                            name="customer_id"
                            value={formData.customer_id}
                            onChange={onChange}
                            required
                            className="w-full pl-4 pr-10 py-3 bg-slate-50 border-transparent hover:bg-slate-100 focus:bg-white border hover:border-slate-200 focus:border-[var(--color-primary)] rounded-2xl focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none transition-all duration-200 appearance-none font-medium text-slate-700 cursor-pointer"
                        >
                            <option value="">Sélectionner un client...</option>
                            {customers
                                .filter(c => !preselectedType || c.type === preselectedType)
                                .map(c => (
                                    <option key={c.id} value={c.id}>
                                        {c.company_name || `${c.first_name} ${c.last_name}`}
                                    </option>
                                ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-[var(--color-primary)] transition-colors" size={16} />
                    </div>

                    {/* Intervention Address Toggle */}
                    <div className="mt-4 pl-1">
                        {!formData.intervention_address ? (
                            <button
                                type="button"
                                onClick={() => setIsAddressModalOpen(true)}
                                className="group text-xs font-bold text-slate-500 hover:text-[var(--color-primary)] flex items-center gap-2 transition-all py-2 px-3 hover:bg-[var(--color-primary-soft)] rounded-lg"
                            >
                                <div className={`p-1 rounded-full bg-slate-100 group-hover:bg-white transition-colors duration-200`}>
                                    <MapPin size={14} className="text-slate-400 group-hover:text-[var(--color-primary)]" />
                                </div>
                                <span>Ajouter une adresse d'intervention différente</span>
                            </button>
                        ) : (
                            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 ml-1 flex items-center gap-1">
                                    Adresse d'intervention
                                </label>
                                <div className="flex items-center gap-2">
                                    <div 
                                        onClick={() => setIsAddressModalOpen(true)}
                                        className="flex-1 bg-amber-50 border border-amber-100 hover:border-amber-200 rounded-xl py-2.5 px-3 text-sm font-medium text-amber-900 cursor-pointer flex items-center gap-2 group transition-all"
                                    >
                                        <MapPin size={16} className="text-amber-500 flex-shrink-0" />
                                        <span className="truncate">
                                            {formData.intervention_contact && <span className="font-bold mr-1">{formData.intervention_contact} -</span>}
                                            {formData.intervention_address}
                                        </span>
                                    </div>
                                    <button 
                                        type="button"
                                        onClick={() => handleSaveIntervention('')}
                                        className="p-2.5 bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-xl transition-colors"
                                        title="Supprimer l'adresse d'intervention"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <InterventionAddressModal
                    isOpen={isAddressModalOpen}
                    onClose={() => setIsAddressModalOpen(false)}
                    onSave={handleSaveIntervention}
                    initialAddress={formData.intervention_address}
                    initialContactName={formData.intervention_contact}
                />

                {/* Dates */}
                <div className="col-span-1 md:col-span-7 flex flex-col md:flex-row gap-4 md:gap-6">
                    <div className="flex-1">
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                            <Calendar size={12} />
                            Date d'émission
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={onChange}
                            className="w-full bg-slate-50 border-transparent hover:bg-slate-100 focus:bg-white border hover:border-slate-200 focus:border-[var(--color-primary)] rounded-xl p-3 text-sm font-semibold text-slate-700 focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none transition-all"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                            <Calendar size={12} />
                            Validité
                        </label>
                        <input
                            type="date"
                            name="valid_until"
                            value={formData.valid_until}
                            onChange={onChange}
                            min={formData.date || today}
                            className="w-full bg-slate-50 border-transparent hover:bg-slate-100 focus:bg-white border hover:border-slate-200 focus:border-[var(--color-primary)] rounded-xl p-3 text-sm font-semibold text-slate-700 focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none transition-all"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
