'use client';

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

// Sub-components
import Step1Identity from './components/Step1Identity';
import Step2Coordinates from './components/Step2Coordinates';
import Step3Contact from './components/Step3Contact';

export default function CompanyOnboardingModal() {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isCheckingSiret, setIsCheckingSiret] = useState(false);
    const [siretError, setSiretError] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isCheckingExistence, setIsCheckingExistence] = useState(true);

    // Check if company exists on mount
    useEffect(() => {
        const checkCompanyExistence = async () => {
            try {
                const res = await axios.get('/api/company/get');
                const data = res.data;

                if (data.exists) {
                    setIsOpen(false);
                } else {
                    setIsOpen(true);
                }
            } catch (error) {
                console.error('Error checking company existence:', error);
                setIsOpen(true);
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
            if (file.size > 2 * 1024 * 1024) {
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
            const res = await axios.get('/api/company/check-siret', {
                params: { siret: cleanSiret }
            });
            const data = res.data;

            if (data.exists) {
                toast.success("Société trouvée dans notre base !");
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
                    const fullLogoUrl = data.logoUrl.startsWith('/')
                        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${data.logoUrl}`
                        : data.logoUrl;
                    setLogoPreview(fullLogoUrl);
                }
            } else {
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
        } catch (err) {
            const errorMessage = err.response?.data?.error || 'Erreur de vérification';
            setSiretError(errorMessage);
        } finally {
            setIsCheckingSiret(false);
        }
    };

    const handleNext = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setStep(step + 1);
        }, 600);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            let logoData = null;

            if (logoFile) {
                try {
                    logoData = await fileToBase64(logoFile);
                } catch (error) {
                    console.error('Base64 Conversion Error:', error);
                    toast.error("Erreur lors de la préparation du logo");
                }
            }

            await axios.post('/api/company/save', {
                ...formData,
                logoData
            });

            toast.success('Société enregistrée avec succès !');
            setIsOpen(false);
        } catch (error) {
            console.error('Submit Error:', error);
            const errorMessage = error.response?.data?.error || "Erreur lors de l'enregistrement";
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    if (isCheckingExistence) return null;
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" />

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
                        <Step1Identity
                            formData={formData}
                            handleChange={handleChange}
                            handleSiretBlur={handleSiretBlur}
                            isCheckingSiret={isCheckingSiret}
                            siretError={siretError}
                            logoPreview={logoPreview}
                            handleLogoChange={handleLogoChange}
                            handleNext={handleNext}
                        />
                    )}

                    {step === 2 && (
                        <Step2Coordinates
                            formData={formData}
                            handleChange={handleChange}
                            handleNext={handleNext}
                            handleBack={handleBack}
                        />
                    )}

                    {step === 3 && (
                        <Step3Contact
                            formData={formData}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            handleBack={handleBack}
                            isLoading={isLoading}
                        />
                    )}
                </div>

                {/* Footer */}
                <div className="bg-white px-8 py-6 border-t border-slate-100 flex items-center justify-between">
                    {step > 1 && step < 3 && (
                        <button
                            onClick={handleBack}
                            className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
                        >
                            Retour
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
