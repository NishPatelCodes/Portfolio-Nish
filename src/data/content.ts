import cms from "./cms.json";

export type Award = (typeof cms.awards)[number];
export type Post = (typeof cms.posts)[number];
export type Faq = (typeof cms.faqs)[number];
export type LegalPage = (typeof cms.legal)[number];

export const awards = cms.awards;
export const posts = cms.posts;
export const faqs = cms.faqs;
export const legalPages = cms.legal;

export function getAward(slug: string) {
  return awards.find((item) => item.slug === slug);
}

export function getPost(slug: string) {
  return posts.find((item) => item.slug === slug);
}

export function getLegal(slug: string) {
  return legalPages.find((item) => item.slug === slug);
}
