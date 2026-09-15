import fs from "fs";
import path from "path";
import type { PageManifestEntry } from "./routes";

const PAGES_DIR = path.join(process.cwd(), "content", "pages");

export const getPageManifest = (): PageManifestEntry[] => {
  const manifestPath = path.join(PAGES_DIR, "manifest.json");
  const raw = fs.readFileSync(manifestPath, "utf8");
  return JSON.parse(raw) as PageManifestEntry[];
};

export const getPageBySlug = (slug: string): PageManifestEntry | undefined => {
  return getPageManifest().find((page) => page.slug === slug);
};

export const getPageHtml = (slug: string): string => {
  const filePath = path.join(PAGES_DIR, `${slug}.html`);
  return fs.readFileSync(filePath, "utf8");
};
