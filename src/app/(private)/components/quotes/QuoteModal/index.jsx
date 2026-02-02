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
        if (quote) {
            setFormData({
                customer_id: quote.customer_id,
                date: quote.date ? new Date(quote.date).toISOString().split('T')[0] : '',
                valid_until: quote.valid_until ? new Date(quote.valid_until).toISOString().split('T')[0] : '',
                status: quote.status,
                items: quote.items || [],
                notes: quote.notes || '',
                intervention_address: quote.intervention_address || '', // Load address
                intervention_contact: quote.intervention_contact || '',
                terms: quote.terms || 'Valable 30 jours. Acompte de 50% à la commande.'
            });
            setShowInterventionAddress(!!quote.intervention_address);
        } else {
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

                items: mappedItems
            };

            // Handle intervention_address by appending to notes since backend doesn't support it natively yet
    if (formData.intervention_address) {
        let addressBlock = `📍 Adresse d'intervention : ${formData.intervention_address}`;
        if (formData.intervention_contact) {
            addressBlock = `👤 Contact sur place : ${formData.intervention_contact}\n` + addressBlock;
        }
        dataToSend.notes = (dataToSend.notes ? dataToSend.notes + '\n\n' : '') + addressBlock;
    }
    
    // Clean up fields not in backend schema to avoid 400 Bad Request
    delete dataToSend.intervention_address;
    delete dataToSend.intervention_contact;
    delete dataToSend.date; 

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
            // Show more detailed error if available
            const msg = error.response?.data?.error || 'Erreur lors de l\'enregistrement';
            toast.error(msg);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSendEmail = async () => {
        toast.error('Fonctionnalité en cours de développement');
        // TODO: Implement email sending
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>

                <QuoteHeader
                    quote={quote}
                    onClose={onClose}
                    quoteNumber={quote?.quote_number || 'BROUILLON'}
                    status={formData.status}
                />

                <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4 md:p-12 space-y-6 md:space-y-8 bg-slate-50/50">

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
