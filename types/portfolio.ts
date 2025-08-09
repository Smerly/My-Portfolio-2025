import type React from "react"
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
  icon: React.ReactNode
}

export interface SkillCategory {
  title: string
  icon: React.ReactNode
  gradient: string
  skills: string[]
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
}
