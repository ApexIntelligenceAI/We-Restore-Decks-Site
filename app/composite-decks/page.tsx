import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Composite Decks",
  description: "Composite deck design and installation in Annapolis, Maryland. Low-maintenance decking for new builds, remodels, and board replacements with wood-look and modern color options.",
};

const CompositeDecksPage = () => {
  const html = getPageHtml("composite-decks");

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

export default CompositeDecksPage;
