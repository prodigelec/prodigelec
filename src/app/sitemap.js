export default function sitemap() {
  const baseUrl = "https://www.prodigelec.fr";

  const routes = [
    "/public",
    "/public/services/electricite",
    "/public/services/serrurerie",
    "/public/about",
    "/public/contact",
    "/public/politique-de-confidentialite"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/public" ? 1 : 0.8,
  }));

  return routes;
}
