import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Deck Remodeling",
  description: "Deck remodeling services in Annapolis, Maryland. Upgrade layout, finishes, stairs, and railings with practical design-first guidance.",
};

const DeckRemodelingPage = () => {
  const html = getPageHtml("deck-remodeling");

  return (
    <PageLayout
      html={html}
      hasEstimateForm={true}
      isContactPage={false}
      initAccordions={false}
      initSlider={false}
    />
  );
};

export default DeckRemodelingPage;
