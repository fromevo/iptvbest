import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "../../data/blogPosts";

export const metadata: Metadata = {
  title: "Гайды и статьи по выбору IPTV",
  description:
    "Подробные гайды по выбору IPTV провайдера, настройке плейлистов и тестированию сервисов. Раздел статей на сайте IPTV Best.",
  alternates: {
    canonical: "https://iptv-best.ru/blog"
  }
};

export default function BlogPage() {
  const posts = blogPosts;
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://iptv-best.ru/blog/${p.slug}`,
      name: p.title
    }))
  };

  return (
    <div className="space-y-4 sm:space-y-6 max-w-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight flex items-center gap-2">
        📚 Гайды по выбору IPTV
      </h1>
      <p className="text-sm sm:text-base text-slate-600">
        В этом разделе будут публиковаться подробные статьи: как выбрать IPTV
        провайдера, чем отличаются плейлисты, как настроить IPTV на Smart TV,
        приставках и смартфонах.
      </p>
      <div className="space-y-3 sm:space-y-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <article className="card p-4 sm:p-5 hover:border-brand-500/50 transition-colors">
              <div className="flex items-center justify-between gap-2 mb-2">
                <h2 className="text-base sm:text-lg font-semibold tracking-tight text-slate-800">
                  {post.title}
                </h2>
                <span className="text-xs sm:text-sm text-slate-600 shrink-0">
                  ⏱ {post.readingTime}
                </span>
              </div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-slate-100 border border-slate-200 px-2 py-0.5 text-xs sm:text-sm text-slate-700">
                  #{post.tag}
                </span>
                {post.publishedDate && (
                  <time dateTime={post.publishedDate} className="text-xs sm:text-sm text-slate-600">
                    {new Date(post.publishedDate).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}
                  </time>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-600">{post.summary}</p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

