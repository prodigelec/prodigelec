export default function sitemap() {
  const baseUrl = "https://www.prodigelec.fr";

  const routes = [
    "/",
    "/services/electricite",
    "/services/serrurerie",
    "/about",
    "/contact",
    "/politique-de-confidentialite"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));

  return routes;
}
