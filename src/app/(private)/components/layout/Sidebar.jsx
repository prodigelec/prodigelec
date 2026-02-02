'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    LayoutDashboard, 
    Users, 
    FileText, 
    Briefcase, 
    Settings, 
    Building2, 
    LogOut,
    ChevronLeft,
    ChevronRight,
    Menu
} from 'lucide-react';

export default function Sidebar({ 
    company, 
    code, 
    isCollapsed, 
    toggleCollapse, 
    isMobile, 
    isOpen, 
    closeMobile 
}) {
    const pathname = usePathname();
    
    const navItems = [
        { href: `/p/${code}/portal`, icon: LayoutDashboard, label: 'Tableau de bord' },
        { href: `/p/${code}/customers`, icon: Users, label: 'Clients' },
        { href: `/p/${code}/quotes`, icon: FileText, label: 'Devis' },
        { href: `/p/${code}/projects`, icon: Briefcase, label: 'Chantiers' },
        { href: `/p/${code}/settings`, icon: Settings, label: 'Paramètres' },
    ];

    const sidebarVariants = {
        expanded: { width: 280 },
        collapsed: { width: 80 },
        mobileOpen: { x: 0, width: 280 },
        mobileClosed: { x: '-100%' }
    };

    return (
        <>
            {/* Mobile Overlay */}
            <AnimatePresence>
                {isMobile && isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeMobile}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar Container */}
            <motion.aside
                initial={isMobile ? 'mobileClosed' : (isCollapsed ? 'collapsed' : 'expanded')}
                animate={isMobile ? (isOpen ? 'mobileOpen' : 'mobileClosed') : (isCollapsed ? 'collapsed' : 'expanded')}
                variants={sidebarVariants}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className={`fixed top-0 left-0 h-full z-50 bg-[#0b1a2a] text-white border-r border-white/5 shadow-2xl flex flex-col`}
            >
                {/* Logo Section */}
                <div className="h-20 flex items-center px-6 relative border-b border-white/5">
                    <div className="flex items-center gap-4 overflow-hidden">
                        <div className="flex-shrink-0 w-10 h-10 relative bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                            {company?.logoUrl ? (
                                <Image
                                    src={company.logoUrl}
                                    alt="Logo"
                                    fill
                                    className="object-cover rounded-lg p-1"
                                />
                            ) : (
                                <Building2 className="text-[#c9a227]" size={20} />
                            )}
                        </div>
                        
                        <motion.div 
                            animate={{ opacity: (isCollapsed && !isMobile) ? 0 : 1 }}
                            className="flex flex-col whitespace-nowrap"
                        >
                            <span className="font-bold text-white tracking-wide text-sm truncate max-w-[160px]">
                                {company?.companyName || 'PRODIGELEC'}
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium bg-white/5 px-2 py-0.5 rounded-full w-fit mt-0.5">
                                ESPACE PRO
                            </span>
                        </motion.div>
                    </div>

                    {/* Desktop Collapse Toggle */}
                    {!isMobile && (
                        <button 
                            onClick={toggleCollapse}
                            className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#c9a227] hover:bg-[#b08d21] rounded-full flex items-center justify-center text-[#0b1a2a] shadow-lg shadow-black/20 z-50 transition-colors"
                        >
                            {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
                        </button>
                    )}
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 py-6 px-3 space-y-2 overflow-y-auto custom-scrollbar">
                    {navItems.map((item) => {
                        const isActive = pathname?.startsWith(item.href);
                        
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={isMobile ? closeMobile : undefined}
                                className={`
                                    relative flex items-center h-12 px-3 rounded-xl transition-all duration-200 group
                                    ${isActive 
                                        ? 'bg-[#c9a227] text-[#0b1a2a] font-bold shadow-lg shadow-[#c9a227]/20' 
                                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                    }
                                `}
                            >
                                <div className="flex items-center justify-center min-w-[24px]">
                                    <item.icon size={20} className={isActive ? 'text-[#0b1a2a]' : 'text-slate-400 group-hover:text-white transition-colors'} />
                                </div>
                                
                                <motion.span
                                    animate={{ 
                                        opacity: (isCollapsed && !isMobile) ? 0 : 1,
                                        width: (isCollapsed && !isMobile) ? 0 : 'auto'
                                    }}
                                    className="ml-4 whitespace-nowrap overflow-hidden"
                                >
                                    {item.label}
                                </motion.span>

                                {/* Tooltip for collapsed state */}
                                {isCollapsed && !isMobile && (
                                    <div className="absolute left-full ml-4 bg-[#0b1a2a] text-white text-xs px-3 py-2 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl z-50">
                                        {item.label}
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* User Profile / Footer */}
                <div className="p-4 border-t border-white/5 bg-[#081320]">
                    <div className={`flex items-center gap-3 ${isCollapsed && !isMobile ? 'justify-center' : ''}`}>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a227] to-[#8a6e15] flex items-center justify-center text-[#0b1a2a] font-bold shadow-lg shrink-0">
                            AD
                        </div>
                        
                        <motion.div 
                            animate={{ 
                                opacity: (isCollapsed && !isMobile) ? 0 : 1,
                                width: (isCollapsed && !isMobile) ? 0 : 'auto'
                            }}
                            className="overflow-hidden whitespace-nowrap"
                        >
                            <div className="text-sm font-bold text-white">Administrateur</div>
                            <div className="text-xs text-slate-400">admin@prodigelec.fr</div>
                        </motion.div>

                        <button 
                            className={`ml-auto text-slate-400 hover:text-red-400 transition-colors ${isCollapsed && !isMobile ? 'hidden' : 'block'}`}
                            title="Déconnexion"
                        >
                            <LogOut size={18} />
                        </button>
                    </div>
                </div>
            </motion.aside>
        </>
    );
}
