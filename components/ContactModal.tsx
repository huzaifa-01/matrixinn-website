"use client";

import { useEffect, useState } from "react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = `mailto:contact@matrixinnsolutions.com?subject=${encodeURIComponent("Project Inquiry")}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.open(url, "_blank");
    onClose();
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 14 }}>
          Start a project
        </div>
        <h3 style={{ margin: 0, fontSize: 28, fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.1 }}>
          Tell us what you&rsquo;re building.
        </h3>
        <p style={{ margin: "14px 0 28px", fontSize: 15, color: "var(--graphite-2)", lineHeight: 1.55 }}>
          A two-sentence brief is enough. We&rsquo;ll reply within one business day with first questions and a rough sprint plan.
        </p>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input
            required
            className="modal-input"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            type="email"
            className="modal-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            required
            className="modal-input"
            placeholder="What are we building?"
            rows={4}
            style={{ resize: "vertical" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="btn primary btn-lg" style={{ justifyContent: "center" }}>
            Send brief <span className="arrow">→</span>
          </button>
        </form>
      </div>
    </div>
  );
}
