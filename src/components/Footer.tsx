"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Logo, Button } from "./ui";
import { images, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="px-4 pb-6 pt-10 md:px-6">
      <div className="relative overflow-hidden rounded-[32px] bg-black text-white">
        <img
          src={images.footer}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative px-6 py-16 text-center md:px-16 md:py-24">
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            Let&apos;s work together
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/70 md:text-base">
            I&apos;m looking for co-op and internship terms in backend development, and I&apos;m
            always happy to talk about a project.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="light">
              Get in touch
            </Button>
            <a
              href={site.resumeHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-[13px] font-medium tracking-tight text-white transition hover:bg-white/10"
            >
              Download resume
              <ArrowUpRightIcon />
            </a>
          </div>
          <div className="mt-12 space-y-3 text-2xl font-medium tracking-tight md:text-4xl">
            <a href={site.emailHref} className="block hover:opacity-70">
              {site.email}
            </a>
            <a href={site.phoneHref} className="block hover:opacity-70">
              {site.phone}
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-5 text-white/80">
            <a href={site.githubHref} aria-label="GitHub" target="_blank" rel="noreferrer">
              <Github className="size-5" />
            </a>
            <a href={site.linkedinHref} aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <Linkedin className="size-5" />
            </a>
            <a href={site.emailHref} aria-label="Email">
              <Mail className="size-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-4 px-3 py-6 text-sm text-muted md:flex-row md:items-center">
        <Logo />
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-conditions">Terms</Link>
          <Link href="/refund-policy">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export function FloatingCtas() {
  return (
    <div className="pointer-events-none fixed right-4 bottom-6 z-40 hidden flex-col gap-2 sm:flex">
      <a
        href={site.resumeHref}
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13px] text-white shadow-lg"
      >
        Resume <ArrowUpRightIcon />
      </a>
      <a
        href={site.githubHref}
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13px] text-white shadow-lg"
      >
        GitHub <ArrowUpRightIcon />
      </a>
    </div>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 12 12 4M6 4h6v6" />
    </svg>
  );
}
