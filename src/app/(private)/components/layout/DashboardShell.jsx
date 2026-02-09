'use client';

import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

export default function DashboardShell({ children, company, code }) {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Handle responsive state
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 1024;
            setIsMobile(mobile);
            if (!mobile) {
                setIsMobileMenuOpen(false);
            } else {
                setIsSidebarCollapsed(false); // Reset collapse on mobile
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex min-h-screen bg-[#FDFBF7] font-sans overflow-hidden">
            <Sidebar 
                company={company}
                code={code}
                isCollapsed={isSidebarCollapsed}
                toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                isMobile={isMobile}
                isOpen={isMobileMenuOpen}
                closeMobile={() => setIsMobileMenuOpen(false)}
            />

            <motion.div 
                className="flex-1 flex flex-col min-w-0"
                initial={false}
                animate={{ 
                    marginLeft: isMobile ? 0 : (isSidebarCollapsed ? 80 : 280) 
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                <Navbar 
                    onMenuClick={() => setIsMobileMenuOpen(true)}
                    company={company}
                />
                
                <main className="flex-1 overflow-auto p-4 md:p-8 scroll-smooth">
                    <div className="max-w-7xl mx-auto w-full">
                        {children}
                    </div>
                </main>
            </motion.div>
        </div>
    );
}
