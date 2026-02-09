'use client';

import { useState, useEffect } from 'react';
import { Search, Plus, User, Loader2 } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

// Sub-components
import CustomerModal from './CustomerModal';
import CustomerStats from './CustomerStats';
import CustomerTableHeader from './CustomerTableHeader';
import CustomerTableRow from './CustomerTableRow';
import BulkActionsBar from './BulkActionsBar';
import ExportDropdown from './ExportDropdown';

// UI Components
import ConfirmModal from '@/components/ui/ConfirmModal';
import CustomSelect from '@/components/ui/CustomSelect';

// Utils
import { exportCustomersToCSV, exportCustomersToPDF } from './utils/customerExport';

export default function CustomerList() {
    // Data state
    const [customers, setCustomers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Filter state
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    // Delete state
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [customerToDelete, setCustomerToDelete] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    // Sorting state
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    // Multi-select state
    const [selectedIds, setSelectedIds] = useState([]);
    const [isBulkDeleteOpen, setIsBulkDeleteOpen] = useState(false);
    const [isBulkDeleting, setIsBulkDeleting] = useState(false);

    // Fetch customers on mount
    useEffect(() => {
        fetchCustomers();
    }, []);

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

    // Filter options
    const filterOptions = [
        { value: 'all', label: 'Tous les clients' },
        { value: 'professional', label: 'Professionnels' },
        { value: 'syndic', label: 'Syndics' },
        { value: 'individual', label: 'Particuliers' },
        { value: 'active', label: 'Actifs' },
        { value: 'lead', label: 'À relancer' },
        { value: 'inactive', label: 'Inactifs' }
    ];

    // Filter and sort customers
    const filteredCustomers = customers.filter(c => {
        if (filterType === 'professional' && c.type !== 'professional') return false;
        if (filterType === 'syndic' && c.type !== 'syndic') return false;
        if (filterType === 'individual' && c.type !== 'individual') return false;
        if (filterType === 'active' && c.status !== 'active') return false;
        if (filterType === 'lead' && c.status !== 'lead') return false;
        if (filterType === 'inactive' && c.status !== 'inactive') return false;

        const term = searchTerm.toLowerCase();
        return (
            c.first_name?.toLowerCase().includes(term) ||
            c.last_name?.toLowerCase().includes(term) ||
            c.company_name?.toLowerCase().includes(term) ||
            c.email?.toLowerCase().includes(term) ||
            c.city?.toLowerCase().includes(term)
        );
    });

    const sortedCustomers = [...filteredCustomers].sort((a, b) => {
        if (!sortConfig.key) return 0;

        let aValue, bValue;
        switch (sortConfig.key) {
            case 'name':
                aValue = a.type === 'professional' ? a.company_name : `${a.first_name} ${a.last_name}`;
                bValue = b.type === 'professional' ? b.company_name : `${b.first_name} ${b.last_name}`;
                break;
            case 'email':
                aValue = a.email || '';
                bValue = b.email || '';
                break;
            case 'city':
                aValue = a.city || '';
                bValue = b.city || '';
                break;
            case 'status':
                aValue = a.status || 'active';
                bValue = b.status || 'active';
                break;
            default:
                return 0;
        }

        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();

        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
    });

    // Handlers
    const handleSort = (key) => {
        setSortConfig(prev => ({
            key,
            direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
        }));
    };

    const handleEdit = (customer) => {
        setSelectedCustomer(customer);
        setIsModalOpen(true);
    };

    const handleCreate = () => {
        setSelectedCustomer(null);
        setIsModalOpen(true);
    };

    const handleDeleteClick = (customer) => {
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
            const msg = error.response?.data?.error || 'Erreur lors de la suppression';
            toast.error(msg);
        } finally {
            setIsDeleting(false);
        }
    };

    const handleSuccess = () => {
        fetchCustomers();
        setSelectedIds([]);
    };

    // Selection handlers
    const handleSelectAll = () => {
        if (selectedIds.length === sortedCustomers.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(sortedCustomers.map(c => c.id));
        }
    };

    const handleSelectOne = (customerId) => {
        setSelectedIds(prev =>
            prev.includes(customerId)
                ? prev.filter(id => id !== customerId)
                : [...prev, customerId]
        );
    };

    // Bulk actions
    const handleBulkDelete = async () => {
        const selectedCustomers = customers.filter(c => selectedIds.includes(c.id));
        const protectedCustomers = selectedCustomers.filter(c => c.has_quotes);
        
        if (protectedCustomers.length > 0) {
            toast.error(`Impossible de supprimer ${protectedCustomers.length} client(s) car ils possèdent des devis.`);
            return;
        }

        setIsBulkDeleting(true);
        try {
            await Promise.all(selectedIds.map(id => axios.delete(`/api/customers/${id}`)));
            toast.success(`${selectedIds.length} client(s) supprimé(s) avec succès`);
            fetchCustomers();
            setSelectedIds([]);
            setIsBulkDeleteOpen(false);
        } catch (error) {
            console.error('Error bulk deleting:', error);
            const msg = error.response?.data?.error || 'Erreur lors de la suppression groupée';
            toast.error(msg);
        } finally {
            setIsBulkDeleting(false);
        }
    };

    const handleBulkExportCSV = () => {
        const selectedCustomers = customers.filter(c => selectedIds.includes(c.id));
        exportCustomersToCSV(selectedCustomers, 'clients_selection');
        setSelectedIds([]);
    };

    const handleBulkExportPDF = async () => {
        const selectedCustomers = customers.filter(c => selectedIds.includes(c.id));
        await exportCustomersToPDF(selectedCustomers, 'clients_selection', 'Clients Sélectionnés', 'Sélection de Clients');
        setSelectedIds([]);
    };

    // Export all
    const handleExportCSV = () => {
        exportCustomersToCSV(filteredCustomers, 'clients_prodigelec');
    };

    const handleExportPDF = async () => {
        await exportCustomersToPDF(filteredCustomers, 'clients_prodigelec');
    };

    return (
        <div className="space-y-6">
            <CustomerStats customers={customers} />

            {/* Search, Filter, Export & Add */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                    <div className="relative w-full sm:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Rechercher un client..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"
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
                    <ExportDropdown
                        onExportCSV={handleExportCSV}
                        onExportPDF={handleExportPDF}
                    />
                </div>
                <button
                    onClick={handleCreate}
                    className="w-full sm:w-auto px-6 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                >
                    <Plus size={20} />
                    Nouveau Client
                </button>
            </div>

            {/* Bulk Actions Bar */}
            <BulkActionsBar
                selectedCount={selectedIds.length}
                onExportCSV={handleBulkExportCSV}
                onExportPDF={handleBulkExportPDF}
                onDelete={() => setIsBulkDeleteOpen(true)}
                onClear={() => setSelectedIds([])}
            />

            {/* Customer Table */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                {isLoading ? (
                    <div className="flex items-center justify-center p-12 text-slate-400">
                        <Loader2 className="animate-spin mr-2" /> Chargement...
                    </div>
                ) : filteredCustomers.length === 0 ? (
                    <div className="flex flex-col items-center justify-center p-12 text-slate-400">
                        <User size={48} className="mb-4 opacity-20" />
                        <p>Aucun client trouvé.</p>
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="text-primary hover:underline mt-2"
                            >
                                Effacer la recherche
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <CustomerTableHeader
                                sortConfig={sortConfig}
                                onSort={handleSort}
                                selectedCount={selectedIds.length}
                                totalCount={sortedCustomers.length}
                                onSelectAll={handleSelectAll}
                            />
                            <tbody className="divide-y divide-slate-100">
                                {sortedCustomers.map((customer) => (
                                    <CustomerTableRow
                                        key={customer.id}
                                        customer={customer}
                                        isSelected={selectedIds.includes(customer.id)}
                                        onSelect={handleSelectOne}
                                        onEdit={handleEdit}
                                        onDelete={handleDeleteClick}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Modals */}
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
                message={`Êtes-vous sûr de vouloir supprimer ${customerToDelete?.company_name || (customerToDelete?.first_name + ' ' + customerToDelete?.last_name)} ? Cette action est irréversible.`}
                confirmText="Supprimer"
                cancelText="Annuler"
                isDeleting={isDeleting}
            />

            <ConfirmModal
                isOpen={isBulkDeleteOpen}
                onClose={() => setIsBulkDeleteOpen(false)}
                onConfirm={handleBulkDelete}
                title="Supprimer les clients sélectionnés"
                message={`Êtes-vous sûr de vouloir supprimer ${selectedIds.length} client(s) ? Cette action est irréversible.`}
                confirmText={`Supprimer ${selectedIds.length} client(s)`}
                cancelText="Annuler"
                isDeleting={isBulkDeleting}
            />
        </div>
    );
}
