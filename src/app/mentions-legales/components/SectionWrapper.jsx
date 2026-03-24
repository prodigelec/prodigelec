"use client";
import { m } from "framer-motion";

export default function SectionWrapper({ icon, title, children }) {
    return (
        <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-[30px] p-6 md:p-10 backdrop-blur-sm"
        >
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-primary">
                    {icon}
                </div>
                <h2 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight">{title}</h2>
            </div>
            <div className="text-foreground-subtle">
                {children}
            </div>
        </m.div>
    );
}
