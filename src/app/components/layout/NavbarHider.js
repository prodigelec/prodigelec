"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Masque la navbar du public quand on est dans la section privée
 */
export default function NavbarHider() {
  const pathname = usePathname();
  const [isPrivate, setIsPrivate] = useState(false);

  useEffect(() => {
    // Vérifier si on est dans une section privée
    const isInPrivate = pathname?.includes("/p/") || pathname === "/login" || pathname?.startsWith("/private");
    setIsPrivate(isInPrivate);

    if (isInPrivate) {
      // Masquer la navbar du public
      const navbar = document.querySelector('nav[data-public-navbar]');
      if (navbar) {
        navbar.style.display = 'none';
      }
      
      // Masquer le footer
      const footer = document.querySelector('footer[data-public-footer]');
      if (footer) {
        footer.style.display = 'none';
      }
      
      // Masquer le bouton flottant
      const floatingButton = document.querySelector('[data-floating-button]');
      if (floatingButton) {
        floatingButton.style.display = 'none';
      }
    } else {
      // Réafficher la navbar du public
      const navbar = document.querySelector('nav[data-public-navbar]');
      if (navbar) {
        navbar.style.display = '';
      }
      
      const footer = document.querySelector('footer[data-public-footer]');
      if (footer) {
        footer.style.display = '';
      }
      
      const floatingButton = document.querySelector('[data-floating-button]');
      if (floatingButton) {
        floatingButton.style.display = '';
      }
    }
  }, [pathname]);

  return null;
}