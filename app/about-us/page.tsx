import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about We Restore Decks, our mission, leadership team, and service commitment to homeowners in Annapolis and surrounding Maryland communities.",
};

const AboutUsPage = () => {
  const html = getPageHtml("about-us");

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

export default AboutUsPage;
