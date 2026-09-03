import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm",
        hover && "transition-all duration-300 hover:border-purple-500/30 hover:bg-white/8 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
