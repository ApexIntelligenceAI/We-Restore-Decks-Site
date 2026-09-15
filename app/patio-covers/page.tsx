import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Patio Covers",
  description: "Custom patio cover design and installation in Annapolis, Maryland. Timber pergolas, solid roof covers, and modern slat structures with fans, lighting, and outdoor kitchen integration.",
};

const PatioCoversPage = () => {
  const html = getPageHtml("patio-covers");

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

export default PatioCoversPage;
