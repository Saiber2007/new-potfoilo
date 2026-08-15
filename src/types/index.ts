export interface ProfileData {
  name: string;
  fullName: string;
  dob: string; // ISO date YYYY-MM-DD
  headline: string;
  bio: string;
  aboutText: string;
  email: string;
  linkedin: string;
  github: string;
  portfolioUrl: string;
  education: {
    degree: string;
    university: string;
    location: string;
    year: string;
    semester: string;
    focus: string;
  };
  leadership: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  items: {
    name: string;
    level: 'Beginner' | 'Learning' | 'Practical' | 'Familiar';
    iconName?: string;
    tagColor?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Concept / Experimental';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'Security' | 'Toolkit' | 'Workshop' | 'Web';
  badge: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  topics: string[];
  description: string;
  badgeType: 'IEEE' | 'AWS' | 'Simplilearn' | 'Google' | 'Hackviser' | 'Workshop';
  verified: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  role: string;
  period: string;
  organization: string;
  description: string;
  highlights: string[];
  category: 'IEEE' | 'Speaker' | 'CTF' | 'Workshop';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
