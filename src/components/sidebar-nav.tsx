'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ecoliCards } from '@/data/ecoli-data';

interface SidebarNavProps {
  currentSlug?: string;
  onNavigate?: () => void;
}

export default function SidebarNav({ currentSlug, onNavigate }: SidebarNavProps = {}) {
  const pathname = usePathname();

  return (
    <nav className="sticky top-20 space-y-1">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-3">
        目录导航
      </h3>
      <Link
        href="/"
        className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
          pathname === '/'
            ? 'bg-primary/10 text-primary'
            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
        }`}
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        首页概览
      </Link>
      {ecoliCards.map((card) => {
        const isActive =
          currentSlug === card.slug ||
          (!currentSlug && pathname === `/card/${card.slug}`);
        return (
          <Link
            key={card.slug}
            href={`/card/${card.slug}`}
            onClick={onNavigate}
            className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-primary/10 text-primary'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            <span
              className="h-2 w-2 rounded-full shrink-0"
              style={{ backgroundColor: isActive ? card.color : undefined, border: isActive ? 'none' : `2px solid ${card.color}60` }}
            />
            {card.title}
          </Link>
        );
      })}
      <div className="pt-2 mt-2 border-t border-border/60">
        <Link
          href="/ai"
          onClick={onNavigate}
          className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
            pathname === '/ai'
              ? 'bg-amber-50 text-amber-700'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
          </svg>
          AI 智能问答
        </Link>
      </div>
    </nav>
  );
}
