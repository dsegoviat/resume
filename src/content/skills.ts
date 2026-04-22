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
      {
        name: "FastAPI / Django",
        years: 3,
        focus: {
          en: "High-performance Python APIs for internal services and integrations",
          es: "APIs Python de alto rendimiento para servicios internos e integraciones",
        },
      },
    ],
  },
  {
    id: "cloud-devops",
    title: {
      en: "Cloud and DevOps",
      es: "Cloud y DevOps",
    },
    items: [
      {
        name: "AWS / Azure / OpenStack",
        years: 7,
        focus: {
          en: "Cloud architecture, migrations and production infrastructure workflows",
          es: "Arquitectura cloud, migraciones y flujos de infraestructura en producción",
        },
      },
      {
        name: "Docker / Kubernetes / Helm",
        years: 6,
        focus: {
          en: "Containerized workloads, orchestration and deployment management",
          es: "Contenedores, orquestación y gestión de despliegues",
        },
      },
      {
        name: "Ansible / Terraform",
        years: 6,
        focus: {
          en: "Infrastructure as code and repeatable operations at scale",
          es: "Infraestructura como código y operaciones repetibles a escala",
        },
      },
      {
        name: "Jenkins / GitHub Actions / CI-CD",
        years: 6,
        focus: {
          en: "Automated pipelines, runners and release workflows",
          es: "Pipelines automatizados, runners y flujos de release",
        },
      },
      {
        name: "Grafana / Loki / Prometheus",
        years: 6,
        focus: {
          en: "Observability stack setup, metrics dashboards and alerting",
          es: "Configuración de observabilidad, dashboards de métricas y alertas",
        },
      },
    ],
  },
  {
    id: "ai-automation",
    title: {
      en: "AI and Automation",
      es: "IA y Automatización",
    },
    items: [
      {
        name: "LLM + RAG",
        years: 2,
        focus: {
          en: "Agentic systems, retrieval pipelines and AI-first product flows",
          es: "Sistemas de agentes, pipelines de retrieval y flujos AI-first",
        },
      },
      {
        name: "OpenAI / Ollama",
        years: 2,
        focus: {
          en: "LLM integration strategies across cloud and local inference setups",
          es: "Estrategias de integración LLM en inferencia cloud y local",
        },
      },
      {
        name: "Claude Code / Codex",
        years: 2,
        focus: {
          en: "AI-assisted coding workflows for rapid implementation and refactoring",
          es: "Flujos de desarrollo asistidos por IA para implementación y refactorización rápida",
        },
      },
      {
        name: "n8n / LangChain / MCP",
        years: 2,
        focus: {
          en: "Orchestrated automation and tool-enabled AI integrations",
          es: "Automatización orquestada e integraciones IA con herramientas",
        },
      },
      {
        name: "Qdrant / pgvector / STT-TTS",
        years: 2,
        focus: {
          en: "Vector search, retrieval workflows and voice interfaces",
          es: "Búsqueda vectorial, workflows de retrieval e interfaces de voz",
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
      en: "C1",
      es: "Fluido",
    },
  },
];
