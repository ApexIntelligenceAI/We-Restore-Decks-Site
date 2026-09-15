import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Pressure Washing",
  description: "Pressure washing and exterior cleaning in Annapolis, Maryland. Low-pressure house washing, high-pressure hardscape cleaning, and vinyl/composite deck cleaning.",
};

const PressureWashingPage = () => {
  const html = getPageHtml("pressure-washing");

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

export default PressureWashingPage;
