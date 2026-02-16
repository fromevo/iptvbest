"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BANNER_STORAGE_KEY = "iptvbest:banner-dismissed";

export function SiteBanner() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem(BANNER_STORAGE_KEY);
      setHidden(!!dismissed);
    } catch {
      setHidden(false);
    }
  }, []);

  const dismiss = () => {
    try {
      sessionStorage.setItem(BANNER_STORAGE_KEY, "1");
      setHidden(true);
    } catch {
      setHidden(true);
    }
  };

  if (hidden) return null;

  return (
    <div
      className="bg-blue-600 text-white"
      role="banner"
      aria-label="Информационное сообщение"
    >
      <div className="container-page py-3 sm:py-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
          <p className="text-sm sm:text-base font-medium text-center sm:text-left">
            <span className="inline-block mr-1.5" aria-hidden>📺</span>
            Выберите 2–3 провайдера из рейтинга, запросите тест и сравните качество на своих устройствах.
          </p>
          <div className="flex items-center justify-center sm:justify-end gap-3">
            <Link
              href="/top"
              className="inline-flex items-center rounded-lg bg-white text-blue-700 font-semibold px-3 py-1.5 text-sm hover:bg-blue-50 transition-colors shrink-0"
            >
              ТОП‑10 →
            </Link>
            <button
              type="button"
              onClick={dismiss}
              className="p-1.5 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Закрыть баннер"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
