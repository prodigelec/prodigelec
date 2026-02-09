"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LogoutButton({ iconOnly = false }) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      // Refresh and redirect to public home
      router.push("/public");
      router.refresh();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      title="Déconnexion"
      className={`flex items-center justify-center rounded-2xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-red-500 hover:border-red-100 transition-all duration-300 font-bold text-sm shadow-sm ${iconOnly ? "w-14 h-14" : "w-full py-4 gap-3"}`}
    >
      <LogOut size={18} />
      {!iconOnly && "Déconnexion"}
    </button>
  );
}
