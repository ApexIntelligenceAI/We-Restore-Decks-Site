import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Sunrooms",
  description: "Sunroom services in Annapolis, Maryland. Remodel existing sunrooms, build a new glass-enclosed room on your deck, or design an integrated three-season sunroom for year-round living.",
};

const SunroomsPage = () => {
  const html = getPageHtml("sunrooms");

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

export default SunroomsPage;
