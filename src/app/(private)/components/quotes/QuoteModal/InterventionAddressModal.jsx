'use client';

import { useState, useEffect } from 'react';
import { X, MapPin, Save, Building, User } from 'lucide-react';
import AddressAutocomplete from '@/components/ui/AddressAutocomplete';

export default function InterventionAddressModal({ isOpen, onClose, onSave, initialAddress, initialContactName }) {
    const [address, setAddress] = useState('');
    const [contactName, setContactName] = useState('');
    
    useEffect(() => {
        if (isOpen) {
            setAddress(initialAddress || '');
            setContactName(initialContactName || '');
        }
    }, [isOpen, initialAddress, initialContactName]);

    if (!isOpen) return null;

    const handleSelectAddress = (data) => {
        // Construct full address string
        // data = { address, city, zip_code }
        const fullAddress = `${data.address}, ${data.zip_code} ${data.city}`;
        setAddress(fullAddress);
    };

    return (
        <div className="fixed inset-0 z-110 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
             <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl flex flex-col animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50 rounded-t-2xl">
                    <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        <MapPin size={20} className="text-primary" />
                        Adresse d'intervention
                    </h2>
                    <button onClick={onClose}><X size={20} className="text-slate-400 hover:text-slate-600" /></button>
                </div>

                <div className="p-6 space-y-4">
                    <p className="text-sm text-slate-500">
                        Renseignez l'adresse où les travaux seront effectués si elle diffère de l'adresse du client.
                    </p>

                    <div className="space-y-2">
                        <label className="block text-xs font-bold text-slate-500 uppercase">Nom du contact / Résident (Optionnel)</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input 
                                type="text"
                                value={contactName}
                                onChange={(e) => setContactName(e.target.value)}
                                placeholder="Ex: M. Martin (Gardien)"
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-3 text-slate-700 font-medium focus:ring-2 focus:ring-[var(--color-primary)]/10 focus:border-[var(--color-primary)] outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-xs font-bold text-slate-500 uppercase">Rechercher une adresse</label>
                        <AddressAutocomplete
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            onSelect={handleSelectAddress}
                            placeholder="Ex: 12 Rue de la Paix, Paris"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-700 font-medium focus:ring-2 focus:ring-[var(--color-primary)]/10 focus:border-primary outline-none"
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end gap-3 rounded-b-2xl">
                    <button onClick={onClose} className="px-4 py-2 text-slate-600 font-bold hover:bg-slate-200 rounded-lg transition-colors">Annuler</button>
                    <button 
                        onClick={() => {
                            onSave({ address, contactName });
                            onClose();
                        }} 
                        className="px-6 py-2 bg-[var(--color-primary)] text-white font-bold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors flex items-center gap-2"
                    >
                        <Save size={18} />
                        Valider
                    </button>
                </div>
            </div>
        </div>
    );
}
