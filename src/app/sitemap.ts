import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const baseUrl = "https://www.jaswantsaikrishna.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/projects", "/experience", "/resume"];

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      changeFrequency: route === "" ? ("monthly" as const) : ("yearly" as const),
      priority: route === "" ? 1 : route === "/projects" ? 0.9 : 0.7,
    })),
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
