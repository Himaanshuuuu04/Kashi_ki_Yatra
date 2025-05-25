"use client";

import { useState, useEffect, useRef } from "react";

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  className = "",
}) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);

  useEffect(() => {
    setCount(to);
  }, [to]);

  return (
    <div ref={ref} className={className}>
      {count}
    </div>
  );
}
