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
  name: "Nish Patel",
  short: "Nish",
  title: "Nish Patel - Backend Developer",
  role: "Backend Developer",
  description:
    "Computer science student at Acadia University building Django and REST backends, AI agent pipelines, and data tools. Open to co-op and internship roles.",
  location: "Wolfville, Nova Scotia",
  email: "itsnishpatel@gmail.com",
  emailHref: "mailto:itsnishpatel@gmail.com",
  phone: "+1 416 587 6140",
  phoneHref: "tel:+14165876140",
  resumeHref: "/resume.pdf",
  githubHref: "https://github.com/NishPatelCodes",
  linkedinHref: "https://www.linkedin.com/in/nish-patel-a99336343/",
  socials: [
    { name: "GitHub", href: "https://github.com/NishPatelCodes" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/nish-patel-a99336343/" },
    { name: "Email", href: "mailto:itsnishpatel@gmail.com" },
  ],
  nav: [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/experience" },
    { label: "Education", href: "/#education" },
    { label: "Services", href: "/#services" },
    { label: "Notes", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const aboutStats = [
  { n: "01.", text: "Around 300 algorithms assignments graded each term" },
  { n: "02.", text: "Five production AI agent pipelines shipped at Wayfair" },
  { n: "03.", text: "Meta Back-End Developer Professional Certificate" },
] as const;

export const features = [
  {
    title: "REST APIs Built With Django",
    description:
      "CRUD endpoints, authentication, and role-based access designed to stay readable as a project grows.",
  },
  {
    title: "Data Work That Answers Questions",
    description:
      "Pandas, NumPy, and SQL pipelines that turn raw spreadsheets and tables into something a team can act on.",
  },
  {
    title: "Support Experience Behind the Code",
    description:
      "Teaching and service desk work taught me to debug patiently and explain a fix in plain language.",
  },
] as const;

export const skills = [
  {
    group: "Languages",
    items: ["Python", "Java", "C", "JavaScript", "HTML/CSS", "SQL"],
  },
  {
    group: "Focus areas",
    items: ["Data structures & algorithms", "Data mining", "Machine learning"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Docker", "n8n", "Vercel"],
  },
  {
    group: "Spoken",
    items: ["English", "Hindi", "Gujarati"],
  },
] as const;

export const certifications = [
  "Meta Back-End Developer Professional Certificate",
  "LeetCode - 76 problems solved",
] as const;

export const services = [
  {
    name: "Co-op & Internships",
    audience: "For teams hiring a backend student",
    featured: false,
    features: [
      "Available for co-op and summer terms",
      "Python, Django, and SQL day to day",
      "Comfortable joining an existing codebase",
      "Based in Nova Scotia, open to remote",
    ],
  },
  {
    name: "APIs & Django Systems",
    audience: "For products that need a backend",
    featured: true,
    features: [
      "REST APIs with Django and DRF",
      "Authentication and role-based access",
      "Relational schemas and CRUD flows",
      "Deployment to a live domain",
    ],
  },
  {
    name: "AI Agents & Automation",
    audience: "For teams automating manual work",
    featured: false,
    features: [
      "Agent pipelines built in n8n on Docker",
      "Google Gemini and HuggingFace models",
      "Structured JSON output from prompts",
      "Glue code between APIs and models",
    ],
  },
] as const;

export const principles = [
  {
    quote:
      "Grading roughly 300 assignments a term taught me that the fix matters less than the explanation. I write feedback and code the same way: say what is wrong, then show the path out.",
    label: "Teaching data structures",
    context: "Acadia University",
  },
  {
    quote:
      "At Wayfair I shipped five agent pipelines in n8n instead of one perfect prototype. Getting something into production early is what turned model output into a workflow people could actually run.",
    label: "Shipping AI pipelines",
    context: "Wayfair, via Extern",
  },
  {
    quote:
      "Businalyst started as a spreadsheet problem, not a Django problem. I build backends by working backwards from the question a user is trying to answer, then designing the API around it.",
    label: "Building Businalyst",
    context: "Full-stack analytics app",
  },
] as const;
