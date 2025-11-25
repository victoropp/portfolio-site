// lib/types/skill.ts

export interface Skill {
  name: string;
  category: 'ML/DL' | 'NLP' | 'Computer Vision' | 'Production/Deployment' | 'Data Engineering' | 'Domains';
  proficiency?: 1 | 2 | 3 | 4 | 5;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
