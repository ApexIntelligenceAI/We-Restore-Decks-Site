import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="wrd-footer-1-2">
      <div className="w-embed">
        <style>{`
.wrd-footer-1-2 {
  background:
    radial-gradient(ellipse 800px 500px at 6% 12%, rgba(183,111,63,0.09) 0%, transparent 70%),
    radial-gradient(ellipse 600px 400px at 88% 78%, rgba(51,170,201,0.05) 0%, transparent 60%),
    radial-gradient(ellipse 400px 350px at 45% 45%, rgba(183,111,63,0.035) 0%, transparent 55%),
    linear-gradient(175deg, #2e2019 0%, #1a110b 100%) !important;
  padding: 0 !important;
  position: relative !important;
}
.wrd-footer-1-2::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #B76F3F 0%, rgba(183,111,63,0.35) 35%, rgba(51,170,201,0.18) 65%, transparent 100%);
  z-index: 1;
}
.wrd-footer-grid-1-2 {
  padding-top: 76px !important;
  padding-bottom: 56px !important;
  position: relative;
  z-index: 1;
}
.wrd-footer-desc-1 {
  color: rgba(249,249,248,0.5) !important;
  font-size: 14px !important;
  line-height: 1.7 !important;
  max-width: 28ch !important;
}
.wrd-footer-h {
  color: rgba(255,255,255,0.92) !important;
  font-family: "Archivo", sans-serif !important;
  font-weight: 700 !important;
  font-size: 11px !important;
  letter-spacing: 0.14em !important;
  text-transform: uppercase !important;
  margin-bottom: 18px !important;
  display: block !important;
}
.wrd-footer-link-1 {
  color: rgba(249,249,248,0.45) !important;
  font-size: 14px !important;
  display: block !important;
  padding: 4px 0 !important;
  transition: color 0.2s ease !important;
}
.wrd-footer-link-1:hover {
  color: #B76F3F !important;
}
.wrd-footer-text {
  color: rgba(249,249,248,0.45) !important;
  font-size: 14px !important;
  display: block !important;
  line-height: 1.65 !important;
}
.wrd-footer-cols {
  grid-template-columns: repeat(4, 1fr) !important;
}
.wrd-footer-bottom-1 {
  padding: 24px 0 !important;
  color: rgba(249,249,248,0.25) !important;
  font-size: 12px !important;
  border-top: 1px solid rgba(255,255,255,0.05) !important;
  position: relative;
  z-index: 1;
}
.wrd-footer-logo-1-2 { margin-bottom: 16px !important; }
@media (max-width: 980px) {
  .wrd-footer-cols {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 28px !important;
  }
}
@media (max-width: 620px) {
  .wrd-footer-cols { grid-template-columns: 1fr !important; }
}
`}</style>
      </div>

      <div className="wrd-container wrd-footer-grid-1-2">
        <div>
          <Link href="/" className="wrd-footer-logo-1-2 w-inline-block" />
          <p className="wrd-footer-desc-1">
            Deck restoration, repairs, resurfacing, screen rooms, docks, and outdoor
            living upgrades in Annapolis, MD.
          </p>
        </div>
        <div className="wrd-footer-cols">
          <div className="wrd-footer-col">
            <span className="wrd-footer-h">Services</span>
            <Link href="/deck-restoration" className="wrd-footer-link-1">
              Deck restoration
            </Link>
            <Link href="/deck-repair" className="wrd-footer-link-1">
              Deck repair
            </Link>
            <Link href="/dock-resurfacing" className="wrd-footer-link-1">
              Resurfacing
            </Link>
            <Link href="/screen-rooms-sunrooms" className="wrd-footer-link-1">
              Screen rooms
            </Link>
            <Link href="/dock-restoration-and-repair" className="wrd-footer-link-1">
              Docks
            </Link>
            <Link href="/outdoor-decks" className="wrd-footer-link-1">
              Outdoor living upgrades
            </Link>
          </div>
          <div className="wrd-footer-col">
            <span className="wrd-footer-h">Recent work</span>
            <Link href="/our-work" className="wrd-footer-link-1">Gallery</Link>
            <Link href="/our-process" className="wrd-footer-link-1">Process</Link>
            <Link href="/faq" className="wrd-footer-link-1">FAQ</Link>
          </div>
          <div className="wrd-footer-col">
            <span className="wrd-footer-h">Address</span>
            <span className="wrd-footer-text">1642 St Margarets Rd</span>
            <span className="wrd-footer-text">Annapolis, MD 21409</span>
            <a href="tel:4102636270" className="wrd-footer-link-1">410-263-6270</a>
          </div>
          <div className="wrd-footer-col">
            <span className="wrd-footer-h">Find Us</span>
            <a
              href="https://www.facebook.com/pg/WeRestoreDecksInc/posts/"
              className="wrd-footer-link-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.angieslist.com/companylist/us/md/annapolis/we-restore-decks-reviews-7755665.htm"
              className="wrd-footer-link-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Angie&apos;s List
            </a>
            <a
              href="https://www.youtube.com/channel/UCH3mWJNE9jeFn4xVsuqLTWQ"
              className="wrd-footer-link-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <a
              href="https://www.houzz.com/pro/jonathan-shambarger/we-restore-decks-inc"
              className="wrd-footer-link-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Houzz
            </a>
            <a
              href="https://www.yelp.com/biz/we-restore-decks-annapolis"
              className="wrd-footer-link-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yelp
            </a>
          </div>
        </div>
      </div>

      <div className="ftr-location-wrap">
        <div className="wrd-container wrd-footer-grid-1-2">
          <div>
            <h3 className="ftr-location-title">Our Location</h3>
            <p className="ftr-location-desc">
              Serving Annapolis, Maryland and the surrounding Chesapeake Bay area with
              expert deck and outdoor living services.
            </p>
            <p className="ftr-location-addr">1642 St Margarets Rd, Annapolis, MD 21409</p>
            <a href="tel:4102636270" className="ftr-location-phone">410-263-6270</a>
          </div>
          <div className="ftr-location-map">
            <div className="w-embed">
              <iframe
                src="https://www.google.com/maps?ll=39.02722,-76.443523&z=10&t=m&hl=en-US&gl=US&mapclient=embed&cid=2600933677046508011&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="We Restore Decks location map"
                style={{
                  width: "100%",
                  height: "300px",
                  border: "none",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="wrd-container wrd-footer-bottom-1">
        <span>2026 We Restore Decks, Inc.</span>
        <span>Annapolis, MD</span>
      </div>
    </footer>
  );
};
