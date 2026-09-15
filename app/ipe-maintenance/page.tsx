import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "IPE Maintenance",
  description: "IPE maintenance services in Annapolis, Maryland. Protect and preserve Brazilian Walnut decks with proper cleaning, prep, and penetrating oil maintenance.",
};

const IpeMaintenancePage = () => {
  const html = getPageHtml("ipe-maintenance");

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

export default IpeMaintenancePage;
