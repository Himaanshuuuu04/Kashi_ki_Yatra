"use client";

import { useRef } from "react";

export function ParallaxSection({ children, className = "", speed = 0.5 }) {
  const ref = useRef(null);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div>{children}</div>
    </div>
  );
}
