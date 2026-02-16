import type { Metadata } from "next";
import Link from "next/link";
import { providers } from "../../data/providers";

export const metadata: Metadata = {
  title: "IPTV для разных устройств",
  description:
    "IPTV для Smart TV (Samsung, LG, Android TV), приставок, смартфонов и ПК: обзоры, статьи и подходящие провайдеры.",
  alternates: {
    canonical: "https://iptv-best.ru/devices"
  }
};

const DEVICE_BLOCKS = [
  {
    id: "smart-tv",
    title: "IPTV для Smart TV",
    subtitle: "Samsung, LG, Android TV, Sony",
    emoji: "📺",
    description:
      "Просмотр IPTV прямо на телевизоре без отдельной приставки. Поддерживаются встроенные приложения и плейлисты M3U.",
    blogSlugs: [
      "nastroyka-iptv-na-smart-tv",
      "kak-vybrat-iptv-dlya-semi-2026"
    ],
    providerSlugs: ["tv-team", "all-tv", "bit-tv", "crdru", "iptv-online"]
  },
  {
    id: "pristavki",
    title: "IPTV для приставок",
    subtitle: "MAG, Android-боксы, Apple TV",
    emoji: "📦",
    description:
      "Приставки дают больше гибкости: выбор плеера, EPG, архив. Подходят MAG/Aura, Dune, Android TV-боксы и Apple TV.",
    blogSlugs: [
      "iptv-na-pristavke-mag-android-apple-tv",
      "multirum-na-neskolkih-ustroystvah"
    ],
    providerSlugs: ["sharavoz", "tvizi", "cbilling", "crdru", "antifriz-tv"]
  },
  {
    id: "smartfony",
    title: "IPTV на смартфонах и планшетах",
    subtitle: "Android и iOS",
    emoji: "📱",
    description:
      "Смотреть каналы в дороге или дома с телефона/планшета. Важны стабильность и удобные мобильные приложения.",
    blogSlugs: ["iptv-na-smartfone-android-i-ios", "bezopasnoe-testirovanie-iptv"],
    providerSlugs: ["tv-team", "tvizi", "bit-tv", "sharatv", "iptv-best"]
  },
  {
    id: "pc",
    title: "IPTV на ПК",
    subtitle: "Windows, macOS",
    emoji: "💻",
    description:
      "Просмотр через VLC, Kodi или специализированные плееры. Удобно для работы за компьютером и тестирования плейлиста.",
    blogSlugs: ["nastroyka-iptv-na-smart-tv", "reshenie-tipichnyh-problem-iptv"],
    providerSlugs: ["bit-tv", "tvizi", "iptv-online", "cbilling", "ilook-tv"]
  }
];

export default function DevicesPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="border-b border-slate-700/50 bg-slate-800/30">
        <div className="container mx-auto px-4 py-6">
          <nav className="mb-4">
            <Link
              href="/"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              ← На главную
            </Link>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-bold">
            IPTV для разных устройств
          </h1>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl">
            Smart TV, приставки, смартфоны и ПК: в каждом блоке — ссылки на статьи блога и подходящих провайдеров.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {DEVICE_BLOCKS.map((block) => {
            const provs = block.providerSlugs
              .map((slug) => providers.find((p) => p.slug === slug))
              .filter(Boolean);
            return (
              <article
                key={block.id}
                className="card p-4 sm:p-5 space-y-4"
                id={block.id}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl" aria-hidden>
                    {block.emoji}
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold">{block.title}</h2>
                    <p className="text-sm text-slate-400">{block.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-300">{block.description}</p>

                <div>
                  <h3 className="text-sm font-medium text-slate-300 mb-2">
                    Статьи в блоге
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {block.blogSlugs.map((slug) => (
                      <li key={slug}>
                        <Link
                          href={`/blog/${slug}`}
                          className="text-xs sm:text-sm text-brand-300 hover:text-brand-200 underline decoration-dotted"
                        >
                          {slug.replace(/-/g, " ")}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-slate-300 mb-2">
                    Подходящие провайдеры
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {provs.map((p) => (
                      <li key={p!.slug}>
                        <Link
                          href={`/providers/${p!.slug}`}
                          className="text-xs sm:text-sm text-brand-300 hover:text-brand-200"
                        >
                          {p!.logoEmoji} {p!.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-6 text-slate-400 text-sm">
          <Link href="/blog" className="underline hover:text-white">
            Все статьи блога
          </Link>
          {" · "}
          <Link href="/providers" className="underline hover:text-white">
            Список провайдеров
          </Link>
        </p>
      </main>
    </div>
  );
}
