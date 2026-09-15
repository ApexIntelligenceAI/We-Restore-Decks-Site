import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/blog";
import { STATIC_ROUTES } from "@/lib/routes";

const BASE_URL = "https://www.werestoredecks.com";

const Sitemap = (): MetadataRoute.Sitemap => {
  const blogSlugs = getAllPostSlugs();

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const blogEntries = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
};

export default Sitemap;
