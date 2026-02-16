import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О проекте IPTV Best",
  description:
    "IPTV Best — независимый справочник по платным IPTV-плейлистам и провайдерам. Узнайте, как мы собираем данные, готовим обзоры и формируем рейтинг.",
  alternates: {
    canonical: "https://iptv-best.ru/about"
  }
};

export default function AboutPage() {
  return (
    <div className="space-y-4 sm:space-y-6 max-w-3xl">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight flex items-center gap-2">
        ℹ️ О проекте IPTV Best
      </h1>
      <p className="text-sm sm:text-base text-slate-600">
        IPTV Best — это независимый справочник по платным IPTV-плейлистам и
        онлайн-телевидению. Мы собираем информацию о провайдерах, сравниваем их
        по количеству каналов, цене, качеству, наличию архива и удобству
        использования.
      </p>
      <p className="text-sm sm:text-base text-slate-600">
        Основная задача проекта — помочь пользователю за несколько минут
        отсеять слабые варианты, выбрать 2–3 подходящих сервиса и протестировать
        их перед покупкой.
      </p>
      <div className="card p-4 sm:p-5 space-y-2 text-sm sm:text-base text-slate-600">
        <h2 className="text-lg font-semibold">Как мы готовим обзоры</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Собираем данные с открытых источников и сайтов провайдеров.</li>
          <li>Переписываем описания своими словами, без прямого копирования.</li>
          <li>Отмечаем сильные и слабые стороны каждого сервиса.</li>
          <li>
            Обновляем рейтинг по мере появления новых отзывов и изменений в
            тарифах.
          </li>
        </ul>
      </div>
    </div>
  );
}

