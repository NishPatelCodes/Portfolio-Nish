import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AwardRow } from "@/components/ProgramsCarousel";
import { SectionLabel } from "@/components/ui";
import { awards, getAward } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return awards.map((award) => ({ slug: award.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const award = getAward(slug);
  return { title: award?.title ?? "Award" };
}

export default async function AwardDetailPage({ params }: Props) {
  const { slug } = await params;
  const award = getAward(slug);
  if (!award) notFound();

  const related = awards.filter((item) => item.slug !== award.slug).slice(0, 4);

  return (
    <article className="mx-auto max-w-[1100px] px-5 pb-24 pt-10 md:px-8">
      <h1 className="text-5xl font-medium tracking-tight md:text-7xl">{award.title}</h1>
      <p className="mt-4 max-w-2xl text-muted">{award.description}</p>
      <img
        src={award.images[0]}
        alt=""
        className="mt-10 h-[420px] w-full rounded-[32px] object-cover md:h-[560px]"
      />
      <div className="mt-10">
        <SectionLabel>Our impact</SectionLabel>
        <div className="mt-6 grid gap-8 md:grid-cols-3">
          {award.impacts.map((impact, index) => (
            <div key={impact}>
              <p className="text-sm text-muted">0{index + 1}.</p>
              <p className="mt-2 text-lg font-medium tracking-tight">{impact}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="prose-faseelh mx-auto mt-16 max-w-3xl"
        dangerouslySetInnerHTML={{ __html: `${award.intro}${award.body}` }}
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {award.images.slice(1, 4).map((src) => (
          <img key={src} src={src} alt="" className="h-56 w-full rounded-[24px] object-cover" />
        ))}
      </div>
      <h2 className="mt-20 text-3xl font-medium tracking-tight">Read More</h2>
      <div className="mt-4">
        {related.map((item) => (
          <AwardRow
            key={item.slug}
            href={`/awards/${item.slug}`}
            year={item.year}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </article>
  );
}
