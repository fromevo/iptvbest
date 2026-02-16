import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface Props {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: Props) {
  return (
    <nav aria-label="Хлебные крошки" className="flex items-center gap-2 text-sm text-slate-400 flex-wrap">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden className="text-slate-600">/</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-slate-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-600">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
