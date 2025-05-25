"use client";

import { useState, useEffect } from "react";

export function CursorHighlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-0 opacity-20 bg-gradient-to-r from-amber-300 to-amber-500 blur-3xl"
      style={{
        transform: `translate(${mousePosition.x - 150}px, ${
          mousePosition.y - 150
        }px)`,
        opacity: isVisible ? 0.3 : 0,
        transition: "opacity 0.5s, transform 0.5s",
      }}
    />
  );
}
