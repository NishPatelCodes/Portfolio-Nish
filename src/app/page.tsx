"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button, SectionLabel } from "@/components/ui";
import { ReelStack } from "@/components/ImageCompare";
import { AwardRow, ProgramsCarousel } from "@/components/ProgramsCarousel";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Faqs, Pricing, Testimonials } from "@/components/Sections";
import { aboutStats, images } from "@/data/site";
import { awards, posts } from "@/data/content";

export default function HomePage() {
  return (
    <>
      <section className="px-4 pb-8 pt-2 md:px-6">
        <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px]">
          <img src={images.hero} alt="" className="h-[64vh] min-h-[520px] w-full object-cover object-[center_35%]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-ink">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl text-5xl font-medium tracking-tight md:text-7xl"
            >
              A Greener Tomorrow
              <br />
              Starts With Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-5 max-w-2xl text-sm leading-6 text-[#4d4d4d] md:text-base"
            >
              Our platform unites people, organizations, and local governments to bring nature back
              to cities, offset emissions, and create spaces where both communities and ecosystems
              thrive.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-7"
            >
              <Button href="/contact" variant="light">
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-[1280px] px-5 pt-8 pb-16 md:px-8 md:pt-10 md:pb-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[180px_1fr_1fr_1fr] lg:items-start lg:gap-8">
          <SectionLabel>About us</SectionLabel>
          {aboutStats.map((item) => (
            <div key={item.n} className="min-w-0">
              <p className="text-[28px] leading-none text-[#c8c8c8] md:text-[34px]">{item.n}</p>
              <p className="mt-4 max-w-[16ch] text-[22px] leading-snug font-medium tracking-tight md:text-[26px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 max-w-xl lg:ml-[180px]">
          <p className="text-lg leading-8 text-muted">
            By combining environmental science with digital tools our platform makes it easy to
            join greening initiatives, track impact in real-time, and contribute to a sustainable
            future.
          </p>
          <div className="mt-8">
            <Button href="/contact">Get Started</Button>
          </div>
        </div>
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
            Technology Meets Nature Restoration
          </h2>
          <ReelStack />
        </div>
      </section>

      <ProgramsCarousel />
      <WhyChooseUs />

      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <SectionLabel>Awards</SectionLabel>
            <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight md:text-6xl">
              Celebrating Our Collective Achievements
            </h2>
          </div>
          <Button href="/awards" variant="ghost">
            See All Awards
          </Button>
        </div>
        <div className="mt-8">
          {awards.slice(0, 4).map((award) => (
            <AwardRow
              key={award.slug}
              href={`/awards/${award.slug}`}
              year={award.year}
              title={award.title}
              description={award.description}
            />
          ))}
        </div>
      </section>

      <Pricing />
      <Testimonials />
      <Faqs />

      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <SectionLabel>Blog</SectionLabel>
            <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight md:text-6xl">
              Latest from the Faseelh Journal
            </h2>
          </div>
          <Button href="/blog" variant="ghost">
            See All Articles
          </Button>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="overflow-hidden rounded-[24px]">
                <img
                  src={post.image}
                  alt=""
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-4 text-2xl font-medium tracking-tight">{post.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{post.cardSummary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
