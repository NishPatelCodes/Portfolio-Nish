"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { pricing, testimonials } from "@/data/site";
import { faqs } from "@/data/content";
import { Button, SectionLabel } from "./ui";

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
      <SectionLabel>Pricing</SectionLabel>
      <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-xl text-4xl font-medium tracking-tight md:text-6xl">
          Simple Plans for Every Mission
        </h2>
        <div className="flex rounded-full bg-soft p-1 text-sm">
          <button
            type="button"
            onClick={() => setYearly(false)}
            className={`rounded-full px-4 py-2 ${!yearly ? "bg-white shadow-sm" : "text-muted"}`}
            suppressHydrationWarning
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setYearly(true)}
            className={`rounded-full px-4 py-2 ${yearly ? "bg-white shadow-sm" : "text-muted"}`}
            suppressHydrationWarning
          >
            Yearly
          </button>
        </div>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {pricing.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-[28px] p-7 ${plan.featured ? "bg-ink text-white" : "bg-white"}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-lg">{plan.name}</p>
                <p className={`mt-5 text-5xl font-medium tracking-tight ${plan.featured ? "text-white" : ""}`}>
                  ${yearly ? plan.yearly : plan.monthly}
                </p>
                <p className={`mt-1 text-sm ${plan.featured ? "text-white/60" : "text-muted"}`}>
                  user/month
                </p>
              </div>
              <Button href="/contact" variant={plan.featured ? "light" : "dark"}>
                Get Started
              </Button>
            </div>
            <p className={`mt-8 text-sm ${plan.featured ? "text-white/70" : "text-muted"}`}>
              {plan.audience}
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className={plan.featured ? "text-white/50" : "text-muted"}>+</span>
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
      <SectionLabel>Testimonial</SectionLabel>
      <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight md:text-6xl">
        Stories from Our Global Community
      </h2>
      <div className="mt-10 overflow-hidden rounded-[28px] bg-white p-8 md:p-14">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={item.name}
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
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-muted">{item.role}</p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="grid size-11 place-items-center rounded-full border border-line"
              suppressHydrationWarning
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
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
