'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Download, Send, RotateCcw, Check, Mail, ShieldCheck, Loader2 } from 'lucide-react';
import html2pdf from 'html2pdf.js';
import toast from 'react-hot-toast';

export default function ElectronicSignatureModal({
    isOpen,
    onClose,
    quote,
    customer,
    onSuccess
}) {
    // Steps: 1 = Accept terms, 2 = OTP verification, 3 = Confirmation
    const [currentStep, setCurrentStep] = useState(1);
    const [signatureAccepted, setSignatureAccepted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [otpCode, setOtpCode] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [otpError, setOtpError] = useState('');
    const [otpExpiry, setOtpExpiry] = useState(null);

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setCurrentStep(1);
            setSignatureAccepted(false);
            setOtpCode('');
            setOtpSent(false);
            setOtpVerified(false);
            setOtpError('');
            setOtpExpiry(null);
        }
    }, [isOpen]);

    /**
     * Step 1: Accept terms and request OTP
     */
    const handleAcceptAndRequestOtp = async () => {
        if (!customer?.email) {
            toast.error('Email du client requis pour la vérification');
            return;
        }

        setIsLoading(true);
        setOtpError('');

        try {
            const response = await fetch('/api/otp/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: customer.email,
                    documentId: quote?.id,
                    documentType: 'quote'
                })
            });

            const data = await response.json();

            if (response.ok) {
                setSignatureAccepted(true);
                setOtpSent(true);
                setOtpExpiry(new Date(data.expiresAt));
                setCurrentStep(2);
                toast.success(`Code envoyé à ${customer.email}`);
            } else {
                throw new Error(data.error || 'Erreur lors de l\'envoi du code');
            }
        } catch (error) {
            console.error('Erreur envoi OTP:', error);
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    /**
     * Step 2: Verify OTP code
     */
    const handleVerifyOtp = async () => {
        if (otpCode.length !== 6) {
            setOtpError('Le code doit contenir 6 chiffres');
            return;
        }

        setIsLoading(true);
        setOtpError('');

        try {
            const response = await fetch('/api/otp/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: customer.email,
                    documentId: quote?.id,
                    code: otpCode
                })
            });

            const data = await response.json();

            if (response.ok && data.verified) {
                setOtpVerified(true);
                setCurrentStep(3);
                toast.success('Identité vérifiée avec succès!');
            } else {
                setOtpError(data.error || 'Code incorrect');
            }
        } catch (error) {
            console.error('Erreur vérification OTP:', error);
            setOtpError('Erreur lors de la vérification');
        } finally {
            setIsLoading(false);
        }
    };

    /**
     * Resend OTP code
     */
    const handleResendOtp = async () => {
        setOtpCode('');
        setOtpError('');
        await handleAcceptAndRequestOtp();
    };

    const generateSignedPDF = async (certificate = null) => {
        setIsLoading(true);

        try {
            const container = document.createElement('div');
            container.style.position = 'absolute';
            container.style.left = '-9999px';
            container.style.top = '-9999px';
            container.style.width = '210mm';
            container.style.padding = '20px';
            container.style.background = 'white';
            container.style.fontFamily = 'Arial, sans-serif';

            const certInfo = certificate ? `
                <div style="margin-bottom: 20px; border: 1px solid #2563eb; background: #eff6ff; padding: 15px; border-radius: 5px;">
                    <h2 style="color: #1e40af; margin-bottom: 10px;">🔒 Certificat de Signature Électronique</h2>
                    <div style="font-size: 12px; color: #374151;">
                        <p><strong>Identifiant du certificat:</strong> ${certificate.id}</p>
                        <p><strong>Signataire:</strong> ${certificate.subject.name}</p>
                        <p><strong>Email vérifié:</strong> ${certificate.subject.email} ✓</p>
                        <p><strong>Date de signature:</strong> ${new Date(certificate.signature.timestamp).toLocaleString('fr-FR')}</p>
                        <p><strong>Algorithme:</strong> ${certificate.signature.algorithm}</p>
                        <p><strong>Hash du document:</strong> ${certificate.signature.hash.substring(0, 16)}...</p>
                        <p><strong>Cadre juridique:</strong> ${certificate.legalFramework.regulation} (${certificate.legalFramework.type})</p>
                        <p><strong>Émetteur:</strong> ${certificate.issuer.name}</p>
                        <p><strong>Validité:</strong> Du ${new Date(certificate.issuedAt).toLocaleDateString('fr-FR')} au ${new Date(certificate.expiresAt).toLocaleDateString('fr-FR')}</p>
                    </div>
                </div>
            ` : '';

            container.innerHTML = `
                <div style="border: 1px solid #ccc; padding: 20px; margin-bottom: 20px;">
                    <h1 style="color: #333; text-align: center; margin-bottom: 30px;">DEVIS SIGNÉ ÉLECTRONIQUEMENT AVEC CERTIFICATION</h1>
                    
                    <div style="margin-bottom: 20px;">
                        <h2>Informations du client</h2>
                        <p><strong>Nom:</strong> ${customer?.first_name || ''} ${customer?.last_name || ''}</p>
                        <p><strong>Email:</strong> ${customer?.email || ''}</p>
                        <p><strong>Téléphone:</strong> ${customer?.phone || ''}</p>
                    </div>
                    
                    <div style="margin-bottom: 20px;">
                        <h2>Détails du devis</h2>
                        <p><strong>Numéro:</strong> ${quote?.quote_number || 'N/A'}</p>
                        <p><strong>Date:</strong> ${new Date().toLocaleDateString('fr-FR')}</p>
                        <p><strong>Montant total:</strong> ${quote?.total_ttc || '0'} €</p>
                    </div>
                    
                    ${certInfo}
                    
                    <div style="margin-bottom: 20px;">
                        <h2>Signature électronique certifiée</h2>
                        <p style="font-size: 12px; color: #666;">
                            Ce document a été signé électroniquement par ${customer?.first_name || ''} ${customer?.last_name || ''} 
                            le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}.
                        </p>
                        <div style="border: 2px solid #2563eb; background: #eff6ff; padding: 15px; margin-top: 10px; text-align: center; border-radius: 5px; position: relative; overflow: hidden;">
                            <div style="position: absolute; top: -10px; right: -10px; font-size: 60px; color: rgba(37, 99, 235, 0.1); transform: rotate(-20deg);">🔒</div>
                            <div style="font-size: 20px; font-weight: bold; color: #1e40af; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">
                                Signé numériquement par ProdigeLeC
                            </div>
                            <div style="font-size: 14px; margin-bottom: 5px;">
                                ${customer?.first_name || ''} ${customer?.last_name || ''}
                            </div>
                            <div style="font-size: 12px; color: #374151; margin-bottom: 5px;">
                                ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}
                            </div>
                            <div style="font-size: 11px; color: #059669; margin-top: 8px; font-weight: bold;">
                                ✓ Identité vérifiée par code OTP
                            </div>
                            ${certificate ? `<div style="font-size: 10px; color: #6b7280; margin-top: 10px;">
                                <strong>Certificat:</strong> ${certificate.id}
                            </div>` : ''}
                        </div>
                    </div>
                    
                    <div style="margin-top: 30px; font-size: 10px; color: #666; text-align: center; border-top: 1px solid #ccc; padding-top: 15px;">
                        <p><strong>Ce document est conforme au règlement eIDAS sur les signatures électroniques.</strong></p>
                        <p>La signature électronique a la même valeur juridique qu'une signature manuscrite.</p>
                        ${certificate ?
                    `<p>Identifiant unique: ${certificate.id}</p>
                             <p>Hash du certificat: ${certificate.certificateHash.substring(0, 32)}...</p>` :
                    `<p>Identifiant unique: SIG-${Date.now()}-${Math.random().toString(36).substr(2, 9)}</p>`
                }
                    </div>
                </div>
            `;

            document.body.appendChild(container);

            const opt = {
                margin: 10,
                filename: `devis-certifie-${quote?.quote_number || 'prodige'}-${Date.now()}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            const pdfBlob = await html2pdf().set(opt).from(container).outputPdf('blob');

            document.body.removeChild(container);

            return pdfBlob;

        } catch (error) {
            console.error('Erreur lors de la génération du PDF:', error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const handleSendSignedQuote = async () => {
        if (!otpVerified) {
            toast.error('Veuillez d\'abord vérifier votre identité');
            return;
        }

        try {
            setIsLoading(true);

            const signerInfo = {
                firstName: customer?.first_name || '',
                lastName: customer?.last_name || '',
                email: customer?.email || '',
                company: customer?.company_name || 'N/A'
            };

            const response = await fetch('/api/signatures/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    documentId: quote?.id,
                    documentType: 'quote',
                    signerInfo: signerInfo,
                    otpVerified: true // Flag that OTP was verified
                })
            });

            if (response.ok) {
                const result = await response.json();
                const pdfBlob = await generateSignedPDF(result.certificate);

                const formData = new FormData();
                formData.append('pdf', pdfBlob, `devis-certifie-${quote?.quote_number || 'prodige'}-${Date.now()}.pdf`);
                formData.append('quote_id', quote?.id);
                formData.append('customer_email', customer?.email);
                formData.append('signature_id', result.signatureId);

                const emailResponse = await fetch('/api/quotes/send-signed', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                    body: formData
                });

                if (emailResponse.ok) {
                    toast.success('Devis signé et certifié envoyé avec succès!');
                    onSuccess();
                    onClose();
                } else {
                    throw new Error('Erreur lors de l\'envoi de l\'email');
                }
            } else {
                const error = await response.json();
                throw new Error(error.error || 'Erreur lors de la création de la signature');
            }

        } catch (error) {
            console.error('Erreur:', error);
            toast.error(`Erreur: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDownloadSignedPDF = async () => {
        if (!otpVerified) {
            toast.error('Veuillez d\'abord vérifier votre identité');
            return;
        }

        try {
            const pdfBlob = await generateSignedPDF();
            const url = URL.createObjectURL(pdfBlob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `devis-signe-${quote?.quote_number || 'prodige'}-${Date.now()}.pdf`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Erreur lors du téléchargement:', error);
            toast.error('Erreur lors du téléchargement');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-gradient-to-r from-blue-600 to-blue-700">
                    <div>
                        <h2 className="text-xl font-bold text-white">Signature électronique sécurisée</h2>
                        <p className="text-blue-100 text-sm mt-1">Conforme eIDAS - Vérification par OTP</p>
                    </div>
                    <button onClick={onClose} className="text-white/80 hover:text-white">
                        <X size={24} />
                    </button>
                </div>

                {/* Progress Steps */}
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-100">
                    <div className="flex items-center justify-between">
                        {[
                            { step: 1, label: 'Acceptation' },
                            { step: 2, label: 'Vérification' },
                            { step: 3, label: 'Signature' }
                        ].map((item, index) => (
                            <div key={item.step} className="flex items-center">
                                <div className={`
                                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                                    ${currentStep > item.step ? 'bg-green-500 text-white' :
                                        currentStep === item.step ? 'bg-blue-600 text-white' :
                                            'bg-slate-200 text-slate-500'}
                                `}>
                                    {currentStep > item.step ? '✓' : item.step}
                                </div>
                                <span className={`ml-2 text-sm font-medium ${currentStep >= item.step ? 'text-slate-800' : 'text-slate-400'}`}>
                                    {item.label}
                                </span>
                                {index < 2 && (
                                    <div className={`w-16 h-0.5 mx-4 ${currentStep > item.step ? 'bg-green-500' : 'bg-slate-200'}`} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Step 1: Accept Terms */}
                    {currentStep === 1 && (
                        <div className="space-y-4">
                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                                <h3 className="font-semibold text-amber-800 mb-2">Information légale</h3>
                                <p className="text-sm text-amber-700">
                                    Votre signature électronique est légalement contraignante conformément au règlement eIDAS.
                                    En signant, vous acceptez les termes du devis.
                                </p>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                                    <ShieldCheck size={20} />
                                    Vérification d'identité requise
                                </h3>
                                <p className="text-sm text-blue-700">
                                    Un code de vérification sera envoyé à <strong>{customer?.email}</strong> pour confirmer votre identité.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 text-center">
                                <div className="text-4xl mb-2">✍️</div>
                                <p className="text-slate-600 font-medium">
                                    {customer?.first_name || ''} {customer?.last_name || ''}
                                </p>
                                <p className="text-sm text-slate-500">
                                    Devis n° {quote?.quote_number} - {new Date().toLocaleDateString('fr-FR')}
                                </p>
                            </div>

                            <button
                                onClick={handleAcceptAndRequestOtp}
                                disabled={isLoading}
                                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all disabled:opacity-50"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        Envoi du code...
                                    </>
                                ) : (
                                    <>
                                        <Mail size={20} />
                                        Accepter et recevoir le code
                                    </>
                                )}
                            </button>
                        </div>
                    )}

                    {/* Step 2: OTP Verification */}
                    {currentStep === 2 && (
                        <div className="space-y-4">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mail className="text-blue-600" size={32} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-2">Vérifiez votre identité</h3>
                                <p className="text-slate-600">
                                    Un code à 6 chiffres a été envoyé à<br />
                                    <strong className="text-blue-600">{customer?.email}</strong>
                                </p>
                            </div>

                            <div className="space-y-3">
                                <input
                                    type="text"
                                    maxLength={6}
                                    value={otpCode}
                                    onChange={(e) => {
                                        setOtpCode(e.target.value.replace(/\D/g, ''));
                                        setOtpError('');
                                    }}
                                    placeholder="000000"
                                    className={`w-full text-center text-3xl font-mono tracking-[0.5em] py-4 border-2 rounded-xl outline-none transition-colors
                                        ${otpError ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-blue-500'}
                                    `}
                                />
                                {otpError && (
                                    <p className="text-sm text-red-600 text-center">{otpError}</p>
                                )}
                            </div>

                            <button
                                onClick={handleVerifyOtp}
                                disabled={isLoading || otpCode.length !== 6}
                                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all disabled:opacity-50"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        Vérification...
                                    </>
                                ) : (
                                    <>
                                        <ShieldCheck size={20} />
                                        Vérifier le code
                                    </>
                                )}
                            </button>

                            <div className="text-center">
                                <button
                                    onClick={handleResendOtp}
                                    disabled={isLoading}
                                    className="text-sm text-slate-500 hover:text-blue-600 underline"
                                >
                                    Renvoyer le code
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Confirmation & Actions */}
                    {currentStep === 3 && (
                        <div className="space-y-4">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <ShieldCheck className="text-green-600" size={40} />
                                </div>
                                <h3 className="text-lg font-bold text-green-800 mb-2">Identité vérifiée !</h3>
                                <p className="text-slate-600">
                                    Vous pouvez maintenant finaliser la signature du devis.
                                </p>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                                        ✓
                                    </div>
                                    <div>
                                        <p className="font-semibold text-green-800">
                                            {customer?.first_name} {customer?.last_name}
                                        </p>
                                        <p className="text-sm text-green-600">{customer?.email}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={handleDownloadSignedPDF}
                                    disabled={isLoading}
                                    className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 disabled:opacity-50"
                                >
                                    <Download size={16} />
                                    Télécharger
                                </button>
                                <button
                                    onClick={handleSendSignedQuote}
                                    disabled={isLoading}
                                    className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={16} className="animate-spin" />
                                            Envoi...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} />
                                            Envoyer le devis signé
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}