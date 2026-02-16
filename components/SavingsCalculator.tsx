"use client";

import { useState } from "react";
import Link from "next/link";
import type { Provider } from "../data/providers";

type Props = { providers: Provider[] };

export function SavingsCalculator({ providers }: Props) {
  const [cableMonthly, setCableMonthly] = useState("");
  const [selectedSlug, setSelectedSlug] = useState<string>(
    providers[0]?.slug ?? ""
  );

  const cable = Number(cableMonthly.replace(",", "."));
  const cableValid = !Number.isNaN(cable) && cable >= 0;
  const cableYear = cableValid ? cable * 12 : 0;

  const selected = providers.find((p) => p.slug === selectedSlug);
  const iptvMonthly = selected?.monthlyFromUsd ?? 0;
  const iptvYear = iptvMonthly * 12;

  return (
    <div className="card p-4 sm:p-5 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm text-slate-300">
            Ваши расходы на кабель/спутник (руб или $ в месяц)
          </label>
          <input
            type="text"
            inputMode="decimal"
            placeholder="например 500 или 15"
            value={cableMonthly}
            onChange={(e) => setCableMonthly(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/70"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-slate-300">
            IPTV провайдер для сравнения
          </label>
          <select
            value={selectedSlug}
            onChange={(e) => setSelectedSlug(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/70"
          >
            {providers
              .sort((a, b) => a.position - b.position)
              .map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.logoEmoji} {p.name} — ${p.monthlyFromUsd}/мес
                </option>
              ))}
          </select>
        </div>
      </div>

      {(cableValid || selected) && (
        <div className="rounded-lg bg-slate-800/60 p-4 space-y-2 text-sm">
          {cableValid && (
            <p className="text-slate-300">
              За 12 месяцев кабель/спутник:{" "}
              <strong className="text-white">
                {cableYear.toLocaleString("ru-RU")} ₽
              </strong>{" "}
              (при {cable} ₽/мес).
            </p>
          )}
          {selected && (
            <>
              <p className="text-slate-300">
                IPTV ({selected.name}) за год:{" "}
                <strong className="text-white">
                  ${iptvYear.toFixed(2)}
                </strong>{" "}
                (от ${iptvMonthly}/мес).
              </p>
              {cableValid && (
                <p className="text-emerald-400/90 text-xs">
                  Чтобы сравнить в одной валюте, пересчитайте доллары по текущему курсу: тогда сможете оценить экономию при переходе на IPTV.
                </p>
              )}
            </>
          )}
        </div>
      )}

      <p className="text-xs text-slate-400">
        Сравнение условное: курс доллара и цены кабеля/IPTV уточняйте отдельно.{" "}
        <Link href="/providers" className="underline hover:text-brand-300">
          Список провайдеров
        </Link>
      </p>
    </div>
  );
}
