import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Sample Projects",
  description: "Browse sample deck remodeling, repair, restoration, screen room, and outdoor living projects completed by We Restore Decks in Annapolis and surrounding Maryland communities.",
};

const SampleProjectsPage = () => {
  const html = getPageHtml("sample-projects");

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

export default SampleProjectsPage;
