import { SectionLabel } from "./ui";
import { ImageCompare } from "./ImageCompare";
import { features, images, skills } from "@/data/site";

export function WhyChooseUs() {
  const [first, second, third] = features;

  return (
    <section id="approach" className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 md:py-28">
      <SectionLabel>How I build</SectionLabel>
      <h2 className="mt-5 max-w-3xl text-[40px] leading-[1.08] font-medium tracking-tight md:text-[56px]">
        Backends Built to Stay Readable
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr_minmax(300px,380px)] lg:grid-rows-[minmax(300px,1fr)_minmax(340px,1.2fr)] lg:gap-5">
        <article className="flex min-h-[280px] flex-col justify-between rounded-[32px] bg-white p-8 md:min-h-[320px] md:p-10 lg:col-start-1 lg:row-start-1">
          <h3 className="max-w-[14ch] text-[28px] leading-tight font-medium tracking-tight md:text-[32px]">
            {first.title}
          </h3>
          <p className="max-w-[28ch] text-[15px] leading-6 text-muted">{first.description}</p>
        </article>

        <article className="flex min-h-[280px] flex-col justify-between rounded-[32px] bg-white p-8 md:min-h-[320px] md:p-10 lg:col-start-2 lg:row-start-1">
          <h3 className="max-w-[14ch] text-[28px] leading-tight font-medium tracking-tight md:text-[32px]">
            {second.title}
          </h3>
          <p className="max-w-[28ch] text-[15px] leading-6 text-muted">{second.description}</p>
        </article>

        <article className="relative min-h-[300px] overflow-hidden rounded-[32px] text-white md:min-h-[340px] lg:col-span-2 lg:col-start-1 lg:row-start-2">
          <img src={images.featureCard} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="relative flex h-full min-h-[300px] flex-col justify-end p-8 md:min-h-[340px] md:p-10">
            <h3 className="max-w-[16ch] text-[28px] leading-tight font-medium tracking-tight md:text-[32px]">
              {third.title}
            </h3>
            <p className="mt-3 max-w-[34ch] text-[15px] leading-6 text-white/85">{third.description}</p>
          </div>
        </article>

        <ImageCompare className="min-h-[480px] lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:min-h-full" />
      </div>

      <div className="mt-5 grid gap-4 rounded-[32px] bg-white p-8 md:grid-cols-2 md:p-10 lg:grid-cols-4">
        {skills.map((group) => (
          <div key={group.group}>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">{group.group}</p>
            <ul className="mt-4 space-y-2 text-[15px] leading-6">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
