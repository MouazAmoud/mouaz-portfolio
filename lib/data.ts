export type NavItem = {
  label: string;
  href: string;
};

export type Highlight = {
  value: string;
  label: string;
};

export type FocusArea = {
  title: string;
  description: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  dates: string;
  details: string[];
  note?: string;
};

export type Role = {
  title: string;
  dates: string;
  bullets: string[];
};

export type ExperienceItem = {
  organization: string;
  roles: Role[];
  context?: string;
  tech?: string[];
  caseStudy?: { href: string; label: string };
};

export type ExperienceGroup = {
  label: string;
  accent: "cyan" | "violet";
  items: ExperienceItem[];
};

export type ProjectDetail = {
  label: string;
  value: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  subtitle: string;
  context: string;
  dates: string;
  problemLabel?: string;
  problem: string;
  contributions: string[];
  outcome?: string;
  tech: string[];
  pipelineLabel?: string;
  pipeline?: string[];
  details?: ProjectDetail[];
  note?: string;
};

export type OtherProject = {
  title: string;
  context: string;
  dates: string;
  summary: string;
  tech: string[];
};

export type LeadershipRole = {
  title: string;
  status?: string;
  bullets?: string[];
};

export type LeadershipItem = {
  organization: string;
  dates: string;
  roles: LeadershipRole[];
  bullets?: string[];
  stat?: Highlight;
  featured?: boolean;
};

export type AwardItem = {
  title: string;
  result: string;
  year?: string;
  note?: string;
};

