'use client';

import Link from 'next/link';
import { ecoliCards, type EcoliCard } from '@/data/ecoli-data';

function CardIcon({ icon, className }: { icon: string; className?: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    microscope: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18h8" /><path d="M3 22h18" /><path d="M14 22a7 7 0 1 0 0-14h-1" />
        <path d="M9 14h2" /><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
        <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
      </svg>
    ),
    atom: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1" /><path d="M20.2 20.2c2.04-2.04.9-6.46-2.54-9.9s-7.86-4.58-9.9-2.54S6.86 14.22 10.3 17.66s7.86 4.58 9.9 2.54Z" />
        <path d="M15.7 15.7c4.42-4.42 5.12-10.42 1.57-13.43S7.72-1.3 3.3 3.12s-5.12 10.42-1.57 13.43 9.55 3.57 13.97-.85Z" />
      </svg>
    ),
    'shield-alert': (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="M12 8v4" /><path d="M12 16h.01" />
      </svg>
    ),
    route: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="19" r="3" /><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" /><circle cx="18" cy="5" r="3" />
      </svg>
    ),
    'shield-check': (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    pill: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
        <path d="m8.5 8.5 7 7" />
      </svg>
    ),
    'flask-conical': (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" />
        <path d="M6.453 15h11.094" /><path d="M8.5 2h7" />
      </svg>
    ),
  };
  return <>{iconMap[icon] || iconMap.microscope}</>;
}

export default function EcoliCardComponent({ card }: { card: EcoliCard }) {
  return (
    <Link href={`/card/${card.slug}`} className="block group">
      <div className="card-hover relative overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm">
        {/* Color bar */}
        <div
          className="h-1.5 w-full"
          style={{ background: `linear-gradient(90deg, ${card.color}, ${card.color}cc)` }}
        />
        <div className="p-5 sm:p-6">
          {/* Icon + title */}
          <div className="flex items-start gap-3 mb-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${card.color}15` }}
            >
              <CardIcon
                icon={card.icon}
                className="h-5 w-5"
              />
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5 italic">
                {card.subtitle}
              </p>
            </div>
          </div>

          {/* Summary */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
            {card.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {card.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium"
                style={{
                  backgroundColor: `${card.color}10`,
                  color: card.color,
                }}
              >
                {tag}
              </span>
            ))}
            {card.tags.length > 3 && (
              <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs text-muted-foreground">
                +{card.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export { CardIcon };
export { ecoliCards };
