import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, posts } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post?.title ?? "Article", description: post?.cardSummary };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-[1100px] px-5 pb-24 pt-10 md:px-8">
      <p className="text-sm text-muted">{post.readTime}</p>
      <h1 className="mt-4 max-w-4xl text-5xl font-medium tracking-tight md:text-7xl">{post.title}</h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{post.cardSummary}</p>
      <img
        src={post.image}
        alt=""
        className="mt-10 h-[420px] w-full rounded-[32px] object-cover md:h-[560px]"
      />
      <div className="prose-faseelh mx-auto mt-14 max-w-3xl" dangerouslySetInnerHTML={{ __html: post.content }} />
      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {related.map((item) => (
          <Link key={item.slug} href={`/blog/${item.slug}`}>
            <img src={item.image} alt="" className="h-48 w-full rounded-[24px] object-cover" />
            <h2 className="mt-4 text-xl font-medium tracking-tight">{item.title}</h2>
          </Link>
        ))}
      </div>
    </article>
  );
}
