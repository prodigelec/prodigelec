import { NextResponse } from "next/server";
import { cities } from "@/app/data/cities";
import { getAllPosts } from "@/lib/blog";

const INDEXNOW_KEY = "a1b2c3d4e5f6789012345678abcdef01";
const HOST = "www.prodigelec.fr";
const BASE_URL = `https://${HOST}`;

function buildUrlList() {
  const staticUrls = [
    `${BASE_URL}/`,
    `${BASE_URL}/services/electricite`,
    `${BASE_URL}/services/securite`,
    `${BASE_URL}/services/automatismes`,
    `${BASE_URL}/contact`,
    `${BASE_URL}/about`,
    `${BASE_URL}/avis`,
    `${BASE_URL}/realisations`,
    `${BASE_URL}/blog`,
    `${BASE_URL}/mentions-legales`,
    `${BASE_URL}/politique-de-confidentialite`,
    `${BASE_URL}/cgv`,
  ];

  const cityUrls = cities.map((c) => `${BASE_URL}/electricien/${c.slug}`);

  let blogUrls = [];
  try {
    blogUrls = getAllPosts().map((p) => `${BASE_URL}/blog/${p.slug}`);
  } catch {
    // no posts
  }

  return [...staticUrls, ...cityUrls, ...blogUrls];
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
