import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Colors / Finish Options",
  description: "Deck stain color options including oil stain colors, solid colors, semi transparent colors, and deck stain examples.",
};

const ColorsFinishOptionsPage = () => {
  const html = getPageHtml("colors-finish-options");

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

export default ColorsFinishOptionsPage;
