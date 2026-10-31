import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '大肠埃希菌交互科普',
    template: '%s | 大肠埃希菌科普',
  },
  description:
    '大肠埃希菌（E. coli）交互科普平台——了解这种与人类健康密切相关的微生物，涵盖形态结构、致病性、传播途径、预防治疗及最新研究进展。',
  keywords: [
    '大肠埃希菌',
    'E. coli',
    '大肠杆菌',
    '科普',
    '微生物学',
    '致病菌',
    '公共卫生',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
