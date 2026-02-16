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
    <div className="border-b border-slate-200 bg-white">
      <header className="container-page flex items-center justify-between py-4 sm:py-5">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <span className="text-3xl sm:text-4xl shrink-0" aria-hidden>📺</span>
          <div className="min-w-0">
            <div className="text-lg sm:text-xl font-bold tracking-tight truncate text-slate-900">
              IPTV Best
            </div>
            <div className="text-xs sm:text-sm text-slate-500">
              Гид по платным IPTV провайдерам
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav
          className="hidden sm:flex items-center gap-4 lg:gap-6 text-sm text-slate-600 font-medium"
          aria-label="Основная навигация"
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-slate-700 hover:text-brand-600 py-2 min-h-[48px] inline-flex items-center transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile: кнопка меню + ключевые ссылки */}
        <div className="flex sm:hidden items-center gap-1">
          <a href="/" className="text-slate-600 hover:text-brand-600 text-sm font-medium py-3 px-3 min-h-[48px] min-w-[48px] inline-flex items-center justify-center">
            Рейтинг
          </a>
          <a href="/compare" className="text-slate-600 hover:text-brand-600 text-sm py-3 px-3 min-h-[48px] min-w-[48px] inline-flex items-center justify-center">
            Сравнение
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="p-3 min-h-[48px] min-w-[48px] inline-flex items-center justify-center rounded-lg text-slate-700 hover:text-brand-600 hover:bg-slate-100 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-white"
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
          className="container-page pb-4 pt-1 border-t border-slate-200 bg-white"
          aria-label="Мобильное меню"
        >
          <ul className="flex flex-col gap-0">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="block py-3.5 px-2 text-base text-slate-600 hover:text-brand-600 hover:bg-brand-50 min-h-[48px] flex items-center font-medium"
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
