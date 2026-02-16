import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-2">
        404
      </h1>
      <p className="text-slate-600 mb-6 max-w-md">
        Страница не найдена. Возможно, вы перешли по устаревшей ссылке или
        опечатке в адресе.
      </p>
      <nav className="flex flex-wrap justify-center gap-3 text-sm">
        <Link
          href="/"
          className="rounded-full bg-brand-500 hover:bg-brand-600 text-white font-medium px-4 py-2 transition-colors"
        >
          На главную
        </Link>
        <Link
          href="/providers"
          className="rounded-full border border-slate-300 hover:border-brand-500 text-slate-600 px-4 py-2 transition-colors"
        >
          Рейтинг провайдеров
        </Link>
        <Link
          href="/blog"
          className="rounded-full border border-slate-300 hover:border-brand-500 text-slate-600 px-4 py-2 transition-colors"
        >
          Блог
        </Link>
        <Link
          href="/faq"
          className="rounded-full border border-slate-300 hover:border-brand-500 text-slate-600 px-4 py-2 transition-colors"
        >
          FAQ
        </Link>
      </nav>
    </div>
  );
}
