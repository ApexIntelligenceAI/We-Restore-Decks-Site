import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about deck repair, remodeling, restoration, stain colors, docks, pressure washing, and estimates.",
};

const FaqPage = () => {
  const html = getPageHtml("faq");

  return (
    <PageLayout
      html={html}
      hasEstimateForm={true}
      isContactPage={false}
      initAccordions={true}
      initSlider={false}
    />
  );
};

export default FaqPage;
