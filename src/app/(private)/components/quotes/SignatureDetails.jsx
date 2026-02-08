'use client';

import { useState, useEffect } from 'react';
import { Shield, CheckCircle, XCircle, Download, Eye } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function SignatureDetails({ signatureId }) {
    const [signature, setSignature] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (signatureId) {
            fetchSignatureDetails();
        }
    }, [signatureId]);

    const fetchSignatureDetails = async () => {
        try {
            const response = await fetch(`/api/signatures/${signatureId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setSignature(data);
            } else {
                throw new Error('Signature non trouvée');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération de la signature:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const downloadCertificate = async () => {
        try {
            const response = await fetch(`/api/signatures/${signatureId}/certificate`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `certificat-signature-${signatureId}.pdf`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            } else {
                throw new Error('Erreur lors du téléchargement du certificat');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur lors du téléchargement du certificat');
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center p-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-2">Chargement...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center">
                    <XCircle className="h-5 w-5 text-red-500 mr-2" />
                    <span className="text-red-800">{error}</span>
                </div>
            </div>
        );
    }

    if (!signature) {
        return null;
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'valid':
                return 'text-blue-600 bg-blue-50 border-blue-200';
            case 'expired':
                return 'text-orange-600 bg-orange-50 border-orange-200';
            case 'revoked':
                return 'text-red-600 bg-red-50 border-red-200';
            default:
                return 'text-gray-600 bg-gray-50 border-gray-200';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'valid':
                return <Shield className="h-5 w-5 text-blue-600" />;
            case 'expired':
            case 'revoked':
                return <XCircle className="h-5 w-5 text-red-600" />;
            default:
                return <Shield className="h-5 w-5 text-gray-600" />;
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Détails de la Signature Électronique</h3>
                    <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(signature.status)}`}>
                        {getStatusIcon(signature.status)}
                        <span className="ml-2">
                            {signature.status === 'valid' && 'Valide'}
                            {signature.status === 'expired' && 'Expirée'}
                            {signature.status === 'revoked' && 'Révoquée'}
                        </span>
                    </div>
                </div>
            </div>

            <div className="p-6 space-y-6">
                {/* Informations générales */}
                <div>
                    <h4 className="text-md font-medium text-gray-900 mb-3">Informations générales</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-500">Identifiant unique</label>
                            <p className="text-sm text-gray-900 font-mono">{signature.id}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500">Type de document</label>
                            <p className="text-sm text-gray-900 capitalize">{signature.document_type}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500">Date de signature</label>
                            <p className="text-sm text-gray-900">
                                {format(new Date(signature.signed_at), 'dd MMMM yyyy à HH:mm', { locale: fr })}
                            </p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500">Date d'expiration</label>
                            <p className="text-sm text-gray-900">
                                {format(new Date(signature.expires_at), 'dd MMMM yyyy', { locale: fr })}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Informations du signataire */}
                <div>
                    <h4 className="text-md font-medium text-gray-900 mb-3">Signataire</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-500">Nom complet</label>
                            <p className="text-sm text-gray-900">{signature.signer_name}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500">Email</label>
                            <p className="text-sm text-gray-900">{signature.signer_email}</p>
                        </div>
                    </div>
                </div>

                {/* Détails techniques */}
                <div>
                    <h4 className="text-md font-medium text-gray-900 mb-3">Détails techniques</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-500">Algorithme de signature</label>
                            <p className="text-sm text-gray-900">{signature.signature_algorithm}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500">Hash du document</label>
                            <p className="text-sm text-gray-900 font-mono">{signature.signature_hash}</p>
                        </div>
                    </div>
                </div>

                {/* Cadre juridique */}
                <div>
                    <h4 className="text-md font-medium text-gray-900 mb-3">Cadre juridique</h4>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-blue-800">
                            Cette signature électronique est conforme au règlement eIDAS sur les signatures électroniques.
                            Elle a la même valeur juridique qu'une signature manuscrite.
                        </p>
                        <p className="text-xs text-blue-600 mt-2">
                            Type: {signature.legal_framework?.type || 'Avancée'} |
                            Réglementation: {signature.legal_framework?.regulation || 'eIDAS'}
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                    <button
                        onClick={downloadCertificate}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        <Download className="h-4 w-4 mr-2" />
                        Télécharger le certificat
                    </button>
                </div>
            </div>
        </div>
    );
}