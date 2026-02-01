'use client';

import { useState, useEffect } from 'react';
import { Search, Plus, User, Building2, Phone, Mail, MapPin, Loader2, Pencil, Trash2 } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import CustomerModal from './CustomerModal';
import ConfirmModal from '@/components/ui/ConfirmModal';
import CustomSelect from '@/components/ui/CustomSelect';

export default function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    
    // Delete Modal State
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [customerToDelete, setCustomerToDelete] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const fetchCustomers = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get('/api/customers');
            setCustomers(res.data);
        } catch (error) {
            console.error('Error fetching customers:', error);
            toast.error('Erreur lors du chargement des clients');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    const filterOptions = [
        { value: 'all', label: 'Tous les clients' },
        {
            label: 'Type',
            options: [
                { value: 'individual', label: 'Particuliers' },
                { value: 'professional', label: 'Professionnels' }
            ]
        },
        {
            label: 'Tags',
            options: [
                { value: 'VIP', label: 'VIP' },
                { value: 'Mauvais Payeur', label: 'Mauvais Payeur' },
                { value: 'Nouveau', label: 'Nouveau' },
                { value: 'Gros Volume', label: 'Gros Volume' }
            ]
        }
    ];

    const filteredCustomers = customers.filter(c => {
        // Filter by Type or Tag
        if (filterType !== 'all') {
            if (filterType === 'individual' && c.type !== 'individual') return false;
            if (filterType === 'professional' && c.type !== 'professional') return false;
            if (['VIP', 'Mauvais Payeur', 'Nouveau', 'Gros Volume'].includes(filterType)) {
                if (!c.tags || !c.tags.includes(filterType)) return false;
            }
        }

        const term = searchTerm.toLowerCase();
        return (
            c.first_name?.toLowerCase().includes(term) ||
            c.last_name?.toLowerCase().includes(term) ||
            c.company_name?.toLowerCase().includes(term) ||
            c.email?.toLowerCase().includes(term) ||
            c.city?.toLowerCase().includes(term)
        );
    });

    const handleEdit = (customer) => {
        setSelectedCustomer(customer);
        setIsModalOpen(true);
    };

    const handleDeleteClick = (e, customer) => {
        e.stopPropagation(); // Prevent row click
        setCustomerToDelete(customer);
        setIsDeleteModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!customerToDelete) return;
        
        setIsDeleting(true);
        try {
            await axios.delete(`/api/customers/${customerToDelete.id}`);
            toast.success('Client supprimé avec succès');
            fetchCustomers();
            setIsDeleteModalOpen(false);
            setCustomerToDelete(null);
        } catch (error) {
            console.error('Error deleting customer:', error);
            toast.error('Erreur lors de la suppression');
        } finally {
            setIsDeleting(false);
        }
    };

    const handleCreate = () => {
        setSelectedCustomer(null);
        setIsModalOpen(true);
    };

    const handleSuccess = () => {
        fetchCustomers();
    };

    return (
        <div className="space-y-6">
            {/* Header Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-1">
                    <div className="relative w-full sm:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input 
                            type="text" 
                            placeholder="Rechercher un client..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] outline-none transition-all shadow-sm"
                        />
                    </div>
                    <div className="w-full sm:w-48">
                        <CustomSelect
                            value={filterType}
                            onChange={setFilterType}
                            options={filterOptions}
                            placeholder="Filtrer par..."
                        />
                    </div>
                </div>
                <button 
                    onClick={handleCreate}
                    className="w-full sm:w-auto px-6 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                >
                    <Plus size={20} />
                    Nouveau Client
                </button>
            </div>

            {/* List */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                {isLoading ? (
                    <div className="flex items-center justify-center p-12 text-slate-400">
                        <Loader2 className="animate-spin mr-2" /> Chargement...
                    </div>
                ) : filteredCustomers.length === 0 ? (
                    <div className="flex flex-col items-center justify-center p-12 text-slate-400">
                        <User size={48} className="mb-4 opacity-20" />
                        <p>Aucun client trouvé.</p>
                        {searchTerm && <button onClick={() => setSearchTerm('')} className="text-primary hover:underline mt-2">Effacer la recherche</button>}
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-100 text-xs uppercase font-semibold text-slate-500 tracking-wider">
                                    <th className="px-6 py-4">Client</th>
                                    <th className="px-6 py-4">Contact</th>
                                    <th className="px-6 py-4">Localisation</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredCustomers.map((customer) => (
                                    <tr key={customer.id} className="hover:bg-slate-50/50 transition-colors group cursor-pointer" onClick={() => handleEdit(customer)}>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 ${
                                                    customer.type === 'professional' 
                                                    ? 'bg-(--color-info-soft) text-(--color-info)' 
                                                    : 'bg-(--color-primary-soft) text-primary'
                                                }`}>
                                                    {customer.type === 'professional' ? <Building2 size={18} /> : <User size={18} />}
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-slate-900">
                                                        {customer.type === 'professional' ? customer.company_name : `${customer.first_name} ${customer.last_name}`}
                                                    </div>
                                                    {customer.type === 'professional' && customer.first_name && (
                                                        <div className="text-xs text-slate-500">
                                                            Contact: {customer.first_name} {customer.last_name}
                                                        </div>
                                                    )}
                                                    <div className="text-xs text-slate-400 uppercase tracking-wide mt-0.5">
                                                        {customer.type === 'professional' ? 'Société' : 'Particulier'}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-2 items-start">
                                                {/* Status Badge */}
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                    customer.status === 'inactive' ? 'bg-slate-100 text-slate-500' :
                                                    customer.status === 'lead' ? 'bg-(--color-info-soft) text-(--color-info)' :
                                                    'bg-(--color-primary-soft) text-primary)'
                                                }`}>
                                                    {customer.status === 'inactive' ? 'Inactif' :
                                                     customer.status === 'lead' ? 'Prospect' : 'Actif'}
                                                </span>
                                                
                                                {/* Tags */}
                                                {customer.tags && customer.tags.length > 0 && (
                                                    <div className="flex flex-wrap gap-1">
                                                        {customer.tags.map((tag, idx) => {
                                                            const tagColors = {
                                                                'VIP': 'bg-accent-soft border-accent/30 text-accent',
                                                                'Mauvais Payeur': 'bg-(--color-danger-soft) border-(--color-danger)/30 text-(--color-danger)',
                                                                'Nouveau': 'bg-(--color-info-soft) border-(--color-info)/30 text-(--color-info)',
                                                                'Gros Volume': 'bg-(--color-primary-soft) border-(--color-primary)/30 text-(--color-primary)'
                                                            };
                                                            return (
                                                                <span key={idx} className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border ${
                                                                    tagColors[tag] || 'bg-slate-50 border-slate-200 text-slate-600'
                                                                }`}>
                                                                    {tag}
                                                                </span>
                                                            );
                                                        })}
                                                    </div>
                                                )}
                                            </div>
                                        </td>
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
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button 
                                                    onClick={(e) => { e.stopPropagation(); handleEdit(customer); }}
                                                    className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-full transition-colors"
                                                    title="Modifier"
                                                >
                                                    <Pencil size={18} />
                                                </button>
                                                <button 
                                                    onClick={(e) => handleDeleteClick(e, customer)}
                                                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                                    title="Supprimer"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <CustomerModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onSuccess={handleSuccess}
                customerToEdit={selectedCustomer}
            />

            <ConfirmModal 
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleConfirmDelete}
                title="Supprimer le client"
                message={`Êtes-vous sûr de vouloir supprimer le client ${customerToDelete?.company_name || (customerToDelete?.first_name + ' ' + customerToDelete?.last_name)} ? Cette action est irréversible.`}
                confirmText="Supprimer"
                cancelText="Annuler"
                isDangerous={true}
                isLoading={isDeleting}
            />
        </div>
    );
}
