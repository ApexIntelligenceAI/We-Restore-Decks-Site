import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Patios",
  description: "Custom patio design and installation in Annapolis, Maryland. Paver, stone, and brick patios with fire pits, pergolas, and outdoor living layouts built for Maryland seasons.",
};

const PatiosPage = () => {
  const html = getPageHtml("patios");

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

export default PatiosPage;
