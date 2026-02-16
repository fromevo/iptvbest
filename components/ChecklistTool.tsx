"use client";

import { useState } from "react";

const STEPS = [
  {
    title: "Тест и устройство",
    items: [
      "Запросил бесплатный тест и проверил работу на своём устройстве",
      "Убедился, что каналы и архив открываются без лагов",
      "Проверил, что скорость интернета достаточна (см. калькулятор скорости)"
    ]
  },
  {
    title: "Тариф и оплата",
    items: [
      "Выбрал подходящий тариф (архив, 4K, спорт — если нужно)",
      "Уточнил способы оплаты и валюту",
      "Проверил, что не переплачиваю за лишние опции"
    ]
  },
  {
    title: "Перед оплатой",
    items: [
      "Прочитал отзывы или обзор провайдера на нашем сайте",
      "Понял, как продлевать подписку и куда обращаться при сбоях",
      "Сохранил контакты поддержки и ссылку в личный кабинет"
    ]
  }
];

const PRINT_TITLE = "Чек-лист перед оплатой IPTV — iptv-best.ru";

export function ChecklistTool() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allKeys = STEPS.flatMap((s, si) =>
    s.items.map((_, ii) => `step-${si}-${ii}`)
  );
  const doneCount = allKeys.filter((k) => checked[k]).length;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      <div className="card p-4 sm:p-5 space-y-4 print:border print:shadow-none print:bg-white print:text-slate-900">
        <div className="flex flex-wrap items-center justify-between gap-3 print:flex-none">
          <p className="text-sm text-slate-300">
            Отмечено: {doneCount} из {allKeys.length}
          </p>
          <button
            type="button"
            onClick={handlePrint}
            className="rounded-lg bg-brand-500 hover:bg-brand-400 text-white text-sm font-medium px-4 py-2.5 min-h-[44px] inline-flex items-center justify-center transition-colors print:hidden"
          >
            Печать / PDF
          </button>
        </div>

        <div className="space-y-5">
          {STEPS.map((step, si) => (
            <div key={si}>
              <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
                <span className="text-slate-400">{si + 1}.</span>
                {step.title}
              </h3>
              <ul className="space-y-2">
                {step.items.map((item, ii) => {
                  const key = `step-${si}-${ii}`;
                  const isChecked = checked[key];
                  return (
                    <li key={ii} className="flex items-start gap-2 text-sm">
                      <label className="flex items-center gap-2 cursor-pointer group shrink-0 mt-0.5">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggle(key)}
                          className="rounded border-slate-600 bg-slate-800 text-brand-500 focus:ring-brand-500/70 print:accent-slate-800"
                        />
                        <span
                          className={
                            isChecked
                              ? "text-slate-400 line-through"
                              : "text-slate-200 group-hover:text-white"
                          }
                        >
                          {item}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <section
        className="card p-4 sm:p-5 border-dashed border-slate-600 print:border print:border-slate-400 print:bg-white print:text-slate-900"
        aria-label="Итоговый чек-лист для печати"
      >
        <h2 className="text-lg font-semibold mb-3 print:text-black">
          Итоговый чек-лист: что проверить перед оплатой
        </h2>
        <ul className="text-sm space-y-1.5 print:text-black">
          {STEPS.flatMap((s) => s.items).map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-slate-500 print:text-slate-700">□</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-slate-400 print:text-slate-600">
          {PRINT_TITLE}
        </p>
      </section>
    </div>
  );
}
