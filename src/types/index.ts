import type { IconType } from 'react-icons';

export interface ExperienceHighlight {
  text: string;
  tags: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  highlights: ExperienceHighlight[];
}

export interface ProjectEntry {
  title: string;
  period: string;
  description: string;
  tags: string[];
}

export interface AchievementEntry {
  title: string;
  year: string;
  result: string;
}

export interface SkillEntry {
  name: string;
  icon: IconType | null;
  color: string;
}

export interface SkillGroup {
  category: string;
  items: SkillEntry[];
}
