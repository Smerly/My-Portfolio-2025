import type { Experience, Project, SkillCategory, ContactInfo } from "@/types/portfolio"

export const contactInfo: ContactInfo = {
  email: "ernestcheung02@gmail.com",
  phone: "(510) 813-3250",
  location: "Alameda, CA",
}

export const experiences: Experience[] = [
  {
    title: "Full-Stack Engineer",
    company: "Squared",
    period: "Jan 2023 - Jun 2025",
    color: "from-blue-500 to-cyan-500",
    achievements: [
      "Engineered and optimized React UI Components: Rich Text Editor, Context Menu, 404 page",
      "Implemented end-to-end features: Github Commit Syncing with workspace via Github Webhooks",
      "Spearheaded database migrations and orchestrated versioning of MongoDB and Postgres",
      "Modernized legacy codebase: JavaScript to TypeScript, refactoring Redux implementations",
    ],
  },
  {
    title: "Front-End Developer",
    company: "Co.Lab",
    period: "Jun 2022 - Aug 2022",
    color: "from-emerald-500 to-teal-500",
    achievements: [
      "Engineered Client-side functionality and design for MacOS application Multitask",
      "Optimized user experience: reliability and speed by 55% (~1250ms)",
      "Collaborated with Product Managers and UX/UI designers in Agile/SCRUM environment",
    ],
  },
  {
    title: "Front-End React Developer",
    company: "Omnes Education",
    period: "Jan 2022 - May 2022",
    color: "from-purple-500 to-pink-500",
    achievements: [
      "Led front-end development for start-up OmniConnX as team lead",
      "Increased workflow efficiency by 25% under rigorous timeline constraints",
      "Restructured application to be responsive to mobile devices",
    ],
  },
]

export const projects: Project[] = [
  {
    title: "MunchAI",
    subtitle: "LLM Integrated Foodie App",
    description:
      "AI-powered food discovery app combining GPT-4 with custom LLM behavior, real-time user analysis, and image-based dish insights.",
    tags: ["NextJS", "TypeScript", "OpenAI GPT-4", "Postgres", "Drizzle ORM"],
    status: "Current",
    gradient: "from-emerald-500 to-teal-500",
    icon: "zap",
  },
  {
    title: "CryptoTrack",
    subtitle: "Crypto Currency Tracker",
    description:
      "Real-time cryptocurrency tracking application with advanced data visualization, trend analysis, and portfolio management features.",
    tags: ["D3.js", "TailwindCSS", "JavaScript", "APIs"],
    gradient: "from-blue-500 to-cyan-500",
    icon: "database",
  },
  {
    title: "Multitask",
    subtitle: "MacOS Desktop Application",
    description:
      "Downloadable MacOS application enabling seamless Zoom meeting management from any application context.",
    tags: ["ElectronJS", "AppleScript", "JavaScript", "MacOS"],
    gradient: "from-purple-500 to-pink-500",
    icon: "code",
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "palette",
    gradient: "from-pink-500 to-rose-500",
    skills: [
      "React",
      "Redux",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "SASS",
      "HTML",
      "CSS",
      "GPT-4/LLM",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: "database",
    gradient: "from-blue-500 to-cyan-500",
    skills: ["Node.js", "Python", "Flask", "SQLAlchemy", "APIs", "SQL", "Drizzle ORM"],
  },
  {
    title: "Database",
    icon: "database",
    gradient: "from-emerald-500 to-teal-500",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "SQL"],
  },
  {
    title: "Tools & More",
    icon: "code",
    gradient: "from-purple-500 to-indigo-500",
    skills: ["Git", "Figma", "ElectronJS", "D3.js", "React Native", "Zustand", "OpenRouter", "LLM Streaming"],
  },
]

export const navigationItems = ["About", "Experience", "Projects", "Skills", "Contact"]
