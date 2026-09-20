import type { Metadata } from "next";
import { TimelineRow } from "@/components/Projects";
import { SectionLabel } from "@/components/ui";
import { experiences } from "@/data/content";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 pb-24 pt-10 md:px-8">
      <SectionLabel>Experience</SectionLabel>
      <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-tight md:text-7xl">
        Where I Have Been Working
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
        Teaching data structures, keeping a university help desk running, and building AI agent
        pipelines. Each role is written up with what I actually worked on.
      </p>
      <div className="mt-12">
        {experiences.map((role) => (
          <TimelineRow
            key={role.slug}
            href={`/experience/${role.slug}`}
            meta={role.period}
            title={role.role}
            subtitle={`${role.company} · ${role.location}`}
            description={role.description}
          />
        ))}
      </div>
    </div>
  );
}
