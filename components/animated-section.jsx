"use client";

import { useRef } from "react";

export function AnimatedSection({ children, className = "" }) {
  const ref = useRef(null);

  return (
    <div ref={ref} className={className}>
      <div>{children}</div>
    </div>
  );
}
