"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Logo, Button } from "./ui";
import { images, site } from "@/data/site";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
      <path d="M18.9 3H21l-6.6 7.54L22 21h-5.5l-4.3-5.62L7.2 21H5.1l7.06-8.07L2 3h5.64l3.9 5.17L18.9 3Zm-1.93 16.2h1.53L7.1 4.7H5.46l11.51 14.5Z" />
    </svg>
  );
}

export function Footer() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

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
            Get notification for updates
          </h2>
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <input
              required
              type="email"
              name="email"
              placeholder="jane@framer.com"
              className="h-12 flex-1 rounded-full border border-white/15 bg-white/8 px-5 text-sm text-white outline-none placeholder:text-white/45"
              suppressHydrationWarning
            />
            <Button type="submit" variant="light" className="justify-center">
              {sent ? "Submitted" : "Submit"}
            </Button>
          </form>
          <div className="mt-12 space-y-3 text-2xl font-medium tracking-tight md:text-4xl">
            <a href={site.emailHref} className="block hover:opacity-70">
              {site.email}
            </a>
            <a href={site.phoneHref} className="block hover:opacity-70">
              {site.phone}
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-5 text-white/80">
            <a href={site.socials[0].href} aria-label="Instagram">
              <Instagram className="size-5" />
            </a>
            <a href={site.socials[1].href} aria-label="YouTube">
              <Youtube className="size-5" />
            </a>
            <a href={site.socials[2].href} aria-label="LinkedIn">
              <Linkedin className="size-5" />
            </a>
            <a href={site.socials[3].href} aria-label="X">
              <XIcon />
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
      <Link
        href="/contact"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13px] text-white shadow-lg"
      >
        Use for Free <ArrowUpRightIcon />
      </Link>
      <Link
        href="/blog"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13px] text-white shadow-lg"
      >
        More Templates <ArrowUpRightIcon />
      </Link>
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
