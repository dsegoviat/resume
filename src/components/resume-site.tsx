"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
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

function PrintSectionHeading({
  icon,
  title,
  className,
}: {
  icon: ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <h2 className={className ?? styles.printSectionHeading}>
      <span className={styles.printSectionIcon} aria-hidden="true">
        {icon}
      </span>
      {title}
    </h2>
  );
}

function AboutIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="7.5" r="3.2" />
      <path d="M5 20c.8-3.8 3.8-6 7-6s6.2 2.2 7 6" />
    </svg>
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

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9.5 18.5c-3 .9-3-1.3-4.2-1.7" />
      <path d="M14.5 18.5v-2.3c0-.8.1-1.2-.3-1.7 2.7-.3 5.5-1.3 5.5-5.8 0-1.3-.4-2.3-1.2-3.1.1-.3.5-1.5-.1-3.1 0 0-1-.3-3.2 1.2a11.2 11.2 0 00-5.8 0C7.2 2.2 6.2 2.5 6.2 2.5c-.6 1.6-.2 2.8-.1 3.1-.8.8-1.2 1.8-1.2 3.1 0 4.4 2.8 5.5 5.5 5.8-.4.5-.4 1-.4 2v1.8" />
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

function TechChipIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="7" y="7" width="10" height="10" rx="1.6" />
      <path d="M9 1.8V5" />
      <path d="M15 1.8V5" />
      <path d="M9 19v3.2" />
      <path d="M15 19v3.2" />
      <path d="M1.8 9H5" />
      <path d="M1.8 15H5" />
      <path d="M19 9h3.2" />
      <path d="M19 15h3.2" />
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

function PrintIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="6" y="3.5" width="12" height="5" rx="1" />
      <path d="M6.5 13h11a2.5 2.5 0 012.5 2.5V19h-2.5v1.5h-11V19H4v-3.5A2.5 2.5 0 016.5 13z" />
      <path d="M8 17h8" />
    </svg>
  );
}

function LinkOutIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 5h5v5" />
      <path d="M19 5l-9 9" />
      <path d="M19 13v5a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1h5" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 20s6-5.1 6-10a6 6 0 10-12 0c0 4.9 6 10 6 10z" />
      <circle cx="12" cy="10" r="2.1" />
    </svg>
  );
}

function PhoneSmallIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6.5 4.5h3l1 4-2 1.8a14 14 0 006.2 6.2l1.8-2 4 1v3a2 2 0 01-2 2A15.5 15.5 0 014.5 6.5a2 2 0 012-2z" />
    </svg>
  );
}

