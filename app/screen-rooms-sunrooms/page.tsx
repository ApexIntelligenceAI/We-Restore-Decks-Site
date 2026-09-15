import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { getPageHtml } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Screen rooms / Sunrooms",
  description: "Screen room services in Annapolis, Maryland. Remodel existing screen rooms, build a new screened room on your deck, or design an integrated screened outdoor living space.",
};

const ScreenRoomsSunroomsPage = () => {
  const html = getPageHtml("screen-rooms-sunrooms");

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

export default ScreenRoomsSunroomsPage;
