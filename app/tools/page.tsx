import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Инструменты для выбора IPTV",
  description:
    "Удобные инструменты для выбора IPTV: калькулятор рекомендуемой скорости интернета, подборки провайдеров по задачам и гайды.",
  alternates: {
    canonical: "https://iptv-best.ru/tools"
  }
};

export default function ToolsPage() {
  const tools = [
    {
      href: "/tools/bandwidth",
      title: "Калькулятор скорости интернета для IPTV",
      description:
        "Поможет понять, какой тариф нужен для комфортного просмотра IPTV на ваших устройствах.",
      emoji: "📶"
    },
    {
      href: "/tools/checklist",
      title: "Чек-лист перед оплатой IPTV",
      description:
        "Пошаговые вопросы и итоговый список, что проверить перед оплатой. Печать и PDF.",
      emoji: "✅"
    },
    {
      href: "/tools/savings",
      title: "Калькулятор экономии: кабель/спутник vs IPTV",
      description:
        "Сравните расходы на кабельное или спутниковое ТВ с IPTV за год с учётом выбора провайдера.",
      emoji: "💰"
    },
    {
      href: "/matrix",
      title: "Матрица сравнения провайдеров",
      description:
        "Таблица «кто чем отличается»: архив, 4K, мультирум, тест, спорт и цены по всем провайдерам.",
      emoji: "📊"
    },
    {
      href: "/collections",
      title: "Подборки провайдеров по задачам",
      description:
        "Готовые наборы: для спорта, 4K, семейного просмотра и экономичных тарифов.",
      emoji: "🧩"
    },
    {
      href: "/compare",
      title: "Таблица сравнения IPTV провайдеров",
      description:
        "Сравнение нескольких провайдеров по цене, количеству каналов, рейтингу и функциям.",
      emoji: "⚖️"
    },
    {
      href: "/blog",
      title: "Гайды по выбору и настройке",
      description:
        "Подробные статьи: как выбрать провайдера, настроить IPTV и избежать типичных ошибок.",
      emoji: "📚"
    }
  ];

  return (
    <div className="space-y-5 sm:space-y-7 max-w-3xl">
      <header className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight flex items-center gap-2">
          🛠 Инструменты IPTV Best
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Собрали в одном месте полезные инструменты, которые помогут быстро
          оценить, подходит ли вам тот или иной IPTV‑сервис и ваш текущий
          интернет‑тариф.
        </p>
      </header>
      <div className="space-y-3 sm:space-y-4">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href} className="block">
            <article className="card p-4 sm:p-5 hover:border-brand-500/60 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-xl sm:text-2xl">{tool.emoji}</div>
                <h2 className="text-base sm:text-lg font-semibold tracking-tight">
                  {tool.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                {tool.description}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

