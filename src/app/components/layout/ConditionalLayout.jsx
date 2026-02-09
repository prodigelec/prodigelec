"use client";

import { usePathname } from "next/navigation";

/**
 * Layout conditionnel qui affiche/masque la navbar, footer et bouton flottant
 * selon que l'on est dans une section publique ou privée
 */
export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  
  // Déterminer si on est dans une section privée
  const isPrivateSection = pathname?.includes("/p/") || 
                          pathname === "/login" || 
                          pathname?.startsWith("/private") ||
                          pathname?.includes("(private)");
  
  // Filtrer les enfants pour ne pas afficher les éléments du public dans la section privée
  if (isPrivateSection) {
    // Dans la section privée, on ne retourne que le contenu principal sans navbar/footer/bouton flottant
    return <>{children.filter(child => 
      child?.props?.['data-public-navbar'] === undefined &&
      child?.props?.['data-public-footer'] === undefined &&
      child?.props?.['data-floating-button'] === undefined
    )}</>;
  }
  
  // Dans la section publique, on affiche tout
  return <>{children}</>;
}