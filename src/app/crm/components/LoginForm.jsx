'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, Lock, ShieldCheck, AlertCircle } from 'lucide-react';

export default function LoginForm({ accessCode, onSuccess }) {
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('/api/crm', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    endpoint: '/auth/login',
                    data: { password, accessCode }
                }),
            });

            const result = await response.json();

            if (response.ok) {
                // Success!
                if (onSuccess) {
                    onSuccess(result);
                } else {
                    router.push('/portal');
                    router.refresh();
                }
            } else {
                setError(result.error || 'Identifiants invalides.');
            }
        } catch (err) {
            setError('Erreur de connexion au serveur.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex flex-col items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-tr from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 mb-4 ring-4 ring-primary/5">
                        <ShieldCheck className="text-white" size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Accès Sécurisé</h2>
                    <p className="text-sm text-gray-500 mt-2 font-medium">Veuillez vous authentifier pour accéder au CRM</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6 relative z-10">
                    <div className="space-y-4">
                        <div className="relative group">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1 block">
                                Mot de Passe Master
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                    <Lock size={18} />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all duration-200 placeholder:text-gray-300 font-medium"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <div className="bg-gray-50/50 rounded-2xl p-4 border border-gray-100 flex items-start gap-3">
                            <AlertCircle className="text-amber-500 mt-0.5 shrink-0" size={16} />
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">Code d'accès actif</span>
                                <code className="text-[11px] font-mono text-gray-400 truncate max-w-[200px]">{accessCode}</code>
                            </div>
                        </div>
                    </div>

                    {error && (
                        <div className="p-4 rounded-2xl bg-red-50 border border-red-100 flex items-center gap-3 text-red-600 animate-shake">
                            <AlertCircle size={20} />
                            <p className="text-sm font-semibold">{error}</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 px-6 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold shadow-lg shadow-primary/25 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden relative"
                    >
                        <span className="relative z-10">
                            {isLoading ? 'Authentification...' : 'Accéder au CRM'}
                        </span>
                        {!isLoading && <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>}
                        {isLoading ? <Loader2 className="animate-spin relative z-10" size={20} /> : <div className="ml-1 relative z-10 opacity-70 group-hover:translate-x-1 transition-transform">→</div>}
                    </button>
                </form>
            </div>

            <p className="text-center mt-8 text-xs text-gray-400 font-medium">
                &copy; {new Date().getFullYear()} PRODIGELEC. Sécurité de niveau bancaire.
            </p>
        </div>
    );
}
