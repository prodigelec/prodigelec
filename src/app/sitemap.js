export default function sitemap() {
  const baseUrl = "https://www.prodigelec.fr";

  return [
    { url: `${baseUrl}/`,                              lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/services/electricite`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/securite`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`,                       lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`,                         lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/mentions-legales`,              lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${baseUrl}/politique-de-confidentialite`,  lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${baseUrl}/cgv`,                           lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  ];
}
