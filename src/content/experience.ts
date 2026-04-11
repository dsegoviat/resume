import { ExperienceEntry } from "@/types/content";

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "ai-automation-engineer",
    role: {
      en: "AI and Automation Engineer",
      es: "AI and Automation Engineer",
    },
    company: "Mercedes-Benz (via LTS Beratung)",
    location: {
      en: "Remote",
      es: "Remoto",
    },
    periodLabel: {
      en: "2024 - Current",
      es: "2024 - Actualidad",
    },
    startYear: 2024,
    bullets: [
      {
        en: "Built LLM-powered agents, RAG flows and n8n automations for faster internal operations.",
        es: "Construcción de agentes con LLM, flujos RAG y automatizaciones con n8n para acelerar operaciones internas.",
      },
      {
        en: "Integrated MCP servers plus STT/TTS pipelines for multimodal product experiences.",
        es: "Integración de servidores MCP y pipelines STT/TTS para experiencias de producto multimodales.",
      },
      {
        en: "Prototyped AI-enabled SaaS products with Next.js and TypeScript.",
        es: "Prototipado de productos SaaS con IA usando Next.js y TypeScript.",
      },
    ],
    techTags: ["Next.js", "TypeScript", "LLM", "RAG", "n8n", "LangChain", "MCP"],
  },
  {
    id: "frontend-devops-engineer",
    role: {
      en: "Frontend and DevOps Engineer",
      es: "Ingeniero Frontend y DevOps",
    },
    company: "Mercedes-Benz (via LTS Beratung)",
    location: {
      en: "Remote",
      es: "Remoto",
    },
    periodLabel: {
      en: "2022 - Current",
      es: "2022 - Actualidad",
    },
    startYear: 2022,
    bullets: [
      {
        en: "Delivered web applications and CI/CD automation on Azure and GitHub Actions.",
        es: "Entrega de aplicaciones web y automatización CI/CD en Azure y GitHub Actions.",
      },
      {
        en: "Managed product execution while building runner infrastructure and metric dashboards.",
        es: "Gestión de producto mientras desarrollaba infraestructura de runners y cuadros de métricas.",
      },
    ],
    techTags: ["React", "Next.js", "Azure", "GitHub Actions", "DevOps"],
  },
  {
    id: "fullstack-freelance",
    role: {
      en: "Full-stack Software Engineer",
      es: "Ingeniero Full-stack",
    },
    company: "Mercedes-Benz (via LTS Beratung)",
    location: {
      en: "Barcelona / Remote",
      es: "Barcelona / Remoto",
    },
    periodLabel: {
      en: "2017 - 2022",
      es: "2017 - 2022",
    },
    startYear: 2017,
    endYear: 2022,
    bullets: [
      {
        en: "Designed SaaS platforms and IT infrastructure with strong ownership across architecture and delivery.",
        es: "Diseño de plataformas SaaS e infraestructura IT con alta responsabilidad en arquitectura y entrega.",
      },
      {
        en: "Led UNIX-based systems administration and cloud deployments on AWS.",
        es: "Liderazgo en administración de sistemas UNIX y despliegues cloud en AWS.",
      },
      {
        en: "Balanced product management, client communication and hands-on engineering.",
        es: "Combinación de gestión de producto, comunicación con cliente y desarrollo técnico.",
      },
    ],
    techTags: ["AWS", "UNIX", "SaaS", "Architecture", "Product"],
  },
  {
    id: "accenture",
    role: {
      en: "Junior Full-stack Developer",
      es: "Desarrollador Full-stack Junior",
    },
    company: "Accenture",
    location: {
      en: "Barcelona",
      es: "Barcelona",
    },
    periodLabel: {
      en: "2016 - 2017",
      es: "2016 - 2017",
    },
    startYear: 2016,
    endYear: 2017,
    bullets: [
      {
        en: "Developed Android and hybrid mobile applications.",
        es: "Desarrollo de aplicaciones Android e híbridas.",
      },
      {
        en: "Implemented REST APIs with Spring Boot and Java.",
        es: "Implementación de APIs REST con Spring Boot y Java.",
      },
      {
        en: "Created automation scripts with JavaScript and Python.",
        es: "Creación de scripts de automatización con JavaScript y Python.",
      },
    ],
    techTags: ["Java", "Spring Boot", "Android", "Python", "JavaScript"],
  },
];
