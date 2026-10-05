import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getCaseStudies } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getCaseStudies();

  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...(projects.length > 0
      ? [{ url: `${site.url}/work`, changeFrequency: "monthly" as const, priority: 0.8 }]
      : []),
    ...projects.map((project) => ({
      url: `${site.url}/work/${project.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
