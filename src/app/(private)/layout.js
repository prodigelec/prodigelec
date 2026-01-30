
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import {
    LayoutDashboard,
    Users,
    Settings,
    LogOut,
    UserCircle,
    FolderOpen
} from 'lucide-react';
import LogoutButton from '../crm/components/LogoutButton';

export default async function PortalLayout({ children }) {
    const cookieStore = await cookies();
    const token = cookieStore.get('token');

    // Auth guard
    if (!token) {
        redirect('/public');
    }

    const navItems = [
        { name: 'Vue d\'ensemble', href: '/portal', icon: <LayoutDashboard size={20} /> },
        { name: 'Gestion Clients', href: '/portal/customers', icon: <Users size={20} /> },
        { name: 'Projets / Chantiers', href: '/portal/projects', icon: <FolderOpen size={20} /> },
        { name: 'Configuration', href: '/portal/settings', icon: <Settings size={20} /> },
    ];

    return (
        <div className="theme-private min-h-screen">
            <div className="flex h-screen text-slate-900 font-sans">
                {/* Sidebar - Premium Design */}
                <aside className="w-72 bg-white border-r border-slate-200 flex flex-col shadow-sm z-30">
                    <div className="p-8 flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-xl shadow-slate-200 ring-4 ring-slate-50">
                            <ShieldCheck size={24} />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-black text-lg tracking-tight leading-none">PRODIGELEC</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Élite Portal v2.0</span>
                        </div>
                    </div>

                    <nav className="flex-1 px-4 py-4 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-3 px-5 py-3.5 rounded-2xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all duration-300 font-semibold group"
                            >
                                <span className="opacity-40 group-hover:opacity-100 transition-opacity">
                                    {item.icon}
                                </span>
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="p-6 mt-auto">
                        <div className="p-5 rounded-3xl bg-slate-50 border border-slate-100 flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center ring-2 ring-slate-100">
                                <UserCircle className="text-slate-400" size={28} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold">Admin Master</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Connexion sécurisée</span>
                            </div>
                        </div>

                        <LogoutButton />
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-auto flex flex-col">
                    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-10 sticky top-0 z-20">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Système En Ligne</span>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Dernier Back-up</span>
                                <span className="text-sm font-bold">Il y a 14 min</span>
                            </div>
                            <div className="w-px h-8 bg-slate-200"></div>
                            <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors">
                                <Settings size={18} />
                            </button>
                        </div>
                    </header>

                    <div className="p-10 max-w-7xl mx-auto w-full">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

function ShieldCheck({ size }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}
