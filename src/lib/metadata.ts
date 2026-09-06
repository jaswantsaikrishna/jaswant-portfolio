import type { Metadata } from "next";

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: `${title} — Jaswant Sai Krishna`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — Jaswant Sai Krishna`,
      description,
    },
  };
}
