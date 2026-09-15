import type { NextConfig } from "next";

const productionPages = [
  "about-us",
  "blog",
  "colors-finish-options",
  "composite-decks",
  "contact",
  "deck-remodeling",
  "deck-repair",
  "deck-restoration",
  "dock-restoration-and-repair",
  "dock-resurfacing",
  "faq",
  "ipe-maintenance",
  "new-deck-build",
  "our-process",
  "our-story",
  "our-work",
  "outdoor-decks",
  "patio-covers",
  "patios",
  "pressure-washing",
  "prices",
  "resources",
  "sample-projects",
  "screen-rooms-sunrooms",
  "sunrooms",
  "terms-and-conditions",
  "thanks",
  "wooden-decks",
];

const htmlRedirects = productionPages.map((page) => ({
  source: `/${page}.html`,
  destination: page === "blog" ? "/blog" : `/${page}`,
  permanent: true,
}));

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      {
        source: "/detail_blog-posts.html",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog-posts/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      ...htmlRedirects,
    ];
  },
};

export default nextConfig;
