'use client';

import { useEffect, useState } from 'react';
import { getDefaultContent, type SiteContent } from '@/data/ecoli-data';

/**
 * 只读内容 hook：
 * 生产内容固化在 public/content-final.json，这里仅做读取。
 * 若文件缺失（理论上不会），回退到代码内置默认内容。
 */
export function useContent() {
  const [content, setContent] = useState<SiteContent>(getDefaultContent());
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch('/content-final.json')
      .then((res) => {
        if (!res.ok) return null;
        return res.json() as Promise<SiteContent>;
      })
      .then((finalContent) => {
        if (cancelled) return;
        if (finalContent) setContent(finalContent);
        setReady(true);
      })
      .catch(() => {
        if (!cancelled) setReady(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { content, ready };
}
