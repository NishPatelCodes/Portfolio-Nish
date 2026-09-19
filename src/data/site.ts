export const images = {
  logo: "https://framerusercontent.com/images/zVo3nJgrvkrWgh0tnajbBDtxzA.png",
  hero: "https://framerusercontent.com/images/haK7pc5gUzcnGMDC0GHDsLXMql0.png",
  heroWide: "https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png",
  compareBefore: "https://framerusercontent.com/images/MAY2J74RjLUCTCFV0pZudHXAb2w.png",
  compareAfter: "https://framerusercontent.com/images/MNtHc3ydeTy0M0KuASleM6xw9U.png",
  reel: "https://framerusercontent.com/images/NipfxYmpxTidcyrfS0EfiKOA50.png",
  programWide: "https://framerusercontent.com/images/3pDV8uE04GwNPUCdixayuq4UVXk.png",
  programField: "https://framerusercontent.com/images/U6JSAEPnSbtTcEAcfU9dIK1lg.png",
  programPortraitA: "https://framerusercontent.com/images/OSbHLRYUg17Q0Vv8vfLJI8E8anw.png",
  programPortraitB: "https://framerusercontent.com/images/oWOUQZG3lU7qDcAeSr7XcUSfG2Y.png",
  featureCard: "https://framerusercontent.com/images/Vy0hFIX8XnvnNDcb91eQZTBgdo.png",
  footer: "https://framerusercontent.com/images/Tziira8sGmxBV8xwRiz9KeSbo.png",
  arrowPrev: "https://framerusercontent.com/images/GVn51WnN5j3T27wshpIEEGVWhEA.png",
  arrowNext: "https://framerusercontent.com/images/RpvI4Pdt7yaVPOmeENacQFQt3ZI.png",
} as const;

export const site = {
  name: "Faseelh",
  title: "Faseelh",
  description:
    "A greener tomorrow starts with us. Faseelh unites people, organizations, and local governments to restore nature and measure real environmental impact.",
  email: "support@framer.com",
  phone: "+1 234 567 8910",
  phoneHref: "tel:+12345678910",
  emailHref: "mailto:support@framer.com",
  socials: [
    { name: "Instagram", href: "https://www.instagram.com/" },
    { name: "YouTube", href: "https://www.youtube.com/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/" },
    { name: "X", href: "https://x.com/" },
  ],
  nav: [
    { label: "About", href: "/#about" },
    { label: "Programs", href: "/#programs" },
    { label: "Awards", href: "/awards" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const programs = [
  {
    title: "Rewilding the Highlands",
    description:
      "Restoring native forests across degraded landscapes to revive biodiversity and soil health.",
    image: images.programWide,
  },
  {
    title: "Urban Canopy Revival",
    description:
      "Bringing shade, cleaner air, and living green corridors back into dense city neighborhoods.",
    image: images.programField,
  },
  {
    title: "Coastal Mangrove Recovery",
    description:
      "Rebuilding shoreline ecosystems that protect communities, wildlife, and carbon-rich wetlands.",
    image: images.programPortraitA,
  },
] as const;

export const features = [
  {
    title: "Verified Impact & Measurable Results",
    description: "Access detailed reports that highlight tangible environmental achievements.",
  },
  {
    title: "Collaboration Tools for Every Organization",
    description: "Plan, track, and share your progress with ease using integrated dashboards.",
  },
  {
    title: "Data-Backed Environmental Insights",
    description: "Make informed decisions with analytics designed to measure real impact.",
  },
] as const;

export const aboutStats = [
  { n: "01.", text: "Millions of trees restored and protected" },
  { n: "02.", text: "Real-time, map-based progress tracking" },
  { n: "03.", text: "Collaborations with on-ground communities" },
] as const;

export const pricing = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    audience: "For individuals",
    featured: false,
    features: [
      "Track up to 3 projects",
      "Core dashboard access",
      "Email support",
      "Community resources",
    ],
  },
  {
    name: "Pro",
    monthly: 24,
    yearly: 20,
    audience: "For growing teams",
    featured: true,
    features: [
      "Track unlimited projects",
      "Advanced analytics dashboard",
      "Priority email & chat support",
      "Custom map embedding",
    ],
  },
  {
    name: "Enterprise",
    monthly: 64,
    yearly: 60,
    audience: "For global initiatives",
    featured: false,
    features: [
      "Team & multi-user access",
      "Dedicated account manager",
      "API & integration tools",
      "Custom reporting and data export",
    ],
  },
] as const;

export const testimonials = [
  {
    quote:
      "Before using Faseelh, we struggled to visualize the real results of our projects. Now, every seed we plant, every tree we restore, and every ton of carbon saved is tracked and displayed beautifully.",
    name: "Amelia Hart",
    role: "Director, Green Corridor Alliance",
  },
  {
    quote:
      "Faseelh turned our sustainability reports from vague summaries into precise, data-backed stories. Our donors and partners can finally see the measurable difference their support creates.",
    name: "Omar Rahman",
    role: "Partnerships Lead, Earthworks",
  },
  {
    quote:
      "The platform simplified everything — from monitoring local planting sites to sharing progress with our international partners. It gave our small organization a professional edge and built trust with every stakeholder.",
    name: "Sofia Alvarez",
    role: "Founder, Community Roots",
  },
  {
    quote:
      "What stands out about Faseelh is how human it feels. Despite the advanced analytics and dashboards, the platform reminds us that behind every dataset are communities, forests, and real people working together.",
    name: "Kenji Nakamura",
    role: "Program Manager, Pacific Restoration",
  },
  {
    quote:
      "With Faseelh, we no longer guess whether our initiatives make a difference — we can prove it. The transparency and accountability it brings to our environmental projects have strengthened our credibility worldwide.",
    name: "Leila Mensah",
    role: "Impact Officer, Horizon Climate Fund",
  },
] as const;
