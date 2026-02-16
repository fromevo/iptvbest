import type { Metadata } from "next";
import { providers } from "../data/providers";
import { ProvidersExplorer } from "../components/ProvidersExplorer";
import { RecentlyViewedProviders } from "../components/RecentlyViewedProviders";
import type { FeatureTag } from "../data/providers";

const VALID_TAGS = ["4k", "sport", "vod", "archive", "multiscreen", "cheap", "many-channels"] as const;

export const metadata: Metadata = {
  title: "Лучшие IPTV провайдеры 2026 года",
  description:
    "Рейтинг лучших IPTV провайдеров 2026: платные плейлисты, количество каналов, цены, тестовые периоды, архив, мультирум, 4K. Помощь в выборе IPTV для дома.",
  alternates: {
    canonical: "https://iptv-best.ru/"
  }
};

export default async function HomePage({
  searchParams
}: {
  searchParams: Promise<{ q?: string; tags?: string }>;
}) {
  const params = await searchParams;
  const initialQuery = params.q ?? "";
  const initialTags = (params.tags?.split(",").filter((t) => (VALID_TAGS as readonly string[]).includes(t)) ?? []) as FeatureTag[];

  return (
    <div className="space-y-6 sm:space-y-8">
      <section className="card p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center justify-between">
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              🔥 Лучшие IPTV провайдеры 2026
            </h1>
            <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
              Сервис IPTV Best собирает в одном месте платные IPTV плейлисты,
              сравнивает их по количеству каналов, цене, качеству картинки и
              дополнительным функциям вроде архива и мультирума.
            </p>
          </div>
          <div className="text-sm rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 min-w-[240px]">
            <div className="font-semibold mb-1.5 text-emerald-800">
              ✅ Как пользоваться рейтингом?
            </div>
            <ul className="space-y-1 list-disc list-inside text-slate-700">
              <li>выберите 2–3 сервиса из ТОП-10;</li>
              <li>запросите бесплатный тест у каждого;</li>
              <li>оцените качество и удобство на своих устройствах.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            🏅 Рейтинг платных IPTV плейлистов
          </h2>
          <div className="text-sm text-slate-500">
            Обновлено: 2026 · 23+ провайдера
          </div>
        </div>

        <ProvidersExplorer providers={providers} initialQuery={initialQuery} initialTags={initialTags} />
      </section>
      <RecentlyViewedProviders />
    </div>
  );
}

