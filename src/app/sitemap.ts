import type { MetadataRoute } from "next";

const baseUrl = "https://www.jaswantsaikrishna.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/projects", "/experience", "/resume"];

  const projectSlugs = [
    "bmtc-accessibility-audit",
    "smart-inventory-restaurants",
  ];

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      changeFrequency: route === "" ? ("monthly" as const) : ("yearly" as const),
      priority: route === "" ? 1 : route === "/projects" ? 0.9 : 0.7,
    })),
    ...projectSlugs.map((slug) => ({
      url: `${baseUrl}/projects/${slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
