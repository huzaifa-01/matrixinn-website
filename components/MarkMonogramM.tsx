"use client";

import { useId } from "react";

interface MarkProps {
  size?: number;
  color?: string;
  accent?: string;
}

export function MarkMonogramM({ size = 100, color = "#2A2F37", accent = "#1E7FD0" }: MarkProps) {
  const id = useId().replace(/:/g, "");
  const d = "M20,82 V22 H32 L50,52 L68,22 H80 V82 H68 V44 L50,72 L32,44 V82 Z";
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={`${id}-L`}><rect x="0" y="0" width="50" height="100"/></clipPath>
        <clipPath id={`${id}-R`}><rect x="50" y="0" width="50" height="100"/></clipPath>
      </defs>
      <path d={d} fill={color}  clipPath={`url(#${id}-L)`}/>
      <path d={d} fill={accent} clipPath={`url(#${id}-R)`}/>
    </svg>
  );
}
