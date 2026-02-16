import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Поиск по сайту",
  description: "Поиск по провайдерам IPTV и статьям блога на IPTV Best.",
  robots: "noindex, follow"
};

export default function SearchLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
