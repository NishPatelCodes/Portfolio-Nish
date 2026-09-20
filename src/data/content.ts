import cms from "./cms.json";

export type Experience = (typeof cms.experiences)[number];
export type Project = (typeof cms.projects)[number];
export type Education = (typeof cms.education)[number];
export type Post = (typeof cms.posts)[number];
export type Faq = (typeof cms.faqs)[number];
export type LegalPage = (typeof cms.legal)[number];

export const experiences = cms.experiences;
export const projects = cms.projects;
export const education = cms.education;
export const posts = cms.posts;
export const faqs = cms.faqs;
export const legalPages = cms.legal;

export function getExperience(slug: string) {
  return experiences.find((item) => item.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((item) => item.slug === slug);
}

export function getPost(slug: string) {
  return posts.find((item) => item.slug === slug);
}

export function getLegal(slug: string) {
  return legalPages.find((item) => item.slug === slug);
}
