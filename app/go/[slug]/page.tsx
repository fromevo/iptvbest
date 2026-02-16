import { notFound, redirect } from "next/navigation";
import { getProviderBySlug } from "../../../data/providers";

export default async function GoPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);
  if (!provider?.websiteUrl) notFound();
  redirect(provider.websiteUrl);
}
