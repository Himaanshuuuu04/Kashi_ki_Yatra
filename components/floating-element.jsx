"use client";

export function FloatingElement({
  children,
  duration = 3,
  delay = 0,
  className = "",
}) {
  return <div className={className}>{children}</div>;
}
