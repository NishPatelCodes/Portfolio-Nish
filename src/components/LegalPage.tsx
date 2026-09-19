import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegal } from "@/data/content";

export default async function Legal({ slug }: { slug: string }) {
  const page = getLegal(slug);
  if (!page) notFound();
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-10 md:px-8">
      <div className="prose-faseelh" dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
  );
}

export type { Metadata };
