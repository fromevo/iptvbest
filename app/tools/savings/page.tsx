import type { Metadata } from "next";
import Link from "next/link";
import { SavingsCalculator } from "../../../components/SavingsCalculator";
import { providers } from "../../../data/providers";

export const metadata: Metadata = {
  title: "Калькулятор экономии: кабель/спутник vs IPTV",
  description:
    "Сравните затраты на кабельное или спутниковое ТВ с IPTV за год. Учёт выбора провайдера и тарифа.",
  alternates: {
    canonical: "https://iptv-best.ru/tools/savings"
  }
};

export default function SavingsPage() {
  return (
    <div className="space-y-5 sm:space-y-7 max-w-3xl">
      <header className="space-y-2">
        <nav className="text-sm">
          <Link href="/tools" className="text-slate-400 hover:text-white">
            ← Инструменты
          </Link>
        </nav>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight flex items-center gap-2">
          💰 Калькулятор экономии: кабель/спутник vs IPTV
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Введите, сколько вы платите за кабельное или спутниковое ТВ в месяц, и выберите IPTV‑провайдера — увидите разницу за год.
        </p>
      </header>
      <SavingsCalculator providers={providers} />
    </div>
  );
}
