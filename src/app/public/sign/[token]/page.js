"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import {
  Shield,
  FileCheck,
  PenTool,
  Download,
  CheckCircle2,
} from "lucide-react";

export default function PublicSignaturePage() {
  const params = useParams();
  const token = params.token;

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [document, setDocument] = useState(null);
  const [isSigned, setIsSigned] = useState(false);
  const [signatureData, setSignatureData] = useState(null);

  // Canvas ref for signature
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    if (token) {
      fetchDocument();
    }
  }, [token, fetchDocument]);

  const fetchDocument = useCallback(async () => {
    try {
      const response = await axios.get(
        `/api/public/signature/document?token=${token}`,
      );
      if (response.data.success) {
        setDocument(response.data.document);
      }
    } catch (error) {
      console.error("Error fetching document:", error);
      toast.error("Lien invalide ou expiré");
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(
      (e.clientX || e.touches[0].clientX) - rect.left,
      (e.clientY || e.touches[0].clientY) - rect.top,
    );
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");

    ctx.lineTo(
      (e.clientX || e.touches[0].clientX) - rect.left,
      (e.clientY || e.touches[0].clientY) - rect.top,
    );
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSign = async () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL();

    // Simple check if canvas is empty (could be improved)
    if (dataUrl.length < 2000) {
      toast.error("Veuillez apposer votre signature");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `/api/public/signature/signature/create?token=${token}`,
        {
          documentId: document.id,
          documentType: "quote",
          signerInfo: {
            firstName: document.customer.first_name || "",
            lastName: document.customer.last_name || "",
            email: document.customer.email,
            company: document.customer.company_name || "",
          },
          signatureImage: dataUrl,
        },
      );

      if (response.data.success) {
        setIsSigned(true);
        toast.success("Document signé avec succès");
      }
    } catch (error) {
      console.error("Error signing document:", error);
      toast.error("Erreur lors de la signature");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!document && !isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center max-w-md w-full">
          <Shield className="mx-auto text-slate-300 mb-4" size={48} />
          <h1 className="text-xl font-bold text-slate-900 mb-2">
            Lien invalide
          </h1>
          <p className="text-slate-600">
            Ce lien de signature n&apos;est plus valide ou a expiré.
          </p>
        </div>
      </div>
    );
  }

  if (isSigned) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md w-full animate-in zoom-in-95 duration-300">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Merci !</h1>
          <p className="text-slate-600 mb-8">
            Le devis <strong>{document.quote_number}</strong> a été signé avec
            succès.
          </p>
          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
              <Download size={18} />
              Télécharger le devis signé
            </button>
            <p className="text-xs text-slate-400 mt-4">
              Une copie de confirmation vous a été envoyée par email.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
              P
            </div>
            <span className="font-bold text-slate-900 tracking-tight">
              PRODIGELEC
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
            <Shield size={14} className="text-blue-600" />
            Signature Sécurisée RSA-SHA256
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-8">
          {/* Doc Header */}
          <div className="p-8 border-b border-slate-100 bg-slate-50/50">
            <div className="flex flex-col md:row items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1 block">
                  Signature de devis
                </span>
                <h1 className="text-2xl font-bold text-slate-900">
                  Devis n° {document.quote_number}
                </h1>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-slate-900">
                  {new Intl.NumberFormat("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                  }).format(document.total_ttc)}
                </div>
                <div className="text-sm text-slate-500">
                  Total TTC à valider
                </div>
              </div>
            </div>
          </div>

          {/* Doc Content */}
          <div className="p-8 space-y-8">
            {/* Company & Client */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Prestataire
                </h3>
                <div className="text-sm">
                  <p className="font-bold text-slate-900 text-base">
                    {document.company.name}
                  </p>
                  <p className="text-slate-600 mt-1">
                    {document.company.address}
                  </p>
                  <p className="text-slate-600">
                    {document.company.zip_code} {document.company.city}
                  </p>
                  <p className="text-slate-500 mt-2">
                    SIRET: {document.company.siret}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Client
                </h3>
                <div className="text-sm">
                  <p className="font-bold text-slate-900 text-base">
                    {document.customer.first_name} {document.customer.last_name}
                  </p>
                  {document.customer.company_name && (
                    <p className="text-slate-800 font-medium">
                      {document.customer.company_name}
                    </p>
                  )}
                  <p className="text-slate-600 mt-1">
                    {document.customer.address}
                  </p>
                  <p className="text-slate-600">
                    {document.customer.zip_code} {document.customer.city}
                  </p>
                </div>
              </div>
            </div>

            {/* Items Table (Simplified) */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Détail des prestations
              </h3>
              <div className="border border-slate-100 rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-100 text-left">
                    <tr>
                      <th className="px-6 py-3">Description</th>
                      <th className="px-6 py-3 text-center">Qté</th>
                      <th className="px-6 py-3 text-right">Total HT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {document.items.map((item, idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-4 text-slate-900">
                          {item.description}
                        </td>
                        <td className="px-6 py-4 text-center text-slate-600">
                          {item.quantity}
                        </td>
                        <td className="px-6 py-4 text-right text-slate-900 font-medium">
                          {new Intl.NumberFormat("fr-FR", {
                            style: "currency",
                            currency: "EUR",
                          }).format(item.total_ht)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Notes */}
            {document.notes && (
              <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100/50">
                <h3 className="text-xs font-bold text-amber-800 uppercase tracking-widest mb-2">
                  Notes
                </h3>
                <p className="text-sm text-slate-700 whitespace-pre-line">
                  {document.notes}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Signature Card */}
        <div className="bg-white rounded-3xl shadow-xl border-2 border-blue-600/20 overflow-hidden">
          <div className="p-6 bg-blue-50/50 border-b border-blue-100 flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center">
              <PenTool size={18} />
            </div>
            <h2 className="text-lg font-bold text-blue-900">
              Signer le document
            </h2>
          </div>
          <div className="p-8">
            <p className="text-sm text-slate-600 mb-6">
              En signant ci-dessous, vous acceptez les conditions générales de
              vente et validez les prestations décrites ci-dessus.
            </p>

            <div className="relative mb-6">
              <canvas
                ref={canvasRef}
                className="w-full h-64 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl cursor-crosshair touch-none"
                width={800}
                height={256}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
              />
              <button
                onClick={clearCanvas}
                className="absolute bottom-4 right-4 text-xs font-bold text-slate-400 hover:text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-100 transition-all"
              >
                Effacer
              </button>
            </div>

            <div className="flex flex-col sm:row items-center justify-between gap-6">
              <div className="flex items-start gap-3">
                <Shield className="text-blue-600 mt-0.5" size={20} />
                <div>
                  <p className="text-xs font-bold text-slate-900">
                    Signature certifiée ProdigeLeC
                  </p>
                  <p className="text-[10px] text-slate-500 max-w-[200px]">
                    Votre signature sera associée à un certificat électronique
                    infalsifiable (RSA-SHA256).
                  </p>
                </div>
              </div>
              <button
                onClick={handleSign}
                disabled={isSubmitting}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Signature en cours...
                  </>
                ) : (
                  <>
                    <FileCheck size={20} />
                    Valider et Signer
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
