'use client';

import { useState, useEffect } from 'react';
import { Shield, CheckCircle, XCircle, Download, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function PublicSignatureModal({ 
    isOpen, 
    onClose, 
    quote, 
    onSignatureComplete,
    token 
}) {
    const [signatureAccepted, setSignatureAccepted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [signerInfo, setSignerInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: ''
    });

    useEffect(() => {
        if (isOpen && quote?.customer) {
            setSignerInfo({
                firstName: quote.customer.first_name || '',
                lastName: quote.customer.last_name || '',
                email: quote.customer.email || '',
                company: quote.customer.company_name || ''
            });
        }
    }, [isOpen, quote]);

    const handleSignature = async () => {
        if (!signatureAccepted || !signerInfo.email) {
            alert('Veuillez accepter la signature et remplir vos informations');
            return;
        }

        setIsLoading(true);

        try {
            // Créer la signature électronique certifiée
            const response = await fetch('/api/public/signature/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    documentId: quote.id,
                    documentType: 'quote',
                    signerInfo: signerInfo
                })
            });

            if (response.ok) {
                const result = await response.json();
                
                // Générer le PDF signé
                const pdfBlob = await generateSignedPDF(result.certificate);
                
                // Télécharger automatiquement le PDF signé
                const url = window.URL.createObjectURL(pdfBlob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `devis-certifie-${quote.quote_number}-${Date.now()}.pdf`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);

                // Appeler le callback de succès
                onSignatureComplete(result);
                
                // Fermer la modal
                onClose();
            } else {
                const error = await response.json();
                throw new Error(error.error || 'Erreur lors de la création de la signature');
            }

        } catch (error) {
            console.error('Erreur lors de la signature:', error);
            alert(`Erreur: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    const generateSignedPDF = async (certificate) => {
        try {
            // Importer html2pdf dynamiquement si nécessaire
            const html2pdf = (await import('html2pdf.js')).default;
            
            // Créer le contenu du PDF
            const container = document.createElement('div');
            container.style.position = 'absolute';
            container.style.left = '-9999px';
            container.style.top = '-9999px';
            container.style.width = '210mm';
            container.style.padding = '20px';
            container.style.background = 'white';
            container.style.fontFamily = 'Arial, sans-serif';
            
            container.innerHTML = `
                <div style="border: 1px solid #ccc; padding: 20px; margin-bottom: 20px;">
                    <h1 style="color: #333; text-align: center; margin-bottom: 30px;">DEVIS SIGNÉ ÉLECTRONIQUEMENT AVEC CERTIFICATION</h1>
                    
                    <div style="margin-bottom: 20px;">
                        <h2>Informations du client</h2>
                        <p><strong>Nom:</strong> ${signerInfo.firstName} ${signerInfo.lastName}</p>
                        <p><strong>Email:</strong> ${signerInfo.email}</p>
                        <p><strong>Entreprise:</strong> ${signerInfo.company || 'N/A'}</p>
                    </div>
                    
                    <div style="margin-bottom: 20px;">
                        <h2>Détails du devis</h2>
                        <p><strong>Numéro:</strong> ${quote.quote_number}</p>
                        <p><strong>Date:</strong> ${new Date().toLocaleDateString('fr-FR')}</p>
                        <p><strong>Montant total:</strong> ${quote.total_ttc} €</p>
                    </div>
                    
                    <div style="margin-bottom: 20px; border: 1px solid #059669; background: #f0fdf4; padding: 15px; border-radius: 5px;">
                        <h2 style="color: #059669; margin-bottom: 10px;">📜 Certificat de Signature Électronique</h2>
                        <div style="font-size: 12px; color: #374151;">
                            <p><strong>Identifiant du certificat:</strong> ${certificate.id}</p>
                            <p><strong>Signataire:</strong> ${certificate.subject.name}</p>
                            <p><strong>Email:</strong> ${certificate.subject.email}</p>
                            <p><strong>Date de signature:</strong> ${new Date(certificate.signature.timestamp).toLocaleString('fr-FR')}</p>
                            <p><strong>Algorithme:</strong> ${certificate.signature.algorithm}</p>
                            <p><strong>Hash du document:</strong> ${certificate.signature.hash.substring(0, 16)}...</p>
                            <p><strong>Cadre juridique:</strong> ${certificate.legalFramework.regulation} (${certificate.legalFramework.type})</p>
                            <p><strong>Émetteur:</strong> ${certificate.issuer.name}</p>
                            <p><strong>Validité:</strong> Du ${new Date(certificate.issuedAt).toLocaleDateString('fr-FR')} au ${new Date(certificate.expiresAt).toLocaleDateString('fr-FR')}</p>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 20px;">
                        <h2>Signature électronique certifiée</h2>
                        <p style="font-size: 12px; color: #666;">
                            Ce document a été signé électroniquement par ${signerInfo.firstName} ${signerInfo.lastName} 
                            le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}.
                        </p>
                        <div style="border: 2px solid #059669; background: #f0fdf4; padding: 15px; margin-top: 10px; text-align: center; border-radius: 5px;">
                            <div style="font-size: 24px; font-weight: bold; color: #059669; margin-bottom: 10px;">
                                ✓ SIGNÉ ÉLECTRONIQUEMENT AVEC CERTIFICATION
                            </div>
                            <div style="font-size: 14px; margin-bottom: 5px;">
                                ${signerInfo.firstName} ${signerInfo.lastName}
                            </div>
                            <div style="font-size: 12px; color: #374151; margin-bottom: 5px;">
                                ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}
                            </div>
                            <div style="font-size: 10px; color: #6b7280; margin-top: 10px;">
                                <strong>Certificat:</strong> ${certificate.id}
                            </div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 30px; font-size: 10px; color: #666; text-align: center; border-top: 1px solid #ccc; padding-top: 15px;">
                        <p><strong>Ce document est conforme au règlement eIDAS sur les signatures électroniques.</strong></p>
                        <p>La signature électronique a la même valeur juridique qu'une signature manuscrite.</p>
                        <p>Identifiant unique: ${certificate.id}</p>
                        <p>Hash du certificat: ${certificate.certificateHash.substring(0, 32)}...</p>
                    </div>
                </div>
            `;
            
            document.body.appendChild(container);
            
            // Générer le PDF
            const opt = {
                margin: 10,
                filename: `devis-certifie-${quote.quote_number}-${Date.now()}.pdf`,
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
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                            <Shield className="h-6 w-6 text-blue-600 mr-2" />
                            Signature Électronique Certifiée
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <XCircle className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <div className="flex items-start">
                                <AlertCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                <div className="text-sm text-blue-800">
                                    <p className="font-medium mb-1">Signature électronique certifiée</p>
                                    <p>Cette signature est conforme au règlement eIDAS et a la même valeur juridique qu'une signature manuscrite.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Prénom *
                                </label>
                                <input
                                    type="text"
                                    value={signerInfo.firstName}
                                    onChange={(e) => setSignerInfo(prev => ({ ...prev, firstName: e.target.value }))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nom *
                                </label>
                                <input
                                    type="text"
                                    value={signerInfo.lastName}
                                    onChange={(e) => setSignerInfo(prev => ({ ...prev, lastName: e.target.value }))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    value={signerInfo.email}
                                    onChange={(e) => setSignerInfo(prev => ({ ...prev, email: e.target.value }))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Entreprise (optionnel)
                                </label>
                                <input
                                    type="text"
                                    value={signerInfo.company}
                                    onChange={(e) => setSignerInfo(prev => ({ ...prev, company: e.target.value }))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="signature-accept"
                                    checked={signatureAccepted}
                                    onChange={(e) => setSignatureAccepted(e.target.checked)}
                                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="signature-accept" className="ml-3 text-sm text-gray-700">
                                    <span className="font-medium">J'accepte de signer ce devis électroniquement</span>
                                    <p className="text-gray-600 mt-1">
                                        Je reconnais que cette signature électronique est légalement contraignante et a la même valeur qu'une signature manuscrite.
                                    </p>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            Annuler
                        </button>
                        <button
                            onClick={handleSignature}
                            disabled={!signatureAccepted || !signerInfo.email || isLoading}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                    Signature en cours...
                                </>
                            ) : (
                                <>
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Signer électroniquement
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}