import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Browse deck remodeling, repair, restoration, screen room, and outdoor living projects completed by We Restore Decks in Annapolis and surrounding Maryland communities.",
};

const OurWorkPage = () => {
  const html = getPageHtml("our-work");

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

export default OurWorkPage;
