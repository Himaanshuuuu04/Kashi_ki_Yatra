"use client";

import { useEffect, useRef } from "react";

export function MandalaBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(canvas.width, canvas.height) * 0.4;

    let rotation = 0;
    let hue = 30; // Amber base hue

    // Draw mandala pattern once (no animation)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const petals = 16;
    const layers = 5;
    for (let layer = 1; layer <= layers; layer++) {
      const radius = (maxRadius / layers) * layer;
      const opacity = 0.03 + (layer / layers) * 0.02;
      const layerHue = (hue + layer * 5) % 360;
      ctx.strokeStyle = `hsla(${layerHue}, 80%, 50%, ${opacity})`;
      ctx.lineWidth = 1;
      for (let i = 0; i < petals; i++) {
        const angle = ((Math.PI * 2) / petals) * i + rotation;
        ctx.beginPath();
        for (let j = 0; j < 100; j++) {
          const petalAngle = angle + (Math.PI / petals) * Math.sin(j / 30);
          const petalRadius = radius * (0.8 + 0.2 * Math.sin(j / 10));
          const x = centerX + Math.cos(petalAngle) * petalRadius;
          const y = centerY + Math.sin(petalAngle) * petalRadius;
          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.stroke();
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-20 pointer-events-none"
    />
  );
}
