'use client';

import { useState } from 'react';
import { Plus, Trash2, Wrench, Package, Pencil } from 'lucide-react';
import QuoteLineModal from './QuoteLineModal';

export default function QuoteItemsTable({ items, onItemChange, onUpdateItem, onAddItem, onRemoveItem }) {
    const [activeRowIndex, setActiveRowIndex] = useState(null); // null = new item, number = edit item
    const [isLineModalOpen, setIsLineModalOpen] = useState(false);

    const openEditModal = (index) => {
        setActiveRowIndex(index);
        setIsLineModalOpen(true);
    };

    const openAddModal = () => {
        setActiveRowIndex(null);
        setIsLineModalOpen(true);
    };

    const handleSaveLine = (data) => {
        if (activeRowIndex !== null) {
            // Update existing
            onUpdateItem(activeRowIndex, data);
        } else {
            // Add new
            onAddItem(data);
        }
        setIsLineModalOpen(false);
    };

    const handleDeleteLine = () => {
        if (activeRowIndex !== null) {
            onRemoveItem(activeRowIndex);
            setIsLineModalOpen(false);
        }
    };

    return (
        <div className="space-y-4">
            {/* Desktop View: Table */}
            <div className="hidden md:block bg-white rounded-3xl p-1 shadow-sm border border-slate-100 overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50/80 rounded-xl">
                            <th className="pb-4 pt-4 px-4 w-16 first:rounded-l-xl">Type</th>
                            <th className="pb-4 pt-4 px-4">Description / Prestation</th>
                            <th className="pb-4 pt-4 px-4 w-20">Qté</th>
                            <th className="pb-4 pt-4 px-4 w-24">Unité</th>
                            <th className="pb-4 pt-4 px-4 w-32">P.U. HT</th>
                            <th className="pb-4 pt-4 px-4 w-20">TVA %</th>
                            <th className="pb-4 pt-4 px-4 w-36 text-right last:rounded-r-xl">Total HT</th>
                            <th className="pb-4 pt-4 px-2 w-20"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {items.map((item, index) => (
                            <tr key={index} className="group hover:bg-slate-50/50 transition-colors">
                                <td className="py-4 px-4 align-top">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.type === 'service' ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'}`}>
                                        {item.type === 'service' ? <Wrench size={16} /> : <Package size={16} />}
                                    </div>
                                </td>
                                <td className="py-4 px-4 align-top">
                                    <div onClick={() => openEditModal(index)} className="cursor-pointer group/desc">
                                        <p className="text-sm font-bold text-slate-700 whitespace-pre-wrap group-hover/desc:text-[var(--color-primary)] transition-colors">
                                            {item.description || <span className="text-slate-400 italic">Aucune description...</span>}
                                        </p>
                                    </div>
                                </td>
                                <td className="py-4 px-4 align-top">
                                    <span className="text-sm font-bold text-slate-700">{item.quantity}</span>
                                </td>
                                <td className="py-4 px-4 align-top">
                                    <span className="text-xs font-bold text-slate-500 uppercase bg-slate-100 px-2 py-1 rounded">{item.unity}</span>
                                </td>
                                <td className="py-4 px-4 align-top">
                                    <span className="text-sm font-bold text-slate-700">{parseFloat(item.unit_price).toFixed(2)} €</span>
                                </td>
                                <td className="py-4 px-4 align-top">
                                    <span className="text-sm font-bold text-slate-500">{item.vat_rate}%</span>
                                </td>
                                <td className="py-4 px-4 text-right align-top">
                                    <span className="text-sm font-bold text-slate-900">
                                        {(item.quantity * item.unit_price).toFixed(2)} €
                                    </span>
                                </td>
                                <td className="py-4 px-2 align-top text-right">
                                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button onClick={() => openEditModal(index)} className="p-2 hover:bg-slate-100 text-slate-400 hover:text-[var(--color-primary)] rounded-lg transition-colors" title="Modifier">
                                            <Pencil size={16} />
                                        </button>
                                        <button onClick={() => onRemoveItem(index)} className="p-2 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-lg transition-colors" title="Supprimer">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {items.length === 0 && (
                    <div className="text-center py-10">
                        <p className="text-slate-400 font-medium">Aucune prestation ou matériel ajouté</p>
                    </div>
                )}
            </div>

            {/* Mobile View: Cards */}
            <div className="flex flex-col gap-3 md:hidden">
                {items.map((item, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-[var(--color-primary)]/30 transition-all group relative"
                    >
                        {/* Header: Type, Desc, Actions */}
                        <div className="flex items-start gap-4 mb-4">
                            {/* Type Icon */}
                            <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${item.type === 'service' ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'}`}>
                                {item.type === 'service' ? <Wrench size={20} /> : <Package size={20} />}
                            </div>

                            {/* Description */}
                            <div 
                                onClick={() => openEditModal(index)}
                                className="flex-1 cursor-pointer"
                            >
                                <p className="text-sm font-bold text-slate-700 whitespace-pre-wrap leading-relaxed">
                                    {item.description || <span className="text-slate-400 italic">Aucune description...</span>}
                                </p>
                            </div>
                        </div>

                        {/* Details Stack (Vertical) */}
                        <div className="flex flex-col gap-3 pt-4 border-t border-slate-50">
                            {/* Quantity & Unit */}
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quantité</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold text-slate-700">{item.quantity}</span>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase bg-slate-100 px-1.5 py-0.5 rounded">{item.unity}</span>
                                </div>
                            </div>

                            {/* Unit Price */}
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Prix Unitaire</span>
                                <span className="text-sm font-bold text-slate-700">{parseFloat(item.unit_price).toFixed(2)} €</span>
                            </div>

                            {/* TVA */}
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">TVA</span>
                                <span className="text-sm font-bold text-slate-500">{item.vat_rate}%</span>
                            </div>

                            {/* Total HT */}
                            <div className="flex justify-between items-center pt-2 mt-1 border-t border-dashed border-slate-100">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total HT</span>
                                <span className="text-base font-bold text-[var(--color-primary)]">
                                    {(item.quantity * item.unit_price).toFixed(2)} €
                                </span>
                            </div>
                        </div>
                    </div>
                ))}

                {items.length === 0 && (
                    <div className="text-center py-10 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                        <p className="text-slate-400 font-medium">Aucune prestation ou matériel ajouté</p>
                    </div>
                )}
            </div>

            {/* Add Button */}
            <button
                onClick={openAddModal}
                className="w-full py-4 border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center gap-3 text-slate-500 font-bold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-white transition-all group bg-slate-50/50"
            >
                <div className="bg-slate-200 text-slate-500 rounded-full p-1.5 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                    <Plus size={18} />
                </div>
                Ajouter une ligne
            </button>

            <QuoteLineModal 
                isOpen={isLineModalOpen}
                onClose={() => setIsLineModalOpen(false)}
                onSave={handleSaveLine}
                onDelete={handleDeleteLine}
                initialData={activeRowIndex !== null ? items[activeRowIndex] : null}
            />
        </div>
    );
}