export type AwardGroup = {
  label: string;
  items: AwardItem[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" }
];

export const currentActivities: string[] = [
  "Research Assistant, Wireless Communications, LAU",
  "Engineering School Representative, LAU Student Council"
];

export const heroHighlights: Highlight[] = [
  { value: "4.0/4.0", label: "CGPA, LAU" },
  { value: "Top 5%", label: "Electronics cohort, Lebanese University" },
  { value: "2nd in Lebanon", label: "Synopsys Microelectronics Olympiad" },
  { value: "8th in Lebanon", label: "IEEEXtreme 18.0" }
];

export const aboutParagraphs: string[] = [
  "Most of my work sits where software meets real systems. At Interphase I connected IoT cameras and devices to computer-vision inference. At ARK Energy I built retrieval pipelines that automated document-heavy compliance work. At LAU I work as a research assistant in wireless communications and tutor students in Circuits and Calculus.",
  "Outside technical work, I represent engineering students on the LAU Student Council, serve in the IEEE LAU AI Club, and have been active in Lebanon Scouts since 2018."
];

export const focusAreas: FocusArea[] = [
  {
    title: "Software & backend systems",
    description: "Python and FastAPI services, REST and WebSocket APIs, PostgreSQL."
  },
  {
    title: "AI systems",
    description: "Retrieval pipelines, multi-agent orchestration, and computer vision."
  },
  {
    title: "IoT & systems integration",
    description: "Linking cameras and devices to inference and automated workflows."
  },
  {
    title: "Electronics & wireless research",
    description: "Analog circuits built and tested on hardware; MATLAB analysis of relay systems."
  }
];

export const educationItems: EducationItem[] = [
  {
    degree: "B.E. in Computer Engineering",
    institution: "Lebanese American University (LAU)",
    dates: "Sep 2024 – May 2028 (expected)",
    details: [
      "CGPA 4.0/4.0",
      "Merit Scholarship recipient",
      "Relevant coursework: Data Structures & Algorithms"
    ],
    note: "Before LAU: SAT 1510 · Ranked 1st of 269 students in Grade 12"
  },
  {
    degree: "B.S. in Electronics (double major)",
    institution: "Lebanese University",
    dates: "Sep 2024 – May 2027 (expected)",
    details: ["Ranked in the top 5% of the cohort"]
  }
];

export const experienceGroups: ExperienceGroup[] = [
  {
    label: "Industry",
    accent: "cyan",
    items: [
      {
        organization: "Interphase",
        roles: [
          {
            title: "AI & IoT Solutions Engineer Intern",
            dates: "Jul 2026 – Aug 2026",
            bullets: [
              "Built pipelines linking IoT cameras and devices to computer-vision inference and automated workflows.",
              "Developed Python/FastAPI services for device communication, image processing, and data handling, designed as reusable integration layers.",
              "Worked with camera snapshots and structured AI-generated outputs, integrating them with APIs into workflows driven by real-world device data."
            ]
          }
        ],
        tech: ["Python", "FastAPI", "Computer Vision", "Image Processing", "IoT Integration"]
      },
      {
        organization: "ARK Energy",
        roles: [
          {
            title: "AI Automation Engineer Intern",
            dates: "Dec 2025 – May 2026",
            bullets: [
              "Built RAG pipelines for PDF and Excel documents that automated compliance checks and reporting, cutting a manual process from about three days to about one hour.",
              "Designed a PostgreSQL/pgvector retrieval layer with pluggable vector stores and configurable chunking.",
              "Worked on structured processing and validation of AI-generated results."
            ]
          }
        ],
        tech: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Streamlit", "n8n"],
        caseStudy: { href: "#project-ark", label: "Read the case study" }
      }
    ]
  },
  {
    label: "Research & Academic",
    accent: "violet",
    items: [
      {
        organization: "Lebanese American University",
        context: "Supervised by Dr. Chadi Abou Rjeily",
        roles: [
          {
            title: "Research Assistant, Wireless Communications",
            dates: "Aug 2026 – Present",
            bullets: [
              "Analyzing the outage probability of full-power, hybrid-powered, and energy-harvesting relay systems.",
              "Developing MATLAB simulations to validate theoretical results and compare relay strategies and placements."
            ]
          }
        ],
        tech: ["MATLAB", "Wireless Communications"]
      },
      {
        organization: "Lebanese American University",
        roles: [
          {
            title: "Chair Department Assistant",
            dates: "Sep 2026 – Present",
            bullets: ["Review Final Year Project reports against requirements."]
          },
          {
            title: "Teaching Assistant (University-Appointed Tutor)",
            dates: "Sep 2025 – Present",
            bullets: ["Tutor students in Circuits and Calculus through one-on-one and group sessions."]
          }
        ]
      }
    ]
  }
];

export const projectItems: ProjectItem[] = [
  {
    id: "project-ark",
    title: "Document & Compliance Automation",
    subtitle: "Retrieval-augmented pipeline for PDF and Excel documents",
    context: "Internship project · ARK Energy",
    dates: "Dec 2025 – May 2026",
    problem:
      "Compliance checks and reporting over PDF and Excel documents were done by hand, a process that took about three days.",
    contributions: [
      "Built RAG pipelines that parse and chunk documents, embed and retrieve relevant passages, and return answers with citations back to the source.",
      "Designed the retrieval layer on PostgreSQL with pgvector, with pluggable vector stores and configurable chunking.",
      "Worked on structured processing and validation of AI-generated results."
    ],
    outcome: "Cut a manual process from about 3 days to about 1 hour.",
    tech: ["Python", "FastAPI", "PostgreSQL", "pgvector", "LLMs", "Streamlit"],
    pipeline: ["Parse", "Chunk", "Embed", "Retrieve", "Cited answer"],
    note: "Described at a general level. Company documents, data, and code are confidential."
  },
  {
    id: "project-pulse",
    title: "Infrared Heart-Pulse Monitoring System",
    subtitle: "Optical pulse sensing and detection circuit, built and tested on hardware",
    context: "Electronics project",
    dates: "Spring 2026",
    problemLabel: "Goal",
    problem:
      "Detect a heart pulse with infrared light and turn it into pulse indication, a threshold-based alarm, and heart-rate display logic.",
    contributions: [
      "Designed, physically built, and tested a heart-pulse monitoring circuit using an IR LED, a photodiode, analog filtering, op-amps, and comparator-based detection.",
      "Simulated the analog and digital stages in LTspice and Proteus before implementation.",
      "Integrated pulse indication, threshold-based buzzer activation, and display logic for heart-rate monitoring."
    ],
    outcome: "Built and tested as a physical circuit, not only in simulation.",
    tech: ["IR LED", "Photodiode", "Op-Amps", "Analog Filtering", "Comparators", "LTspice", "Proteus"],
    pipelineLabel: "Signal chain",
    pipeline: ["IR LED + photodiode", "Analog filtering & op-amps", "Comparator detection", "Indication, buzzer & display"]
  },
  {
    id: "project-aura",
    title: "AURA: Augmented University Reality Assistant",
    subtitle: "AI-powered university teaching assistant",
    context: "Vertical Integrated Project · LAU",
    dates: "Aug 2025 – May 2026",
    problemLabel: "Overview",
    problem:
      "An AI “professor” for the classroom: it delivers lecture content, answers questions, and responds to what happens in the room.",
    contributions: [
      "Built a multi-agent system in LangGraph covering lecture delivery, Q&A, slides, and retrieval (RAG).",
      "Streamed responses to clients in real time over WebSockets.",
      "Integrated Whisper speech-to-text and computer-vision features (hand-raise detection and attendance) through FastAPI services."
    ],
    tech: ["LangGraph", "FastAPI", "WebSockets", "Whisper", "Computer Vision", "RAG"],
    details: [
      { label: "Orchestration", value: "LangGraph multi-agent graph: lecture, Q&A, slides, retrieval" },
      { label: "Real-time", value: "WebSocket streaming of responses" },
      { label: "Speech", value: "Whisper speech-to-text" },
      { label: "Vision", value: "Hand-raise detection and attendance" },
      { label: "Services", value: "Modular FastAPI services connecting the components" }
    ]
  }
];

export const otherProjects: OtherProject[] = [
  {
    title: "WEFE Stress Early-Warning System",
    context: "Machine learning project · Completed",
    dates: "Aug 2025 – Dec 2025",
    summary:
      "Built a data pipeline combining NDVI, NDTI, rainfall, and VIIRS satellite indicators into a composite WEFE stress index, and trained Linear Regression and Random Forest models for stress forecasting.",
    tech: ["Random Forest", "Linear Regression", "Satellite Data", "Data Pipelines"]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    items: ["Python", "C++", "Java", "JavaScript", "SQL", "MATLAB"]
  },
  {
    category: "AI & Machine Learning",
    items: ["Machine Learning", "Computer Vision", "RAG", "LLM Agents", "LangGraph", "OpenAI API", "Vector Databases"]
  },
  {
    category: "Backend & Data",
    items: ["FastAPI", "REST APIs", "WebSockets", "Microservices", "PostgreSQL", "pgvector", "Prisma", "Data Pipelines"]
  },
  {
    category: "Electronics",
    items: ["LTspice", "Proteus", "Analog Circuit Design", "Op-Amps & Comparators", "Circuit Prototyping & Testing"]
  },
  {
    category: "Development Tools",
    items: ["Git", "GitHub", "Streamlit", "n8n"]
  },
  {
    category: "Languages",
    items: ["Arabic (native)", "English (C1)", "French (C1)"]
  }
];

export const leadershipItems: LeadershipItem[] = [
  {
    organization: "LAU Student Council",
    dates: "2026 – 2027",
    featured: true,
    roles: [{ title: "Engineering School Representative" }],
    stat: { value: "272", label: "votes, direct student election" },
    bullets: [
      "Elected by direct student vote, securing one of three Engineering School Representative seats.",
      "Represent engineering students in council discussions and decisions, advocating for their academic and campus-life concerns."
    ]
  },
  {
    organization: "IEEE LAU Student Branch, AI Club",
    dates: "2024 – Present",
    roles: [
      { title: "Treasurer", status: "Current" },
      {
        title: "Vice President",
        status: "Previously",
        bullets: ["Led AI workshops and co-organized the IEEE MENACOMM 2025 conference (about 100 attendees)."]
      }
    ]
  },
  {
    organization: "Lebanon Scouts",
    dates: "2018 – Present",
    roles: [{ title: "Leader, Secretary, and Treasurer" }],
    bullets: [
      "Lead a 40-member Scout group, coordinating activities and logistics.",
      "Manage budgets and financial records.",
      "Support member development and team operations.",
      "Earned the Wood Badge in 2026."
    ]
  }
];

export const awardGroups: AwardGroup[] = [
  {
    label: "Technical",
    items: [
      {
        title: "Synopsys International Microelectronics Olympiad",
        result: "2nd Place in Lebanon",
        year: "2026"
      },
      {
        title: "IEEEXtreme 18.0",
        result: "8th in Lebanon",
        year: "2024",
        note: "24-hour global competitive programming contest"
      }
    ]
  },
  {
    label: "Leadership",
    items: [{ title: "Leader of the Year", result: "Scouts" }]
  }
];
