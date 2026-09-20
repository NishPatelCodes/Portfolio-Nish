import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TimelineRow } from "@/components/Projects";
import { SectionLabel } from "@/components/ui";
import { experiences, getExperience } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return experiences.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const role = getExperience(slug);
  return { title: role ? `${role.role} at ${role.company}` : "Experience" };
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { slug } = await params;
  const role = getExperience(slug);
  if (!role) notFound();

  const related = experiences.filter((item) => item.slug !== role.slug);

  return (
    <article className="mx-auto max-w-[1100px] px-5 pb-24 pt-10 md:px-8">
      <p className="text-sm text-muted">{role.period}</p>
      <h1 className="mt-4 text-5xl font-medium tracking-tight md:text-7xl">{role.role}</h1>
      <p className="mt-4 max-w-2xl text-muted">
        {role.company} · {role.location}
      </p>
      <img
        src={role.images[0]}
        alt=""
        className="mt-10 h-[420px] w-full rounded-[32px] object-cover md:h-[560px]"
      />
      <div className="mt-10">
        <SectionLabel>What I did</SectionLabel>
        <div className="mt-6 grid gap-8 md:grid-cols-3">
          {role.highlights.map((highlight, index) => (
            <div key={highlight}>
              <p className="text-sm text-muted">0{index + 1}.</p>
              <p className="mt-2 text-lg font-medium tracking-tight">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="prose-article mx-auto mt-16 max-w-3xl"
        dangerouslySetInnerHTML={{ __html: `${role.intro}${role.body}` }}
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {role.images.slice(1, 4).map((src) => (
          <img key={src} src={src} alt="" className="h-56 w-full rounded-[24px] object-cover" />
        ))}
      </div>
      <h2 className="mt-20 text-3xl font-medium tracking-tight">Other Roles</h2>
      <div className="mt-4">
        {related.map((item) => (
          <TimelineRow
            key={item.slug}
            href={`/experience/${item.slug}`}
            meta={item.period}
            title={item.role}
            subtitle={`${item.company} · ${item.location}`}
            description={item.description}
          />
        ))}
      </div>
    </article>
  );
}
