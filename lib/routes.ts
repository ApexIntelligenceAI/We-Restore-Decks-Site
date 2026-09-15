export const STATIC_ROUTES = [
  "/",
  "/about-us",
  "/colors-finish-options",
  "/composite-decks",
  "/contact",
  "/deck-remodeling",
  "/deck-repair",
  "/deck-restoration",
  "/dock-restoration-and-repair",
  "/dock-resurfacing",
  "/faq",
  "/ipe-maintenance",
  "/new-deck-build",
  "/our-process",
  "/our-story",
  "/our-work",
  "/outdoor-decks",
  "/patio-covers",
  "/patios",
  "/pressure-washing",
  "/prices",
  "/resources",
  "/sample-projects",
  "/screen-rooms-sunrooms",
  "/sunrooms",
  "/terms-and-conditions",
  "/thanks",
  "/wooden-decks",
  "/blog",
] as const;

export type PageManifestEntry = {
  slug: string;
  title: string;
  description: string;
  hasEstimateForm: boolean;
  isContactPage: boolean;
  route: string;
};
