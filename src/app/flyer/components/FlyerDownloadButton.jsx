"use client";
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Download } from 'lucide-react';
import FlyerPDF from './FlyerPDF';

export default function FlyerDownloadButton() {
    return (
        <PDFDownloadLink
            document={<FlyerPDF />}
            fileName="Flyer-PRODIGELEC-2026.pdf"
            className="flex-1 flex items-center justify-center gap-2 bg-white text-[#0b1a2a] hover:bg-gray-100 px-6 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105"
        >
            {({ loading }) => (
                <>
                    <Download className="w-5 h-5" />
                    {loading ? '...' : 'PDF'}
                </>
            )}
        </PDFDownloadLink>
    );
}
