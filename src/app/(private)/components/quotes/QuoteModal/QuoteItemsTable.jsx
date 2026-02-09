"use client";

import { useState } from "react";
import { Plus, Trash2, Wrench, Package, Pencil } from "lucide-react";
import QuoteLineModal from "./QuoteLineModal";

export default function QuoteItemsTable({
  items,
  onItemChange,
  onUpdateItem,
  onAddItem,
  onRemoveItem,
}) {
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

  return (
    <div className="bg-white rounded-3xl p-1 shadow-sm border border-slate-100 overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50/80 rounded-xl">
            <th className="pb-4 pt-4 px-4 w-16 first:rounded-l-xl">Type</th>
            <th className="pb-4 pt-4 px-4">Description / Prestation</th>
            <th className="pb-4 pt-4 px-4 w-20">Qté</th>
            <th className="pb-4 pt-4 px-4 w-24">Unité</th>
            <th className="pb-4 pt-4 px-4 w-32">P.U. HT</th>
            <th className="pb-4 pt-4 px-4 w-20">TVA %</th>
            <th className="pb-4 pt-4 px-4 w-36 text-right last:rounded-r-xl">
              Total HT
            </th>
            <th className="pb-4 pt-4 px-2 w-20"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {items.map((item, index) => (
            <tr
              key={index}
              className="group hover:bg-slate-50/50 transition-colors"
            >
              {/* Type */}
              <td className="py-4 px-4 align-top">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.type === "service" ? "bg-amber-100 text-amber-600" : "bg-emerald-100 text-emerald-600"}`}
                >
                  {item.type === "service" ? (
                    <Wrench size={16} />
                  ) : (
                    <Package size={16} />
                  )}
                </div>
              </td>

              {/* Description */}
              <td className="py-4 px-4 align-top">
                <div
                  onClick={() => openEditModal(index)}
                  className="cursor-pointer group/desc"
                >
                  <p className="text-sm font-bold text-slate-700 whitespace-pre-wrap group-hover/desc:text-[var(--color-primary)] transition-colors">
                    {item.description || (
                      <span className="text-slate-400 italic">
                        Aucune description...
                      </span>
                    )}
                  </p>
                </div>
              </td>

              {/* Quantity */}
              <td className="py-4 px-4 align-top">
                <span className="text-sm font-bold text-slate-700">
                  {item.quantity}
                </span>
              </td>

              {/* Unit */}
              <td className="py-4 px-4 align-top">
                <span className="text-xs font-bold text-slate-500 uppercase bg-slate-100 px-2 py-1 rounded">
                  {item.unity}
                </span>
              </td>

              {/* Price */}
              <td className="py-4 px-4 align-top">
                <span className="text-sm font-bold text-slate-700">
                  {parseFloat(item.unit_price).toFixed(2)} €
                </span>
              </td>

              {/* TVA */}
              <td className="py-4 px-4 align-top">
                <span className="text-sm font-bold text-slate-500">
                  {item.vat_rate}%
                </span>
              </td>

              {/* Total */}
              <td className="py-4 px-4 text-right align-top">
                <span className="text-sm font-bold text-slate-900">
                  {(item.quantity * item.unit_price).toFixed(2)} €
                </span>
              </td>

              {/* Actions */}
              <td className="py-4 px-2 align-top text-right">
                <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => openEditModal(index)}
                    className="p-2 hover:bg-slate-100 text-slate-400 hover:text-[var(--color-primary)] rounded-lg transition-colors"
                    title="Modifier"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => onRemoveItem(index)}
                    className="p-2 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-lg transition-colors"
                    title="Supprimer"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Button */}
      <div className="p-4 border-t border-slate-100 bg-slate-50/50">
        <button
          onClick={openAddModal}
          className="w-full py-3 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center gap-2 text-slate-500 font-bold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-white transition-all group"
        >
          <div className="bg-slate-200 text-slate-500 rounded-full p-1 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
            <Plus size={16} />
          </div>
          Ajouter une ligne
        </button>
      </div>

      <QuoteLineModal
        key={activeRowIndex}
        isOpen={isLineModalOpen}
        onClose={() => setIsLineModalOpen(false)}
        onSave={handleSaveLine}
        initialData={activeRowIndex !== null ? items[activeRowIndex] : null}
      />
    </div>
  );
}
