import { notFound } from "next/navigation";
import { getProviderBySlug } from "../../../data/providers";
import { GoRedirect } from "../../../components/GoRedirect";

export default async function GoPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);
  if (!provider?.websiteUrl) notFound();
  return <GoRedirect slug={slug} />;
}
