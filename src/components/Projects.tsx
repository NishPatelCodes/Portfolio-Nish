"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";
import { site } from "@/data/site";
import { Button, SectionLabel } from "./ui";

export function ProjectsCarousel() {
  const [index, setIndex] = useState(0);
  const item = projects[index];

  function next() {
    setIndex((current) => (current + 1) % projects.length);
  }

  function prev() {
    setIndex((current) => (current - 1 + projects.length) % projects.length);
  }

  return (
    <section id="projects" className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
      <SectionLabel>Projects</SectionLabel>
      <div className="mt-6 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <h2 className="max-w-xl text-4xl font-medium tracking-tight md:text-6xl">
            Backends I Have Designed and Shipped
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-muted">
            Django APIs, data pipelines, and AI-assisted tools. Each one started with a real
            problem, and the code for all of them is public on GitHub.
          </p>
          <div className="mt-8">
            <Button href={site.githubHref}>View GitHub</Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-[28px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={item.image}
              src={item.image}
              alt={item.title}
              initial={{ opacity: 0.4, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="h-[280px] w-full object-cover md:h-[360px]"
            />
          </AnimatePresence>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm text-muted">{item.tagline}</p>
          <h3 className="mt-1 text-2xl font-medium tracking-tight md:text-3xl">{item.title}</h3>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted">{item.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {item.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line bg-white px-3 py-1 text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
          <a
            href={item.github}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium tracking-tight hover:opacity-70"
          >
            View code on GitHub
            <ArrowUpRight className="size-4" />
          </a>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="grid size-12 place-items-center rounded-full border border-line bg-white"
            suppressHydrationWarning
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="grid size-12 place-items-center rounded-full border border-line bg-white"
            suppressHydrationWarning
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

type TimelineRowProps = {
  href?: string;
  meta: string;
  title: string;
  subtitle?: string;
  description: string;
};

export function TimelineRow({ href, meta, title, subtitle, description }: TimelineRowProps) {
  const content = (
    <>
      <span className="text-sm text-muted">{meta}</span>
      <div>
        <h3 className="text-xl font-medium tracking-tight md:text-2xl">{title}</h3>
        {subtitle ? <p className="mt-1 text-sm text-muted">{subtitle}</p> : null}
      </div>
      <p className="text-sm leading-6 text-muted">{description}</p>
      {href ? (
        <span className="grid size-10 place-items-center rounded-full border border-line bg-white transition group-hover:bg-ink group-hover:text-white">
          <ArrowUpRight className="size-4" />
        </span>
      ) : (
        <span aria-hidden className="hidden size-10 md:block" />
      )}
    </>
  );

  const layout =
    "grid items-center gap-4 border-b border-line py-6 md:grid-cols-[160px_1.1fr_1fr_auto]";

  if (!href) {
    return <div className={layout}>{content}</div>;
  }

  return (
    <Link href={href} className={`group ${layout}`}>
      {content}
    </Link>
  );
}
