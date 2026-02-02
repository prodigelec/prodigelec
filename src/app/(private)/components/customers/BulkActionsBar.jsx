'use client';

import { FileSpreadsheet, FileText, Trash2, X } from 'lucide-react';

export default function BulkActionsBar({
    selectedCount,
    onExportCSV,
    onExportPDF,
    onDelete,
    onClear
}) {
    if (selectedCount === 0) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-2xl shadow-lg flex items-center gap-4">
            <div className="flex items-center gap-3">
                <div className="bg-(--color-primary-soft) text-(--color-primary) px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedCount} sélectionné{selectedCount > 1 ? 's' : ''}
                </div>
            </div>
            <div className="w-px h-6 bg-slate-200" />
            <button
                onClick={onExportCSV}
                className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 rounded-lg transition-colors text-sm font-medium text-slate-600"
            >
                <FileSpreadsheet size={16} className="text-(--color-primary)" />
                CSV
            </button>
            <button
                onClick={onExportPDF}
                className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 rounded-lg transition-colors text-sm font-medium text-slate-600"
            >
                <FileText size={16} className="text-(--color-secondary)" />
                PDF
            </button>
            <button
                onClick={onDelete}
                className="flex items-center gap-2 px-3 py-1.5 hover:bg-(--color-danger-soft) rounded-lg transition-colors text-sm font-medium text-(--color-danger)"
            >
                <Trash2 size={16} />
                Supprimer
            </button>
            <button
                onClick={onClear}
                className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors text-slate-400 hover:text-slate-600"
                title="Désélectionner tout"
            >
                <X size={18} />
            </button>
        </div>
    );
}
