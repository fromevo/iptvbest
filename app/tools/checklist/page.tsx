import type { Metadata } from "next";
import Link from "next/link";
import { ChecklistTool } from "../../../components/ChecklistTool";

export const metadata: Metadata = {
  title: "Чек-лист перед оплатой IPTV",
  description:
    "Пошаговый чек-лист: что проверить перед оплатой IPTV. Печать и PDF.",
  alternates: {
    canonical: "https://iptv-best.ru/tools/checklist"
  }
};

export default function ChecklistPage() {
  return (
    <div className="space-y-5 sm:space-y-7 max-w-3xl">
      <header className="space-y-2">
        <nav className="text-sm">
          <Link href="/tools" className="text-slate-400 hover:text-white">
            ← Инструменты
          </Link>
        </nav>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight flex items-center gap-2">
          ✅ Чек-лист перед оплатой IPTV
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Пройдите шаги и отметьте пункты. В конце — итоговый список для печати или сохранения в PDF.
        </p>
      </header>
      <ChecklistTool />
    </div>
  );
}
