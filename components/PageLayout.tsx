import { Footer } from "./Footer";
import { EstimateForm } from "./EstimateForm";
import { PageContent } from "./PageContent";

type PageLayoutProps = {
  html: string;
  hasEstimateForm?: boolean;
  isContactPage?: boolean;
  initAccordions?: boolean;
  initSlider?: boolean;
};

export const PageLayout = ({
  html,
  hasEstimateForm = false,
  isContactPage = false,
  initAccordions = false,
  initSlider = false,
}: PageLayoutProps) => {
  return (
    <>
      {isContactPage ? (
        <EstimateForm variant="contact" />
      ) : (
        <>
          <PageContent
            html={html}
            initAccordions={initAccordions}
            initSlider={initSlider}
          />
          {hasEstimateForm && <EstimateForm />}
        </>
      )}
      <Footer />
    </>
  );
};
