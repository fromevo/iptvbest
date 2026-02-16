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
    <article className="card p-5 sm:p-6 flex flex-col sm:flex-row gap-5 sm:gap-6">
      <div className="flex sm:flex-col items-start gap-3 w-full sm:w-52">
        <div className="flex items-center justify-center size-14 sm:size-16 rounded-xl bg-blue-50 border-2 border-blue-200 text-3xl">
          {provider.logoEmoji}
        </div>
          <div className="flex flex-col gap-1.5 flex-1">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
            <span className="px-2.5 py-1 rounded-lg bg-blue-100 border border-blue-300 text-blue-800">
              #{provider.position} в рейтинге
            </span>
            <span className="inline-flex items-center gap-1 text-amber-700">
              ⭐ {provider.rating.toFixed(1)}
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
            {provider.name}
          </h2>
          <div className="text-sm text-slate-600 font-medium">
            {provider.channelsCount} каналов · от ${provider.monthlyFromUsd} / мес
          </div>
        </div>
          {onToggleFavorite && (
            <button
              type="button"
              onClick={onToggleFavorite}
              className={`ml-auto sm:ml-0 inline-flex items-center justify-center rounded-full border px-3 py-2 min-h-[44px] sm:min-h-0 sm:py-1 text-xs font-medium transition-colors ${
                isFavorite
                  ? "border-amber-500 bg-amber-200 text-amber-900 font-bold"
                  : "border-slate-300 bg-slate-100 text-slate-700 hover:border-amber-500 hover:bg-amber-100 hover:text-amber-900 font-semibold"
              }`}
            >
              {isFavorite ? "⭐ В избранном" : "☆ В избранное"}
            </button>
          )}
      </div>

      <div className="flex-1 flex flex-col gap-3">
        <p className="text-base text-slate-700 leading-relaxed">
          {provider.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 text-sm">
          {provider.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-100 border border-emerald-400 text-emerald-900 font-semibold"
            >
              <span>{tagEmojis[tag] ?? "✅"}</span>
              <span>{tagLabels[tag] ?? tag}</span>
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base mt-2">
          <div>
            <div className="text-emerald-700 font-semibold mb-1.5 flex items-center gap-1.5">
              😊 Плюсы
            </div>
            <ul className="space-y-1 list-disc list-inside text-slate-600">
              {provider.pros.map((pro) => (
                <li key={pro}>{pro}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-amber-700 font-semibold mb-1.5 flex items-center gap-1.5">
              ⚠️ Минусы
            </div>
            <ul className="space-y-1 list-disc list-inside text-slate-600">
              {provider.cons.map((con) => (
                <li key={con}>{con}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-3 text-sm text-slate-500">
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
                    ? "border-emerald-500 bg-emerald-200 text-emerald-900 font-bold"
                    : "border-slate-300 bg-slate-100 text-slate-700 hover:border-emerald-500 hover:bg-emerald-100 hover:text-emerald-900 font-semibold"
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
                className="inline-flex items-center gap-1.5 rounded-lg border-2 border-blue-300 bg-blue-50 text-blue-800 px-4 py-2 min-h-[44px] sm:min-h-0 sm:py-1.5 text-sm font-semibold hover:bg-blue-100 hover:border-blue-500 transition-colors"
              >
                Перейти на сайт 🔗
              </a>
            )}
            <Link
              href={`/providers/${provider.slug}`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white hover:text-white font-bold px-4 py-2 min-h-[44px] sm:min-h-0 sm:py-1.5 text-sm shadow-md transition-colors"
            >
              Смотреть обзор 🔍
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

