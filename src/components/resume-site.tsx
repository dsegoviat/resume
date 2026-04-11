"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { dictionaries } from "@/content/dictionary";
import { experienceEntries } from "@/content/experience";
import { siteProfile } from "@/content/profile";
import { skillGroups, spokenLanguages } from "@/content/skills";
import { Locale, LocalizedText, OpportunityTrack } from "@/types/content";
import styles from "./resume-site.module.css";

type TrackFilter = "all" | OpportunityTrack;

type ResumeSiteProps = {
  hasBlogPosts: boolean;
};

function getLocalizedText(locale: Locale, value: LocalizedText) {
  return value[locale];
}

export function ResumeSite({ hasBlogPosts }: ResumeSiteProps) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "en";
    }
    const storedLocale = window.localStorage.getItem("resume-locale");
    return storedLocale === "es" ? "es" : "en";
  });
  const [trackFilter, setTrackFilter] = useState<TrackFilter>("all");

  const dictionary = dictionaries[locale];

  const filteredExperiences = useMemo(() => {
    return experienceEntries
      .filter((entry) => trackFilter === "all" || entry.track === trackFilter)
      .sort((a, b) => b.startYear - a.startYear);
  }, [trackFilter]);

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
        <section className={`${styles.hero} ${styles.reveal}`}>
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

        <section className={`${styles.opportunitySection} ${styles.reveal}`}>
          <h2>{dictionary.opportunities.title}</h2>
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

        <section className={`${styles.availability} ${styles.reveal}`}>
          <h2>{dictionary.availability.title}</h2>
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

        <section id="experience" className={`${styles.section} ${styles.reveal}`}>
          <div className={styles.sectionHeader}>
            <h2>{dictionary.experience.title}</h2>
            <p>{dictionary.experience.subtitle}</p>
          </div>

          <div className={styles.filters}>
            {(["all", "freelance", "employee"] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                className={trackFilter === filter ? styles.filterActive : ""}
                onClick={() => setTrackFilter(filter)}
              >
                {dictionary.filters[filter]}
              </button>
            ))}
          </div>

          <div className={styles.timeline}>
            {filteredExperiences.map((entry, index) => (
              <article
                key={entry.id}
                className={styles.timelineCard}
                style={{ animationDelay: `${index * 80}ms` }}
              >
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

        <section id="skills" className={`${styles.section} ${styles.reveal}`}>
          <div className={styles.sectionHeader}>
            <h2>{dictionary.skills.title}</h2>
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

        <section id="languages" className={`${styles.section} ${styles.reveal}`}>
          <div className={styles.sectionHeader}>
            <h2>{dictionary.languages.title}</h2>
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

        <section id="contact" className={`${styles.contact} ${styles.reveal}`}>
          <h2>{dictionary.contact.title}</h2>
          <p>{dictionary.contact.body}</p>
          <div className={styles.contactActions}>
            {siteProfile.contactLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.id === "linkedin" ? "_blank" : undefined}
                rel={link.id === "linkedin" ? "noreferrer" : undefined}
              >
                {getLocalizedText(locale, link.label)}
              </a>
            ))}
          </div>
          {!hasBlogPosts ? <small>{dictionary.blog.comingSoon}</small> : null}
        </section>
      </main>
    </div>
  );
}
