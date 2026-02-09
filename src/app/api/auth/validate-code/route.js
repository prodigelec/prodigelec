import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  try {
    const body = await request.json();
    const backendUrl = process.env.BACKEND_URL || "http://localhost:5000";

    const response = await axios.post(
      `${backendUrl}/api/auth/validate-code`,
      body,
      {
        headers: { "Content-Type": "application/json" },
      },
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("API Proxy Error (validate-code):", error.message);

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
