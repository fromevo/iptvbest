"use client";

import { useEffect, useState } from "react";
import { providers } from "../data/providers";
import { ProviderCard } from "./ProviderCard";

const STORAGE_KEY = "iptvbest:recent-providers";

export function RecentlyViewedProviders() {
  const [slugs, setSlugs] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const arr = JSON.parse(raw) as string[];
      setSlugs(arr);
    } catch {
      // ignore
    }
  }, []);

  const items = slugs
    .map((slug) => providers.find((p) => p.slug === slug))
    .filter(Boolean);

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg sm:text-xl font-semibold tracking-tight flex items-center gap-2">
        👀 Недавно просмотренные провайдеры
      </h2>
      <div className="space-y-3">
        {items.map((p) => (
          <ProviderCard key={p!.slug} provider={p!} />
        ))}
      </div>
    </section>
  );
}

