'use client';

import { useState, useEffect } from 'react';
import { Building2, MapPin, Mail, Phone, ArrowRight, CheckCircle2, Loader2, Upload, Image as ImageIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import { supabase } from '@/lib/supabase';

export default function CompanyOnboardingModal() {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isCheckingSiret, setIsCheckingSiret] = useState(false);
    const [siretError, setSiretError] = useState('');
    const [isOpen, setIsOpen] = useState(false); // Initially false to prevent flash
    const [isCheckingExistence, setIsCheckingExistence] = useState(true);
    
    // Check if company exists on mount
    useEffect(() => {
        const checkCompanyExistence = async () => {
            try {
                const res = await fetch('/api/crm?endpoint=/company/get');
                const data = await res.json();
                
                if (res.ok && data.exists) {
                    setIsOpen(false);
                } else {
                    setIsOpen(true);
                }
            } catch (error) {
                console.error('Error checking company existence:', error);
                setIsOpen(true); // Default to open on error just in case
            } finally {
                setIsCheckingExistence(false);
            }
        };

        checkCompanyExistence();
    }, []);

    // Logo State
    const [logoFile, setLogoFile] = useState(null);
    const [logoPreview, setLogoPreview] = useState(null);

    // Form State
    const [formData, setFormData] = useState({
        companyName: '',
        siret: '',
        vatNumber: '',
        address: '',
        city: '',
        zipCode: '',
        email: '',
        phone: '',
        legalForm: 'SAS'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (name === 'siret') setSiretError('');
    };

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) { // 2MB limit
                toast.error("Le logo ne doit pas dépasser 2MB");
                return;
            }
            setLogoFile(file);
            setLogoPreview(URL.createObjectURL(file));
        }
    };

    const handleSiretBlur = async () => {
        const cleanSiret = formData.siret.replace(/\s/g, '');
        if (cleanSiret.length !== 14) return;

        setIsCheckingSiret(true);
        setSiretError('');

        try {
            const endpoint = `/company/check-siret?siret=${cleanSiret}`;
            const res = await fetch(`/api/crm?endpoint=${encodeURIComponent(endpoint)}`);
            const data = await res.json();

            if (res.ok) {
                if (data.exists) {
                    toast.success("Société trouvée dans notre base !");
                    // Auto-fill everything including contact info
                    setFormData(prev => ({
                        ...prev,
                        companyName: data.companyName || prev.companyName,
                        address: data.address || prev.address,
                        city: data.city || prev.city,
                        zipCode: data.zipCode || prev.zipCode,
                        vatNumber: data.vatNumber || prev.vatNumber,
                        email: data.email || prev.email,
                        phone: data.phone || prev.phone,
                        legalForm: data.legalForm || prev.legalForm,
                    }));
                    if (data.logoUrl) {
                        setLogoPreview(data.logoUrl);
                    }
                } else {
                    // Auto-fill only public data
                    setFormData(prev => ({
                        ...prev,
                        companyName: data.companyName || prev.companyName,
                        address: data.address || prev.address,
                        city: data.city || prev.city,
                        zipCode: data.zipCode || prev.zipCode,
                        vatNumber: data.vatNumber || prev.vatNumber,
                        legalForm: data.legalForm || prev.legalForm,
                    }));
                }
            } else {
                setSiretError(data.error || 'SIRET invalide');
            }
        } catch (err) {
            setSiretError('Erreur de vérification');
        } finally {
            setIsCheckingSiret(false);
        }
    };

    const handleNext = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate check/validation
        setTimeout(() => {
            setIsLoading(false);
            setStep(step + 1);
        }, 600);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            let uploadedLogoUrl = null;

            // Upload Logo if exists
            if (logoFile) {
                const fileExt = logoFile.name.split('.').pop();
                const fileName = `${formData.siret || 'temp'}-${Math.random().toString(36).substring(7)}.${fileExt}`;
                
                const { error: uploadError } = await supabase.storage
                    .from('company-logos')
                    .upload(fileName, logoFile);

                if (uploadError) {
                    console.error('Upload error:', uploadError);
                    if (uploadError.message && uploadError.message.includes('Bucket not found')) {
                         toast.error("Erreur: Le dossier 'company-logos' n'existe pas dans Supabase. Exécutez le script SQL.");
                    } else {
                        toast.error("Erreur lors de l'upload du logo");
                    }
                } else {
                    const { data: { publicUrl } } = supabase.storage
                        .from('company-logos')
                        .getPublicUrl(fileName);
                    uploadedLogoUrl = publicUrl;
                }
            }

            const res = await fetch('/api/crm', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    endpoint: '/company/save',
                    method: 'POST',
                    data: {
                        ...formData,
                        logoUrl: uploadedLogoUrl
                    }
                })
            });

            const result = await res.json();

            if (res.ok) {
                toast.success('Société enregistrée avec succès !');
                setIsOpen(false);
                // Optional: trigger global state update or page refresh
                // window.location.reload(); 
            } else {
                toast.error(result.error || "Erreur lors de l'enregistrement");
            }
        } catch (error) {
            console.error('Submit Error:', error);
            toast.error("Erreur de connexion au serveur");
        } finally {
            setIsLoading(false);
        }
    };

    if (isCheckingExistence) return null; // Or return a loader
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" />

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                
                {/* Header */}
                <div className="bg-slate-50 px-8 py-6 border-b border-slate-100 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900">Bienvenue sur votre Espace Pro</h2>
                        <p className="text-sm text-slate-500 mt-1">Configurons ensemble votre identité commerciale.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-slate-200'}`} />
                        <div className={`h-2 w-2 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-slate-200'}`} />
                        <div className={`h-2 w-2 rounded-full ${step >= 3 ? 'bg-primary' : 'bg-slate-200'}`} />
                    </div>
                </div>

                {/* Body */}
                <div className="p-8 overflow-y-auto">
                    {step === 1 && (
                        <form id="step1-form" onSubmit={handleNext} className="space-y-6 animate-in slide-in-from-right-4 duration-500">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                                    <Building2 className="text-primary" size={20} />
                                    Identité de l'entreprise
                                </h3>
                                
                                {/* Logo Upload */}
                                <div className="flex items-center gap-6 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                                    <div className="relative h-20 w-20 rounded-full bg-white border-2 border-dashed border-slate-300 flex items-center justify-center overflow-hidden group hover:border-primary transition-colors">
                                        {logoPreview ? (
                                            <img src={logoPreview} alt="Logo" className="h-full w-full object-cover" />
                                        ) : (
                                            <ImageIcon className="text-slate-400 group-hover:text-primary transition-colors" size={24} />
                                        )}
                                        <input 
                                            type="file" 
                                            accept="image/*"
                                            onChange={handleLogoChange}
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-medium text-slate-900">Logo de l'entreprise</h4>
                                        <p className="text-xs text-slate-500 mt-1">Format PNG, JPG ou SVG. Max 2MB.</p>
                                        <button 
                                            type="button" 
                                            onClick={() => document.querySelector('input[type=file]').click()}
                                            className="mt-2 text-xs font-semibold text-primary hover:text-primary-dark"
                                        >
                                            Importer un fichier
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Nom de la société</label>
                                        <input 
                                            required
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            placeholder="ex: Elec Renov 75"
                                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Forme Juridique</label>
                                        <select 
                                            name="legalForm"
                                            value={formData.legalForm}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        >
                                            <option value="SAS">SAS</option>
                                            <option value="SARL">SARL</option>
                                            <option value="EI">Entreprise Individuelle</option>
                                            <option value="EURL">EURL</option>
                                            <option value="SASU">SASU</option>
                                            <option value="SA">SA</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Numéro SIRET</label>
                                        <input 
                                            required
                                            name="siret"
                                            value={formData.siret}
                                            onChange={handleChange}
                                            placeholder="14 chiffres"
                                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Numéro TVA (Optionnel)</label>
                                        <input 
                                            name="vatNumber"
                                            value={formData.vatNumber}
                                            onChange={handleChange}
                                            placeholder="FR..."
                                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}

                    {step === 2 && (
                        <form id="step2-form" onSubmit={handleNext} className="space-y-6 animate-in slide-in-from-right-4 duration-500">
                             <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                                    <MapPin className="text-primary" size={20} />
                                    Coordonnées
                                </h3>
                                
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Adresse du siège</label>
                                    <input 
                                        required
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="12 rue de la République"
                                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                    />
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                    <div className="col-span-1 space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Code Postal</label>
                                        <input 
                                            required
                                            name="zipCode"
                                            value={formData.zipCode}
                                            onChange={handleChange}
                                            placeholder="75001"
                                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                    <div className="col-span-2 space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Ville</label>
                                        <input 
                                            required
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="Paris"
                                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}

                    {step === 3 && (
                        <form id="step3-form" onSubmit={handleSubmit} className="space-y-6 animate-in slide-in-from-right-4 duration-500">
                             <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                                    <Mail className="text-primary" size={20} />
                                    Contact Public
                                </h3>
                                <p className="text-sm text-slate-500 bg-blue-50 p-3 rounded-lg border border-blue-100">
                                    Ces informations apparaîtront sur vos devis et factures.
                                </p>
                                
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Email de contact</label>
                                    <input 
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="contact@votre-entreprise.com"
                                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Téléphone</label>
                                    <input 
                                        required
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="01 23 45 67 89"
                                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </form>
                    )}
                </div>

                {/* Footer */}
                <div className="bg-white px-8 py-6 border-t border-slate-100 flex items-center justify-between">
                    {step > 1 ? (
                        <button 
                            onClick={() => setStep(step - 1)}
                            type="button"
                            className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                        >
                            Retour
                        </button>
                    ) : (
                        <div></div>
                    )}

                    <button
                        form={`step${step}-form`}
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-[#0b1a2a] px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 transition-all disabled:opacity-70"
                    >
                        {isLoading ? (
                            <Loader2 className="animate-spin" size={18} />
                        ) : step === 3 ? (
                            <>
                                Terminer la configuration
                                <CheckCircle2 size={18} />
                            </>
                        ) : (
                            <>
                                Continuer
                                <ArrowRight size={18} />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}