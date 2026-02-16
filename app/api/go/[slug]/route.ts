import { NextResponse } from "next/server";
import { getProviderBySlug } from "../../../../data/providers";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);
  const url = provider?.websiteUrl;

  if (!url) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ url });
}
