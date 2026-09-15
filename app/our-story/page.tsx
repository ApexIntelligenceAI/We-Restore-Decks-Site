import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Discover how We Restore Decks began in Annapolis in 2012, our mission and values, and the team behind every deck project across Maryland.",
};

const OurStoryPage = () => {
  const html = getPageHtml("our-story");

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

export default OurStoryPage;
