"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { principles, services } from "@/data/site";
import { faqs } from "@/data/content";
import { Button, SectionLabel } from "./ui";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
      <SectionLabel>What I do</SectionLabel>
      <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-xl text-4xl font-medium tracking-tight md:text-6xl">
          Ways I Can Help a Team
        </h2>
        <p className="max-w-sm text-[15px] leading-7 text-muted">
          Whether it is a co-op term or a single service that needs building, here is the work I
          take on.
        </p>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.name}
            className={`flex flex-col rounded-[28px] p-7 ${service.featured ? "bg-ink text-white" : "bg-white"}`}
          >
            <h3 className="text-2xl font-medium tracking-tight">{service.name}</h3>
            <p className={`mt-2 text-sm ${service.featured ? "text-white/70" : "text-muted"}`}>
              {service.audience}
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {service.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className={service.featured ? "text-white/50" : "text-muted"}>+</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-2">
              <Button href="/contact" variant={service.featured ? "light" : "dark"}>
                Get in touch
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Principles() {
  const [index, setIndex] = useState(0);
  const item = principles[index];

  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
      <SectionLabel>How I work</SectionLabel>
      <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight md:text-6xl">
        Lessons That Shape How I Build
      </h2>
      <div className="mt-10 overflow-hidden rounded-[28px] bg-white p-8 md:p-14">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="max-w-4xl text-2xl leading-snug tracking-tight md:text-4xl"
          >
            {item.quote}
          </motion.blockquote>
        </AnimatePresence>
        <div className="mt-10 flex items-center justify-between">
          <div>
            <p className="font-medium">{item.label}</p>
            <p className="text-sm text-muted">{item.context}</p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous principle"
              onClick={() => setIndex((i) => (i - 1 + principles.length) % principles.length)}
              className="grid size-11 place-items-center rounded-full border border-line"
              suppressHydrationWarning
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next principle"
              onClick={() => setIndex((i) => (i + 1) % principles.length)}
              className="grid size-11 place-items-center rounded-full border border-line"
              suppressHydrationWarning
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faqs() {
  const [open, setOpen] = useState(0);

  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
      <SectionLabel>FAQs</SectionLabel>
      <h2 className="mt-5 text-4xl font-medium tracking-tight md:text-6xl">Your Questions, Answered</h2>
      <div className="mt-10 divide-y divide-line border-y border-line">
        {faqs.map((faq, i) => {
          const active = open === i;
          return (
            <button
              key={faq.slug}
              type="button"
              onClick={() => setOpen(active ? -1 : i)}
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
              suppressHydrationWarning
            >
              <div>
                <h3 className="text-xl font-medium tracking-tight md:text-2xl">{faq.question}</h3>
                <AnimatePresence>
                  {active ? (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pt-3 text-sm leading-6 text-muted"
                    >
                      {faq.answer}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>
              <span className="mt-1 text-xl text-muted">{active ? "–" : "+"}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
