// Database types for Supabase tables

export type UserRole = 'applicant' | 'recruiter' | 'admin'

export interface Profile {
  id: string
  user_id: string
  personal_info: PersonalInfo
  skills: SkillCategory[]
  experience: Experience[]
  projects: Project[]
  is_published: boolean
  created_at: string
  updated_at: string
}

export interface PersonalInfo {
  fullName: string
  title: string
  email: string
  phone: string
  location: string
  socials: {
    linkedin: string
    github: string
    portfolio: string
  }
  summary: string
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface Experience {
  id: number
  role: string
  company: string
  duration: string
  description: string
}

export interface Project {
  id: number
  name: string
  role: string
  link: string
  description: string
}

export interface UserMetadata {
  role: UserRole
  full_name?: string
}
