'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import {
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Home,
  ListTree,
} from 'lucide-react';
import Navbar from '@/components/navbar';
import SidebarNav from '@/components/sidebar-nav';
import { ecoliCards, categories } from '@/data/ecoli-data';
import { useContent } from '@/hooks/use-content';

export default function CardDetailClient() {
  const params = useParams();
  const slug = params.slug as string;
  const cardIndex = ecoliCards.findIndex((c) => c.slug === slug);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { content, ready } = useContent();

  if (cardIndex === -1) notFound();

  const card = ecoliCards[cardIndex];
  const category = categories.find((cat) => cat.id === card.category);
  const prevCard = cardIndex > 0 ? ecoliCards[cardIndex - 1] : null;
  const nextCard =
    cardIndex < ecoliCards.length - 1 ? ecoliCards[cardIndex + 1] : null;

  const paragraphs = content.cards[slug] ?? [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar: desktop */}
          <aside className="hidden lg:block w-60 shrink-0">
            <div className="sticky top-24">
              <SidebarNav currentSlug={slug} />
            </div>
          </aside>

          {/* Sidebar: mobile overlay */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-40 lg:hidden">
              <div
                className="absolute inset-0 bg-black/30"
                onClick={() => setSidebarOpen(false)}
              />
              <div className="absolute left-0 top-0 h-full w-72 bg-background p-5 overflow-y-auto shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">
                    目录
                  </span>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="rounded p-1 text-muted-foreground hover:bg-muted"
                  >
                    ✕
                  </button>
                </div>
                <SidebarNav
                  currentSlug={slug}
                  onNavigate={() => setSidebarOpen(false)}
                />
              </div>
            </div>
          )}

          {/* Main content */}
          <main className="flex-1 min-w-0">
            {/* Mobile sidebar trigger */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="mb-4 lg:hidden inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground"
            >
              <ListTree className="h-4 w-4" />
              目录导航
            </button>

            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
              <Link
                href="/"
                className="inline-flex items-center gap-1 hover:text-primary transition-colors"
              >
                <Home className="h-3.5 w-3.5" />
                首页
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span>{category?.label}</span>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground font-medium">{card.title}</span>
            </nav>

            <article className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm">
              {/* Header band */}
              <div
                className="relative px-6 sm:px-10 py-8 text-white"
                style={{
                  background: `linear-gradient(135deg, ${card.color}, ${card.color}cc)`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage:
                      'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
                    backgroundSize: '18px 18px',
                  }}
                />
                <div className="relative">
                  <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                    {category?.label}
                  </span>
                  <h1 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">
                    {card.title}
                  </h1>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 sm:px-10 py-8">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {!ready ? (
                  <div className="space-y-3">
                    <div className="h-4 w-full rounded bg-muted/60 animate-pulse" />
                    <div className="h-4 w-11/12 rounded bg-muted/60 animate-pulse" />
                    <div className="h-4 w-4/5 rounded bg-muted/60 animate-pulse" />
                  </div>
                ) : (
                  <div className="space-y-5">
                    {paragraphs.map((paragraph, index) =>
                      paragraph ? (
                        <div
                          key={index}
                          className="article-content text-[0.95rem] leading-8 text-foreground"
                          dangerouslySetInnerHTML={{ __html: paragraph }}
                        />
                      ) : null
                    )}
                  </div>
                )}

                {/* Actions */}
                <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-border/60 pt-6">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    返回首页
                  </Link>
                  <Link
                    href="/ai"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                  >
                    就此内容向 AI 提问
                  </Link>
                </div>
              </div>
            </article>

            {/* Prev / Next */}
            <nav className="mt-6 grid gap-4 sm:grid-cols-2">
              {prevCard ? (
                <Link
                  href={`/card/${prevCard.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-border/70 bg-card p-4 hover:border-primary/40 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <div className="text-xs text-muted-foreground">上一篇</div>
                    <div className="text-sm font-medium text-foreground">
                      {prevCard.title}
                    </div>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextCard && (
                <Link
                  href={`/card/${nextCard.slug}`}
                  className="group flex items-center justify-end gap-3 rounded-xl border border-border/70 bg-card p-4 hover:border-primary/40 transition-colors text-right"
                >
                  <div>
                    <div className="text-xs text-muted-foreground">下一篇</div>
                    <div className="text-sm font-medium text-foreground">
                      {nextCard.title}
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              )}
            </nav>
          </main>
        </div>
      </div>
    </div>
  );
}
