"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.4) {
  const [seen, setSeen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } },
      { threshold }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

function useCountUp(target: number, trigger: boolean, duration = 1400) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let raf: number;
    let start: number | null = null;
    const step = (t: number) => {
      if (start == null) start = t;
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, trigger, duration]);
  return v;
}

interface CountUpStatProps {
  value: number;
  suffix?: string;
  label: string;
}

export function CountUpStat({ value, suffix = "", label }: CountUpStatProps) {
  const [ref, seen] = useInView(0.4);
  const n = useCountUp(value, seen);
  return (
    <div className="stat" ref={ref}>
      <div className="v">
        {n}
        {suffix ? <span className="suffix">{suffix}</span> : null}
      </div>
      <div className="lbl">{label}</div>
    </div>
  );
}
