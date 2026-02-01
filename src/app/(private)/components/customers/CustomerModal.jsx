'use client';

import { useState, useEffect } from 'react';
import { X, Loader2, User, Building2, MapPin, Mail, Phone, FileText } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';
import AddressAutocomplete from '@/components/ui/AddressAutocomplete';

export default function CustomerModal({ isOpen, onClose, onSuccess, customerToEdit = null }) {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        type: 'individual', // 'individual' or 'professional'
        first_name: '',
        last_name: '',
        company_name: '',
        siret: '', // New
        vat_number: '', // New
        email: '',
        phone: '',
        address: '',
        city: '',
        zip_code: '',
        delivery_address: '', // New
        delivery_city: '', // New
        delivery_zip_code: '', // New
        payment_terms: '', // New
        notes: ''
    });

    useEffect(() => {
        if (customerToEdit) {
            setFormData({
                type: customerToEdit.type || 'individual',
                first_name: customerToEdit.first_name || '',
                last_name: customerToEdit.last_name || '',
                company_name: customerToEdit.company_name || '',
                siret: customerToEdit.siret || '',
                vat_number: customerToEdit.vat_number || '',
                email: customerToEdit.email || '',
                phone: customerToEdit.phone || '',
                address: customerToEdit.address || '',
                city: customerToEdit.city || '',
                zip_code: customerToEdit.zip_code || '',
                delivery_address: customerToEdit.delivery_address || '',
                delivery_city: customerToEdit.delivery_city || '',
                delivery_zip_code: customerToEdit.delivery_zip_code || '',
                payment_terms: customerToEdit.payment_terms || '',
                notes: customerToEdit.notes || ''
            });
        } else {
            // Reset form
            setFormData({
                type: 'individual',
                first_name: '',
                last_name: '',
                company_name: '',
                siret: '',
                vat_number: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                zip_code: '',
                delivery_address: '',
                delivery_city: '',
                delivery_zip_code: '',
                payment_terms: '',
                notes: ''
            });
        }
    }, [customerToEdit, isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Basic validation
            if (formData.type === 'professional' && !formData.company_name) {
                toast.error('Le nom de la société est obligatoire pour un client professionnel');
                setIsLoading(false);
                return;
            }
            if (formData.type === 'individual' && !formData.last_name) {
                toast.error('Le nom est obligatoire pour un particulier');
                setIsLoading(false);
                return;
            }

            if (customerToEdit) {
                // Update
                await axios.put(`/api/customers/${customerToEdit.id}`, formData);
                toast.success('Client modifié avec succès');
                onSuccess();
                onClose();
            } else {
                // Create
                await axios.post('/api/customers', formData);
                toast.success('Client créé avec succès');
                onSuccess();
                onClose();
            }
        } catch (error) {
            console.error('Error saving customer:', error);
            const msg = error.response?.data?.error || 'Erreur lors de la sauvegarde';
            toast.error(msg);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
            
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <h2 className="text-lg font-bold text-slate-800">
                        {customerToEdit ? 'Modifier le client' : 'Nouveau client'}
                    </h2>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6">
                    {/* Type Selection */}
                    <div className="flex gap-4">
                        <label className={`flex-1 flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${formData.type === 'individual' ? 'border-primary bg-primary/5' : 'border-slate-100 hover:border-slate-200'}`}>
                            <input 
                                type="radio" 
                                name="type" 
                                value="individual" 
                                checked={formData.type === 'individual'} 
                                onChange={handleChange}
                                className="hidden" 
                            />
                            <div className={`p-2 rounded-full ${formData.type === 'individual' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                                <User size={20} />
                            </div>
                            <div>
                                <div className="font-semibold text-sm text-slate-900">Particulier</div>
                                <div className="text-xs text-slate-500">Pour les particuliers</div>
                            </div>
                        </label>
                        
                        <label className={`flex-1 flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${formData.type === 'professional' ? 'border-primary bg-primary/5' : 'border-slate-100 hover:border-slate-200'}`}>
                            <input 
                                type="radio" 
                                name="type" 
                                value="professional" 
                                checked={formData.type === 'professional'} 
                                onChange={handleChange}
                                className="hidden" 
                            />
                            <div className={`p-2 rounded-full ${formData.type === 'professional' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                                <Building2 size={20} />
                            </div>
                            <div>
                                <div className="font-semibold text-sm text-slate-900">Professionnel</div>
                                <div className="text-xs text-slate-500">Pour les entreprises</div>
                            </div>
                        </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {formData.type === 'professional' && (
                            <div className="md:col-span-2 space-y-4 border-b border-slate-100 pb-4 mb-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Nom de la société <span className="text-red-500">*</span></label>
                                    <input 
                                        required
                                        name="company_name"
                                        value={formData.company_name}
                                        onChange={handleChange}
                                        placeholder="Ex: SAS Renov"
                                        className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">SIRET <span className="text-slate-400 text-xs">(Facturation électronique)</span></label>
                                        <input 
                                            name="siret"
                                            value={formData.siret}
                                            onChange={handleChange}
                                            placeholder="14 chiffres"
                                            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">TVA Intracom.</label>
                                        <input 
                                            name="vat_number"
                                            value={formData.vat_number}
                                            onChange={handleChange}
                                            placeholder="FR..."
                                            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Prénom</label>
                            <input 
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                placeholder="Jean"
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Nom {formData.type === 'individual' && <span className="text-red-500">*</span>}</label>
                            <input 
                                required={formData.type === 'individual'}
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                placeholder="Dupont"
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-4 pt-2 border-t border-slate-100">
                        <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                            <Mail size={16} className="text-slate-400" /> Coordonnées
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Email</label>
                                <input 
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="jean.dupont@email.com"
                                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Téléphone</label>
                                <input 
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="06 12 34 56 78"
                                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 pt-2 border-t border-slate-100">
                        <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                            <MapPin size={16} className="text-slate-400" /> Adresse
                        </h3>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Adresse de facturation</label>
                            <AddressAutocomplete 
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                onSelect={(data) => setFormData(prev => ({ ...prev, address: data.address, zip_code: data.zip_code, city: data.city }))}
                                placeholder="12 rue de la Paix"
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-1 space-y-2">
                                <label className="text-sm font-medium text-slate-700">Code Postal</label>
                                <input 
                                    name="zip_code"
                                    value={formData.zip_code}
                                    onChange={handleChange}
                                    placeholder="75000"
                                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                                />
                            </div>
                            <div className="col-span-2 space-y-2">
                                <label className="text-sm font-medium text-slate-700">Ville</label>
                                <input 
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Paris"
                                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                                />
                            </div>
                        </div>

                        {/* Delivery Address Toggle could be implemented here, but let's just show fields for simplicity or accordion */}
                        <div className="space-y-2 pt-2">
                            <label className="text-sm font-medium text-slate-700">Adresse de livraison <span className="text-slate-400 text-xs font-normal">(Si différente)</span></label>
                            <AddressAutocomplete 
                                name="delivery_address"
                                value={formData.delivery_address}
                                onChange={handleChange}
                                onSelect={(data) => setFormData(prev => ({ ...prev, delivery_address: data.address, delivery_zip_code: data.zip_code, delivery_city: data.city }))}
                                placeholder="Adresse de chantier..."
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-1 space-y-2">
                                <label className="text-sm font-medium text-slate-700">CP (Livraison)</label>
                                <input 
                                    name="delivery_zip_code"
                                    value={formData.delivery_zip_code}
                                    onChange={handleChange}
                                    placeholder="75000"
                                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                                />
                            </div>
                            <div className="col-span-2 space-y-2">
                                <label className="text-sm font-medium text-slate-700">Ville (Livraison)</label>
                                <input 
                                    name="delivery_city"
                                    value={formData.delivery_city}
                                    onChange={handleChange}
                                    placeholder="Paris"
                                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                        <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                            <FileText size={16} className="text-slate-400" /> Autres informations
                        </h3>
                         <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Conditions de paiement</label>
                            <select 
                                name="payment_terms"
                                value={formData.payment_terms}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none"
                            >
                                <option value="">Sélectionner...</option>
                                <option value="comptant">Comptant</option>
                                <option value="reception">A réception</option>
                                <option value="30_days">30 jours net</option>
                                <option value="30_days_eom">30 jours fin de mois</option>
                                <option value="45_days_eom">45 jours fin de mois</option>
                                <option value="60_days">60 jours net</option>
                                <option value="60_days_eom">60 jours fin de mois</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Notes</label>
                            <textarea 
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                placeholder="Informations complémentaires..."
                                rows={3}
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-none"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                        <button 
                            type="button" 
                            onClick={onClose}
                            className="px-4 py-2 text-slate-600 font-medium hover:bg-slate-100 rounded-lg transition-colors"
                        >
                            Annuler
                        </button>
                        <button 
                            type="submit"
                            disabled={isLoading}
                            className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors flex items-center gap-2 disabled:opacity-70"
                        >
                            {isLoading ? <Loader2 className="animate-spin" size={18} /> : 'Enregistrer'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
