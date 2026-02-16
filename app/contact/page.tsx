import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты IPTV Best",
  description:
    "Контакты проекта IPTV Best: как связаться с редакцией по вопросам обзоров IPTV провайдеров и плейлистов.",
  alternates: {
    canonical: "https://iptv-best.ru/contact"
  }
};

export default function ContactPage() {
  return (
    <div className="space-y-4 sm:space-y-6 max-w-2xl">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight flex items-center gap-2">
        ✉️ Контакты
      </h1>
      <p className="text-sm sm:text-base text-slate-600">
        Если вы представляете IPTV-сервис и хотите предложить правки к обзору
        или предоставить актуальную информацию о тарифах, вы можете связаться с
        администрацией сайта по электронной почте.
      </p>
      <div className="card p-4 sm:p-5 text-sm sm:text-base text-slate-600 space-y-2">
        <div>
          <span className="text-slate-400">Email для связи:</span>{" "}
          <span className="font-mono text-slate-800">
            support@iptv-best.ru
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-400">
          Указывайте в письме название провайдера, ссылку на страницу на сайте и
          кратко опишите, какие изменения вы предлагаете.
        </p>
      </div>
    </div>
  );
}

