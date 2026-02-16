import type { Metadata } from "next";
import Link from "next/link";
import { providers } from "../../data/providers";
import { RecentlyViewedProviders } from "../../components/RecentlyViewedProviders";

export const metadata: Metadata = {
  title: "Все IPTV провайдеры — список по алфавиту",
  description:
    "Полный список IPTV провайдеров на сайте IPTV Best: алфавитный указатель и быстрый доступ к обзорам.",
  alternates: {
    canonical: "https://iptv-best.ru/providers"
  }
};

export default function ProvidersIndexPage() {
  const sorted = [...providers].sort((a, b) =>
    a.name.localeCompare(b.name, "ru")
  );

  const grouped = sorted.reduce<Record<string, typeof sorted>>((acc, p) => {
    const letter = p.name[0]?.toUpperCase() ?? "#";
    acc[letter] = acc[letter] || [];
    acc[letter].push(p);
    return acc;
  }, {});

  const letters = Object.keys(grouped).sort();

  return (
    <div className="space-y-5 sm:space-y-7">
      <section className="card p-5 sm:p-7 space-y-3 max-w-3xl">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight flex items-center gap-2">
          📡 Все IPTV провайдеры
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Алфавитный список всех провайдеров, представленных в рейтинге IPTV
          Best. Выберите нужного провайдера, чтобы открыть подробный обзор.
        </p>
      </section>

      <div className="max-w-3xl space-y-4">
        <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-slate-300">
          {letters.map((letter) => (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className="rounded-full border border-slate-700 px-2 py-0.5 hover:border-brand-400 hover:text-brand-200"
            >
              {letter}
            </a>
          ))}
        </div>

        <div className="space-y-5">
          {letters.map((letter) => (
            <section key={letter} id={`letter-${letter}`} className="space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-100">
                {letter}
              </h2>
              <div className="card p-3 sm:p-4 space-y-1">
                {grouped[letter].map((p) => (
                  <div
                    key={p.slug}
                    className="flex items-center justify-between gap-2 text-xs sm:text-sm text-slate-200 py-1 border-b border-slate-800 last:border-b-0"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{p.logoEmoji}</span>
                      <div className="flex flex-col">
                        <Link
                          href={`/providers/${p.slug}`}
                          className="hover:text-brand-300"
                        >
                          {p.name}
                        </Link>
                        <span className="text-[11px] text-slate-400">
                          #{p.position} в рейтинге · ⭐ {p.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-400">
                      {p.channelsCount} каналов
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <RecentlyViewedProviders />
    </div>
  );
}

