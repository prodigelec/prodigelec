export default function sitemap() {
  const baseUrl = "https://www.prodigelec.fr";

  return [
    { url: `${baseUrl}/`,                              lastModified: "2025-09-01", changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/services/electricite`,          lastModified: "2025-09-01", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/securite`,             lastModified: "2025-09-01", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/automatismes`,         lastModified: "2025-11-01", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`,                       lastModified: "2025-09-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`,                         lastModified: "2025-09-01", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/mentions-legales`,              lastModified: "2025-09-01", changeFrequency: "yearly",  priority: 0.3 },
    { url: `${baseUrl}/politique-de-confidentialite`,  lastModified: "2025-09-01", changeFrequency: "yearly",  priority: 0.3 },
    { url: `${baseUrl}/cgv`,                           lastModified: "2025-09-01", changeFrequency: "yearly",  priority: 0.3 },
  ];
}
