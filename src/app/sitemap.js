import { cities } from "@/app/data/cities";

export default function sitemap() {
  const baseUrl = "https://www.prodigelec.fr";
  const today = new Date().toISOString().split('T')[0];

  const cityPages = cities.map((c) => ({
    url: `${baseUrl}/electricien/${c.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    { url: `${baseUrl}/`,                              lastModified: today, changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/services/electricite`,          lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/securite`,             lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/automatismes`,         lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`,                       lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    ...cityPages,
    { url: `${baseUrl}/about`,                         lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/mentions-legales`,              lastModified: today, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${baseUrl}/politique-de-confidentialite`,  lastModified: today, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${baseUrl}/cgv`,                           lastModified: today, changeFrequency: "yearly",  priority: 0.3 },
  ];
}
