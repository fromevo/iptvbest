"use client";

import { useState, useRef } from "react";

const navLinks = [
  { href: "/", label: "Рейтинг" },
  { href: "/top", label: "ТОП‑10" },
  { href: "/compare", label: "Сравнение" },
  { href: "/matrix", label: "Матрица" },
  { href: "/wizard", label: "Подбор" },
  { href: "/collections", label: "Подборки" },
  { href: "/tools", label: "Инструменты" },
  { href: "/search", label: "Поиск" },
  { href: "/blog", label: "Гайды" },
  { href: "/faq", label: "FAQ" }
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setMobileOpen(false);
    setTimeout(() => menuButtonRef.current?.focus(), 0);
  };

  return (
    <div className="border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
      <header className="container-page flex items-center justify-between py-3 sm:py-4">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <span className="text-2xl sm:text-3xl shrink-0" aria-hidden>📺</span>
          <div className="min-w-0">
            <div className="text-base sm:text-lg font-semibold tracking-tight truncate text-slate-800">
              IPTV Best
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500">
              Гид по платным IPTV провайдерам
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav
          className="hidden sm:flex items-center gap-3 lg:gap-5 text-xs sm:text-sm text-slate-600"
          aria-label="Основная навигация"
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:text-slate-900 py-2 min-h-[44px] inline-flex items-center"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile: кнопка меню + ключевые ссылки */}
        <div className="flex sm:hidden items-center gap-1">
          <a href="/" className="text-slate-600 hover:text-slate-900 text-sm font-medium py-2.5 px-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center">
            Рейтинг
          </a>
          <a href="/compare" className="text-slate-600 hover:text-slate-900 text-sm py-2.5 px-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center">
            Сравнение
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="p-2.5 min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-white"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <span className="sr-only">{mobileOpen ? "Закрыть меню" : "Меню"}</span>
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
      <div
        id="mobile-nav"
        className={`sm:hidden overflow-hidden transition-[height] duration-200 ease-out ${mobileOpen ? "max-h-[80vh]" : "max-h-0"}`}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="container-page pb-4 pt-1 border-t border-slate-200 bg-slate-50"
          aria-label="Мобильное меню"
        >
          <ul className="flex flex-col gap-0">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="block py-3 px-1 text-sm text-slate-600 hover:text-slate-900 min-h-[44px] flex items-center"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
