import type { MetadataRoute } from "next";
import { SERVICES, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base + "/", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: base + "/services", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: base + "/projects", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: base + "/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/pricing", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [...staticRoutes, ...serviceRoutes];
}
