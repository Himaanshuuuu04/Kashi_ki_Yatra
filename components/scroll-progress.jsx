"use client";

export function ScrollProgress() {
  // Remove framer-motion and use a static div
  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 bg-amber-600 origin-left z-50 transition-transform duration-300 ease-in-out"
      style={{ width: "100%", transform: "scaleX(1)" }}
    />
  );
}
