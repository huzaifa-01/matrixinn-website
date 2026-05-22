"use client";

import { useEffect, useState } from "react";
import { MarkMonogramM } from "./MarkMonogramM";
import { ContactModal } from "./ContactModal";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = () => setContactOpen(true);
    window.addEventListener("open-contact", handler);
    return () => window.removeEventListener("open-contact", handler);
  }, []);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <a href="/" className="nav-logo" aria-label="MatrixInn Solutions home">
            <MarkMonogramM size={32} color="var(--ink)" accent="var(--blue)" />
            <span className="nav-logo-text">
              MATRIX<span className="accent">INN</span>
            </span>
          </a>
          <nav className="nav-links">
            <a href="/#services">What we build</a>
            <a href="/#process">Process</a>
            <a href="/#work">Work</a>
            <a href="/#about">About</a>
          </nav>
          <div className="nav-cta">
            <button className="btn primary" onClick={() => setContactOpen(true)}>
              Start a project
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </header>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
