import type { Metadata } from "next";
import { providers, getProviderBySlug } from "../../data/providers";

interface Props {
  searchParams: Promise<{ p?: string }>;
}

export const metadata: Metadata = {
  title: "Сравнение IPTV провайдеров",
  description:
    "Сравнение IPTV провайдеров по цене, количеству каналов, рейтингу, тестовому периоду и функциям (4K, спорт, архив, мультирум).",
  alternates: {
    canonical: "https://iptv-best.ru/compare"
  }
};

export default async function ComparePage({ searchParams }: Props) {
  const params = await searchParams;
  const slugsParam = params.p ?? "";
  const slugs = slugsParam
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const uniqueSlugs = Array.from(new Set(slugs));
  const compared = uniqueSlugs
    .map((slug) => getProviderBySlug(slug))
    .filter(Boolean);

  const hasEnough = compared.length >= 2;

  const allTags = Array.from(
    new Set(providers.flatMap((p) => p.tags))
  ).sort();

  return (
    <div className="space-y-5 sm:space-y-7">
      <header className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight flex items-center gap-2">
          ⚖️ Сравнение IPTV провайдеров
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
          Выберите провайдеров на главной странице и добавьте их в сравнение.
          Мы сведём ключевые параметры в одну таблицу: цену, количество
          каналов, тестовый период, рейтинг и функции.
        </p>
      </header>

      {!hasEnough ? (
        <div className="card p-4 sm:p-6 text-sm text-slate-600 space-y-2">
          <p>
            Для наглядного сравнения добавьте как минимум двух провайдеров через
            кнопку «⇄ Сравнить» на главной странице.
          </p>
          <p className="text-slate-500">
            После этого откройте эту страницу ещё раз — параметры подтянутся
            автоматически.
          </p>
        </div>
      ) : (
        <div className="card p-3 sm:p-4 overflow-x-auto">
          <table className="min-w-full text-xs sm:text-sm border-collapse">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 text-left text-slate-500">
                  Параметр
                </th>
                {compared.map((p) => (
                  <th
                    key={p!.slug}
                    className="border-b border-slate-200 py-2 px-3 text-left text-slate-600"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{p!.logoEmoji}</span>
                      <div className="flex flex-col">
                        <span className="font-semibold">{p!.name}</span>
                        <span className="text-[11px] text-slate-500">
                          #{p!.position} в рейтинге
                        </span>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-200 py-2 pr-4 text-slate-500">
                  Рейтинг
                </td>
                {compared.map((p) => (
                  <td
                    key={`${p!.slug}-rating`}
                    className="border-b border-slate-200 py-2 px-3"
                  >
                    ⭐ {p!.rating.toFixed(1)}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-b border-slate-200 py-2 pr-4 text-slate-500">
                  Каналы
                </td>
                {compared.map((p) => (
                  <td
                    key={`${p!.slug}-channels`}
                    className="border-b border-slate-200 py-2 px-3"
                  >
                    {p!.channelsCount}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-b border-slate-200 py-2 pr-4 text-slate-500">
                  От $/мес
                </td>
                {compared.map((p) => (
                  <td
                    key={`${p!.slug}-price`}
                    className="border-b border-slate-200 py-2 px-3"
                  >
                    ${p!.monthlyFromUsd.toFixed(2)}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-b border-slate-200 py-2 pr-4 text-slate-500">
                  Тестовый период
                </td>
                {compared.map((p) => (
                  <td
                    key={`${p!.slug}-trial`}
                    className="border-b border-slate-200 py-2 px-3"
                  >
                    {p!.trialInfo}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-b border-slate-200 py-2 pr-4 text-slate-500">
                  Категория
                </td>
                {compared.map((p) => (
                  <td
                    key={`${p!.slug}-cat`}
                    className="border-b border-slate-200 py-2 px-3 capitalize"
                  >
                    {p!.category === "top"
                      ? "ТОП"
                      : p!.category === "premium"
                      ? "Премиум"
                      : p!.category === "popular"
                      ? "Популярный"
                      : "Бюджетный"}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-b border-slate-200 py-2 pr-4 text-slate-500">
                  Архив (примерно, дней)
                </td>
                {compared.map((p) => (
                  <td
                    key={`${p!.slug}-archiveDays`}
                    className="border-b border-slate-200 py-2 px-3"
                  >
                    {p!.archiveDaysApprox != null
                      ? p!.archiveDaysApprox > 0
                        ? `~${p!.archiveDaysApprox}`
                        : "нет данных"
                      : "нет данных"}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-b border-slate-200 py-2 pr-4 text-slate-500">
                  Поддержка 4K
                </td>
                {compared.map((p) => (
                  <td
                    key={`${p!.slug}-4k`}
                    className="border-b border-slate-200 py-2 px-3"
                  >
                    {p!.tags.includes("4k") ? "✅" : "—"}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-b border-slate-200 py-2 pr-4 text-slate-500">
                  Оплата
                </td>
                {compared.map((p) => (
                  <td
                    key={`${p!.slug}-payments`}
                    className="border-b border-slate-200 py-2 px-3"
                  >
                    {p!.paymentsNote ?? "Карты и онлайн-платежи"}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-b border-slate-200 py-2 pr-4 text-slate-500">
                  Сайт
                </td>
                {compared.map((p) => (
                  <td
                    key={`${p!.slug}-site`}
                    className="border-b border-slate-200 py-2 px-3"
                  >
                    {p!.websiteUrl ? (
                      <a
                        href={`/go/${p!.slug}`}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="text-brand-600 hover:text-brand-500 text-xs sm:text-sm"
                      >
                        Перейти на сайт →
                      </a>
                    ) : (
                      "—"
                    )}
                  </td>
                ))}
              </tr>
              {allTags.map((tag) => (
                <tr key={`tag-${tag}`}>
                  <td className="border-b border-slate-200 py-2 pr-4 text-slate-500">
                    {tag}
                  </td>
                  {compared.map((p) => (
                    <td
                      key={`${p!.slug}-${tag}`}
                      className="border-b border-slate-200 py-2 px-3"
                    >
                      {p!.tags.includes(tag) ? "✅" : "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

