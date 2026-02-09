import { NextResponse } from "next/server";

/**
 * Route API publique pour la déconnexion
 * Accessible sans token ni code d'accès
 */
export async function POST(req) {
  try {
    // Forward vers le backend
    const response = await fetch(
      `${process.env.BACKEND_URL || "http://localhost:5000"}/api/auth/logout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const result = await response.json();

    // Créer la réponse
    const nextResponse = NextResponse.json(result, { status: response.status });

    // Transférer les cookies si présents (pour supprimer le token)
    const setCookie = response.headers.get("set-cookie");
    if (setCookie) {
      nextResponse.headers.set("set-cookie", setCookie);
    }

    return nextResponse;
  } catch (error) {
    console.error("Logout API Error:", error);
    return NextResponse.json(
      { error: "Erreur de déconnexion." },
      { status: 500 },
    );
  }
}