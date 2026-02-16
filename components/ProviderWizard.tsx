"use client";

import { useMemo, useState } from "react";
import { providers } from "../data/providers";
import { ProviderCard } from "./ProviderCard";

type Budget = "low" | "medium" | "high";
type Importance = "no" | "nice" | "must";

export function ProviderWizard() {
  const [budget, setBudget] = useState<Budget>("medium");
  const [needSport, setNeedSport] = useState<Importance>("nice");
  const [need4k, setNeed4k] = useState<Importance>("nice");
  const [needArchive, setNeedArchive] = useState<Importance>("nice");
  const [needMultiscreen, setNeedMultiscreen] = useState<Importance>("nice");

  const results = useMemo(() => {
    let list = [...providers];

    list = list.filter((p) => {
      if (budget === "low" && p.monthlyFromUsd > 2) return false;
      if (budget === "medium" && p.monthlyFromUsd > 3.5) return false;
      return true;
    });

    const scoreMap = new Map(
      list.map((p) => {
        let score = 0;
        if (needSport !== "no" && p.tags.includes("sport")) {
          score += needSport === "must" ? 3 : 1;
        } else if (needSport === "must") {
          score -= 3;
        }
        if (need4k !== "no" && p.tags.includes("4k")) {
          score += need4k === "must" ? 3 : 1;
        } else if (need4k === "must") {
          score -= 3;
        }
        if (needArchive !== "no" && p.tags.includes("archive")) {
          score += needArchive === "must" ? 3 : 1;
        } else if (needArchive === "must") {
          score -= 2;
        }
        if (needMultiscreen !== "no" && p.tags.includes("multiscreen")) {
          score += needMultiscreen === "must" ? 3 : 1;
        } else if (needMultiscreen === "must") {
          score -= 2;
        }
        // общий рейтинг как лёгкий бонус
        score += p.rating;
        return [p.slug, score] as const;
      })
    );

    return list
      .sort(
        (a, b) =>
          (scoreMap.get(b.slug) ?? 0) - (scoreMap.get(a.slug) ?? 0)
      )
      .slice(0, 5);
  }, [budget, needSport, need4k, needArchive, needMultiscreen]);

  const importanceOptions: { value: Importance; label: string }[] = [
    { value: "no", label: "Не важно" },
    { value: "nice", label: "Желательно" },
    { value: "must", label: "Обязательно" }
  ];

  return (
    <div className="space-y-5 sm:space-y-6">
      <div className="card p-4 sm:p-5 space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight flex items-center gap-2">
          🎛 Подбор IPTV под ваши задачи
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          Ответьте на несколько вопросов — мы предложим 3–5 подходящих
          провайдеров. Это не реклама, а ориентир для дальнейшего теста.
        </p>

        <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
          <div className="space-y-1">
            <label className="text-slate-600">Бюджет в месяц</label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value as Budget)}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/70"
            >
              <option value="low">До $2 (минимальный бюджет)</option>
              <option value="medium">$2–3.5 (средний)</option>
              <option value="high">Не принципиально (главное — качество)</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-slate-600">
              Насколько важны спортивные каналы?
            </label>
            <select
              value={needSport}
              onChange={(e) => setNeedSport(e.target.value as Importance)}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/70"
            >
              {importanceOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-slate-600">
              Насколько важно качество 4K / Ultra HD?
            </label>
            <select
              value={need4k}
              onChange={(e) => setNeed4k(e.target.value as Importance)}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/70"
            >
              {importanceOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-slate-600">
              Нужен ли архив передач (просмотр прошедших программ)?
            </label>
            <select
              value={needArchive}
              onChange={(e) => setNeedArchive(e.target.value as Importance)}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/70"
            >
              {importanceOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-slate-600">
              Насколько важен мультирум (несколько устройств)?
            </label>
            <select
              value={needMultiscreen}
              onChange={(e) =>
                setNeedMultiscreen(e.target.value as Importance)
              }
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/70"
            >
              {importanceOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight flex items-center gap-2">
          🔍 Подходящие провайдеры
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          Это не окончательный вердикт, а стартовый список. Возьмите у 2–3
          провайдеров тест и сравните качество на своих устройствах.
        </p>
        <div className="space-y-4">
          {results.map((p) => (
            <ProviderCard key={p.slug} provider={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

