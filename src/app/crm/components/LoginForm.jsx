'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, Lock, ShieldCheck, User, AlertCircle, Eye, EyeOff, ArrowRight } from 'lucide-react';

/**
 * LoginForm - Premium Elite Edition
 * Features: Multi-field auth, Glassmorphism design, 3D hover effects.
 */
export default function LoginForm({ accessCode, onSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
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
                    data: { username, password, accessCode }
                }),
            });

            const result = await response.json();

            if (response.ok) {
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
            setError('Erreur de communication avec le serveur Élite.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto perspective-1000">
            <div className="relative group transition-all duration-1000 ease-out hover:rotate-x-1 hover:rotate-y-1">
                {/* Glow Backdrop */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-teal-400/20 to-emerald-500/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-50"></div>

                <div className="relative bg-white/80 backdrop-blur-3xl p-10 md:p-14 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100/50 overflow-hidden">
                    {/* Interior Decorative gradients */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full -mr-32 -mt-32 blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                    <div className="relative z-10 flex flex-col items-center mb-12">
                        <div className="w-20 h-20 bg-emerald-500 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-emerald-500/20 mb-6 ring-8 ring-emerald-500/5 rotate-3 hover:rotate-0 transition-transform duration-500">
                            <ShieldCheck className="text-white" size={40} strokeWidth={1.5} />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight text-center">Accès Élite</h2>
                        <div className="h-1 w-12 bg-emerald-500 rounded-full mt-4"></div>
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-6 text-center">PRODIGELEC Portal v3.0</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-8 relative z-10">
                        <div className="space-y-6">
                            {/* Username Field */}
                            <div className="relative group/input">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2.5 ml-2 block">
                                    Identifiant Master
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-300 group-focus-within/input:text-emerald-500 transition-colors">
                                        <User size={18} strokeWidth={2.5} />
                                    </div>
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="block w-full pl-14 pr-5 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500/50 outline-none transition-all duration-300 font-bold text-slate-900 placeholder:text-slate-200"
                                        placeholder="NOM_UTILISATEUR"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="relative group/input">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2.5 ml-2 block">
                                    Code de Sécurité
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-300 group-focus-within/input:text-emerald-500 transition-colors">
                                        <Lock size={18} strokeWidth={2.5} />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full pl-14 pr-14 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500/50 outline-none transition-all duration-300 font-bold text-slate-900 placeholder:text-slate-200 font-mono tracking-widest"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-5 flex items-center text-slate-300 hover:text-emerald-500 transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {error && (
                            <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex items-center gap-3 text-red-600 animate-shake">
                                <AlertCircle size={18} strokeWidth={2.5} />
                                <p className="text-[10px] font-black tracking-tight uppercase">{error}</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-16 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-emerald-500/20 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-4 disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden relative"
                        >
                            <span className="relative z-10">
                                {isLoading ? 'Vérification...' : 'S\'authentifier'}
                            </span>
                            {isLoading ? (
                                <Loader2 className="animate-spin relative z-10" size={20} />
                            ) : (
                                <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={18} strokeWidth={2.5} />
                            )}
                        </button>
                    </form>
                </div>
            </div>

            <div className="mt-12 text-center space-y-2 opacity-50 hover:opacity-100 transition-opacity">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} PRODIGELEC CRM &bull; Architecture Zero-Trust
                </p>
                <div className="flex items-center justify-center gap-4 text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                    <span>Hardware Encrypted</span>
                    <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                    <span>Session Validated</span>
                </div>
            </div>
        </div>
    );
}
