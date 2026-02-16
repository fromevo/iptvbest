import Link from "next/link";
import type { Provider } from "../data/providers";

interface Props {
  provider: Provider;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  isCompared?: boolean;
  onToggleCompare?: () => void;
}

const tagLabels: Record<string, string> = {
  "4k": "4K качество",
  sport: "Спорт",
  vod: "Фильмы и сериалы",
  adult: "18+",
  archive: "Архив передач",
  multiscreen: "Мультирум",
  cheap: "Бюджетный",
  "many-channels": "Много каналов"
};

const tagEmojis: Record<string, string> = {
  "4k": "🖥️",
  sport: "🏅",
  vod: "🎬",
  adult: "🔞",
  archive: "⏰",
  multiscreen: "📱",
  cheap: "💸",
  "many-channels": "📡"
};

export function ProviderCard({
  provider,
  isFavorite,
  onToggleFavorite,
  isCompared,
  onToggleCompare
}: Props) {
  return (
    <article className="card p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-6">
      <div className="flex sm:flex-col items-start gap-3 w-full sm:w-48">
        <div className="flex items-center justify-center size-12 sm:size-14 rounded-2xl bg-slate-100 border border-slate-200 text-2xl">
          {provider.logoEmoji}
        </div>
          <div className="flex flex-col gap-1 flex-1">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
            <span className="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600">
              #{provider.position} в рейтинге
            </span>
            <span className="inline-flex items-center gap-1">
              ⭐ {provider.rating.toFixed(1)}
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-semibold tracking-tight">
            {provider.name}
          </h2>
          <div className="text-xs text-slate-500">
            {provider.channelsCount} каналов · от ${provider.monthlyFromUsd} / мес
          </div>
        </div>
          {onToggleFavorite && (
            <button
              type="button"
              onClick={onToggleFavorite}
              className={`ml-auto sm:ml-0 inline-flex items-center justify-center rounded-full border px-3 py-2 min-h-[44px] sm:min-h-0 sm:py-1 text-xs font-medium transition-colors ${
                isFavorite
                  ? "border-amber-400 bg-amber-50 text-amber-700"
                  : "border-slate-300 bg-slate-50 text-slate-600 hover:border-amber-400 hover:text-amber-700"
              }`}
            >
              {isFavorite ? "⭐ В избранном" : "☆ В избранное"}
            </button>
          )}
      </div>

      <div className="flex-1 flex flex-col gap-3">
        <p className="text-sm text-slate-600 leading-relaxed">
          {provider.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 text-[11px]">
          {provider.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600"
            >
              <span>{tagEmojis[tag] ?? "✅"}</span>
              <span>{tagLabels[tag] ?? tag}</span>
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm mt-1">
          <div>
            <div className="text-slate-500 mb-1 flex items-center gap-1">
              😊 Плюсы
            </div>
            <ul className="space-y-1 list-disc list-inside text-slate-600">
              {provider.pros.map((pro) => (
                <li key={pro}>{pro}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-slate-500 mb-1 flex items-center gap-1">
              ⚠️ Минусы
            </div>
            <ul className="space-y-1 list-disc list-inside text-slate-600">
              {provider.cons.map((con) => (
                <li key={con}>{con}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-2 text-xs sm:text-sm text-slate-500">
          <div className="flex flex-col gap-0.5 min-w-[140px]">
            <span>Тест: {provider.trialInfo}</span>
            <span>{provider.reviewsCount} проверенных отзывов</span>
          </div>
          <div className="flex flex-wrap gap-2 sm:justify-end">
            {onToggleCompare && (
              <button
                type="button"
                onClick={onToggleCompare}
                className={`inline-flex items-center gap-1 rounded-full border px-3 py-2 min-h-[44px] sm:min-h-0 sm:py-1.5 text-xs sm:text-sm transition-colors ${
                  isCompared
                    ? "border-emerald-400 bg-emerald-50 text-emerald-700"
                    : "border-slate-300 bg-slate-50 text-slate-600 hover:border-emerald-400 hover:text-emerald-700"
                }`}
              >
                {isCompared ? "✓ В сравнении" : "⇄ Сравнить"}
              </button>
            )}
            {provider.websiteUrl && (
              <a
                href={`/go/${provider.slug}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-slate-50 text-slate-600 px-3 py-2 min-h-[44px] sm:min-h-0 sm:py-1.5 text-xs sm:text-sm hover:border-brand-400 hover:text-brand-600 transition-colors"
              >
                Перейти на сайт 🔗
              </a>
            )}
            <Link
              href={`/providers/${provider.slug}`}
              className="inline-flex items-center gap-1 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-medium px-3 py-2 min-h-[44px] sm:min-h-0 sm:py-1.5 text-xs sm:text-sm shadow-md shadow-brand-500/30 transition-colors"
            >
              Смотреть обзор 🔍
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

