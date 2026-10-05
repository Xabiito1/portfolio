import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getAllProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects().filter((project) => !project.placeholder);

  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/work`, changeFrequency: "monthly", priority: 0.8 },
    ...projects.map((project) => ({
      url: `${site.url}/work/${project.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
