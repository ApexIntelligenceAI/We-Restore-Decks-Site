import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Our Process",
  description: "See how We Restore Decks guides every project from first contact through final walkthrough — honest in-person estimates, clear scope, and dependable craftsmanship in Maryland.",
};

const OurProcessPage = () => {
  const html = getPageHtml("our-process");

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

export default OurProcessPage;
