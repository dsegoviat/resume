export type Locale = "en" | "es" | "ca";

export type LocalizedText = Record<Locale, string>;

export interface ContactLink {
  id: "email" | "linkedin" | "github";
  label: LocalizedText;
  href: string;
}

export interface TechnologyGroup {
  id: string;
  title: LocalizedText;
  items: Array<{
    name: string;
    years: number;
  }>;
}

export interface SiteProfile {
  name: string;
  title: LocalizedText;
  summary: LocalizedText;
  about: Record<Locale, string[]>;
  location: LocalizedText;
  availability: LocalizedText;
  phone: string;
  resumeUrl: string;
  coreTechnologies: Array<{
    name: string;
    years: number;
  }>;
  technologyGroups: TechnologyGroup[];
  softSkills: LocalizedText[];
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
  name: LocalizedText;
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
    about: string;
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
    ctaPrint: string;
  };
  about: {
    title: string;
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
  print: {
    profileTitle: string;
    technologiesTitle: string;
    softSkillsTitle: string;
    contactTitle: string;
    locationLabel: string;
    phoneLabel: string;
    emailLabel: string;
    linkedinLabel: string;
    websiteLabel: string;
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
