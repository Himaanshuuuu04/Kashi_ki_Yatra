import { Card } from "@/components/ui/card";

export function AnimatedCard({ children, className = "" }) {
  return (
    <div className={className}>
      <Card className={className}>{children}</Card>
    </div>
  );
}
