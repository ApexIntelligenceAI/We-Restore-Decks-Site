import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Deck Services Annapolis MD | We Restore Decks",
  description: "Expert deck restoration, repair, remodeling, and outdoor living services in Annapolis, Maryland.",
};

const IndexPage = () => {
  const html = getPageHtml("index");

  return (
    <PageLayout
      html={html}
      hasEstimateForm={true}
      isContactPage={false}
      initAccordions={false}
      initSlider={true}
    />
  );
};

export default IndexPage;
