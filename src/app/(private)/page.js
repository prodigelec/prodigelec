import { redirect } from "next/navigation";

/**
 * Page racine de la section privée
 * Redirige automatiquement vers la page de login
 */
export default function PrivateRootPage() {
  redirect("/login");
}