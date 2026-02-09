import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Une adresse e-mail valide est requise." },
        { status: 400 },
      );
    }

    // Forward to backend API
    const backendResponse = await fetch(`${process.env.BACKEND_URL}/api/newsletter/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await backendResponse.json();

    if (!backendResponse.ok) {
      return NextResponse.json(
        { error: data.error || "Erreur lors de l'inscription." },
        { status: backendResponse.status },
      );
    }

    return NextResponse.json({ success: true, message: data.message });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'inscription." },
      { status: 500 },
    );
  }
}
