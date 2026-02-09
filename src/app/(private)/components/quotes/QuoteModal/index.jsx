'use client';

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
// import { generateQuoteBlob } from '../utils/quotePdfExport';

import QuoteHeader from './QuoteHeader';
import QuoteClientInfo from './QuoteClientInfo';
import QuoteItemsTable from './QuoteItemsTable';
import QuoteSummary from './QuoteSummary';
import QuoteActions from './QuoteActions';
import SignatureModal from '../SignatureModal'; // Remontée d'un niveau car on est dans un sous-dossier

export default function QuoteModal({ isOpen, onClose, quote = null, onSuccess, preselectedType = null }) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSignatureModalOpen, setIsSignatureModalOpen] = useState(false);
    const [customers, setCustomers] = useState([]);

    // Form Data State
    const [formData, setFormData] = useState({
        customer_id: '',
        date: new Date().toISOString().split('T')[0],
        valid_until: '',
        status: 'draft',
        items: [{ type: 'service', description: '', quantity: 1, unit_price: 0, vat_rate: 20, unity: 'unité' }],
        notes: '',
        intervention_address: '', // New field
        intervention_contact: '', // Contact person for intervention
        terms: 'Valable 30 jours. Acompte de 50% à la commande.'
    });

    const [showInterventionAddress, setShowInterventionAddress] = useState(false);

    // Totals State
    const [totals, setTotals] = useState({ ht: 0, tva: 0, ttc: 0, services: 0, materials: 0 });

    // Fetch customers
    useEffect(() => {
        if (isOpen) {
            fetchCustomers();
        }
    }, [isOpen]);

    const fetchCustomers = async () => {
        try {
            const response = await axios.get('/api/customers');
            setCustomers(response.data);
        } catch (error) {
            console.error('Error fetching customers:', error);
            toast.error('Erreur lors du chargement des clients');
        }
    };

    // Initialize Form
    useEffect(() => {
        const initForm = async () => {
            if (quote && isOpen) {
                setIsLoading(true);
                try {
                    // Fetch full quote details to get items
                    const { data: fullQuote } = await axios.get(`/api/quotes/${quote.id}`);

                    setFormData({
                        customer_id: fullQuote.customer_id,
                        date: fullQuote.issued_at ? new Date(fullQuote.issued_at).toISOString().split('T')[0] : (fullQuote.date ? new Date(fullQuote.date).toISOString().split('T')[0] : ''),
                        valid_until: fullQuote.valid_until ? new Date(fullQuote.valid_until).toISOString().split('T')[0] : '',
                        status: fullQuote.status,
                        items: (fullQuote.items || []).map(item => ({
                            ...item,
                            type: item.item_type || item.type || 'service',
                            vat_rate: item.tva_rate !== undefined ? item.tva_rate : (item.vat_rate !== undefined ? item.vat_rate : 20),
                            unity: item.unit || item.unity || 'unité',
                            quantity: Number(item.quantity),
                            unit_price: Number(item.unit_price),
                            description: item.description || ''
                        })),
                        notes: fullQuote.notes || '',
                        intervention_address: fullQuote.intervention_address || '',
                        intervention_contact: fullQuote.intervention_contact || '',
                        terms: fullQuote.terms || 'Valable 30 jours. Acompte de 50% à la commande.'
                    });
                    setShowInterventionAddress(!!fullQuote.intervention_address);
                } catch (error) {
                    console.error('Error fetching quote details:', error);
                    toast.error('Erreur lors du chargement du devis');
                } finally {
                    setIsLoading(false);
                }
            } else if (isOpen) {
                // Default validity 1 month
                const today = new Date();
                const validDate = new Date(today.setMonth(today.getMonth() + 1)).toISOString().split('T')[0];

                setFormData({
                    customer_id: '',
                    date: new Date().toISOString().split('T')[0],
                    valid_until: validDate,
                    status: 'draft',
                    items: [{ type: 'service', description: '', quantity: 1, unit_price: 0, vat_rate: 20, unity: 'unité' }],
                    notes: '',
                    intervention_address: '',
                    intervention_contact: '',
                    terms: 'Valable 30 jours. Acompte de 50% à la commande.'
                });
                setShowInterventionAddress(false);
            }
        };

        initForm();
    }, [quote, isOpen]);

    // Calculate Totals
    useEffect(() => {
        const calculateTotals = () => {
            let totalHT = 0;
            let totalTVA = 0;
            let totalServices = 0;
            let totalMaterials = 0;

            formData.items.forEach(item => {
                const lineTotal = item.quantity * item.unit_price;
                totalHT += lineTotal;
                totalTVA += lineTotal * (item.vat_rate / 100);

                if (item.type === 'service') {
                    totalServices += lineTotal;
                } else {
                    totalMaterials += lineTotal;
                }
            });

            setTotals({
                ht: totalHT,
                tva: totalTVA,
                ttc: totalHT + totalTVA,
                services: totalServices,
                materials: totalMaterials
            });
        };

        calculateTotals();
    }, [formData.items]);

    // Handlers
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleItemChange = (index, field, value) => {
        const newItems = [...formData.items];
        newItems[index][field] = value;
        setFormData(prev => ({ ...prev, items: newItems }));
    };

    const handleUpdateItem = (index, newItemData) => {
        const newItems = [...formData.items];
        newItems[index] = { ...newItems[index], ...newItemData };
        setFormData(prev => ({ ...prev, items: newItems }));
    };

    const handleAddItem = (initialData = null) => {
        const newItem = initialData || { type: 'service', description: '', quantity: 1, unit_price: 0, vat_rate: 20, unity: 'unité' };
        setFormData(prev => ({
            ...prev,
            items: [...prev.items, newItem]
        }));
    };

    const handleRemoveItem = (index) => {
        if (formData.items.length === 1) return;
        setFormData(prev => ({
            ...prev,
            items: prev.items.filter((_, i) => i !== index)
        }));
    };

    const handlePresetSelect = (index, preset) => {
        const newItems = [...formData.items];
        newItems[index] = {
            ...newItems[index],
            description: preset.description, // Use description from preset
            unity: preset.unity,
            unit_price: preset.price,
            type: preset.type
        };
        setFormData(prev => ({ ...prev, items: newItems }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent double submit if called from form
        await saveQuote();
    };

    const saveQuote = async (newStatus = null) => {
        // Frontend Validation
        if (!formData.customer_id) {
            toast.error('Veuillez sélectionner un client');
            return;
        }

        if (!formData.items || formData.items.length === 0) {
            toast.error('Le devis doit contenir au moins une ligne');
            return;
        }

        const invalidItem = formData.items.find(item => !item.description || !item.description.trim());
        if (invalidItem) {
            toast.error('Toutes les lignes doivent avoir une description');
            return;
        }

        setIsLoading(true);
        try {
            // 1. Prepare items for backend (mapping fields)
            const mappedItems = formData.items.map((item, index) => ({
                description: item.description,
                quantity: Number(item.quantity),
                unit_price: Number(item.unit_price),
                tva_rate: Number(item.vat_rate),
                total_ht: Number(item.quantity) * Number(item.unit_price),
                item_type: item.type, // Frontend: type, Backend: item_type
                unit: item.unity,     // Frontend: unity, Backend: unit
                sort_order: index
            }));

            // 2. Prepare main quote data
            const dataToSend = {
                customer_id: formData.customer_id,
                quote_number: quote?.quote_number || `DRAFT-${Date.now()}`, // Temporary number generation
                status: newStatus || formData.status,

                // Totals
                total_ht: totals.ht,
                total_tva: totals.tva,
                total_ttc: totals.ttc,
                tva_rate: 20, // Default global rate (not used much if per item)

                // Dates & Text
                // Note: 'date' is ignored by backend (uses issued_at default now()), 'valid_until' is allowed.
                valid_until: formData.valid_until || null,
                notes: formData.notes,
                terms: formData.terms,
                intervention_address: formData.intervention_address,
                intervention_contact: formData.intervention_contact,

                items: mappedItems
            };

            // Note: intervention_address and intervention_contact are now part of the schema, 
            // so we don't need to append them to notes or delete them.

            if (quote) {
                await axios.put(`/api/quotes/${quote.id}`, dataToSend);
                toast.success('Devis mis à jour');
            } else {
                await axios.post('/api/quotes', dataToSend);
                toast.success('Devis créé');
            }
            onSuccess();
            onClose();
        } catch (error) {
            console.error('Error saving quote:', error);
            if (error.response) {
                console.error('Backend Error Response:', error.response.data);
            }
            // Show more detailed error if available
            const msg = error.response?.data?.error || 'Erreur lors de l\'enregistrement';
            toast.error(msg);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSendEmail = async () => {
        if (!formData.customer_id) {
            toast.error('Veuillez sélectionner un client');
            return;
        }

        const customer = customers.find(c => c.id === formData.customer_id);
        if (!customer) {
            toast.error('Client introuvable');
            return;
        }

        if (!customer.email) {
            toast.error('Ce client n\'a pas d\'adresse email renseignée');
            return;
        }

        const subject = encodeURIComponent(`Devis ${quote?.quote_number || 'PRODIGELEC'}`);
        const body = encodeURIComponent(`Bonjour ${customer.first_name || ''} ${customer.last_name || ''},\n\nVeuillez trouver ci-joint votre devis.\n\nCordialement,\nL'équipe PRODIGELEC`);

        window.open(`mailto:${customer.email}?subject=${subject}&body=${body}`, '_blank');
        toast.success('Client de messagerie ouvert');
    };

    const handleRequestSignature = async () => {
        if (!quote) return;

        setIsLoading(true);
        try {
            const response = await axios.post('/api/signatures/request', {
                documentId: quote.id,
                documentType: 'quote'
            });

            if (response.data.success) {
                toast.success('La demande de signature a été envoyée par email');
                onSuccess(); // To refresh status to 'sent'
                onClose();
            }
        } catch (error) {
            console.error('Error requesting signature:', error);
            toast.error(error.response?.data?.error || 'Erreur lors de l\'envoi de la demande');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>

                <QuoteHeader
                    quote={quote}
                    onClose={onClose}
                    quoteNumber={quote?.quote_number || 'BROUILLON'}
                    status={formData.status}
                />

                <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4 md:p-10 space-y-6 md:space-y-8 bg-slate-50/50">

                    <QuoteClientInfo
                        formData={formData}
                        customers={customers}
                        preselectedType={preselectedType}
                        onChange={handleChange}
                        showInterventionAddress={showInterventionAddress}
                        onToggleInterventionAddress={() => setShowInterventionAddress(!showInterventionAddress)}
                    />

                    <QuoteItemsTable
                        items={formData.items}
                        onItemChange={handleItemChange}
                        onUpdateItem={handleUpdateItem}
                        onAddItem={handleAddItem}
                        onRemoveItem={handleRemoveItem}
                        onPresetSelect={handlePresetSelect}
                    />

                    <QuoteSummary
                        formData={formData}
                        totals={totals}
                        onChange={handleChange}
                        quote={quote}
                    />

                </form>

                <QuoteActions
                    loading={isLoading}
                    status={formData.status}
                    isEditMode={!!quote}
                    onClose={onClose}
                    onSave={() => saveQuote()}
                    onSign={() => setIsSignatureModalOpen(true)}
                    onSend={handleSendEmail}
                    onRequestSignature={handleRequestSignature}
                />

                <SignatureModal
                    isOpen={isSignatureModalOpen}
                    onClose={() => setIsSignatureModalOpen(false)}
                    quote={quote}
                    onSuccess={() => {
                        setIsSignatureModalOpen(false);
                        onSuccess(); // Refresh parent
                        onClose(); // Close this modal (optional, maybe keep open to see signature?)
                    }}
                />
            </div>
        </div>
    );
}
