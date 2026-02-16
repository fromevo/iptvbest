import type { Metadata } from "next";
import Link from "next/link";
import { providers } from "../../data/providers";
import type { Provider } from "../../data/providers";

export const metadata: Metadata = {
  title: "Матрица сравнения IPTV провайдеров",
  description:
    "Таблица «кто чем отличается»: архив, 4K, мультирум, тест, спорт и цены по всем провайдерам IPTV."
};

const hasTag = (p: Provider, tag: string) => p.tags.includes(tag as Provider["tags"][number]);

export default function MatrixPage() {
  const sorted = [...providers].sort((a, b) => a.position - b.position);

  return (
    <div className="space-y-4 sm:space-y-6">
      <header className="space-y-2">
        <nav className="flex items-center gap-2 text-sm">
          <Link
            href="/"
            className="text-slate-500 hover:text-slate-800 transition-colors"
          >
            ← На главную
          </Link>
        </nav>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
          Матрица сравнения провайдеров
        </h1>
        <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
          Кто чем отличается: архив, 4K, мультирум, тест, спорт и цены в одной таблице.
        </p>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <p className="sm:hidden text-xs text-slate-500 mb-3">
          Прокрутите таблицу влево → для просмотра всех колонок.
        </p>
        <div className="overflow-x-auto -mx-4 sm:mx-0 scroll-smooth">
          <div className="min-w-0 px-4 sm:px-0">
          <table className="w-full border-collapse text-sm min-w-[720px]" role="grid">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-2 font-semibold sticky left-0 bg-white z-10 text-slate-800">
                  Провайдер
                </th>
                <th className="text-center py-3 px-2 font-semibold text-slate-600">
                  Архив (дн.)
                </th>
                <th className="text-center py-3 px-2 font-semibold text-slate-600">
                  4K
                </th>
                <th className="text-center py-3 px-2 font-semibold text-slate-600">
                  Мультирум
                </th>
                <th className="text-center py-3 px-2 font-semibold text-slate-600">
                  Тест
                </th>
                <th className="text-center py-3 px-2 font-semibold text-slate-600">
                  Спорт
                </th>
                <th className="text-center py-3 px-2 font-semibold text-slate-600">
                  $/мес
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((p) => (
                <tr
                  key={p.slug}
                  className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <td className="py-2.5 px-2 sticky left-0 bg-white z-10">
                    <Link
                      href={`/providers/${p.slug}`}
                      className="font-medium text-brand-600 hover:text-brand-500 flex items-center gap-1.5"
                    >
                      <span aria-hidden>{p.logoEmoji}</span>
                      {p.name}
                    </Link>
                  </td>
                  <td className="text-center py-2.5 px-2 text-slate-600">
                    {p.archiveDaysApprox ?? "—"}
                  </td>
                  <td className="text-center py-2.5 px-2">
                    {hasTag(p, "4k") ? (
                      <span className="text-emerald-600" title="Есть 4K">✓</span>
                    ) : (
                      <span className="text-slate-500">—</span>
                    )}
                  </td>
                  <td className="text-center py-2.5 px-2">
                    {hasTag(p, "multiscreen") ? (
                      <span className="text-emerald-600" title="Мультирум">✓</span>
                    ) : (
                      <span className="text-slate-500">—</span>
                    )}
                  </td>
                  <td className="text-center py-2.5 px-2 text-slate-600">
                    {p.trialInfo}
                  </td>
                  <td className="text-center py-2.5 px-2">
                    {hasTag(p, "sport") ? (
                      <span className="text-emerald-600" title="Спорт">✓</span>
                    ) : (
                      <span className="text-slate-500">—</span>
                    )}
                  </td>
                  <td className="text-center py-2.5 px-2 text-slate-800 font-medium">
                    {p.monthlyFromUsd}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
        <p className="mt-4 text-slate-500 text-xs">
          Данные носят справочный характер. Уточняйте архив, тест и тарифы на сайте провайдера.
        </p>
      </main>
    </div>
  );
}
