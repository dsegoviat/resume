"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { dictionaries } from "@/content/dictionary";
import { educationEntries } from "@/content/education";
import { experienceEntries } from "@/content/experience";
import { siteProfile } from "@/content/profile";
import { skillGroups, spokenLanguages } from "@/content/skills";
import { Locale, LocalizedText } from "@/types/content";
import styles from "./resume-site.module.css";

type ResumeSiteProps = {
  hasBlogPosts: boolean;
};

function getLocalizedText(locale: Locale, value: LocalizedText) {
  return value[locale];
}

function SectionTitle({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <h2 className={styles.sectionTitle}>
      <span className={styles.titleIcon} aria-hidden="true">
        {icon}
      </span>
      {title}
    </h2>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <circle cx="8" cy="9" r="1.1" fill="currentColor" />
      <path d="M8 12v5" />
      <path d="M12 17v-3.2c0-1.2.7-1.9 1.8-1.9s1.8.7 1.8 1.9V17" />
      <path d="M12 13.2V12" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3.5 19V6.8a1.8 1.8 0 011.8-1.8H10l2 2h6.2a1.8 1.8 0 011.8 1.8V19" />
      <path d="M3.5 10.5h16.8" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 20s6-5.1 6-10a6 6 0 10-12 0c0 4.9 6 10 6 10z" />
      <circle cx="12" cy="10" r="2.1" />
    </svg>
  );
}

function TimelineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 6h8" />
      <path d="M4 12h12" />
      <path d="M4 18h10" />
      <circle cx="17" cy="6" r="1.5" />
      <circle cx="19" cy="12" r="1.5" />
      <circle cx="16" cy="18" r="1.5" />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 9l9-4 9 4-9 4-9-4z" />
      <path d="M7 11.2V15c0 1.8 2.2 3 5 3s5-1.2 5-3v-3.8" />
    </svg>
  );
}

function SkillsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 16h6" />
      <path d="M4 12h10" />
      <path d="M4 8h14" />
      <circle cx="13.5" cy="16" r="2" />
      <circle cx="17.5" cy="12" r="2" />
      <circle cx="20" cy="8" r="1.5" />
    </svg>
  );
}

function LanguageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 4a7 7 0 100 14 7 7 0 000-14z" />
      <path d="M5 11h14" />
      <path d="M12 4c2.1 2.2 2.1 11.8 0 14" />
      <path d="M12 4c-2.1 2.2-2.1 11.8 0 14" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 6.5h16v11H4z" />
      <path d="M4 8l8 6 8-6" />
    </svg>
  );
}

