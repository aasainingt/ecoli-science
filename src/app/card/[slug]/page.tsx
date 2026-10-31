import { notFound } from 'next/navigation';
import { getCardBySlug, ecoliCards } from '@/data/ecoli-data';
import type { Metadata } from 'next';
import CardDetailClient from './client';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ecoliCards.map((card) => ({ slug: card.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const card = getCardBySlug(slug);
  if (!card) return { title: '未找到' };
  return {
    title: card.title,
    description: card.summary,
  };
}

export default async function CardDetailPage({ params }: Props) {
  const { slug } = await params;
  const card = getCardBySlug(slug);
  if (!card) notFound();

  void card;
  return <CardDetailClient />;
}
