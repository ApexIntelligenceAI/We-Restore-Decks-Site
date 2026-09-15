import type { MetadataRoute } from "next";

const Robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.werestoredecks.com/sitemap.xml",
  };
};

export default Robots;
