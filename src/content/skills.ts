import { SkillGroup, SpokenLanguage } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    id: "software",
    title: {
      en: "Software Engineering",
      es: "Ingeniería de Software",
    },
    items: [
      {
        name: "Java",
        years: 10,
        focus: {
          en: "Backend services, API design and enterprise architecture",
          es: "Servicios backend, diseño de APIs y arquitectura empresarial",
        },
      },
      {
        name: "TypeScript",
        years: 8,
        focus: {
          en: "Scalable frontend and full-stack product development",
          es: "Desarrollo frontend y full-stack escalable",
        },
      },
      {
        name: "Python",
        years: 8,
        focus: {
          en: "Automation scripts, orchestration and AI tooling",
          es: "Automatización, orquestación y herramientas de IA",
        },
      },
      {
        name: "Go",
        years: 5,
        focus: {
          en: "High-performance tooling and infrastructure tasks",
          es: "Herramientas de alto rendimiento y tareas de infraestructura",
        },
      },
    ],
  },
  {
    id: "frameworks",
    title: {
      en: "Frameworks and UI",
      es: "Frameworks y UI",
    },
    items: [
      {
        name: "React / Next.js",
        years: 7,
        focus: {
          en: "Interactive product UIs and production-grade web apps",
          es: "Interfaces interactivas y aplicaciones web para producción",
        },
      },
      {
        name: "Angular",
        years: 7,
        focus: {
          en: "Enterprise frontend architectures and component systems",
          es: "Arquitecturas frontend enterprise y sistemas de componentes",
        },
      },
      {
        name: "Tailwind / MUI / Ant Design",
        years: 7,
        focus: {
          en: "Consistent design systems and rapid UI implementation",
          es: "Sistemas de diseño consistentes e implementación rápida",
        },
      },
      {
        name: "Spring Boot",
        years: 7,
        focus: {
          en: "Robust microservices and backend APIs",
          es: "Microservicios robustos y APIs backend",
        },
      },
    ],
  },
  {
    id: "cloud-ai",
    title: {
      en: "Cloud, DevOps and AI",
      es: "Cloud, DevOps e IA",
    },
    items: [
      {
        name: "AWS / Azure",
        years: 7,
        focus: {
          en: "Cloud architecture, automation and deployment workflows",
          es: "Arquitectura cloud, automatización y flujos de despliegue",
        },
      },
      {
        name: "CI/CD",
        years: 7,
        focus: {
          en: "GitHub Actions runners and deployment pipelines",
          es: "Runners de GitHub Actions y pipelines de despliegue",
        },
      },
      {
        name: "LLM + RAG",
        years: 2,
        focus: {
          en: "Agentic systems, retrieval and workflow automation",
          es: "Sistemas de agentes, retrieval y automatización de flujos",
        },
      },
      {
        name: "n8n / LangChain / MCP",
        years: 2,
        focus: {
          en: "Orchestrated automation and AI-native integrations",
          es: "Automatización orquestada e integraciones AI-native",
        },
      },
    ],
  },
];

export const spokenLanguages: SpokenLanguage[] = [
  {
    id: "es",
    name: "Spanish",
    level: {
      en: "Native",
      es: "Nativo",
    },
  },
  {
    id: "ca",
    name: "Catalan",
    level: {
      en: "Native",
      es: "Nativo",
    },
  },
  {
    id: "en",
    name: "English",
    level: {
      en: "Fluent",
      es: "Fluido",
    },
  },
];
