import { NextResponse } from "next/server";
import sitemap from "@/app/sitemap";

const INDEXNOW_KEY = "321aaad315042811517c3d9e8faa746e";
const HOST = "www.prodigelec.fr";
const BASE_URL = `https://${HOST}`;

// Le sitemap est la seule source de vérité des URLs du site. La liste était
// auparavant recopiée à la main ici, et avait déjà divergé : la page borne de
// recharge n'était jamais soumise. Toute page ajoutée au sitemap est
// désormais soumise automatiquement.
function buildUrlList() {
  return sitemap().map((entry) => entry.url);
}

/**
 * GET /api/indexnow
 * Submits all site URLs to IndexNow (Bing + Yandex).
 * Protect with ?secret=... in production or call from CI only.
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  // Simple shared-secret guard — set INDEXNOW_SECRET in .env.local
  const expectedSecret = process.env.INDEXNOW_SECRET;
  if (expectedSecret && secret !== expectedSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const urlList = buildUrlList();

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList,
  };

  const results = {};

  // Submit to Bing
  try {
    const bingRes = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });
    results.bing = { status: bingRes.status, ok: bingRes.ok };
  } catch (err) {
    results.bing = { error: String(err) };
  }

  // Submit to Yandex
  try {
    const yandexRes = await fetch("https://yandex.com/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });
    results.yandex = { status: yandexRes.status, ok: yandexRes.ok };
  } catch (err) {
    results.yandex = { error: String(err) };
  }

  return NextResponse.json({
    submitted: urlList.length,
    urls: urlList,
    results,
  });
}
