import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact We Restore Decks in Annapolis, MD to request a free deck restoration or outdoor living estimate.",
};

const ContactPage = () => {
  const html = getPageHtml("contact");

  return (
    <PageLayout
      html={html}
      hasEstimateForm={false}
      isContactPage={true}
      initAccordions={false}
      initSlider={false}
    />
  );
};

export default ContactPage;
