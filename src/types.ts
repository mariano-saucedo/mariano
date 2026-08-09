export interface Competency {
  id: string;
  icon: string;
  title: string;
  description: string;
  details?: string[];
  tags?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period?: string;
  description: string;
  icon: string;
  badgeColorClass: string;
  keySkills: string[];
}

export interface SuccessCase {
  id: string;
  title: string;
  category: string;
  impact: string;
  problem: string;
  solution: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  date?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
