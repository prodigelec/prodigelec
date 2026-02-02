'use client';

import { User, Building2, Phone, Mail, MapPin, Pencil, Trash2, Check } from 'lucide-react';

const tagColors = {
    // Alertes / Actions
    'VIP': 'bg-(--color-accent-soft) border-(--color-accent)/30 text-(--color-accent)',
    'Mauvais Payeur': 'bg-(--color-danger-soft) border-(--color-danger)/30 text-(--color-danger)',
    'Facture à réclamer': 'bg-(--color-info-soft) border-(--color-info)/30 text-(--color-info)',
    'Accès Spécifique': 'bg-(--color-primary-soft) border-(--color-primary)/30 text-(--color-primary)',
    'Client Difficile': 'bg-slate-100 border-slate-300 text-slate-600',
    // Secteurs d'activité
    'Syndic': 'bg-(--color-primary-soft) border-(--color-primary)/20 text-(--color-primary)',
    'Agence Immobilière': 'bg-(--color-primary-soft) border-(--color-primary)/20 text-(--color-primary)',
    'Commerce': 'bg-(--color-primary-soft) border-(--color-primary)/20 text-(--color-primary)',
    'Bailleur': 'bg-(--color-primary-soft) border-(--color-primary)/20 text-(--color-primary)',
    'Entreprise': 'bg-(--color-primary-soft) border-(--color-primary)/20 text-(--color-primary)'
};

export default function CustomerTableRow({
    customer,
    isSelected,
    onSelect,
    onEdit,
    onDelete
}) {
    const handleSelect = (e) => {
        e.stopPropagation();
        onSelect(customer.id);
    };

    const handleEdit = (e) => {
        e.stopPropagation();
        onEdit(customer);
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        onDelete(customer);
    };

    return (
        <tr
            className={`hover:bg-slate-50/50 transition-colors group cursor-pointer ${isSelected ? 'bg-(--color-primary)/5' : ''}`}
            onClick={() => onEdit(customer)}
        >
            {/* Checkbox */}
            <td className="px-4 py-4 w-12">
                <button
                    onClick={handleSelect}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${isSelected
                        ? 'bg-(--color-primary) border-(--color-primary) text-white'
                        : 'border-slate-300 hover:border-slate-400'
                        }`}
                >
                    {isSelected && <Check size={12} strokeWidth={3} />}
                </button>
            </td>

            {/* Client Info */}
            <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 ${customer.type === 'professional'
                        ? 'bg-(--color-info-soft) text-(--color-info)'
                        : customer.type === 'syndic'
                            ? 'bg-(--color-secondary-soft) text-(--color-secondary)'
                            : 'bg-(--color-primary-soft) text-(--color-primary)'
                        }`}>
                        {customer.type === 'professional' || customer.type === 'syndic' ? <Building2 size={18} /> : <User size={18} />}
                    </div>
                    <div>
                        <div className="font-semibold text-slate-900">
                            {customer.type === 'professional' || customer.type === 'syndic' ? customer.company_name : `${customer.first_name} ${customer.last_name}`}
                        </div>
                        {(customer.type === 'professional' || customer.type === 'syndic') && customer.first_name && (
                            <div className="text-xs text-slate-500">
                                Contact: {customer.first_name} {customer.last_name}
                            </div>
                        )}
                        <div className="text-xs text-slate-400 uppercase tracking-wide mt-0.5">
                            {customer.type === 'professional' ? 'Société' : customer.type === 'syndic' ? 'Syndic / Agence' : 'Particulier'}
                        </div>
                    </div>
                </div>
            </td>

            {/* Status & Tags */}
            <td className="px-6 py-4">
                <div className="flex flex-col gap-2 items-start">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${customer.status === 'inactive' ? 'bg-slate-100 text-slate-500' :
                        customer.status === 'lead' ? 'bg-info-soft text-info' :
                            'bg-primary-soft text-primary'
                        }`}>
                        {customer.status === 'inactive' ? 'Inactif' :
                            customer.status === 'lead' ? 'À relancer' : 'Actif'}
                    </span>

                    {customer.tags && customer.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                            {customer.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border ${tagColors[tag] || 'bg-slate-50 border-slate-200 text-slate-600'
                                        }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </td>

            {/* Contact */}
            <td className="px-6 py-4">
                <div className="space-y-1">
                    {customer.email && (
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Mail size={14} className="text-slate-400" />
                            {customer.email}
                        </div>
                    )}
                    {customer.phone && (
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Phone size={14} className="text-slate-400" />
                            {customer.phone}
                        </div>
                    )}
                    {!customer.email && !customer.phone && <span className="text-slate-400 text-sm">-</span>}
                </div>
            </td>

            {/* Location */}
            <td className="px-6 py-4">
                {(customer.city || customer.zip_code) ? (
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <MapPin size={14} className="text-slate-400" />
                        {customer.zip_code} {customer.city}
                    </div>
                ) : (
                    <span className="text-slate-400 text-sm">-</span>
                )}
            </td>

            {/* Actions */}
            <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={handleEdit}
                        className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-full transition-colors"
                        title="Modifier"
                    >
                        <Pencil size={18} />
                    </button>
                    <button
                        onClick={handleDelete}
                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        title="Supprimer"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </td>
        </tr>
    );
}
