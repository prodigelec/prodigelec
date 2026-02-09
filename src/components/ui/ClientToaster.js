"use client";
import { Toaster } from "react-hot-toast";

export default function ClientToaster() {
  return (
    <Toaster 
      position="bottom-right" 
      reverseOrder={false}
      toastOptions={{
        // Style par défaut
        style: {
          background: '#363636',
          color: '#fff',
        },
        // Styles personnalisés pour les différents types
        success: {
          style: {
            background: '#10b981',
            color: '#fff',
            border: '1px solid #059669',
            boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.3), 0 2px 4px -1px rgba(16, 185, 129, 0.2)',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#10b981',
          },
        },
        error: {
          style: {
            background: '#ef4444',
            color: '#fff',
            border: '2px solid #dc2626',
            boxShadow: '0 4px 6px -1px rgba(239, 68, 68, 0.4), 0 2px 4px -1px rgba(239, 68, 68, 0.2)',
            fontWeight: '600',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#ef4444',
          },
        },
        // Durée d'affichage
        duration: 4000,
      }}
    />
  );
}
