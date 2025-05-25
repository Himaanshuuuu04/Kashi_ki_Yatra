"use client";

export function AnimatedIcon({ icon: Icon, className = "", delay = 0 }) {
  return (
    <div className={className}>
      <Icon className="stroke-amber-600" strokeWidth={1.5} />
    </div>
  );
}
