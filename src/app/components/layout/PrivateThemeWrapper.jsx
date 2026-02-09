"use client";

import { useEffect } from "react";

/**
 * Wrapper pour appliquer le thème privé
 * Utilisé dans les pages privées pour changer le thème sans causer d'hydration mismatch
 */
export default function PrivateThemeWrapper({ children }) {
  useEffect(() => {
    // Appliquer le thème privé au body
    document.body.classList.remove('theme-public');
    document.body.classList.add('theme-private', 'bg-background-dark');
    
    return () => {
      // Nettoyer à la sortie
      document.body.classList.remove('theme-private', 'bg-background-dark');
      document.body.classList.add('theme-public');
    };
  }, []);

  return <>{children}</>;
}