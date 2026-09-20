"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button, SectionLabel } from "@/components/ui";
import { ReelStack } from "@/components/ImageCompare";
import { ProjectsCarousel, TimelineRow } from "@/components/Projects";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Faqs, Principles, Services } from "@/components/Sections";
import { aboutStats, certifications, images, site } from "@/data/site";
import { education, experiences, posts } from "@/data/content";

export default function HomePage() {
  const school = education[0];

  return (
    <>
      <section className="px-4 pb-8 pt-2 md:px-6">
        <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px]">
          <img src={images.hero} alt="" className="h-[64vh] min-h-[520px] w-full object-cover object-[center_35%]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-ink">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[11px] uppercase tracking-[0.22em] text-[#4d4d4d]"
            >
              {site.name}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 }}
              className="mt-4 max-w-4xl text-5xl font-medium tracking-tight md:text-7xl"
            >
              Backend Developer
              <br />
              Building Practical Systems
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-5 max-w-2xl text-sm leading-6 text-[#4d4d4d] md:text-base"
            >
              Computer science student at Acadia University building Django and REST backends, AI
              agent pipelines, and data tools. Currently open to co-op and internship terms.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-7 flex flex-col items-center gap-3 sm:flex-row"
            >
              <Button href="/contact" variant="light">
                Get in touch
              </Button>
              <Button href={site.resumeHref} variant="ghost">
                Download resume
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-[1280px] px-5 pt-8 pb-16 md:px-8 md:pt-10 md:pb-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[180px_1fr_1fr_1fr] lg:items-start lg:gap-8">
          <SectionLabel>About me</SectionLabel>
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
            I am a computer science student at Acadia University in Wolfville, Nova Scotia. I teach
            data structures and algorithms, work the university IT service desk, and spend the rest
            of my time building Django backends and data tools that answer a real question.
          </p>
          <div className="mt-8">
            <Button href="/contact">Get in touch</Button>
          </div>
        </div>
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
            Teaching Algorithms, Shipping Backends
          </h2>
          <ReelStack />
        </div>
      </section>

      <ProjectsCarousel />
      <WhyChooseUs />

      <section id="experience" className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <SectionLabel>Experience</SectionLabel>
            <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight md:text-6xl">
              Where I Have Been Working
            </h2>
          </div>
          <Button href="/experience" variant="ghost">
            See All Roles
          </Button>
        </div>
        <div className="mt-8">
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
      </section>

      <section id="education" className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
        <SectionLabel>Education</SectionLabel>
        <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight md:text-6xl">
          Studying Computer Science at Acadia
        </h2>
        <div className="mt-8">
          {education.map((item) => (
            <TimelineRow
              key={item.slug}
              meta={item.period}
              title={item.degree}
              subtitle={`${item.school} · ${item.location}`}
              description={item.description}
            />
          ))}
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Relevant coursework</p>
            <ul className="mt-4 space-y-2 text-[15px] leading-6">
              {school.coursework.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Scholarships</p>
            <ul className="mt-4 space-y-2 text-[15px] leading-6">
              {school.scholarships.map((scholarship) => (
                <li key={scholarship}>{scholarship}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Certification</p>
            <ul className="mt-4 space-y-2 text-[15px] leading-6">
              {certifications.map((certification) => (
                <li key={certification}>{certification}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Services />
      <Principles />
      <Faqs />

      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <SectionLabel>Notes</SectionLabel>
            <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight md:text-6xl">
              Things I Have Been Working On
            </h2>
          </div>
          <Button href="/blog" variant="ghost">
            See All Notes
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
