import type { Metadata } from "next";
import Link from "next/link";
import { iptvApps } from "../../data/iptvApps";

export const metadata: Metadata = {
  title: "Обзор приложений для IPTV",
  description:
    "Популярные плееры для IPTV: Televizo, OTT Navigator, IPTV Smarters, TiviMate, Kodi, VLC — плюсы, минусы и с какими провайдерами удобнее.",
  alternates: {
    canonical: "https://iptv-best.ru/apps"
  }
};

export default function AppsPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <header className="space-y-2">
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-slate-500 hover:text-slate-800 transition-colors">
            ← На главную
          </Link>
        </nav>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
          Приложения для просмотра IPTV
        </h1>
        <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
          Обзор популярных плееров: плюсы, минусы, на каких устройствах работают и с какими провайдерами удобнее.
        </p>
      </header>

      <div>
        <div className="space-y-6 sm:space-y-8">
          {iptvApps.map((app) => (
            <article
              key={app.slug}
              className="card p-4 sm:p-5 space-y-4"
              id={app.slug}
            >
              <div>
                <h2 className="text-lg font-semibold">{app.name}</h2>
                <p className="text-sm text-slate-500 mt-0.5">
                  Устройства: {app.platforms.join(", ")}
                </p>
              </div>
              <p className="text-sm text-slate-600">{app.bestFor}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs font-medium text-emerald-600 uppercase tracking-wider mb-1.5">
                    Плюсы
                  </h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {app.pros.map((item, i) => (
                      <li key={i} className="flex gap-1.5">
                        <span aria-hidden>+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-medium text-amber-600 uppercase tracking-wider mb-1.5">
                    Минусы
                  </h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {app.cons.map((item, i) => (
                      <li key={i} className="flex gap-1.5">
                        <span aria-hidden>−</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {app.providerNote && (
                <p className="text-xs text-slate-500 border-l-2 border-brand-500 pl-3">
                  {app.providerNote}
                </p>
              )}
            </article>
          ))}
        </div>
        <p className="mt-6 text-slate-500 text-sm">
          <Link href="/blog/nastroyka-iptv-na-smart-tv" className="underline hover:text-slate-800">
            Настройка IPTV на Smart TV
          </Link>
          {" · "}
          <Link href="/providers" className="underline hover:text-slate-800">
            Список провайдеров
          </Link>
        </p>
      </div>
    </div>
  );
}