function cleanCvLocation(locale: Locale, location: string) {
  const remotePattern = locale === "es" ? /(?:\s*\/\s*)?Remoto/gi : /(?:\s*\/\s*)?Remote/gi;

  return location
    .replace(remotePattern, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s*\/\s*$/, "")
    .trim();
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
    const priority: Record<string, number> = {
      "ai-automation-engineer": 0,
      "omnios-frontend-cloud": 1,
    };

    return [...experienceEntries].sort((a, b) => {
      const aPriority = priority[a.id];
      const bPriority = priority[b.id];
      const aHasPriority = aPriority !== undefined;
      const bHasPriority = bPriority !== undefined;

      if (aHasPriority || bHasPriority) {
        if (aHasPriority && bHasPriority) {
          return aPriority - bPriority;
        }
        return aHasPriority ? -1 : 1;
      }

      return b.startYear - a.startYear;
    });
  }, []);
  const printExperiencePages = useMemo(() => {
    if (sortedExperiences.length <= 5) {
      return [sortedExperiences];
    }

    return [sortedExperiences.slice(0, 5), sortedExperiences.slice(5)];
  }, [sortedExperiences]);

  const emailLink = siteProfile.contactLinks.find((link) => link.id === "email");
  const emailAddress = emailLink?.href.replace("mailto:", "");
  const linkedinLink = siteProfile.contactLinks.find((link) => link.id === "linkedin");

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
          <a href="#about">{dictionary.nav.about}</a>
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
        <section className={styles.printResume} aria-label={dictionary.print.profileTitle}>
          <section className={styles.printSummaryPage}>
            <div className={styles.printSummaryGrid}>
              <aside className={styles.printSummaryLeft}>
                <section className={styles.printSummaryBlock}>
                  <div className={styles.printProfileAvatar}>
                    <Image
                      src="/images/profile-avatar.jpg"
                      alt={`${siteProfile.name} profile photo`}
                      width={180}
                      height={180}
                      sizes="96px"
                    />
                  </div>
                  <h1 className={styles.printName}>{siteProfile.name}</h1>
                  <p className={styles.printRole}>{getLocalizedText(locale, siteProfile.title)}</p>
                </section>

                <section className={styles.printSummaryBlock}>
                  <h2>{dictionary.print.contactTitle}</h2>
                  <ul className={styles.printMetaList}>
                    <li>
                      <span className={styles.printInlineIcon} aria-hidden="true">
                        <LocationIcon />
                      </span>
                      {getLocalizedText(locale, siteProfile.location)}
                    </li>
                    <li>
                      <span className={styles.printInlineIcon} aria-hidden="true">
                        <PhoneSmallIcon />
                      </span>
                      {siteProfile.phone}
                    </li>
                    {emailLink ? (
                      <li>
                        <span className={styles.printEmailLine}>
                          <span className={styles.printInlineIcon} aria-hidden="true">
                            <EmailIcon />
                          </span>
                          {emailAddress ?? dictionary.print.emailLabel}
                        </span>
                      </li>
                    ) : null}
                    {linkedinLink ? (
                      <li>
                        <a href={linkedinLink.href} target="_blank" rel="noreferrer">
                          <span className={styles.printInlineIcon} aria-hidden="true">
                            <LinkedinIcon />
                          </span>
                          {dictionary.print.linkedinLabel}
                          <span className={styles.printLinkIcon} aria-hidden="true">
                            <LinkOutIcon />
                          </span>
                        </a>
                      </li>
                    ) : null}
                    <li>
                      <a href={siteProfile.resumeUrl} target="_blank" rel="noreferrer">
                        <span className={styles.printInlineIcon} aria-hidden="true">
                          <LanguageIcon />
                        </span>
                        {dictionary.print.websiteLabel}
                        <span className={styles.printLinkIcon} aria-hidden="true">
                          <LinkOutIcon />
                        </span>
                      </a>
                    </li>
                  </ul>
                </section>

                <section className={styles.printSummaryBlock}>
                  <h2>{dictionary.education.title}</h2>
                  <ul className={styles.printCompactList}>
                    {educationEntries.map((entry) => (
                      <li key={entry.id}>
                        <strong>{getLocalizedText(locale, entry.degree)}</strong>
                        <p>{getLocalizedText(locale, entry.institution)}</p>
                        <span>{getLocalizedText(locale, entry.periodLabel)}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className={styles.printSummaryBlock}>
                  <h2>{dictionary.languages.title}</h2>
                  <ul className={styles.printLanguageList}>
                    {spokenLanguages.map((language) => (
                      <li key={language.id} className={styles.printLanguageItem}>
                        <strong>{language.name}</strong>
                        <span>{getLocalizedText(locale, language.level)}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className={styles.printSummaryBlock}>
                  <h2>{dictionary.print.softSkillsTitle}</h2>
                  <ul className={styles.printBulletList}>
                    {siteProfile.softSkills.map((skill) => (
                      <li key={skill.en}>{getLocalizedText(locale, skill)}</li>
                    ))}
                  </ul>
                </section>
              </aside>

              <div className={styles.printSummaryRight}>
                <section className={styles.printSummaryBlock}>
                  <PrintSectionHeading icon={<AboutIcon />} title={dictionary.about.title} />
                  <div className={styles.printAboutBody}>
                    {siteProfile.about[locale].map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>

                <section className={styles.printSummaryBlock}>
                  <PrintSectionHeading
                    icon={<TechChipIcon />}
                    title={dictionary.print.technologiesTitle}
                  />
                  <div className={styles.printTechGroups}>
                    {siteProfile.technologyGroups.map((group) => (
                      <article key={group.id} className={styles.printTechGroup}>
                        <h3>{getLocalizedText(locale, group.title)}</h3>
                        <ul className={styles.printTechList}>
                          {group.items.map((item) => (
                            <li key={`${group.id}-${item.name}`}>
                              <strong>{item.name}</strong>
                              <span>
                                {item.years} {dictionary.skills.yearsLabel}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </section>

          {printExperiencePages.map((pageEntries, pageIndex) => (
            <section key={`print-exp-page-${pageIndex}`} className={styles.printExperiencePage}>
              <PrintSectionHeading
                icon={<TimelineIcon />}
                title={dictionary.experience.title}
                className={styles.printExperienceHeading}
              />
              <div className={styles.printExperienceList}>
                {pageEntries.map((entry) => {
                  const cvLocation = cleanCvLocation(locale, getLocalizedText(locale, entry.location));

                  return (
                    <article key={`print-${entry.id}`} className={styles.printExperienceItem}>
                      <header>
                        <p>{getLocalizedText(locale, entry.periodLabel)}</p>
                        <h3>
                          {getLocalizedText(locale, entry.role)} - {entry.company}
                        </h3>
                        {cvLocation ? <span>{cvLocation}</span> : null}
                      </header>
                      <ul>
                        {entry.bullets.map((bullet) => (
                          <li key={`print-${entry.id}-${bullet.en}`}>{getLocalizedText(locale, bullet)}</li>
                        ))}
                      </ul>
                      <div className={styles.printExperienceTags}>
                        {entry.techTags.map((tag) => (
                          <span key={`print-${entry.id}-${tag}`}>{tag}</span>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </section>

        <section className={`${styles.hero} ${styles.revealItem}`} data-reveal>
          <div className={styles.heroTop}>
            <div className={styles.heroCopy}>
              <p className={styles.heroTitle}>{getLocalizedText(locale, siteProfile.title)}</p>
              <p className={styles.heroName}>{siteProfile.name}</p>
              <h1>{getLocalizedText(locale, siteProfile.summary)}</h1>
              <p className={styles.metaLine}>
                {getLocalizedText(locale, siteProfile.location)} |{" "}
                {getLocalizedText(locale, siteProfile.availability)}
              </p>
              <div className={styles.heroActions}>
                <a href="#contact" className={styles.primaryCta}>
                  {dictionary.hero.ctaPrimary}
                </a>
                <a href="#experience" className={styles.secondaryCta}>
                  {dictionary.hero.ctaSecondary}
                </a>
                <button
                  type="button"
                  className={styles.printCta}
                  onClick={() => window.print()}
                  aria-label={dictionary.hero.ctaPrint}
                >
                  <span className={styles.printButtonIcon} aria-hidden="true">
                    <PrintIcon />
                  </span>
                  {dictionary.hero.ctaPrint}
                </button>
              </div>
            </div>
            <div className={styles.heroAvatar}>
              <Image
                src="/images/profile-avatar.jpg"
                alt={`${siteProfile.name} profile photo`}
                width={320}
                height={320}
                priority
                sizes="(max-width: 700px) 148px, (max-width: 1024px) 190px, 220px"
              />
            </div>
          </div>
        </section>

        <section
          id="about"
          className={`${styles.section} ${styles.aboutSection} ${styles.revealItem}`}
          data-reveal
        >
          <div className={styles.sectionHeader}>
            <SectionTitle icon={<AboutIcon />} title={dictionary.about.title} />
          </div>
          <div className={styles.aboutBody}>
            {siteProfile.about[locale].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
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

        <section
          className={`${styles.availability} ${styles.availabilitySection} ${styles.revealItem}`}
          data-reveal
        >
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
          className={`${styles.section} ${styles.experienceSection} ${styles.revealItem}`}
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

        <section
          id="education"
          className={`${styles.section} ${styles.educationSection} ${styles.revealItem}`}
          data-reveal
        >
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

        <section
          id="skills"
          className={`${styles.section} ${styles.skillsSection} ${styles.revealItem}`}
          data-reveal
        >
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
          className={`${styles.section} ${styles.languagesSection} ${styles.revealItem}`}
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

        <section
          id="contact"
          className={`${styles.contact} ${styles.contactSection} ${styles.revealItem}`}
          data-reveal
        >
          <SectionTitle icon={<ContactIcon />} title={dictionary.contact.title} />
          <p>{dictionary.contact.body}</p>
          <div className={styles.contactActions}>
            {siteProfile.contactLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.id === "email" ? undefined : "_blank"}
                rel={link.id === "email" ? undefined : "noreferrer"}
              >
                <span className={styles.contactButtonIcon} aria-hidden="true">
                  {link.id === "email" ? (
                    <EmailIcon />
                  ) : link.id === "linkedin" ? (
                    <LinkedinIcon />
                  ) : (
                    <GithubIcon />
                  )}
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
