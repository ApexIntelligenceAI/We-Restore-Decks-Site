import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Deck Restoration",
  description: "Deck restoration services in Annapolis, Maryland. Restore aging wood decks with cleaning, repairs, refinishing, and long-term protection.",
};

const DeckRestorationPage = () => {
  const html = getPageHtml("deck-restoration");

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

export default DeckRestorationPage;
