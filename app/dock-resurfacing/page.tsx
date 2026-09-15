import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Dock Resurfacing",
  description: "Dock resurfacing services in Annapolis, Maryland. Replace worn dock surfaces and rejuvenate aging docks with a practical, condition-based approach.",
};

const DockResurfacingPage = () => {
  const html = getPageHtml("dock-resurfacing");

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

export default DockResurfacingPage;
