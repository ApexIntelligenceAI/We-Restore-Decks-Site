import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting We Restore Decks. We received your request and will be in touch soon.",
};

const ThanksPage = () => {
  const html = getPageHtml("thanks");

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

export default ThanksPage;
