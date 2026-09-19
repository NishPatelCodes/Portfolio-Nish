# Faseelh — code recreation

Pixel-faithful frontend recreation of the [Faseelh Framer template](https://faseelh.framer.website/), rebuilt in Next.js so you can edit it as a normal codebase and adapt it into your portfolio.

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

## What is included

- Home: hero, about, image comparison, programs carousel, why choose us, awards, pricing, testimonials, FAQs, journal
- Awards listing + award detail pages
- Blog listing + article pages
- Contact form
- Privacy, terms, refund, and 404 pages
- CMS-style content in `src/data/cms.json` and `src/data/site.ts`

## Customize for your portfolio

1. Replace copy and name in `src/data/site.ts`
2. Swap awards, articles, and FAQs in `src/data/cms.json`
3. Point image URLs to your own work, or add files under `public/`
4. Update contact details, social links, and metadata in `src/app/layout.tsx`

Original design by Mejed Alkoutaini / Templyo. This repo is a coded reconstruction for personal customization, not a Framer export.
