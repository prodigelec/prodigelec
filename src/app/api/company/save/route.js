import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";

export async function POST(request) {
  try {
    const body = await request.json();
    const backendUrl = process.env.BACKEND_URL || "http://localhost:5000";

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    // Prepare headers
    const headers = { "Content-Type": "application/json" };

    // Forward Admin Token if present
    if (token) {
      headers["Cookie"] = `token=${token}`;
    }

    const response = await axios.post(`${backendUrl}/api/company/save`, body, {
      headers,
      withCredentials: true,
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("API Proxy Error (company-save):", error.message);

    if (error.response) {
      return NextResponse.json(
        { error: error.response.data?.error || "Backend Error" },
        { status: error.response.status },
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
