import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Deck Repair",
  description: "Deck repair services in Annapolis, Maryland. Fix unsafe stairs, framing, railings, and deck boards with a clear repair-first process.",
};

const DeckRepairPage = () => {
  const html = getPageHtml("deck-repair");

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

export default DeckRepairPage;
