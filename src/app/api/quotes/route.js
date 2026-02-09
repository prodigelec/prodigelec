import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const headers = { "Content-Type": "application/json" };
    if (token) {
      headers["Cookie"] = `token=${token}`;
    }

    const response = await axios.get(`${BACKEND_URL}/api/quotes`, {
      headers,
      withCredentials: true,
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("API Proxy Error (quotes-get):", error.message);
    return NextResponse.json(
      { error: error.response?.data?.error || "Backend Error" },
      { status: error.response?.status || 500 },
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const headers = { "Content-Type": "application/json" };
    if (token) {
      headers["Cookie"] = `token=${token}`;
    }

    const response = await axios.post(`${BACKEND_URL}/api/quotes`, body, {
      headers,
      withCredentials: true,
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("API Proxy Error (quotes-post):", error.message);
    return NextResponse.json(
      { error: error.response?.data?.error || "Backend Error" },
      { status: error.response?.status || 500 },
    );
  }
}
