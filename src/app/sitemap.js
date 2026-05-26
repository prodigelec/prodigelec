import { cities } from "@/app/data/cities";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://www.prodigelec.fr";

const LASTMOD = {
  home:        "2026-05-26",
  services:    "2026-05-25",
  cities:      "2026-05-26",
  contact:     "2026-05-22",
  about:       "2026-05-12",
  realisations:"2026-05-12",
  blogIndex:   "2026-05-15",
  legal:       "2026-01-01",
};

export default function sitemap() {
  const cityPages = cities.map((c) => ({
    url: `${BASE_URL}/electricien/${c.slug}`,
    lastModified: c.updatedAt || LASTMOD.cities,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPosts = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date || LASTMOD.blogIndex,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [
    { url: `${BASE_URL}/`,                              lastModified: LASTMOD.home,         changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/services/electricite`,          lastModified: LASTMOD.services,     changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/securite`,             lastModified: LASTMOD.services,     changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/automatismes`,         lastModified: LASTMOD.services,     changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/contact`,                       lastModified: LASTMOD.contact,      changeFrequency: "monthly", priority: 0.8 },
    ...cityPages,
    { url: `${BASE_URL}/about`,                         lastModified: LASTMOD.about,        changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/realisations`,                  lastModified: LASTMOD.realisations, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`,                          lastModified: LASTMOD.blogIndex,    changeFrequency: "weekly",  priority: 0.7 },
    ...blogPosts,
    { url: `${BASE_URL}/mentions-legales`,              lastModified: LASTMOD.legal,        changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE_URL}/politique-de-confidentialite`,  lastModified: LASTMOD.legal,        changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE_URL}/cgv`,                           lastModified: LASTMOD.legal,        changeFrequency: "yearly",  priority: 0.3 },
  ];
}
