import Link from "next/link";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  return (
    <>
      <section className="blog-hero">
        <div className="blog-container">
          <div className="blog-eyebrow">404</div>
          <h1 className="blog-title">Page not found</h1>
          <p className="blog-subtitle">
            The page you are looking for may have moved or no longer exists.
          </p>
          <Link href="/" className="wrd-btn wrd-btn-green" style={{ marginTop: "24px" }}>
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
