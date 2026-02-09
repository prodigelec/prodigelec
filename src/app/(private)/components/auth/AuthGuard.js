"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Composant client pour vérifier l'authentification
 * Redirige vers la page de login si pas de token
 */
export default function AuthGuard({ children }) {
  const router = useRouter();

  useEffect(() => {
    // Vérifier si on a un token
    const token = document.cookie.includes('token=');
    
    if (!token && !window.location.pathname.includes('/login')) {
      router.push('/login');
    }
  }, [router]);

  return <>{children}</>;
}