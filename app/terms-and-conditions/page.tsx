import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for We Restore Decks services, estimates, scheduling, payment, warranties, and website use in Annapolis, Maryland.",
};

const TermsAndConditionsPage = () => {
  const html = getPageHtml("terms-and-conditions");

  return (
    <PageLayout
      html={html}
      hasEstimateForm={false}
      isContactPage={false}
      initAccordions={false}
      initSlider={false}
    />
  );
};

export default TermsAndConditionsPage;
