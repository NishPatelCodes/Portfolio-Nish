# Nish Patel — backend developer portfolio

Personal portfolio for Nish Patel, a computer science student at Acadia University working on Django and REST backends, AI agent pipelines, and data tools.

The visual design is a coded adaptation of the [Faseelh Framer template](https://faseelh.framer.website/) by Mejed Alkoutaini / Templyo, rebuilt in Next.js and rewritten around my own experience, projects, and education.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lenis smooth scrolling

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- Home: hero, about, projects carousel, how I build + skills, experience, education, services, principles, FAQs, notes
- `/experience` and `/experience/[slug]` — roles with detailed write-ups
- `/blog` and `/blog/[slug]` — short notes
- `/contact` — contact details and a local-only form
- Privacy, terms, refund, and 404 pages

## Where the content lives

| What | File |
| --- | --- |
| Name, contact, nav, skills, services, principles | `src/data/site.ts` |
| Experience, projects, education, FAQs, notes, legal | `src/data/cms.json` |
| Typed accessors (`getExperience`, `getProject`, …) | `src/data/content.ts` |
| Resume download | `public/resume.pdf` |

To update the site, edit those data files — the pages read from them.
