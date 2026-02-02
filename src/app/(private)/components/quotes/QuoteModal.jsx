'use client';

import { useState, useEffect } from 'react';
import {
    X, Plus, Trash2, Calendar, FileText,
    ChevronDown, Save, Send, Download, PenTool
} from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import SignatureModal from './SignatureModal';

export default function QuoteModal({ isOpen, onClose, quote = null, onSuccess }) {
    const [isSignatureModalOpen, setIsSignatureModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        customer_id: '',
        quote_number: '',
        status: 'draft',
        issued_at: new Date().toISOString().split('T')[0],
        valid_until: '',
        notes: '',
        terms: 'Valable 30 jours. Acompte de 30% à la commande.',
        items: [
            { description: '', quantity: 1, unit: 'unité', unit_price: 0, tva_rate: 20, total_ht: 0, item_type: 'service' }
        ],
        total_ht: 0,
        total_tva: 0,
        total_ttc: 0,
        total_services: 0,
        total_materials: 0,
        // Adresse d'intervention (si différente du client)
        intervention_address: '',
        intervention_city: '',
        intervention_zip_code: ''
    });
    const [showInterventionAddress, setShowInterventionAddress] = useState(false);

    const PREDEFINED_ITEMS = [
        { label: 'Main d\'œuvre', type: 'service', price: 50, tva: 20, unit: 'h' },
        { label: 'Déplacement', type: 'service', price: 45, tva: 20, unit: 'forfait' },
        { label: 'Diagnostic / Recherche de panne', type: 'service', price: 90, tva: 20, unit: 'forfait' },
        { label: 'Mise en service', type: 'service', price: 120, tva: 20, unit: 'unité' },
        { label: 'Fourniture petit matériel', type: 'material', price: 0, tva: 20, unit: 'unité' },
    ];

    const UNITS = ['unité', 'h', 'forfait', 'm²', 'm', 'kg', 'jour'];

    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);

    const calculateTotals = (items) => {
        const total_ht = items.reduce((sum, item) => sum + (item.quantity * item.unit_price), 0);
        const total_tva = items.reduce((sum, item) => sum + (item.quantity * item.unit_price * (item.tva_rate / 100)), 0);

        const total_services = items
            .filter(i => i.item_type === 'service')
            .reduce((sum, item) => sum + (item.quantity * item.unit_price), 0);

        const total_materials = items
            .filter(i => i.item_type === 'material')
            .reduce((sum, item) => sum + (item.quantity * item.unit_price), 0);

        return {
            total_ht,
            total_tva,
            total_ttc: total_ht + total_tva,
            total_services,
            total_materials
        };
    };

    useEffect(() => {
        if (isOpen) {
            fetchCustomers();
            if (quote) {
                const totals = calculateTotals(quote.items || []);
                setFormData({ ...quote, ...totals });
            } else {
                generateQuoteNumber();
            }
        }
    }, [isOpen, quote]);

    const fetchCustomers = async () => {
        try {
            const res = await axios.get('/api/customers');
            setCustomers(res.data);
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    const generateQuoteNumber = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        setFormData(prev => ({ ...prev, quote_number: `DEV-${year}${month}-${random}` }));
    };

    const handlePresetSelect = (index, selected) => {
        const newItems = [...formData.items];
        newItems[index] = {
            ...newItems[index],
            description: selected.label,
            item_type: selected.type,
            unit_price: selected.price,
            tva_rate: selected.tva,
            unit: selected.unit,
            total_ht: 1 * selected.price // Use 1 as default quantity if not already set or keep existing
        };
        const totals = calculateTotals(newItems);
        setFormData(prev => ({ ...prev, items: newItems, ...totals }));
    };

    const handleAddItem = () => {
        setFormData(prev => ({
            ...prev,
            items: [...prev.items, { description: '', quantity: 1, unit: 'unité', unit_price: 0, tva_rate: 20, total_ht: 0, item_type: 'service' }]
        }));
    };

    const handleRemoveItem = (index) => {
        const newItems = formData.items.filter((_, i) => i !== index);
        const totals = calculateTotals(newItems);
        setFormData(prev => ({ ...prev, items: newItems, ...totals }));
    };

    const handleItemChange = (index, field, value) => {
        const newItems = [...formData.items];
        newItems[index][field] = field === 'description' ? value : parseFloat(value) || 0;

        if (field !== 'description') {
            newItems[index].total_ht = newItems[index].quantity * newItems[index].unit_price;
        }

        const totals = calculateTotals(newItems);
        setFormData(prev => ({ ...prev, items: newItems, ...totals }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (quote) {
                await axios.put(`/api/quotes/${quote.id}`, formData);
                toast.success('Devis mis à jour');
            } else {
                await axios.post('/api/quotes', formData);
                toast.success('Devis créé avec succès');
            }
            onSuccess();
            onClose();
        } catch (error) {
            console.error('Error saving quote:', error);
            toast.error('Erreur lors de l\'enregistrement');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-6xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 ring-1 ring-white/20">
                {/* Header */}
                <div className="px-10 py-8 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
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
                                    {formData.quote_number}
                                </span>
                                {formData.status === 'signed' && (
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

                <form onSubmit={handleSubmit} className="flex-1 overflow-auto bg-slate-50/50">
                    <div className="p-10 md:p-12 space-y-10">
                        {/* Top Section: Client & Dates */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
                            {/* Client Selection - Takes more space */}
                            <div className="md:col-span-6 space-y-3">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                    Client <span className="text-red-500 text-base">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        required
                                        value={formData.customer_id}
                                        onChange={(e) => setFormData(prev => ({ ...prev, customer_id: e.target.value }))}
                                        className="w-full pl-4 pr-10 py-3 bg-slate-50 border-transparent hover:bg-slate-100 focus:bg-white border hover:border-slate-200 focus:border-[var(--color-primary)] rounded-2xl focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none transition-all duration-200 appearance-none font-medium text-slate-700 cursor-pointer"
                                    >
                                        <option value="">Sélectionner un client...</option>
                                        {customers.map(c => (
                                            <option key={c.id} value={c.id}>
                                                {c.company_name || `${c.first_name} ${c.last_name}`}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                                </div>
                            </div>

                            {/* Dates - Compact */}
                            <div className="md:col-span-3 space-y-3">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                    <Calendar size={14} /> Date d'émission
                                </label>
                                <input
                                    type="date"
                                    value={formData.issued_at}
                                    onChange={(e) => setFormData(prev => ({ ...prev, issued_at: e.target.value }))}
                                    className="w-full px-4 py-3 bg-slate-50 border-transparent hover:bg-slate-100 focus:bg-white border hover:border-slate-200 focus:border-[var(--color-primary)] rounded-2xl focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none transition-all duration-200 font-medium text-slate-700"
                                />
                            </div>
                            <div className="md:col-span-3 space-y-3">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                    <Calendar size={14} /> Validité
                                </label>
                                <input
                                    type="date"
                                    value={formData.valid_until}
                                    onChange={(e) => setFormData(prev => ({ ...prev, valid_until: e.target.value }))}
                                    className="w-full px-4 py-3 bg-slate-50 border-transparent hover:bg-slate-100 focus:bg-white border hover:border-slate-200 focus:border-[var(--color-primary)] rounded-2xl focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none transition-all duration-200 font-medium text-slate-700"
                                />
                            </div>

                            {/* Adresse d'intervention toggle */}
                            <div className="md:col-span-12">
                                <button
                                    type="button"
                                    onClick={() => setShowInterventionAddress(!showInterventionAddress)}
                                    className="text-xs font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] flex items-center gap-1 transition-colors"
                                >
                                    <ChevronDown size={14} className={`transition-transform ${showInterventionAddress ? 'rotate-180' : ''}`} />
                                    {showInterventionAddress ? 'Masquer' : 'Ajouter'} une adresse d'intervention différente
                                </button>

                                {showInterventionAddress && (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 p-4 bg-slate-50 rounded-xl">
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Adresse du chantier</label>
                                            <input
                                                type="text"
                                                value={formData.intervention_address}
                                                onChange={(e) => setFormData(prev => ({ ...prev, intervention_address: e.target.value }))}
                                                placeholder="Adresse de l'intervention..."
                                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 outline-none transition-all text-sm"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Code postal</label>
                                            <input
                                                type="text"
                                                value={formData.intervention_zip_code}
                                                onChange={(e) => setFormData(prev => ({ ...prev, intervention_zip_code: e.target.value }))}
                                                placeholder="27000"
                                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 outline-none transition-all text-sm"
                                            />
                                        </div>
                                        <div className="md:col-span-3 space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Ville</label>
                                            <input
                                                type="text"
                                                value={formData.intervention_city}
                                                onChange={(e) => setFormData(prev => ({ ...prev, intervention_city: e.target.value }))}
                                                placeholder="Ville du chantier"
                                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 outline-none transition-all text-sm"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* Items Table */}
                    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-10">
                        <div className="overflow-hidden">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50/80 rounded-xl">
                                        <th className="pb-4 pt-4 px-4 w-28 first:rounded-l-xl">Type</th>
                                        <th className="pb-4 pt-4 px-4">Description / Prestation</th>
                                        <th className="pb-4 pt-4 px-4 w-24">Qté</th>
                                        <th className="pb-4 pt-4 px-4 w-24">Unité</th>
                                        <th className="pb-4 pt-4 px-4 w-32">P.U. HT</th>
                                        <th className="pb-4 pt-4 px-4 w-24">TVA %</th>
                                        <th className="pb-4 pt-4 px-4 w-32 text-right last:rounded-r-xl">Total HT</th>
                                        <th className="pb-4 pt-4 px-2 w-12"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {formData.items.map((item, index) => (
                                        <tr key={index} className="group/row hover:bg-slate-50/50 transition-colors">
                                            <td className="py-4 px-2">
                                                <div className="relative">
                                                    <select
                                                        value={item.item_type}
                                                        onChange={(e) => handleItemChange(index, 'item_type', e.target.value)}
                                                        className={`w-full h-10 border-transparent bg-slate-50 rounded-xl px-3 text-xs font-bold focus:ring-2 focus:ring-[var(--color-primary)]/10 outline-none appearance-none cursor-pointer transition-all ${item.item_type === 'service' ? 'text-[var(--color-primary)] bg-[var(--color-primary-soft)]' : 'text-emerald-600 bg-emerald-50/50'
                                                            }`}
                                                    >
                                                        <option value="service">🛠️ Serv.</option>
                                                        <option value="material">📦 Mat.</option>
                                                    </select>
                                                    <ChevronDown className={`absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none ${item.item_type === 'service' ? 'text-[var(--color-primary)]' : 'text-emerald-400'
                                                        }`} size={14} />
                                                </div>
                                            </td>
                                            <td className="py-4 px-2">
                                                <div className="space-y-2">
                                                    <select
                                                        onChange={(e) => {
                                                            const selected = PREDEFINED_ITEMS.find(i => i.label === e.target.value);
                                                            if (selected) {
                                                                handlePresetSelect(index, selected);
                                                            }
                                                        }}
                                                        className="w-full bg-slate-50 border-none rounded-lg py-1 px-2 text-[11px] text-slate-500 font-bold focus:ring-0 outline-none cursor-pointer hover:bg-slate-100 transition-colors"
                                                    >
                                                        <option value="">-- Sélectionner une prestation --</option>
                                                        {PREDEFINED_ITEMS.map(opt => (
                                                            <option key={opt.label} value={opt.label}>{opt.label}</option>
                                                        ))}
                                                    </select>
                                                    <textarea
                                                        required
                                                        value={item.description}
                                                        onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                                                        placeholder="Désignation détaillée..."
                                                        className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-[var(--color-primary)] rounded-xl p-3 text-sm text-slate-700 font-medium placeholder:text-slate-300 focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none resize-none min-h-[56px] transition-all"
                                                        rows="1"
                                                        onInput={(e) => {
                                                            e.target.style.height = 'auto';
                                                            e.target.style.height = e.target.scrollHeight + 'px';
                                                        }}
                                                    />
                                                </div>
                                            </td>
                                            <td className="py-4 px-2">
                                                <input
                                                    type="number"
                                                    step="any"
                                                    value={item.quantity}
                                                    onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                                                    className="w-full h-10 bg-slate-50 border-transparent hover:bg-slate-100 focus:bg-white focus:border-[var(--color-primary)] border rounded-xl px-3 text-sm font-bold text-slate-700 outline-none transition-all text-center"
                                                />
                                            </td>
                                            <td className="py-4 px-2">
                                                <div className="relative">
                                                    <select
                                                        value={item.unit}
                                                        onChange={(e) => handleItemChange(index, 'unit', e.target.value)}
                                                        className="w-full h-10 bg-slate-50 border-transparent hover:bg-slate-100 focus:bg-white focus:border-[var(--color-primary)] border rounded-xl px-2 text-xs font-bold text-slate-600 outline-none appearance-none cursor-pointer transition-all"
                                                    >
                                                        {UNITS.map(u => (
                                                            <option key={u} value={u}>{u}</option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                                                </div>
                                            </td>
                                            <td className="py-4 px-2">
                                                <div className="relative group/price">
                                                    <input
                                                        type="number"
                                                        step="0.01"
                                                        value={item.unit_price}
                                                        onChange={(e) => handleItemChange(index, 'unit_price', e.target.value)}
                                                        className="w-full h-10 bg-slate-50 border-transparent hover:bg-slate-100 focus:bg-white focus:border-[var(--color-primary)] border rounded-xl pl-3 pr-7 text-sm font-bold text-slate-700 outline-none transition-all text-right"
                                                    />
                                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-bold group-focus-within/price:text-[var(--color-primary)]">€</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-2">
                                                <div className="relative">
                                                    <select
                                                        value={item.tva_rate}
                                                        onChange={(e) => handleItemChange(index, 'tva_rate', parseFloat(e.target.value))}
                                                        className="w-full h-10 bg-slate-50 border-transparent hover:bg-slate-100 focus:bg-white focus:border-[var(--color-primary)] border rounded-xl px-2 text-xs font-bold text-slate-600 outline-none appearance-none cursor-pointer transition-all text-right pr-6"
                                                    >
                                                        <option value="20">20%</option>
                                                        <option value="10">10%</option>
                                                        <option value="5.5">5.5%</option>
                                                        <option value="0">0%</option>
                                                    </select>
                                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">%</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4 text-right">
                                                <div className="h-10 flex items-center justify-end font-bold text-slate-900 bg-slate-50 rounded-xl px-3">
                                                    {(item.quantity * item.unit_price).toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                                                </div>
                                            </td>
                                            <td className="py-4 px-2 text-center">
                                                {formData.items.length > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveItem(index)}
                                                        className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all opacity-0 group-hover/row:opacity-100"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <button
                            type="button"
                            onClick={handleAddItem}
                            className="mt-6 w-full py-3 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center gap-2 text-slate-500 font-bold text-sm hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)] transition-all"
                        >
                            <Plus size={18} />
                            Ajouter une ligne
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Notes & Terms */}
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                    Notes (Privées)
                                </label>
                                <textarea
                                    value={formData.notes}
                                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                                    className="w-full bg-white border-transparent hover:bg-slate-50 focus:bg-white border hover:border-slate-200 focus:border-[var(--color-primary)] rounded-2xl p-4 text-sm text-slate-600 font-medium placeholder:text-slate-300 focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none resize-none h-24 transition-all shadow-sm"
                                    placeholder="Notes internes, ne sera pas visible sur le devis..."
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                    Conditions
                                </label>
                                <textarea
                                    value={formData.terms}
                                    onChange={(e) => setFormData(prev => ({ ...prev, terms: e.target.value }))}
                                    className="w-full bg-white border-transparent hover:bg-slate-50 focus:bg-white border hover:border-slate-200 focus:border-[var(--color-primary)] rounded-2xl p-4 text-sm text-slate-600 font-medium placeholder:text-slate-300 focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none resize-none h-24 transition-all shadow-sm"
                                    placeholder="Conditions de paiement..."
                                />
                            </div>
                        </div>

                        {/* Totals & Signature */}
                        <div className="space-y-6 h-fit">
                            {/* Indy-style Breakdown Card */}
                            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 space-y-3">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Répartition</h4>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-500 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
                                        Prestations
                                    </span>
                                    <span className="font-bold text-slate-700">{(formData.total_services || 0).toLocaleString()} €</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-500 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                        Matériel
                                    </span>
                                    <span className="font-bold text-slate-700">{(formData.total_materials || 0).toLocaleString()} €</span>
                                </div>
                            </div>

                            <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-4">
                                <div className="flex justify-between text-slate-400">
                                    <span>Total HT</span>
                                    <span className="font-bold text-white">{formData.total_ht.toLocaleString()} €</span>
                                </div>
                                <div className="flex justify-between text-slate-400 border-b border-white/10 pb-4">
                                    <span>Total TVA</span>
                                    <span className="font-bold text-white">{formData.total_tva.toLocaleString()} €</span>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-lg font-medium">Total TTC</span>
                                    <span className="text-3xl font-bold">{formData.total_ttc.toLocaleString()} €</span>
                                </div>
                            </div>

                            {/* Signature Display */}
                            {formData.status === 'signed' && formData.additionalData?.signature_data && (
                                <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-sm">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <PenTool size={14} />
                                        Devis Signé
                                    </div>
                                    <img
                                        src={formData.additionalData.signature_data}
                                        alt="Signature"
                                        className="w-full h-auto border border-slate-100 rounded-xl mb-4 bg-white"
                                    />
                                    <div className="text-xs text-slate-500 text-center bg-slate-50 p-3 rounded-xl">
                                        Signé par <span className="font-bold text-slate-900">{formData.additionalData.signer_name}</span>
                                        <br />
                                        le {new Date(formData.additionalData.signed_at).toLocaleDateString()} à {new Date(formData.additionalData.signed_at).toLocaleTimeString()}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </form>

                {/* Footer Actions */}
                <div className="px-10 py-8 border-t border-slate-100 flex items-center justify-between bg-white z-10">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-6 py-2.5 rounded-xl font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-all"
                    >
                        Annuler
                    </button>
                    <div className="flex items-center gap-3">
                        {quote && quote.id && (
                            <button
                                type="button"
                                onClick={() => setIsSignatureModalOpen(true)}
                                className="flex items-center gap-2 bg-[var(--color-primary-soft)] text-[var(--color-primary)] px-6 py-2.5 rounded-xl font-bold border border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/30 active:scale-[0.98] transition-all"
                            >
                                <PenTool size={18} />
                                {formData.status === 'signed' ? 'Voir Signature' : 'Signer'}
                            </button>
                        )}
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            disabled={loading}
                            className="flex items-center gap-2 bg-slate-900 text-white px-8 py-2.5 rounded-xl font-bold shadow-lg shadow-slate-900/10 hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Save size={18} />
                            {loading ? 'Enregistrement...' : 'Enregistrer'}
                        </button>
                        <button
                            type="button"
                            className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-2.5 rounded-xl font-bold shadow-lg shadow-[var(--color-primary)]/20 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                        >
                            <Send size={18} />
                            Envoyer
                        </button>
                    </div>
                </div>
            </div>

            <SignatureModal
                isOpen={isSignatureModalOpen}
                onClose={() => setIsSignatureModalOpen(false)}
                quote={quote}
                onSuccess={() => {
                    onSuccess();
                    // Update local state to reflect signature immediately if needed, 
                    // but onSuccess usually re-fetches or we can close modal.
                    // Ideally we should re-fetch this specific quote to get signature data.
                    onClose();
                }}
            />
        </div>
    );
}
