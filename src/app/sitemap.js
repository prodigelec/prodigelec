export default function sitemap() {
  const baseUrl = "https://beaveraid.fr"; // Remplacez par votre vrai domaine

  const routes = [
    "",
    "/services/electricite",
    "/services/serrurerie",
    "/services/web",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
