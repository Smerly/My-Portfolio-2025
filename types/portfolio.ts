export interface Experience {
  title: string
  company: string
  period: string
  color: string
  achievements: string[]
}

export interface Project {
  title: string
  subtitle: string
  description: string
  tags: string[]
  status?: string
  gradient: string
  icon: IconIdentifier
}

export interface SkillCategory {
  title: string
  icon: IconIdentifier
  gradient: string
  skills: string[]
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
}

export type IconIdentifier = "code" | "database" | "palette" | "zap"
