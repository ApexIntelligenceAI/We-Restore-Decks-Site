"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const deckLinks = [
  { href: "/new-deck-build", label: "New Deck Build" },
  { href: "/deck-repair", label: "Deck Repair" },
  { href: "/deck-remodeling", label: "Deck Remodeling" },
  { href: "/composite-decks", label: "Composite Decks" },
  { href: "/wooden-decks", label: "Wooden Decks" },
  { href: "/dock-resurfacing", label: "Dock Resurfacing" },
  { href: "/colors-finish-options", label: "Colors / Finish Options" },
];

const outdoorLinks = [
  { href: "/sunrooms", label: "Sunrooms" },
  { href: "/screen-rooms-sunrooms", label: "Screenrooms" },
  { href: "/patios", label: "Patios" },
  { href: "/patio-covers", label: "Patio Covers" },
];

const aboutLinks = [
  { href: "/our-story", label: "Our Story" },
  { href: "/our-process", label: "Our Process" },
];

type NavLink = { href: string; label: string };

type DropdownProps = {
  id: string;
  label: string;
  links: NavLink[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
};

const NavDropdown = ({
  id,
  label,
  links,
  open,
  onToggle,
  onClose,
}: DropdownProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggle();
    }
    if (event.key === "Escape") {
      onClose();
    }
  };

  return (
    <div className={`wrd-dd${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="wrd-dd-toggle"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={`nav-menu-${id}`}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
      >
        <span>{label}</span>
        <span className="wrd-dd-caret w-icon-dropdown-toggle" aria-hidden="true" />
      </button>
      <nav id={`nav-menu-${id}`} className="wrd-dd-list" aria-label={label}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="wrd-dd-link">
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export const Header = () => {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleCloseAll = useCallback(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, []);

  const handleToggleDropdown = (id: string) => {
    setOpenDropdown((current) => (current === id ? null : id));
  };

  const handleToggleMobile = () => {
    setOpenDropdown(null);
    setMobileOpen((prev) => !prev);
  };

  const handleMobileKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggleMobile();
    }
  };

  useEffect(() => {
    handleCloseAll();
  }, [pathname, handleCloseAll]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseAll();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [handleCloseAll]);

  const isHome = pathname === "/";

  return (
    <header className="wrd-nav-wrap" ref={headerRef} suppressHydrationWarning>
      <div
        className={`wrd-container-1-2 wrd-nav-1-2-3${mobileOpen ? " wrd-mobile-open" : ""}`}
      >
        <Link
          href="/"
          aria-current={isHome ? "page" : undefined}
          aria-label="We Restore Decks home"
          className={`wrd-brand-1 w-inline-block${isHome ? " w--current" : ""}`}
          suppressHydrationWarning
        >
          <span className="wrd-brand-sr">We Restore Decks</span>
        </Link>

        <nav className="wrd-nav-links-1-2" aria-label="Main navigation">
          <NavDropdown
            id="decks"
            label="Decks"
            links={deckLinks}
            open={openDropdown === "decks"}
            onToggle={() => handleToggleDropdown("decks")}
            onClose={() => setOpenDropdown((current) => (current === "decks" ? null : current))}
          />
          <NavDropdown
            id="outdoor"
            label="Outdoor Living"
            links={outdoorLinks}
            open={openDropdown === "outdoor"}
            onToggle={() => handleToggleDropdown("outdoor")}
            onClose={() => setOpenDropdown((current) => (current === "outdoor" ? null : current))}
          />
          <Link href="/our-work" className="wrd-nav-link-1-2-3">
            Our Work
          </Link>
          <NavDropdown
            id="about"
            label="About Us"
            links={aboutLinks}
            open={openDropdown === "about"}
            onToggle={() => handleToggleDropdown("about")}
            onClose={() => setOpenDropdown((current) => (current === "about" ? null : current))}
          />
        </nav>

        <div className="wrd-nav-right">
          <Link href="/contact" className="wrd-btn wrd-btn-green">
            Get an Estimate
          </Link>
        </div>

        <button
          type="button"
          className="wrd-burger"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={handleToggleMobile}
          onKeyDown={handleMobileKeyDown}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};
