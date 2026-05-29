import {
  Award,
  Binary,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Database,
  Globe,
  Languages,
  Layers3,
  Lightbulb,
  Microscope,
  Network,
  Rocket,
  ShieldCheck,
  Users
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Highlight = {
  label: string;
  value: string;
};

export type AboutPillar = {
  title: string;
  icon: LucideIcon;
  description: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  dates: string;
  details: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
};

export type ProjectItem = {
  title: string;
  type: string;
  dates?: string;
  description: string[];
  tags: string[];
};

export type LeadershipItem = {
  title: string;
  organization: string;
  dates: string;
  description: string;
  icon: LucideIcon;
};

export type SkillGroup = {
  category: string;
  icon: LucideIcon;
  items: string[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export const heroHighlights: Highlight[] = [
  { label: "CGPA", value: "4.0/4.0" },
  { label: "Scholarship", value: "Merit Scholar" },
  { label: "SAT", value: "1510" },
  { label: "IEEEXtreme", value: "Top 8 in Lebanon" }
];

export const aboutPillars: AboutPillar[] = [
  {
    title: "AI Systems",
    icon: Bot,
    description: "Designing practical LLM-based tools, agents, and retrieval workflows."
  },
  {
    title: "Automation",
    icon: Rocket,
    description: "Building systems that reduce manual effort through structured pipelines."
  },
  {
    title: "Research",
    icon: Microscope,
    description: "Applying machine learning to research-driven environmental and applied AI problems."
  },
  {
    title: "Leadership",
    icon: Users,
    description: "Combining technical depth with team coordination, workshops, and execution."
  }
];

export const educationItems: EducationItem[] = [
  {
    degree: "B.E. in Computer Engineering",
    institution: "Lebanese American University (LAU)",
    dates: "Sep. 2024 – May 2028 Expected",
    details: [
      "Merit Scholarship Recipient",
      "CGPA: 4.0/4.0",
      "SAT Score: 1510",
      "Ranked 1st among 269 students in Grade 12"
    ]
  },
  {
    degree: "B.S. in Electronics",
    institution: "Lebanese University",
    dates: "Sep. 2024 – May 2027 Expected",
    details: ["Double Major", "Ranked in the Top 15% of the cohort"]
  }
];

export const experienceItems: ExperienceItem[] = [
  {
    role: "AI Automation Engineer Intern",
    company: "ARK Energy",
    dates: "2025",
    bullets: [
      "Built AI-powered automation systems for document understanding, compliance checking, and structured report generation using LLM-based workflows and RAG.",
      "Engineered end-to-end pipelines for PDF and Excel processing, including ingestion, parsing, chunking, embeddings, retrieval, and response generation.",
      "Designed retrieval and storage systems using PostgreSQL and pgvector for vector search, traceability, and structured outputs.",
      "Built and automated workflows using n8n, integrating APIs and AI services to reduce manual effort and streamline processes."
    ]
  }
];

export const projectItems: ProjectItem[] = [
  {
    title: "AURA: Augmented University Reality Assistant",
    type: "Vertical Integrated Project, LAU",
    dates: "Aug. 2025 – Present",
    description: [
      "Developed a multi-agent AI system using LangGraph for content generation, Q&A, and contextual retrieval.",
      "Built a modular microservice architecture using FastAPI and WebSockets for real-time communication.",
      "Integrated multimodal components including speech-to-text and computer vision into a unified assistant system."
    ],
    tags: ["LangGraph", "FastAPI", "WebSockets", "AI Agents", "Multimodal AI", "RAG"]
  },
  {
    title: "ML-Driven WEFE Stress Index & Early-Warning System",
    type: "Research Paper",
    dates: "Aug. 2025 – Present",
    description: [
      "Developed machine learning models including Linear Regression and Random Forest for environmental stress prediction.",
      "Built a data pipeline integrating satellite-based features including NDVI, NDTI, rainfall, and VIIRS to construct a composite WEFE index."
    ],
    tags: [
      "Machine Learning",
      "Random Forest",
      "Linear Regression",
      "Environmental AI",
      "Data Pipelines",
      "Satellite Data"
    ]
  },
  {
    title: "AI Automation & RAG Systems",
    type: "Technical Focus Area",
    description: [
      "Experience building LLM-powered automation workflows, retrieval pipelines, vector search systems, and structured document processing systems.",
      "Focused on transforming unstructured documents into traceable, structured, and useful outputs."
    ],
    tags: ["RAG", "LLMs", "PostgreSQL", "pgvector", "n8n", "PDF Processing", "Excel Automation"]
  }
];

export const leadershipItems: LeadershipItem[] = [
  {
    title: "Vice President, AI Club",
    organization: "IEEE LAU Student Branch",
    dates: "2024 – Present",
    description: "Led technical workshops and AI-focused sessions promoting hands-on system-building skills.",
    icon: BrainCircuit
  },
  {
    title: "Leader, Secretary, and Treasurer",
    organization: "Lebanon Scouts",
    dates: "2018 – Present",
    description: "Managed a team of 40 members, including planning, execution, budgeting, and logistics.",
    icon: ShieldCheck
  },
  {
    title: "IEEEXtreme 18.0",
    organization: "Global Competitive Programming Contest",
    dates: "Sep. 2024 – Nov. 2024",
    description: "Ranked 8th in Lebanon in a global competitive programming contest.",
    icon: Award
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    icon: Binary,
    items: ["Python", "Java", "JavaScript", "SQL", "Git", "GitHub"]
  },
  {
    category: "AI & LLM Systems",
    icon: Bot,
    items: ["RAG Systems", "AI Agents", "LangGraph", "OpenAI API", "Vector Databases"]
  },
  {
    category: "Backend & APIs",
    icon: BriefcaseBusiness,
    items: ["FastAPI", "REST APIs", "WebSockets", "Microservices"]
  },
  {
    category: "Databases",
    icon: Database,
    items: ["PostgreSQL", "Prisma", "pgvector"]
  },
  {
    category: "Automation",
    icon: Network,
    items: ["n8n", "AI-Assisted Workflows", "Claude Code", "OpenAI Codex"]
  },
  {
    category: "Systems",
    icon: Layers3,
    items: ["Data Pipelines", "System Integration", "Debugging"]
  },
  {
    category: "Soft Skills",
    icon: Lightbulb,
    items: ["Leadership", "Teamwork", "Communication", "Event Planning"]
  },
  {
    category: "Languages",
    icon: Languages,
    items: ["Arabic Native", "English C1", "French C1"]
  }
];

export const contactLinks = [
  {
    label: "Email Me",
    href: "mailto:mouaz.amoud@lau.edu",
    icon: Globe
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mouaz-amoud-0b9aa62b1",
    icon: Users
  },
  {
    label: "Download CV",
    href: "/Mouaz-Amoud-CV.pdf",
    icon: Award
  }
];
