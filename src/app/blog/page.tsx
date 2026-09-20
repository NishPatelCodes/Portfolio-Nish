import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui";
import { posts } from "@/data/content";

export const metadata: Metadata = {
  title: "Notes",
};

export default function NotesPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 pb-24 pt-10 md:px-8">
      <SectionLabel>Notes</SectionLabel>
      <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-tight md:text-7xl">
        Things I Have Been Working On
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
        Short write-ups on what I learn while building backends, teaching algorithms, and shipping
        projects.
      </p>
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <div className="overflow-hidden rounded-[28px]">
              <img
                src={post.image}
                alt=""
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <h2 className="mt-5 text-3xl font-medium tracking-tight">{post.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{post.cardSummary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
