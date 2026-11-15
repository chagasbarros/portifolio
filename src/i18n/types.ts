export type Locale = "pt" | "en";

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    links: { label: string; href: string }[];
    contact: string;
    switchLabel: string;
  };
  hero: {
    tagline: string;
    intro: string;
    ctaProjects: string;
    ctaContact: string;
    stats: { num: string; label: string }[];
  };
  about: {
    photoAlt: string;
    titleStart: string;
    titleEm: string;
    paragraphs: string[];
  };
  stack: {
    titleStart: string;
    titleEm: string;
    intro: string;
    items: { category: string; name: string }[];
  };
  projects: {
    titleStart: string;
    titleEm: string;
    seeAll: string;
    liveSite: string;
    items: {
      num: string;
      name: string;
      desc: string;
      tags: string[];
      href: string;
      live?: string;
    }[];
  };
  experience: {
    titleStart: string;
    titleEm: string;
    items: {
      period: string;
      role: string;
      company: string;
      desc: string;
      active: boolean;
    }[];
  };
  contact: {
    titleLine1: string;
    titleEm: string;
    text: string;
    socials: { label: string; href: string }[];
  };
  footer: { location: string; backToTop: string };
};
