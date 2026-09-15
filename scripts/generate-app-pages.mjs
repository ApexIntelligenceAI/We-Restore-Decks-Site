import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");
const manifest = JSON.parse(
  fs.readFileSync(path.join(ROOT, "content", "pages", "manifest.json"), "utf8")
);

const pageTemplate = (entry) => {
  const isIndex = entry.slug === "index";
  const appDir = isIndex
    ? path.join(ROOT, "app")
    : path.join(ROOT, "app", entry.slug);

  const componentName = entry.slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  const initAccordions = entry.slug === "faq";
  const initSlider = entry.slug === "index";

  const pageContent = `import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: ${JSON.stringify(entry.title === "Maintenance" ? "Deck Services Annapolis MD | We Restore Decks" : entry.title)},
  description: ${JSON.stringify(
    entry.description ||
      (entry.slug === "index"
        ? "Expert deck restoration, repair, remodeling, and outdoor living services in Annapolis, Maryland."
        : `${entry.title} | We Restore Decks`)
  )},
};

const ${componentName}Page = () => {
  const html = getPageHtml(${JSON.stringify(entry.slug)});

  return (
    <PageLayout
      html={html}
      hasEstimateForm={${entry.hasEstimateForm}}
      isContactPage={${entry.isContactPage}}
      initAccordions={${initAccordions}}
      initSlider={${initSlider}}
    />
  );
};

export default ${componentName}Page;
`;

  fs.mkdirSync(appDir, { recursive: true });
  fs.writeFileSync(path.join(appDir, "page.tsx"), pageContent, "utf8");
};

for (const entry of manifest) {
  pageTemplate(entry);
}

console.log(`Generated ${manifest.length} app routes.`);