export function ResumeSite({ hasBlogPosts }: ResumeSiteProps) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "en";
    }
    const storedLocale = window.localStorage.getItem("resume-locale");
    return storedLocale === "es" ? "es" : "en";
  });

  const dictionary = dictionaries[locale];

  const sortedExperiences = useMemo(() => {
    return [...experienceEntries].sort((a, b) => b.startYear - a.startYear);
  }, []);

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible);
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const changeLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
    window.localStorage.setItem("resume-locale", nextLocale);
  };

  return (
    <div className={styles.pageShell}>
      <div className={styles.backgroundGrid} aria-hidden="true" />
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.kicker}>{dictionary.hero.kicker}</span>
          <strong>{siteProfile.name}</strong>
        </div>

        <nav className={styles.nav}>
          <a href="#experience">{dictionary.nav.experience}</a>
          <a href="#education">{dictionary.education.title}</a>
          <a href="#skills">{dictionary.nav.skills}</a>
          <a href="#languages">{dictionary.nav.languages}</a>
          <a href="#contact">{dictionary.nav.contact}</a>
          {hasBlogPosts ? <Link href="/blog/">{dictionary.nav.blog}</Link> : null}
        </nav>

        <div className={styles.localeSwitch} role="group" aria-label="Language switcher">
          <button
            type="button"
            onClick={() => changeLocale("en")}
            data-active={locale === "en"}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => changeLocale("es")}
            data-active={locale === "es"}
          >
            ES
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <section className={`${styles.hero} ${styles.revealItem}`} data-reveal>
          <p className={styles.heroTitle}>{getLocalizedText(locale, siteProfile.title)}</p>
          <h1>{getLocalizedText(locale, siteProfile.summary)}</h1>
          <p className={styles.metaLine}>
            {getLocalizedText(locale, siteProfile.location)} | {getLocalizedText(locale, siteProfile.availability)}
          </p>
          <div className={styles.heroActions}>
            <a href="#contact" className={styles.primaryCta}>
              {dictionary.hero.ctaPrimary}
            </a>
            <a href="#experience" className={styles.secondaryCta}>
              {dictionary.hero.ctaSecondary}
            </a>
          </div>
        </section>

        <section className={`${styles.opportunitySection} ${styles.revealItem}`} data-reveal>
          <SectionTitle icon={<FolderIcon />} title={dictionary.opportunities.title} />
          <div className={styles.opportunityGrid}>
            <article className={styles.opportunityCard}>
              <h3>{dictionary.opportunities.freelanceTitle}</h3>
              <p>{dictionary.opportunities.freelanceBody}</p>
            </article>
            <article className={styles.opportunityCard}>
              <h3>{dictionary.opportunities.employeeTitle}</h3>
              <p>{dictionary.opportunities.employeeBody}</p>
            </article>
          </div>
        </section>

        <section className={`${styles.availability} ${styles.revealItem}`} data-reveal>
          <SectionTitle icon={<PinIcon />} title={dictionary.availability.title} />
          <div className={styles.availabilityGrid}>
            <article>
              <h3>{dictionary.availability.remoteLabel}</h3>
              <p>{getLocalizedText(locale, siteProfile.workPreferences.remote)}</p>
            </article>
            <article>
              <h3>{dictionary.availability.hybridLabel}</h3>
              <p>{getLocalizedText(locale, siteProfile.workPreferences.hybridBarcelona)}</p>
            </article>
          </div>
        </section>

        <section
          id="experience"
          className={`${styles.section} ${styles.revealItem}`}
          data-reveal
        >
          <div className={styles.sectionHeader}>
            <SectionTitle icon={<TimelineIcon />} title={dictionary.experience.title} />
            <p>{dictionary.experience.subtitle}</p>
          </div>

          <div className={styles.timeline}>
            {sortedExperiences.map((entry) => (
              <article key={entry.id} className={`${styles.timelineCard} ${styles.revealItem}`} data-reveal>
                <header>
                  <p>{getLocalizedText(locale, entry.periodLabel)}</p>
                  <h3>
                    {getLocalizedText(locale, entry.role)} - {entry.company}
                  </h3>
                  <span>{getLocalizedText(locale, entry.location)}</span>
                </header>
                <ul>
                  {entry.bullets.map((bullet) => (
                    <li key={bullet.en}>{getLocalizedText(locale, bullet)}</li>
                  ))}
                </ul>
                <div className={styles.tags}>
                  {entry.techTags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className={`${styles.section} ${styles.revealItem}`} data-reveal>
          <div className={styles.sectionHeader}>
            <SectionTitle icon={<EducationIcon />} title={dictionary.education.title} />
          </div>
          <div className={styles.educationGrid}>
            {educationEntries.map((entry) => (
              <article key={entry.id} className={styles.educationCard}>
                <p className={styles.educationPeriod}>{getLocalizedText(locale, entry.periodLabel)}</p>
                <h3>{getLocalizedText(locale, entry.degree)}</h3>
                <p>{getLocalizedText(locale, entry.institution)}</p>
                <span>{getLocalizedText(locale, entry.location)}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className={`${styles.section} ${styles.revealItem}`} data-reveal>
          <div className={styles.sectionHeader}>
            <SectionTitle icon={<SkillsIcon />} title={dictionary.skills.title} />
            <p>{dictionary.skills.subtitle}</p>
          </div>
          <div className={styles.skillsGrid}>
            {skillGroups.map((group) => (
              <article key={group.id} className={styles.skillGroupCard}>
                <h3>{getLocalizedText(locale, group.title)}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <div className={styles.skillLine}>
                        <strong>{item.name}</strong>
                        <span>
                          {item.years} {dictionary.skills.yearsLabel}
                        </span>
                      </div>
                      <p>{getLocalizedText(locale, item.focus)}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="languages"
          className={`${styles.section} ${styles.revealItem}`}
          data-reveal
        >
          <div className={styles.sectionHeader}>
            <SectionTitle icon={<LanguageIcon />} title={dictionary.languages.title} />
          </div>
          <div className={styles.languagesGrid}>
            {spokenLanguages.map((language) => (
              <article key={language.id} className={styles.languageCard}>
                <strong>{language.name}</strong>
                <p>{getLocalizedText(locale, language.level)}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className={`${styles.contact} ${styles.revealItem}`} data-reveal>
          <SectionTitle icon={<ContactIcon />} title={dictionary.contact.title} />
          <p>{dictionary.contact.body}</p>
          <div className={styles.contactActions}>
            {siteProfile.contactLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.id === "linkedin" ? "_blank" : undefined}
                rel={link.id === "linkedin" ? "noreferrer" : undefined}
              >
                <span className={styles.contactButtonIcon} aria-hidden="true">
                  {link.id === "email" ? <EmailIcon /> : <LinkedinIcon />}
                </span>
                {getLocalizedText(locale, link.label)}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
