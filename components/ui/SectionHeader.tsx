import { ReactNode } from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  children?: ReactNode;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  center = true,
  children,
}: SectionHeaderProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <div className={center ? "text-center" : ""}>
      {badge && (
        <span className="inline-block mb-4 px-4 py-1.5 text-sm font-medium rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
        {highlight ? (
          <>
            {parts[0]}
            <span className="gradient-text">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
      {children}
    </div>
  );
}
