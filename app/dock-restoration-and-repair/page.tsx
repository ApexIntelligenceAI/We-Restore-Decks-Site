import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Dock Restoration and Repair",
  description: "Dock restoration and repair services in Annapolis, Maryland. Fix structural issues, worn boards, pilings, and railings with a clear repair-first process.",
};

const DockRestorationAndRepairPage = () => {
  const html = getPageHtml("dock-restoration-and-repair");

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

export default DockRestorationAndRepairPage;
