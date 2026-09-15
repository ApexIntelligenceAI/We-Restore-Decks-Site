import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/Header";
import { WebflowDetect } from "@/components/WebflowDetect";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.werestoredecks.com"),
  title: {
    default: "We Restore Decks",
    template: "%s | We Restore Decks",
  },
  description:
    "Expert deck restoration, repair, remodeling, and outdoor living services in Annapolis, Maryland.",
  icons: {
    icon: [
      { url: "/images/we-restore-decks-logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/images/we-restore-decks-logo.svg",
    apple: "/images/we-restore-decks-logo.svg",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="w-mod-js" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link href="/css/normalize.css" rel="stylesheet" />
        <link href="/css/webflow.css" rel="stylesheet" />
        <link href="/css/we-restore-decks-redesign.webflow.css" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <WebflowDetect />
        <Header />
        {children}
        {/* jQuery & webflow.js removed — all interactive behavior
            (dropdowns, accordions, slider) is handled by React */}
        <Script
          src="https://theliveforce.app/v3/widget/script/jrerfgberqrpxf^1140"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
};

export default RootLayout;
