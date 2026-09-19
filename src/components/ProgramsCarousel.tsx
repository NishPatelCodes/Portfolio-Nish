"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { programs } from "@/data/site";
import { Button, SectionLabel } from "./ui";

export function ProgramsCarousel() {
  const [index, setIndex] = useState(0);
  const item = programs[index];

  function next() {
    setIndex((current) => (current + 1) % programs.length);
  }

  function prev() {
    setIndex((current) => (current - 1 + programs.length) % programs.length);
  }

  return (
    <section id="programs" className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
      <SectionLabel>Programs</SectionLabel>
      <div className="mt-6 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <h2 className="max-w-xl text-4xl font-medium tracking-tight md:text-6xl">
            Initiatives That Shape a Greener Future
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-muted">
            From dense forests to urban rooftops, our programs make sustainability accessible and
            actionable. Explore key initiatives designed to heal environments and support community
            growth.
          </p>
          <div className="mt-8">
            <Button href="/contact">Get Started</Button>
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
      <div className="mt-8 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-medium tracking-tight md:text-3xl">{item.title}</h3>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted">{item.description}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous program"
            className="grid size-12 place-items-center rounded-full border border-line bg-white"
            suppressHydrationWarning
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next program"
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

export function AwardRow({
  href,
  year,
  title,
  description,
}: {
  href: string;
  year: number;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group grid items-center gap-4 border-b border-line py-6 md:grid-cols-[80px_1fr_1fr_auto]"
    >
      <span className="text-sm text-muted">{year}</span>
      <h3 className="text-xl font-medium tracking-tight md:text-2xl">{title}</h3>
      <p className="text-sm leading-6 text-muted">{description}</p>
      <span className="grid size-10 place-items-center rounded-full border border-line bg-white transition group-hover:bg-ink group-hover:text-white">
        <ArrowUpRight className="size-4" />
      </span>
    </Link>
  );
}
