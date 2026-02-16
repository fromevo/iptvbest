"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

declare global {
  interface Window {
    ym?: (id: number, method: string, target: string) => void;
  }
}

export function GoRedirect({ slug }: { slug: string }) {
  const [status, setStatus] = useState<"loading" | "redirect" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        const res = await fetch(`/api/go/${slug}`);
        if (cancelled) return;
        if (!res.ok) {
          setStatus("error");
          return;
        }
        const data = (await res.json()) as { url: string };
        if (cancelled) return;
        if (typeof window !== "undefined" && window.ym) {
          window.ym(106855606, "reachGoal", "go_provider");
        }
        setStatus("redirect");
        window.location.href = data.url;
      } catch {
        if (!cancelled) setStatus("error");
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (status === "error") {
    return (
      <div className="min-h-[40vh] flex flex-col items-center justify-center text-center px-4">
        <p className="text-slate-300 mb-4">Ссылка не найдена или недоступна.</p>
        <Link href="/" className="text-brand-400 hover:text-brand-300">
          ← На главную
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center text-center px-4">
      <p className="text-slate-300 animate-pulse">Переход на сайт провайдера…</p>
      <p className="text-slate-500 text-sm mt-2">
        Если переход не произошёл,{" "}
        <a href="/" className="underline hover:text-slate-400">
          вернитесь на главную
        </a>
        .
      </p>
    </div>
  );
}
