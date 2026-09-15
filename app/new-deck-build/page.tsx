import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "New Deck Build",
  description: "Custom new deck design and construction in Annapolis, Maryland. Ground-up builds, full replacements, wood and composite options with clear planning and pricing.",
};

const NewDeckBuildPage = () => {
  const html = getPageHtml("new-deck-build");

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

export default NewDeckBuildPage;
