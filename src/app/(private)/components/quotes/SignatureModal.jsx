'use client';

import { useState, useRef, useEffect } from 'react';
import { X, RotateCcw, Check, PenTool } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function SignatureModal({ isOpen, onClose, quote, onSuccess }) {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [signerName, setSignerName] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isOpen && canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            ctx.strokeStyle = '#0f172a';
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            clearCanvas();
        }
    }, [isOpen]);

    const startDrawing = (e) => {
        setIsDrawing(true);
        draw(e);
    };

    const stopDrawing = () => {
        setIsDrawing(false);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
    };

    const draw = (e) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();

        // Handle touch or mouse
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const x = clientX - rect.left;
        const y = clientY - rect.top;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const handleSave = async () => {
        if (!signerName) {
            toast.error('Veuillez saisir le nom du signataire');
            return;
        }

        setLoading(true);
        try {
            const signatureData = canvasRef.current.toDataURL('image/png');

            await axios.patch(`/api/quotes/${quote.id}/status`, {
                status: 'signed',
                additionalData: {
                    signature_data: signatureData,
                    signer_name: signerName,
                    signed_at: new Date(),
                    signing_metadata: {
                        userAgent: navigator.userAgent,
                        platform: navigator.platform
                    }
                }
            });

            toast.success('Devis signé avec succès');
            onSuccess();
            onClose();
        } catch (error) {
            console.error('Error signing quote:', error);
            toast.error('Erreur lors de la signature');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <PenTool className="text-primary" size={20} />
                        Signature Électronique
                    </h2>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Nom du signataire <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            placeholder="Ex: Jean Dupont"
                            value={signerName}
                            onChange={(e) => setSignerName(e.target.value)}
                            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Signature</label>
                        <div className="relative group">
                            <canvas
                                ref={canvasRef}
                                width={448}
                                height={200}
                                onMouseDown={startDrawing}
                                onMouseUp={stopDrawing}
                                onMouseMove={draw}
                                onMouseOut={stopDrawing}
                                onTouchStart={startDrawing}
                                onTouchEnd={stopDrawing}
                                onTouchMove={draw}
                                className="w-full h-[200px] bg-white border-2 border-slate-200 rounded-2xl cursor-crosshair touch-none"
                            />
                            <button
                                onClick={clearCanvas}
                                className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white text-slate-400 hover:text-red-500 rounded-lg shadow-sm transition-all"
                                title="Effacer"
                            >
                                <RotateCcw size={16} />
                            </button>
                        </div>
                        <p className="text-[10px] text-slate-400 text-center italic mt-2">
                            En signant, vous acceptez les conditions générales mentionnées sur le devis.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={onClose}
                            className="flex-1 px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-all border border-transparent"
                        >
                            Annuler
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={loading || !signerName}
                            className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-slate-900/10 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                        >
                            {loading ? 'Validation...' : (
                                <>
                                    <Check size={20} />
                                    Signer le devis
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
