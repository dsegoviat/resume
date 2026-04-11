export type Locale = "en" | "es";

export type LocalizedText = Record<Locale, string>;

export type OpportunityTrack = "freelance" | "employee";

export interface ContactLink {
  id: "email" | "linkedin";
  label: LocalizedText;
  href: string;
}

export interface SiteProfile {
  name: string;
  title: LocalizedText;
  summary: LocalizedText;
  location: LocalizedText;
  availability: LocalizedText;
  workPreferences: {
    remote: LocalizedText;
    hybridBarcelona: LocalizedText;
  };
  contactLinks: ContactLink[];
}

export interface ExperienceEntry {
  id: string;
  track: OpportunityTrack;
  role: LocalizedText;
  company: string;
  location: LocalizedText;
  periodLabel: LocalizedText;
  startYear: number;
  endYear?: number;
  bullets: LocalizedText[];
  techTags: string[];
}

export interface SkillItem {
  name: string;
  years: number;
  focus: LocalizedText;
}

export interface SkillGroup {
  id: string;
  title: LocalizedText;
  items: SkillItem[];
}

export interface SpokenLanguage {
  id: string;
  name: string;
  level: LocalizedText;
}

export interface LocaleDictionary {
  nav: {
    experience: string;
    skills: string;
    languages: string;
    contact: string;
    blog: string;
  };
  hero: {
    kicker: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  opportunities: {
    title: string;
    freelanceTitle: string;
    freelanceBody: string;
    employeeTitle: string;
    employeeBody: string;
  };
  availability: {
    title: string;
    remoteLabel: string;
    hybridLabel: string;
  };
  filters: {
    all: string;
    freelance: string;
    employee: string;
  };
  experience: {
    title: string;
    subtitle: string;
  };
  skills: {
    title: string;
    subtitle: string;
    yearsLabel: string;
  };
  languages: {
    title: string;
  };
  contact: {
    title: string;
    body: string;
  };
  blog: {
    comingSoon: string;
  };
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  published: boolean;
  locale: Locale;
}
