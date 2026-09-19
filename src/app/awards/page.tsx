import type { Metadata } from "next";
import { AwardRow } from "@/components/ProgramsCarousel";
import { SectionLabel } from "@/components/ui";
import { awards } from "@/data/content";

export const metadata: Metadata = {
  title: "Awards",
};

export default function AwardsPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 pb-24 pt-10 md:px-8">
      <SectionLabel>Awards</SectionLabel>
      <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-tight md:text-7xl">
        Celebrating Our Collective Achievements
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
        Celebrating the milestones that mark our journey toward a greener future. Each award
        represents collective effort, innovation, and measurable restoration.
      </p>
      <div className="mt-12">
        {awards.map((award) => (
          <AwardRow
            key={award.slug}
            href={`/awards/${award.slug}`}
            year={award.year}
            title={award.title}
            description={award.description}
          />
        ))}
      </div>
    </div>
  );
}
