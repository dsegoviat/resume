import { SiteProfile } from "@/types/content";

export const siteProfile: SiteProfile = {
  name: "David Segovia Tomas",
  title: {
    en: "Senior Full-stack Developer, Architect and AI Automation Engineer",
    es: "Desarrollador Full-stack Senior, Arquitecto y AI Automation Engineer",
    ca: "Enginyer de software full-stack sènior, arquitecte i especialista en automatització amb IA",
  },
  summary: {
    en: "I design maintainable software from idea to production. I blend product thinking, software architecture and automation to help teams move faster with less complexity.",
    es: "Diseño software mantenible desde la idea hasta producción. Combino visión de producto, arquitectura y automatización para que los equipos avancen más rápido con menos complejidad.",
    ca: "Dissenyo i lliuro software mantenible des de la idea fins a producció. Combino la visió de producte, arquitectura i execució tècnica per ajudar equips a avançar més ràpid amb menys complexitat.",
  },
  about: {
    en: [
      "Senior full-stack developer and software architect with nearly a decade building and scaling products end to end. I work across product definition, architecture, implementation, and DevOps to deliver software that stays maintainable under real business pressure.",
      "In recent years I have focused strongly on AI-native systems, including LLM agents, RAG workflows, and automation pipelines integrated into SaaS products. I am comfortable leading technical direction while staying hands-on in delivery, helping teams move faster with clear priorities and reliable execution.",
    ],
    es: [
      "Desarrollador full-stack senior y arquitecto de software con casi una década construyendo y escalando productos de extremo a extremo. Trabajo desde la definición de producto y arquitectura hasta la implementación y DevOps, entregando software mantenible en contextos reales de negocio.",
      "En los últimos años me he enfocado en sistemas AI-native, incluyendo agentes con LLM, flujos RAG y automatizaciones integradas en productos SaaS. Me siento cómodo liderando la dirección técnica sin dejar la ejecución hands-on, ayudando a los equipos a avanzar con foco y fiabilidad.",
    ],
    ca: [
      "Soc desenvolupador full-stack sènior i arquitecte de software, amb gairebé una dècada construint i escalant productes de forma integral. He treballat en definició de producte, arquitectura, implementació i DevOps, sempre amb un enfocament pragmàtic orientat a resultats.",
      "En els darrers anys m'he especialitzat en sistemes AI-native: agents amb LLM, fluxos RAG i automatitzacions integrades en productes SaaS. Em trobo còmode liderant direcció tècnica i, alhora, mantenint un rol hands-on per garantir qualitat i ritme d'entrega.",
    ],
  },
  location: {
    en: "Barcelona, Spain",
    es: "Barcelona, España",
    ca: "Barcelona, Espanya",
  },
  availability: {
    en: "Open to new freelance collaborations and employee roles.",
    es: "Abierto a nuevas colaboraciones freelance y roles como empleado.",
    ca: "Obert a noves col·laboracions freelance i a rols com a empleat.",
  },
  phone: "+34 660 209 426",
  resumeUrl: "https://dsegoviat.github.io/resume/",
  coreTechnologies: [
    { name: "Java", years: 10 },
    { name: "JavaScript / HTML / CSS", years: 9 },
    { name: "TypeScript", years: 8 },
    { name: "Python / Bash / PowerShell", years: 8 },
    { name: "React / Next.js", years: 7 },
    { name: "Spring Boot", years: 7 },
    { name: "Ansible / Terraform", years: 6 },
    { name: "Docker / Helm", years: 6 },
    { name: "AWS / OpenStack", years: 6 },
    { name: "Jenkins", years: 6 },
    { name: "Grafana / Loki / Prometheus", years: 6 },
    { name: "Kubernetes", years: 4 },
    { name: "Elasticsearch / SonarQube", years: 4 },
    { name: "Azure", years: 3 },
    { name: "GitHub Actions", years: 2 },
    { name: "LLM + RAG", years: 2 },
    { name: "OpenAI / Ollama", years: 2 },
    { name: "Claude Code / Codex", years: 2 },
    { name: "LangChain / n8n", years: 2 },
    { name: "Qdrant / pgvector", years: 2 },
    { name: "Whisper STT/TTS", years: 2 },
    { name: "MCP Servers", years: 2 },
  ],
  technologyGroups: [
    {
      id: "programming",
      title: {
        en: "Programming Languages",
        es: "Lenguajes de Programación",
        ca: "Llenguatges de Programació",
      },
      items: [
        { name: "Java", years: 10 },
        { name: "JavaScript / HTML / CSS", years: 9 },
        { name: "Python / Bash / PowerShell / TypeScript", years: 8 },
        { name: "Go", years: 5 },
      ],
    },
    {
      id: "frameworks",
      title: {
        en: "Frameworks and Frontend",
        es: "Frameworks y Frontend",
        ca: "Frameworks i Frontend",
      },
      items: [
        { name: "Spring Boot", years: 7 },
        { name: "React / Next.js", years: 7 },
        { name: "Angular", years: 7 },
        { name: "Tailwind / MUI / Ant Design", years: 7 },
        { name: "FastAPI / Django", years: 3 },
      ],
    },
    {
      id: "cloud-devops",
      title: {
        en: "Cloud, DevOps and Tooling",
        es: "Cloud, DevOps y Tooling",
        ca: "Cloud, DevOps i Tooling",
      },
      items: [
        { name: "Jenkins", years: 6 },
        { name: "Docker / Helm", years: 6 },
        { name: "AWS / OpenStack", years: 6 },
        { name: "Grafana / Loki / Prometheus", years: 6 },
        { name: "Ansible / Terraform", years: 6 },
        { name: "Kubernetes", years: 4 },
        { name: "Elasticsearch / SonarQube", years: 4 },
        { name: "Azure", years: 3 },
        { name: "GitHub Actions", years: 2 },
      ],
    },
    {
      id: "ai-automation",
      title: {
        en: "AI and Automation",
        es: "IA y Automatización",
        ca: "IA i Automatització",
      },
      items: [
        { name: "OpenAI / Ollama", years: 2 },
        { name: "Claude Code / Codex", years: 2 },
        { name: "LangChain / n8n", years: 2 },
        { name: "RAG (Qdrant / pgvector)", years: 2 },
        { name: "Whisper STT/TTS", years: 2 },
        { name: "MCP Servers", years: 2 },
      ],
    },
  ],
  softSkills: [
    {
      en: "Communication and stakeholder management",
      es: "Comunicación y gestión de stakeholders",
      ca: "Comunicació i gestió d'stakeholders",
    },
    {
      en: "Complex problem solving",
      es: "Resolución de problemas complejos",
      ca: "Resolució de problemes complexos",
    },
    {
      en: "Cross-functional collaboration",
      es: "Colaboración transversal",
      ca: "Col·laboració transversal",
    },
    {
      en: "Leadership and mentoring",
      es: "Liderazgo y mentoría",
      ca: "Lideratge i mentoria",
    },
    {
      en: "Adaptability and agility",
      es: "Adaptabilidad y agilidad",
      ca: "Adaptabilitat i agilitat",
    },
    {
      en: "Decision-making under ambiguity",
      es: "Toma de decisiones en ambigüedad",
      ca: "Presa de decisions en ambigüitat",
    },
    {
      en: "Analytical and critical thinking",
      es: "Pensamiento analítico y crítico",
      ca: "Pensament analític i crític",
    },
    {
      en: "Ownership and initiative",
      es: "Sentido de propiedad e iniciativa",
      ca: "Sentit de propietat i iniciativa",
    },
    {
      en: "Client relationship management",
      es: "Gestión de relación con clientes",
      ca: "Gestió de relació amb clients",
    },
    {
      en: "Continuous learning and curiosity",
      es: "Aprendizaje continuo y curiosidad",
      ca: "Aprenentatge continu i curiositat",
    },
  ],
  workPreferences: {
    remote: {
      en: "Remote-first opportunities worldwide.",
      es: "Prioridad a oportunidades remotas en cualquier lugar.",
      ca: "Preferència per oportunitats remotes.",
    },
    hybridBarcelona: {
      en: "Hybrid roles in Barcelona.",
      es: "Roles híbridos en Barcelona.",
      ca: "Opcions híbrides a Barcelona.",
    },
  },
  contactLinks: [
    {
      id: "email",
      label: {
        en: "Email",
        es: "Correo",
        ca: "Correu",
      },
      href: "mailto:dsegoviatomas@gmail.com",
    },
    {
      id: "linkedin",
      label: {
        en: "LinkedIn",
        es: "LinkedIn",
        ca: "LinkedIn",
      },
      href: "https://www.linkedin.com/in/david-segovia-tomas-4b4804140/",
    },
    {
      id: "github",
      label: {
        en: "GitHub",
        es: "GitHub",
        ca: "GitHub",
      },
      href: "https://github.com/dsegoviat",
    },
  ],
};
