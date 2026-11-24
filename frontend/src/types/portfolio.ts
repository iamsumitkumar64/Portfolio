export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: 'ai' | 'distributed' | 'systems' | 'frontend';
  icon: string;
  githubUrl: string;
  liveUrl?: string;
  npmUrl?: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  countLabel: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  type: string;
  tenure: string;
  active?: boolean;
  avatarText: string;
  avatarBg?: string;
  responsibilities: { title: string; desc: string }[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  grade?: string;
  description: string;
  tags?: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  description: string;
  badge: string;
  badgeType: 'gold' | 'silver' | 'package' | 'bronze';
  icon: string;
}

export interface StatMetric {
  badgeDot: 'green' | 'teal' | 'purple' | 'orange';
  badgeText: string;
  headline: string;
  subtitle: string;
  caption: string;
}

export interface ContactInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  leetcode: string;
}
