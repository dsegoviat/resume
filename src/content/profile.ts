import { SiteProfile } from "@/types/content";

export const siteProfile: SiteProfile = {
  name: "David Segovia Tomas",
  title: {
    en: "Senior Full-stack Developer, Architect and AI Automation Engineer",
    es: "Desarrollador Full-stack Senior, Arquitecto y AI Automation Engineer",
  },
  summary: {
    en: "I design maintainable software from idea to production. I blend product thinking, software architecture and automation to help teams move faster with less complexity.",
    es: "Diseño software mantenible desde la idea hasta producción. Combino visión de producto, arquitectura y automatización para que los equipos avancen más rápido con menos complejidad.",
  },
  location: {
    en: "Barcelona, Spain",
    es: "Barcelona, España",
  },
  availability: {
    en: "Open to new freelance collaborations and employee roles.",
    es: "Abierto a nuevas colaboraciones freelance y roles como empleado.",
  },
  workPreferences: {
    remote: {
      en: "Remote-first opportunities worldwide.",
      es: "Prioridad a oportunidades remotas en cualquier lugar.",
    },
    hybridBarcelona: {
      en: "Hybrid roles in Barcelona.",
      es: "Roles híbridos en Barcelona.",
    },
  },
  contactLinks: [
    {
      id: "email",
      label: {
        en: "Email",
        es: "Correo",
      },
      href: "mailto:dsegoviatomas@gmail.com",
    },
    {
      id: "linkedin",
      label: {
        en: "LinkedIn",
        es: "LinkedIn",
      },
      href: "https://www.linkedin.com/in/david-segovia-tomas/",
    },
  ],
};
