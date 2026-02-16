import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, getBlogPostBySlug } from "../../../data/blogPosts";
import { Breadcrumbs } from "../../../components/Breadcrumbs";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Статья не найдена",
      description: "Запрошенная статья блога IPTV Best не найдена."
    };
  }

  const url = `https://iptv-best.ru/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      url
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="space-y-4 max-w-3xl">
        <p className="text-sm text-slate-600">
          Статья не найдена. Вернитесь, пожалуйста, к списку материалов блога.
        </p>
        <Link href="/blog" className="text-sm text-brand-400 hover:text-brand-300">
          ← Ко всем статьям
        </Link>
      </div>
    );
  }

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://iptv-best.ru/blog/${post.slug}`
    }
  };

  return (
    <div className="space-y-5 sm:space-y-7 max-w-3xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Блог", href: "/blog" }, { label: post.title }]} />
      <header className="space-y-3">
        <div className="inline-flex flex-wrap items-center gap-2 text-[11px] sm:text-xs text-slate-400">
          <span className="inline-flex items-center rounded-full bg-slate-100 border border-slate-200 px-2 py-0.5">
            #{post.tag}
          </span>
          <span>⏱ {post.readingTime}</span>
          {post.publishedDate && (
            <time dateTime={post.publishedDate}>
              {new Date(post.publishedDate).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}
            </time>
          )}
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          {post.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">{post.summary}</p>
      </header>
      <article className="space-y-5 sm:space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
        {post.sections.map((section) => (
          <section key={section.heading} className="space-y-2">
            <h2 className="text-base sm:text-lg font-semibold text-slate-50">
              {section.heading}
            </h2>
            {section.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>
        ))}
      </article>
    </div>
  );
}

