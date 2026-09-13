"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Le menu Services ne s'ouvrait qu'au survol de la souris : au clavier comme
// sur un écran tactile, ses quatre pages étaient inatteignables depuis la
// navbar. Il s'ouvre désormais aussi au clic et se ferme à Échap ou en
// cliquant ailleurs, le survol restant inchangé pour qui a une souris.
export default function NavDropdown({ item, isActive }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const pathname = usePathname();

  // Une navigation referme le menu : sans cela il restait ouvert par-dessus la
  // page d'arrivée, le routeur ne démontant pas le composant.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointerDown = (e) => {
      if (!wrapperRef.current?.contains(e.target)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div
      ref={wrapperRef}
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`flex items-center gap-1 whitespace-nowrap text-sm font-semibold transition-all duration-300 relative px-2 xl:px-2.5 py-2 rounded-lg hover:bg-white/10 ${isActive ? "text-white" : "text-white/80 hover:text-white"}`}
      >
        {item.name}
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <span
          className={`absolute bottom-1 left-3 right-3 h-0.5 bg-primary transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
        />
      </button>

      <div
        className={`absolute top-full left-0 pt-4 transition-all duration-300 ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}
      >
        <div className="bg-background/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 w-56 shadow-xl shadow-black/50 overflow-hidden">
          {item.dropdown.map((subItem) => (
            <Link
              key={subItem.name}
              href={subItem.href}
              tabIndex={open ? 0 : -1}
              aria-current={pathname === subItem.href ? "page" : undefined}
              className={`flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-all group/item ${pathname === subItem.href ? "text-primary bg-white/5" : "text-white/90 hover:text-primary"}`}
            >
              <span className="text-xl group-hover/item:scale-110 transition-transform">{subItem.icon}</span>
              <span className="text-sm font-medium">{subItem.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
