import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "../components/Header";

const siteUrl = "https://iptv-best.ru";
const siteName = "IPTV Best";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f1f5f9"
};

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg"
  },
  title: {
    default: "IPTV Best — рейтинг IPTV провайдеров и платных плейлистов",
    template: "%s — IPTV Best"
  },
  description:
    "Актуальный рейтинг IPTV провайдеров и платных плейлистов: обзоры, сравнение, фильтры по 4K, спорту, архиву и мультируму. Помогаем выбрать лучший IPTV под ваши задачи.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "IPTV Best — рейтинг лучших IPTV провайдеров",
    description:
      "Собираем и сравниваем платные IPTV плейлисты: количество каналов, цена, качество, архив, мультирум. Удобный выбор IPTV для дома и семьи.",
    siteName,
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "IPTV Best" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Best — рейтинг IPTV провайдеров",
    description:
      "Обзоры и сравнение платных IPTV плейлистов: 4K, спорт, архив, мультирум.",
    creator: "@iptv_best_ru"
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="ru">
      <body className="min-h-screen bg-[#f1f5f9] text-slate-900 text-base">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){
  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106855606', 'ym');

ym(106855606, 'init', {ssr:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});`
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/106855606"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <Header />

        <main className="py-6 sm:py-10">
          <div className="container-page">{children}</div>
        </main>

        <footer className="border-t border-slate-200 bg-white py-6 sm:py-8">
          <div className="container-page text-sm text-slate-600 flex flex-col sm:flex-row gap-3 sm:gap-6 justify-between items-center sm:items-start">
            <div className="font-medium">
              © {new Date().getFullYear()} IPTV Best. Все права защищены.
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
              <a href="/devices" className="hover:text-brand-600 font-medium">
                Устройства
              </a>
              <a href="/apps" className="hover:text-brand-600 font-medium">
                Приложения
              </a>
              <a href="/about" className="hover:text-brand-600 font-medium">
                О проекте
              </a>
              <a href="/privacy" className="hover:text-brand-600 font-medium">
                Политика конфиденциальности
              </a>
              <a href="/contact" className="hover:text-brand-600 font-medium">
                Контакты
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

