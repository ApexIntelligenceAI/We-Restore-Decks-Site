import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Wooden Decks",
  description: "Natural wood deck design, build, and restoration in Annapolis, Maryland. Pressure-treated and hardwood decks with remodeling, staining, and structural best practices.",
};

const WoodenDecksPage = () => {
  const html = getPageHtml("wooden-decks");

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

export default WoodenDecksPage;
