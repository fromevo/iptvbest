"use client";

import { useCallback, useMemo, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { providers } from "../../data/providers";
import { blogPosts } from "../../data/blogPosts";

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQ);

  const q = query.trim().toLowerCase();
  const hasQuery = q.length >= 2;

  const providerResults = useMemo(() => {
    if (!hasQuery) return [];
    return providers
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.slug.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      )
      .sort((a, b) => a.position - b.position)
      .slice(0, 15);
  }, [q, hasQuery]);

  const blogResults = useMemo(() => {
    if (!hasQuery) return [];
    return blogPosts
      .filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q)
      )
      .slice(0, 10);
  }, [q, hasQuery]);

  const updateUrl = useCallback(
    (newQ: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (newQ.trim()) params.set("q", newQ.trim());
      else params.delete("q");
      window.history.replaceState(
        {},
        "",
        params.toString() ? `?${params.toString()}` : "/search"
      );
    },
    [searchParams]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUrl(query);
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-3xl">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight flex items-center gap-2">
        🔍 Поиск по сайту
      </h1>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onBlur={() => updateUrl(query)}
          placeholder="Провайдеры и статьи…"
          className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-800 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
          aria-label="Поиск"
        />
        <button
          type="submit"
          className="rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-medium px-4 py-2.5 transition-colors"
        >
          Искать
        </button>
      </form>

      {!hasQuery && (
        <p className="text-slate-500 text-sm">
          Введите минимум 2 символа для поиска по провайдерам и статьям блога.
        </p>
      )}

      {hasQuery && (
        <div className="space-y-6">
          {providerResults.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-slate-800 mb-3">
                Провайдеры ({providerResults.length})
              </h2>
              <ul className="space-y-2">
                {providerResults.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/providers/${p.slug}`}
                      className="card p-3 sm:p-4 flex items-center gap-3 hover:border-brand-500/50 transition-colors block"
                    >
                      <span className="text-2xl">{p.logoEmoji}</span>
                      <div>
                        <div className="font-medium text-slate-800">{p.name}</div>
                        <div className="text-xs text-slate-500">
                          {p.channelsCount} · от ${p.monthlyFromUsd}/мес
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {blogResults.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-slate-800 mb-3">
                Статьи блога ({blogResults.length})
              </h2>
              <ul className="space-y-2">
                {blogResults.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="card p-3 sm:p-4 block hover:border-brand-500/50 transition-colors"
                    >
                      <div className="font-medium text-slate-800">{post.title}</div>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                        {post.summary}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {hasQuery && providerResults.length === 0 && blogResults.length === 0 && (
            <p className="text-slate-500">
              По запросу «{query}» ничего не найдено. Попробуйте другие слова.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="text-slate-500">Загрузка…</div>}>
      <SearchContent />
    </Suspense>
  );
}
