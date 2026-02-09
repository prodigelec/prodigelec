import { redirect } from "next/navigation";
import LoginClient from "./LoginClient";

/**
 * Page de login dans la section privée
 * Accessible sans authentification
 */
export default async function LoginPage() {
  let initialCode = "";

  // Utiliser l'URL de l'app
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  try {
    // Appeler l'API pour générer le code d'accès
    const response = await fetch(`${appUrl}/api/auth/access-code`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      initialCode = data.code;
    } else {
      console.error(
        `Échec de la génération du code côté serveur: ${response.status}`,
      );
    }
  } catch (e) {
    console.error("Échec de la génération du code côté serveur:", e.message);
  }

  return <LoginClient initialCode={initialCode} />;
}