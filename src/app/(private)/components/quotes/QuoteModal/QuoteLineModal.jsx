'use client';

import { useState, useEffect } from 'react';
import { X, Save, BookOpen, Calculator, Package, Wrench } from 'lucide-react';
import CatalogModal from './CatalogModal';

export default function QuoteLineModal({ isOpen, onClose, onSave, initialData }) {
    const [formData, setFormData] = useState({
        type: 'service',
        description: '',
        quantity: 1,
        unity: 'forfait',
        unit_price: 0,
        vat_rate: 10
    });
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            if (initialData) {
                setFormData({
                    type: initialData.type || 'service',
                    description: initialData.description || '',
                    quantity: initialData.quantity || 1,
                    unity: initialData.unity || 'forfait',
                    unit_price: initialData.unit_price || 0,
                    vat_rate: initialData.vat_rate || 10
                });
            } else {
                setFormData({
                    type: 'service',
                    description: '',
                    quantity: 1,
                    unity: 'forfait',
                    unit_price: 0,
                    vat_rate: 10
                });
            }
        }
    }, [isOpen, initialData]);

    if (!isOpen) return null;

    const handleCatalogSelect = (item) => {
        setFormData(prev => ({
            ...prev,
            type: item.type,
            description: item.description || item.label,
            unity: item.unity,
            unit_price: item.price,
            // Keep existing quantity/vat or reset? Let's keep existing quantity, maybe reset VAT?
            // Usually catalog items might imply a VAT rate, but here we don't store it in catalog.
        }));
        setIsCatalogOpen(false);
    };

    const total = formData.quantity * formData.unit_price;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
             {/* Modal Content */}
             <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <h2 className="text-lg font-bold text-slate-800">
                        {initialData ? 'Modifier la ligne' : 'Ajouter une ligne'}
                    </h2>
                    <button onClick={onClose}><X size={20} className="text-slate-400 hover:text-slate-600" /></button>
                </div>

                <div className="p-6 space-y-6 overflow-y-auto">
                    {/* Catalog Button */}
                    <button 
                        onClick={() => setIsCatalogOpen(true)}
                        className="w-full flex items-center justify-center gap-2 py-3 border border-dashed border-slate-300 rounded-xl text-slate-500 font-medium hover:bg-slate-50 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"
                    >
                        <BookOpen size={18} />
                        Importer depuis le catalogue
                    </button>

                    {/* Type Selection */}
                    <div className="flex bg-slate-100 p-1 rounded-xl">
                        <button
                            onClick={() => setFormData({...formData, type: 'service'})}
                            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition-all ${formData.type === 'service' ? 'bg-white text-amber-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            <Wrench size={16} /> Service
                        </button>
                        <button
                            onClick={() => setFormData({...formData, type: 'material'})}
                            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition-all ${formData.type === 'material' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            <Package size={16} /> Matériel
                        </button>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Description</label>
                        <textarea
                            value={formData.description}
                            onChange={e => setFormData({...formData, description: e.target.value})}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-700 font-medium focus:ring-2 focus:ring-[var(--color-primary)]/10 focus:border-[var(--color-primary)] outline-none resize-none min-h-[100px]"
                            placeholder="Détails de la prestation..."
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Quantity */}
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Quantité</label>
                            <input
                                type="number"
                                value={formData.quantity}
                                onChange={e => setFormData({...formData, quantity: parseFloat(e.target.value) || 0})}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 font-bold text-slate-700 focus:ring-2 focus:ring-[var(--color-primary)]/10 focus:border-[var(--color-primary)] outline-none"
                            />
                        </div>
                        {/* Unity */}
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Unité</label>
                            <select
                                value={formData.unity}
                                onChange={e => setFormData({...formData, unity: e.target.value})}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 font-bold text-slate-700 focus:ring-2 focus:ring-[var(--color-primary)]/10 focus:border-[var(--color-primary)] outline-none appearance-none"
                            >
                                <option value="forfait">Forfait</option>
                                <option value="h">Heure(s)</option>
                                <option value="unité">Unité(s)</option>
                                <option value="m">Mètre(s)</option>
                                <option value="m²">m²</option>
                                <option value="ens">Ens.</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Price */}
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Prix Unitaire HT</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={formData.unit_price}
                                    onChange={e => setFormData({...formData, unit_price: parseFloat(e.target.value) || 0})}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 pr-8 font-bold text-slate-700 focus:ring-2 focus:ring-[var(--color-primary)]/10 focus:border-[var(--color-primary)] outline-none"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">€</span>
                            </div>
                        </div>
                        {/* TVA */}
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">TVA</label>
                            <select
                                value={formData.vat_rate}
                                onChange={e => setFormData({...formData, vat_rate: parseFloat(e.target.value)})}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 font-bold text-slate-700 focus:ring-2 focus:ring-[var(--color-primary)]/10 focus:border-[var(--color-primary)] outline-none appearance-none"
                            >
                                <option value="0">0%</option>
                                <option value="10">10%</option>
                                <option value="20">20%</option>
                            </select>
                        </div>
                    </div>

                    {/* Total Preview */}
                    <div className="bg-slate-900 rounded-xl p-4 flex justify-between items-center text-white">
                        <span className="text-sm font-medium text-slate-400">Total Ligne HT</span>
                        <span className="text-xl font-bold">{total.toFixed(2)} €</span>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
                    <button onClick={onClose} className="px-4 py-2 text-slate-600 font-bold hover:bg-slate-200 rounded-lg transition-colors">Annuler</button>
                    <button 
                        onClick={() => onSave(formData)} 
                        className="px-6 py-2 bg-[var(--color-primary)] text-white font-bold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors flex items-center gap-2"
                    >
                        <Save size={18} />
                        Enregistrer
                    </button>
                </div>
             </div>

             <CatalogModal isOpen={isCatalogOpen} onClose={() => setIsCatalogOpen(false)} onSelect={handleCatalogSelect} />
        </div>
    );
}
