export type Locale = "en" | "es";

export type LocalizedText = Record<Locale, string>;

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

export interface EducationEntry {
  id: string;
  degree: LocalizedText;
  institution: LocalizedText;
  location: LocalizedText;
  periodLabel: LocalizedText;
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
  experience: {
    title: string;
    subtitle: string;
  };
  education: {
    title: string;
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
