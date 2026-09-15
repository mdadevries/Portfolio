export type StoryType = 'Research' | 'User' | 'Learning';

export type EvidenceStatus = 'Afgerond' | 'In uitvoering' | 'Binnenkort';

export type EvidenceFormat =
  | 'PDF Rapport'
  | 'Onderzoeksverslag'
  | 'GitHub Repo'
  | 'Interactief Dashboard'
  | 'Video Demo'
  | 'Presentatie'
  | 'Miro Board'
  | 'Document'
  | 'Notion Document';

export interface EvidenceLink {
  label: string;
  url: string;
}

export interface EvidenceItem {
  id: string;
  title: string;
  storyType: StoryType;
  format?: EvidenceFormat;
  formats?: EvidenceFormat[];
  status: EvidenceStatus;
  dateOrSprint: string;
  summary: string;
  linkUrl?: string;
  links?: EvidenceLink[];
  tag?: string;
}

export interface LearningOutcome {
  id: string; // 'LU1' to 'LU5'
  code: string;
  title: string;
  shortDescription: string;
  badgeColor: {
    bg: string;
    text: string;
    border: string;
    glow: string;
  };
  criteria: string[];
  evidence: EvidenceItem[];
}

export interface ResearchPlan {
  title: string;
  subtitle: string;
  field: string;
  status: string;
  summary: string;
  subQuestions: {
    number: string;
    question: string;
    purpose: string;
  }[];
  expectedOutcome: string;
  publicationDate: string;
  reportUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  status: 'In ontwikkeling' | 'Gepland' | 'Afgerond';
  sprint: string;
  description: string;
  learningOutcomes: string[];
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export type StoryStatus = 'Afgerond' | 'In uitvoering' | 'Nog te doen';

export interface SprintStory {
  role: string;
  goal: string;
  value: string;
  status?: StoryStatus;
  evidenceLinks?: EvidenceLink[];
  evidenceNote?: string;
  acceptanceCriteria?: string[];
  qualityCriteria?: string[];
  notes?: string;
  isPlaceholder?: boolean;
}

export interface SprintData {
  sprintNumber: number;
  title: string;
  period: string;
  theme: string;
  isCurrent?: boolean;
  isUpcoming?: boolean;
  researchStories: {
    stories: SprintStory[];
    linkedLUs: string[];
  };
  userStories: {
    stories: SprintStory[];
    linkedLUs: string[];
  };
  learningStories: {
    stories: SprintStory[];
    linkedLUs: string[];
  };
}

export interface TalentItem {
  title: string;
  description: string;
  tag: string;
}

export interface PassionItem {
  title: string;
  description: string;
  tag: string;
}

export interface AboutData {
  bioParagraphs: string[];
  quote: string;
  aiVision: string;
  talents: TalentItem[];
  passions: PassionItem[];
  ambitions: {
    title: string;
    description: string;
    targetRole: string;
  };
}

export interface ContactData {
  email: string;
  institution: string;
  programme: string;
  minor: string;
  location: string;
  socialLinks: {
    // Klaargezet voor latere activatie zoals gevraagd in de prompt
    linkedinUrl?: string;
    githubUrl?: string;
  };
}

export interface PortfolioData {
  student: {
    firstName: string;
    lastNamePlaceholder: string;
    fullName: string;
    initials: string;
    study: string;
    institution: string;
    year: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tags: string[];
  };
  about: AboutData;
  learningOutcomes: LearningOutcome[];
  research: ResearchPlan;
  projects: ProjectItem[];
  sprints: SprintData[];
  contact: ContactData;
}
