"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FeatureTag, Provider } from "../data/providers";
import { ProviderCard } from "./ProviderCard";

const INITIAL_VISIBLE = 10;
const LOAD_MORE_STEP = 10;

interface Props {
  providers: Provider[];
  initialQuery?: string;
  initialTags?: FeatureTag[];
}

const tagOptions: { id: FeatureTag; label: string; emoji: string }[] = [
  { id: "4k", emoji: "🖥️", label: "4K / UHD" },
  { id: "sport", emoji: "🏅", label: "Спорт" },
  { id: "vod", emoji: "🎬", label: "Фильмы и сериалы" },
  { id: "archive", emoji: "⏰", label: "Архив передач" },
  { id: "multiscreen", emoji: "📱", label: "Мультирум" },
  { id: "cheap", emoji: "💸", label: "До $2/мес" },
  { id: "many-channels", emoji: "📡", label: "> 1000 каналов" }
];

const FAVORITES_KEY = "iptvbest:favorites";

export function ProvidersExplorer({ providers, initialQuery = "", initialTags = [] }: Props) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [selectedTags, setSelectedTags] = useState<FeatureTag[]>(initialTags);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [compare, setCompare] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as string[];
        setFavorites(parsed);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch {
      // ignore
    }
  }, [favorites]);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [query, selectedTags]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (selectedTags.length > 0) params.set("tags", selectedTags.join(","));
    const qs = params.toString();
    const url = qs ? `/?${qs}` : "/";
    router.replace(url, { scroll: false });
  }, [query, selectedTags, router]);

  const toggleTag = (tag: FeatureTag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const toggleFavorite = (slug: string) => {
    setFavorites((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const toggleCompare = (slug: string) => {
    setCompare((prev) => {
      if (prev.includes(slug)) {
        return prev.filter((s) => s !== slug);
      }
      if (prev.length >= 3) {
        const [, ...rest] = prev;
        return [...rest, slug];
      }
      return [...prev, slug];
    });
  };

  const filtered = useMemo(() => {
    return providers
      .slice()
      .sort((a, b) => a.position - b.position)
      .filter((p) => {
        if (showOnlyFavorites && !favorites.includes(p.slug)) {
          return false;
        }
        if (query.trim()) {
          const q = query.toLowerCase();
          if (
            !p.name.toLowerCase().includes(q) &&
            !p.slug.toLowerCase().includes(q)
          ) {
            return false;
          }
        }
        if (selectedTags.length > 0) {
          const hasAll = selectedTags.every((tag) => p.tags.includes(tag));
          if (!hasAll) return false;
        }
        return true;
      });
  }, [providers, favorites, query, selectedTags, showOnlyFavorites]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  const compareProviders = providers.filter((p) => compare.includes(p.slug));
  const compareQuery =
    compareProviders.length >= 2
      ? compareProviders
          .map((p) => p.slug)
          .join(",")
      : "";

  return (
    <div className="space-y-4 sm:space-y-5">
      <div className="card p-4 sm:p-5 space-y-3">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-xs font-medium text-slate-300">
              🔎 Поиск по названию или slug
            </label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Например: TV Team, sport, 4K..."
              className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/70 focus:border-brand-500/60"
            />
          </div>
          <button
            type="button"
            onClick={() => setShowOnlyFavorites((v) => !v)}
            className={`inline-flex items-center justify-center rounded-xl border px-3 py-2.5 min-h-[44px] text-xs sm:text-sm font-medium transition-colors ${
              showOnlyFavorites
                ? "border-amber-400/80 bg-amber-500/10 text-amber-200"
                : "border-slate-700 bg-slate-900 text-slate-200 hover:border-amber-400/60 hover:text-amber-100"
            }`}
          >
            {showOnlyFavorites ? "⭐ Только избранные" : "☆ Показать избранные"}
          </button>
        </div>

        <div className="pt-2 border-t border-slate-800/80 space-y-2">
          <div className="text-xs text-slate-400">🎯 Быстрые фильтры</div>
          <div className="flex flex-wrap gap-2">
            {tagOptions.map((tag) => {
              const active = selectedTags.includes(tag.id);
              return (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => toggleTag(tag.id)}
                  className={`inline-flex items-center gap-1 rounded-full border px-3 py-2 min-h-[44px] sm:min-h-0 sm:py-1.5 text-[11px] sm:text-xs transition-colors ${
                    active
                      ? "border-emerald-400/80 bg-emerald-500/10 text-emerald-200"
                      : "border-slate-700 bg-slate-900 text-slate-200 hover:border-emerald-400/60 hover:text-emerald-100"
                  }`}
                >
                  <span>{tag.emoji}</span>
                  <span>{tag.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="card p-4 sm:p-6 text-sm text-slate-300">
          По заданным фильтрам провайдеры не найдены. Попробуйте убрать часть
          тегов или изменить запрос.
        </div>
      ) : (
        <div className="space-y-4">
          {visible.map((provider) => (
            <ProviderCard
              key={provider.slug}
              provider={provider}
              isFavorite={favorites.includes(provider.slug)}
              onToggleFavorite={() => toggleFavorite(provider.slug)}
              isCompared={compare.includes(provider.slug)}
              onToggleCompare={() => toggleCompare(provider.slug)}
            />
          ))}
          {hasMore && (
            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + LOAD_MORE_STEP)}
                className="rounded-xl border border-slate-600 hover:border-brand-500 text-slate-200 px-4 py-2.5 text-sm font-medium transition-colors"
              >
                Показать ещё {Math.min(LOAD_MORE_STEP, filtered.length - visibleCount)}
              </button>
            </div>
          )}
        </div>
      )}

      {compareProviders.length >= 2 && (
        <div className="sticky bottom-4">
          <div className="mx-auto max-w-xl">
            <div className="card border-emerald-500/60 bg-emerald-900/40 px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="space-y-1">
                <div className="font-semibold text-emerald-200 flex items-center gap-2">
                  ⚖️ Выбрано для сравнения: {compareProviders.length}
                </div>
                <div className="text-emerald-100">
                  {compareProviders.map((p) => p.name).join(" · ")}
                </div>
              </div>
              {compareQuery && (
                <Link
                  href={`/compare?p=${encodeURIComponent(compareQuery)}`}
                  className="inline-flex items-center gap-1 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-3 py-2 min-h-[44px] items-center shadow-md shadow-emerald-900/50 transition-colors"
                >
                  Открыть таблицу сравнения →
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

