'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Sparkles, BookOpen } from 'lucide-react';
import EcoliCard from '@/components/ecoli-card';
import { ecoliCards, categories } from '@/data/ecoli-data';
import { useContent } from '@/hooks/use-content';

export default function Home() {
  const { content, ready } = useContent();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const scrollToCards = () => {
    document.getElementById('cards-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredCards = useMemo(() => {
    return ecoliCards.filter((card) => {
      const matchCategory =
        activeCategory === 'all' || card.category === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchCategory;
      return (
        matchCategory &&
        (card.title.toLowerCase().includes(query) ||
          card.tags.some((t) => t.toLowerCase().includes(query)))
      );
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,148,136,0.06),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(13,148,136,0.12) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 pt-16 pb-14 sm:pt-20 sm:pb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            大肠埃希菌
          </h1>
          <p className="mt-3 text-lg italic text-primary/80 font-medium tracking-wide">
            Escherichia coli
          </p>

          {ready && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={content.heroImage}
                alt="大肠埃希菌示意图"
                className="mx-auto mt-8 w-full max-w-xl rounded-2xl border border-border/50 bg-card/60 shadow-sm"
              />

              <p className="mt-8 text-[0.95rem] leading-8 text-muted-foreground text-left sm:text-justify whitespace-pre-line">
                {content.heroIntro}
              </p>

              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={scrollToCards}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
                >
                  <BookOpen className="h-4 w-4" />
                  档案资料
                </button>
                <Link
                  href="/ai"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-6 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                >
                  <Sparkles className="h-4 w-4" />
                  AI 智能问答
                </Link>
              </div>
            </>
          )}
          {!ready && (
            <div className="mt-8 space-y-4">
              <div className="mx-auto h-52 w-full max-w-xl rounded-2xl bg-muted/60 animate-pulse" />
              <div className="mx-auto h-4 w-11/12 rounded bg-muted/60 animate-pulse" />
              <div className="mx-auto h-4 w-4/5 rounded bg-muted/60 animate-pulse" />
            </div>
          )}
        </div>
      </section>

      {/* Cards */}
      <section id="cards-section" className="scroll-mt-20 flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 pb-16">
        {/* Search + filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索卡片标题或关键词…"
              className="w-full rounded-lg border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/70'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Card grid */}
        {filteredCards.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCards.map((card) => (
              <EcoliCard key={card.slug} card={card} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border py-20 text-center text-sm text-muted-foreground">
            没有找到匹配的卡片，换个关键词试试
          </div>
        )}

        {/* AI bottom entry */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-sm">
              <Sparkles className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-foreground">
                还有疑问？向 AI 提问吧
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                基于科普内容进行智能解答，可以询问大肠埃希菌的症状、用药、预防等任何问题。
              </p>
            </div>
            <Link
              href="/ai"
              className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-sm font-medium text-white shadow-sm hover:shadow-md hover:opacity-95 transition-all"
            >
              <Sparkles className="h-4 w-4" />
              进入 AI 问答
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            大肠埃希菌交互科普 · 内容仅供学习参考，不构成医疗建议
          </p>
        </div>
      </footer>
    </div>
  );
}
