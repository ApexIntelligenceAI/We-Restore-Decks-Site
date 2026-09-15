import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Outdoor Decks",
  description: "Outdoor deck design and build services in Annapolis, Maryland. Explore custom layouts, material options, and upgrade paths for your home.",
};

const OutdoorDecksPage = () => {
  const html = getPageHtml("outdoor-decks");

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

export default OutdoorDecksPage;
