export interface Skill {
  name: string;
  category: 'technical' | 'ai' | 'tools' | 'design' | 'soft';
  level: number; // 0 to 100
  iconName?: string;
  description?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  score?: string;
  location: string;
  highlights: string[];
  image?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  location?: string;
  description: string[];
  skills: string[];
  isCurrent?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: 'ai' | 'web' | 'mobile' | 'design';
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date?: string;
  description: string;
  iconName?: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  bio: string[];
  coursework: string[];
  resumePdfUrl: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}
