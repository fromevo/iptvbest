import type { Metadata } from "next";
import { providers } from "../../data/providers";
import { ProviderCard } from "../../components/ProviderCard";

export const metadata: Metadata = {
  title: "Подборки лучших IPTV провайдеров по задачам",
  description:
    "Готовые подборки IPTV провайдеров: для спорта, семейного просмотра, 4K-контента, экономичных тарифов и любителей архива передач.",
  alternates: {
    canonical: "https://iptv-best.ru/collections"
  }
};

export default function CollectionsPage() {
  const topSport = providers
    .filter((p) => p.tags.includes("sport"))
    .sort((a, b) => a.position - b.position)
    .slice(0, 5);

  const top4k = providers
    .filter((p) => p.tags.includes("4k"))
    .sort((a, b) => a.position - b.position)
    .slice(0, 5);

  const familyFriendly = providers
    .filter((p) => p.tags.includes("archive") && p.tags.includes("multiscreen"))
    .sort((a, b) => a.position - b.position)
    .slice(0, 5);

  const budget = providers
    .filter((p) => p.monthlyFromUsd <= 2)
    .sort((a, b) => a.monthlyFromUsd - b.monthlyFromUsd)
    .slice(0, 5);

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: providers
      .sort((a, b) => a.position - b.position)
      .map((p, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://iptv-best.ru/providers/${p.slug}`,
        name: p.name
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
          🧩 Подборки IPTV провайдеров
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
          Вместо того чтобы изучать весь список, выберите готовую подборку под
          вашу задачу: спорт, семья, 4K-контент или экономия. Все варианты
          основаны на нашем рейтинге и характеристиках провайдеров.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight flex items-center gap-2">
          🏆 Для любителей спорта
        </h2>
        <p className="text-sm text-slate-300">
          Провайдеры с сильным спортивным пакетом и хорошей поддержкой HD/4K —
          подойдут для просмотра футбола, хоккея и других трансляций.
        </p>
        <div className="space-y-4">
          {topSport.map((p) => (
            <ProviderCard key={p.slug} provider={p} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight flex items-center gap-2">
          👨‍👩‍👧‍👦 Для семьи и нескольких устройств
        </h2>
        <p className="text-sm text-slate-300">
          Сервисы с мультирумом и архивом передач — удобно, когда каждый в семье
          смотрит ТВ в своё время и на своём устройстве.
        </p>
        <div className="space-y-4">
          {familyFriendly.map((p) => (
            <ProviderCard key={p.slug} provider={p} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight flex items-center gap-2">
          🖥️ Для 4K и максимального качества
        </h2>
        <p className="text-sm text-slate-300">
          Подборка провайдеров с 4K-каналами и акцентом на качество картинки —
          если у вас современный большой телевизор и хороший интернет.
        </p>
        <div className="space-y-4">
          {top4k.map((p) => (
            <ProviderCard key={p.slug} provider={p} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight flex items-center gap-2">
          💸 Бюджетные варианты
        </h2>
        <p className="text-sm text-slate-300">
          Провайдеры с минимальной ценой за месяц, у которых при этом сохранён
          базовый набор каналов и приемлемое качество трансляций.
        </p>
        <div className="space-y-4">
          {budget.map((p) => (
            <ProviderCard key={p.slug} provider={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

