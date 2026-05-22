"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const observe = () => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.in)");
      if (!els.length) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              // Also trigger .step.in for process steps
              if (e.target.classList.contains("step")) {
                e.target.classList.add("in");
              }
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
      );
      els.forEach((el) => io.observe(el));
      return io;
    };

    const io = observe();
    return () => io?.disconnect();
  }, []);

  return null;
}
