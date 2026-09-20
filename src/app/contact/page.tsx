"use client";

import { FormEvent, useState } from "react";
import { Button, SectionLabel } from "@/components/ui";
import { site } from "@/data/site";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="mx-auto grid max-w-[1280px] gap-12 px-5 pb-24 pt-10 md:grid-cols-[0.9fr_1.1fr] md:px-8">
      <div>
        <SectionLabel>Contact</SectionLabel>
        <h1 className="mt-6 max-w-xl text-5xl font-medium tracking-tight md:text-7xl">
          Let&apos;s Build Something Together.
        </h1>
        <p className="mt-6 max-w-md text-base leading-7 text-muted">
          Hiring for a co-op term, or have a backend project in mind? Send me a note and I will get
          back to you.
        </p>
        <div className="mt-10 space-y-4 text-sm leading-6 text-muted">
          <p>
            Email{" "}
            <a href={site.emailHref} className="text-ink underline underline-offset-4">
              {site.email}
            </a>
          </p>
          <p>
            Phone{" "}
            <a href={site.phoneHref} className="text-ink underline underline-offset-4">
              {site.phone}
            </a>
          </p>
          <p>
            Code{" "}
            <a
              href={site.githubHref}
              target="_blank"
              rel="noreferrer"
              className="text-ink underline underline-offset-4"
            >
              github.com/NishPatelCodes
            </a>
          </p>
          <p>Based in {site.location}</p>
        </div>
      </div>
      <form onSubmit={onSubmit} className="rounded-[32px] bg-white p-6 md:p-10">
        <label htmlFor="name" className="block text-sm text-muted">
          Name
        </label>
        <input
          required
          id="name"
          name="name"
          className="mt-2 mb-5 h-12 w-full border-b border-line bg-transparent outline-none"
          suppressHydrationWarning
        />
        <label htmlFor="email" className="block text-sm text-muted">
          Email
        </label>
        <input
          required
          id="email"
          type="email"
          name="email"
          className="mt-2 mb-5 h-12 w-full border-b border-line bg-transparent outline-none"
          suppressHydrationWarning
        />
        <label htmlFor="project" className="block text-sm text-muted">
          What you&apos;re working on
        </label>
        <textarea
          required
          id="project"
          name="project"
          rows={5}
          className="mt-2 mb-8 w-full resize-none border-b border-line bg-transparent py-3 outline-none"
          suppressHydrationWarning
        />
        <Button type="submit">{sent ? "Message sent" : "Submit"}</Button>
      </form>
    </div>
  );
}
