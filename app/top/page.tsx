import type { Metadata } from "next";
import { providers } from "../../data/providers";
import { ProviderCard } from "../../components/ProviderCard";

export const metadata: Metadata = {
  title: "Топ-10 IPTV провайдеров по версии IPTV Best",
  description:
    "Редакционный топ-10 IPTV провайдеров: лучший для семьи, спорта, 4K-контента, экономных пользователей и любителей архива.",
  alternates: {
    canonical: "https://iptv-best.ru/top"
  }
};

const picks = [
  {
    label: "Лучший для семьи",
    slug: "tv-team",
    reason:
      "Большой набор российских каналов, стабильная работа и удобство для разных возрастных групп."
  },
  {
    label: "Лучший для спорта",
    slug: "iptv-online",
    reason:
      "Сильный спортивный пакет, HD/4K-каналы и несколько тарифов под разные сценарии просмотра."
  },
  {
    label: "Лучший по количеству каналов",
    slug: "ilook-tv",
    reason:
      "Один из самых больших плейлистов на рынке с архивом до 7 дней и мультирумом."
  },
  {
    label: "Лучший бюджетный выбор",
    slug: "top-iptv",
    reason:
      "Минималистичный, но аккуратно подобранный набор каналов по низкой цене."
  },
  {
    label: "Лучший для 4K",
    slug: "iptv-best",
    reason:
      "Ставка на качество изображения и отборные 4K/HD-каналы с архивом до 7 дней."
  },
  {
    label: "Лучший для продвинутых пользователей",
    slug: "cbilling",
    reason:
      "Гибкая платформа для тех, кто хочет настраивать собственные плейлисты и проекты."
  },
  {
    label: "Лучший для региональных каналов РФ",
    slug: "all-tv",
    reason:
      "Сильный упор на федеральные и региональные каналы, удобен как замена кабельному ТВ."
  },
  {
    label: "Лучший конструктор плейлистов",
    slug: "antifriz-tv",
    reason:
      "Гибкий конструктор пакетов, длительный тест и удобная работа с архивом и timeshift."
  },
  {
    label: "Лучший выбор СНГ-каналов",
    slug: "snegiri-tv",
    reason:
      "Крупный набор каналов России и стран СНГ с архивом и мультирумом для нескольких устройств."
  },
  {
    label: "Лучший для приставок MAG и Android-боксов",
    slug: "sharavoz",
    reason:
      "Широкий список каналов и удобный редактор плейлистов, ориентированный на популярные приставки."
  }
];

export default function TopPage() {
  const providerBySlug = new Map(
    providers.map((p) => [p.slug, p])
  );

  const ranked = picks
    .map((pick) => {
      const provider = providerBySlug.get(pick.slug);
      if (!provider) return null;
      return { ...pick, provider };
    })
    .filter(Boolean) as Array<
    (typeof picks)[number] & { provider: (typeof providers)[number] }
  >;

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: ranked.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://iptv-best.ru/providers/${item.provider.slug}`,
      name: item.provider.name,
      description: item.reason
    }))
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <section className="card p-5 sm:p-7 space-y-3">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight flex items-center gap-2">
          🏅 Топ‑10 IPTV провайдеров по версии IPTV Best
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
          В этот список вошли провайдеры, которые показали себя лучше всего по
          совокупности параметров: стабильность, качество картинки, количество
          каналов, архив и удобство для разных сценариев использования.
        </p>
      </section>
      <section className="space-y-4">
        {ranked.map((item, index) => (
          <article key={item.provider.slug} className="space-y-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
              <span className="inline-flex items-center justify-center rounded-full bg-slate-900 border border-slate-700 px-2 py-0.5">
                №{index + 1}
              </span>
              <span>{item.label}</span>
            </div>
            <ProviderCard provider={item.provider} />
            <p className="text-xs sm:text-sm text-slate-300">
              Почему в топе: {item.reason}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}

