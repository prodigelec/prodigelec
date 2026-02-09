'use client';

import { useState, useEffect } from 'react';
import {
    Plus, Search, FileText, Filter, ChevronDown,
    MoreHorizontal, Download, Pencil, Trash2,
    Eye, Send, CheckCircle, XCircle, Clock, PenTool
} from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import ConfirmModal from '@/components/ui/ConfirmModal';
import CustomSelect from '@/components/ui/CustomSelect';
import QuoteModal from './QuoteModal';
import SignatureModal from './SignatureModal';
import NewQuoteTypeModal from './NewQuoteTypeModal';
import CustomerModal from '../customers/CustomerModal';
import { exportQuoteToPDF } from './utils/quotePdfExport';

export default function QuoteList() {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [quoteToEdit, setQuoteToEdit] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [quoteToDelete, setQuoteToDelete] = useState(null);
    const [isSignatureModalOpen, setIsSignatureModalOpen] = useState(false);
    const [quoteToSign, setQuoteToSign] = useState(null);
    const [company, setCompany] = useState(null);

    // Nouvelle modale de sélection du type client
    const [isTypeModalOpen, setIsTypeModalOpen] = useState(false);
    const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false);
    const [selectedCustomerType, setSelectedCustomerType] = useState('individual');

    useEffect(() => {
        fetchQuotes();
        fetchCompany();
    }, []);

    const fetchCompany = async () => {
        try {
            const response = await axios.get('/api/company/get');
            setCompany(response.data.company);
        } catch (error) {
            console.error('Error fetching company:', error);
        }
    };

    const fetchQuotes = async () => {
        try {
            const response = await axios.get('/api/quotes');
            setQuotes(response.data);
        } catch (error) {
            console.error('Error fetching quotes:', error);
            toast.error('Erreur lors du chargement des devis');
        } finally {
            setLoading(false);
        }
    };

    const statusOptions = [
        { value: 'all', label: 'Tous les devis' },
        { value: 'draft', label: 'Brouillons' },
        { value: 'sent', label: 'Envoyés' },
        { value: 'signed', label: 'Signés' },
        { value: 'rejected', label: 'Refusés' },
        { value: 'invoiced', label: 'Facturés' }
    ];

    const getStatusStyles = (status) => {
        switch (status) {
            case 'draft': return 'bg-slate-100 text-slate-600';
            case 'sent': return 'bg-blue-50 text-blue-600';
            case 'signed': return 'bg-green-50 text-green-600';
            case 'rejected': return 'bg-red-50 text-red-600';
            case 'invoiced': return 'bg-purple-50 text-purple-600';
            default: return 'bg-slate-50 text-slate-500';
        }
    };

    const filteredQuotes = quotes.filter(q => {
        if (filterStatus !== 'all' && q.status !== filterStatus) return false;
        const term = searchTerm.toLowerCase();
        return (
            q.quote_number.toLowerCase().includes(term) ||
            (q.customer?.first_name || '').toLowerCase().includes(term) ||
            (q.customer?.last_name || '').toLowerCase().includes(term) ||
            (q.customer?.company_name || '').toLowerCase().includes(term)
        );
    });

    const handleDelete = async () => {
        if (!quoteToDelete) return;
        try {
            await axios.delete(`/api/quotes/${quoteToDelete.id}`);
            toast.success('Devis supprimé');
            fetchQuotes();
            setIsDeleteModalOpen(false);
            setQuoteToDelete(null);
        } catch (error) {
            console.error('Error deleting quote:', error);
            const msg = error.response?.data?.error || 'Erreur lors de la suppression';
            toast.error(msg);
        }
    };

    const handleDownloadPDF = async (quote) => {
        try {
            toast.loading('Génération du PDF...', { id: 'pdf' });
            // Fetch full quote details because list might be truncated or missing items
            const res = await axios.get(`/api/quotes/${quote.id}`);
            await exportQuoteToPDF(res.data, company);
            toast.success('PDF généré', { id: 'pdf' });
        } catch (error) {
            console.error('Error generating PDF:', error);
            toast.error('Erreur lors de la génération du PDF', { id: 'pdf' });
        }
    };

    const handleSendEmail = async (quote) => {
        if (!quote.customer?.email) {
            toast.error('Ce client n\'a pas d\'adresse email renseignée');
            return;
        }

        try {
            toast.loading('Envoi du devis...', { id: 'email-send' });
            
            // 1. Récupérer les données complètes
            const res = await axios.get(`/api/quotes/${quote.id}`);
            
            // 2. Générer le PDF en tant que Blob
            const pdfBlob = await exportQuoteToPDF(res.data, company, true);
            
            // 3. Convertir le Blob en Base64
            const reader = new FileReader();
            const pdfBase64Promise = new Promise((resolve) => {
                reader.onloadend = () => {
                    const base64String = reader.result.split(',')[1];
                    resolve(base64String);
                };
            });
            reader.readAsDataURL(pdfBlob);
            const pdfBase64 = await pdfBase64Promise;

            // 4. Envoyer via le backend
            await axios.post(`/api/quotes/${quote.id}/send`, { pdfBase64 });
            
            toast.success('Le devis a été envoyé avec succès !', { id: 'email-send' });
            
            // 5. Actualiser la liste
            fetchQuotes();
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'email:', error);
            const errorMsg = error.response?.data?.error || 'Erreur lors de l\'envoi';
            toast.error(errorMsg, { id: 'email-send' });
        }
    };

    return (
        <div className="space-y-6">
            {/* Header section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <div className="p-2 bg-slate-900 rounded-xl text-white shadow-lg shadow-slate-900/10">
                            <FileText size={24} />
                        </div>
                        Gestion des Devis
                    </h1>
                    <p className="text-slate-500 text-sm">Créez, envoyez et suivez vos devis professionnels</p>
                </div>
                <button
                    onClick={() => setIsTypeModalOpen(true)}
                    className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-slate-900/10 hover:bg-slate-800 active:scale-[0.98] transition-all"
                >
                    <Plus size={20} />
                    Nouveau Devis
                </button>
            </div>

            {/* Stats Summary could go here */}

            {/* Filters and Search */}
            <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Rechercher un devis ou un client..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none transition-all"
                    />
                </div>
                <div className="w-full md:w-64">
                    <CustomSelect
                        value={filterStatus}
                        onChange={setFilterStatus}
                        options={statusOptions}
                        placeholder="Filtrer par statut"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50/50 border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">Numéro / Date</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">Client</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">Montant TTC</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">Statut</th>
                                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wide">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {loading ? (
                                Array.from({ length: 3 }).map((_, i) => (
                                    <tr key={i} className="animate-pulse">
                                        <td colSpan="5" className="px-6 py-4 bg-slate-50/20 h-16"></td>
                                    </tr>
                                ))
                            ) : filteredQuotes.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="px-6 py-12 text-center text-slate-400 italic">
                                        Aucun devis trouvé.
                                    </td>
                                </tr>
                            ) : (
                                filteredQuotes.map((quote) => (
                                    <tr key={quote.id} className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="font-semibold text-slate-900">{quote.quote_number}</div>
                                            <div className="text-xs text-slate-400">{new Date(quote.issued_at).toLocaleDateString()}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-slate-700">
                                                {quote.customer?.company_name || `${quote.customer?.first_name} ${quote.customer?.last_name}`}
                                            </div>
                                            <div className="text-xs text-slate-400">{quote.customer?.email}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-slate-900">{quote.total_ttc.toLocaleString()} €</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles(quote.status)}`}>
                                                {statusOptions.find(o => o.value === quote.status)?.label || quote.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => handleDownloadPDF(quote)}
                                                    className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
                                                    title="Télécharger PDF"
                                                >
                                                    <Download size={18} />
                                                </button>

                                                {quote.status === 'draft' && (
                                                    <button
                                                        onClick={() => handleSendEmail(quote)}
                                                        className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors"
                                                        title="Envoyer par email"
                                                    >
                                                        <Send size={18} />
                                                    </button>
                                                )}

                                                {/* On a supprimé le bouton de signature manuelle car il ne sert pas côté admin */}


                                                {['draft', 'sent', 'rejected'].includes(quote.status) && (
                                                    <button
                                                        onClick={() => {
                                                            setQuoteToEdit(quote);
                                                            setIsModalOpen(true);
                                                        }}
                                                        className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-colors"
                                                        title="Modifier"
                                                    >
                                                        <Pencil size={18} />
                                                    </button>
                                                )}
                                                {quote.status === 'draft' && (
                                                    <button
                                                        onClick={() => {
                                                            setQuoteToDelete(quote);
                                                            setIsDeleteModalOpen(true);
                                                        }}
                                                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                                        title="Supprimer"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modals */}
            <QuoteModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setQuoteToEdit(null);
                    // On ne reset pas setSelectedCustomerType ici pour garder le contexte si on rouvre
                    // Mais idéalement, on devrait peut-être le reset quand on ferme complètement le flux
                }}
                quote={quoteToEdit}
                onSuccess={fetchQuotes}
                preselectedType={!quoteToEdit ? selectedCustomerType : null} // Seulement pour nouveau devis
            />

            <SignatureModal
                isOpen={isSignatureModalOpen}
                onClose={() => {
                    setIsSignatureModalOpen(false);
                    setQuoteToSign(null);
                }}
                quote={quoteToSign}
                onSuccess={fetchQuotes}
            />

            <ConfirmModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDelete}
                title="Supprimer le devis"
                message={`Êtes-vous sûr de vouloir supprimer le devis ${quoteToDelete?.quote_number} ? Cette action est irréversible.`}
                confirmText="Supprimer"
                type="danger"
            />

            {/* Modale de sélection du type client */}
            <NewQuoteTypeModal
                isOpen={isTypeModalOpen}
                onClose={() => setIsTypeModalOpen(false)}
                onSelectExistingCustomer={(type) => {
                    setSelectedCustomerType(type);
                    setQuoteToEdit(null);
                    setIsModalOpen(true);
                }}
                onCreateNewCustomer={(type) => {
                    setSelectedCustomerType(type);
                    setIsCustomerModalOpen(true);
                }}
            />

            {/* Modale de création de client (si nouveau client) */}
            <CustomerModal
                isOpen={isCustomerModalOpen}
                onClose={() => setIsCustomerModalOpen(false)}
                onSuccess={() => {
                    setIsCustomerModalOpen(false);
                    // Après création du client, ouvrir le formulaire de devis
                    setQuoteToEdit(null);
                    setIsModalOpen(true);
                }}
                initialType={selectedCustomerType}
            />
        </div>
    );
}
