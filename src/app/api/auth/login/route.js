import { NextResponse } from "next/server";

/**
 * Route API publique pour l'authentification
 * Accessible sans token ni code d'accès
 */
export async function POST(req) {
  try {
    const body = await req.json();
    const { username, password, accessCode } = body;

    console.log("📨 Requête reçue sur /api/auth/login:", { username, password, accessCode });

    // Forward vers le backend
    const backendUrl = `${process.env.BACKEND_URL || "http://localhost:5000"}/api/auth/login`;
    console.log("🔄 Forward vers le backend:", backendUrl);

    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, accessCode }),
    });

    console.log("📡 Réponse du backend:", response.status, response.statusText);
    const result = await response.json();
    console.log("📊 Résultat du backend:", result);

    // Créer la réponse
    const nextResponse = NextResponse.json(result, { status: response.status });

    // Transférer les cookies si présents
    const setCookie = response.headers.get("set-cookie");
    if (setCookie) {
      nextResponse.headers.set("set-cookie", setCookie);
    }

    return nextResponse;
  } catch (error) {
    console.error("Login API Error:", error);
    return NextResponse.json(
      { error: "Erreur de connexion au serveur d'authentification." },
      { status: 500 },
    );
  }
}