import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui";
import { posts } from "@/data/content";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 pb-24 pt-10 md:px-8">
      <SectionLabel>Blog</SectionLabel>
      <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-tight md:text-7xl">
        Latest from the Greeney Journal
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
        Stay informed with expert articles, case studies, and practical guides on restoring
        ecosystems, measuring impact, and building a greener future.
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
