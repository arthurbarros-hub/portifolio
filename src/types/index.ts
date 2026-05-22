export type LinkItem = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  coverImage?: string;
  year?: number;
  links?: LinkItem[];
  category?: string;
  problem?: string;
  solution?: string;
  challenges?: string[];
  learnings?: string[];
  featured?: boolean;
};

export type Achievement = {
  title: string;
  description?: string;
  year?: number;
  link?: LinkItem;
};

export type ExperienceItem = {
  company: string;
  role: string;
  timeframe: string;
  summary?: string;
  location?: string;
  highlights?: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  year?: number;
  credentialUrl?: string;
};

export type StackItem = {
  label: string;
  category: string;
  icon?: string;
};

export type PersonalInfo = {
  name: string;
  role: string;
  summary?: string;
  location?: string;
  email?: string;
  availability?: string;
};

export type SocialLink = {
  platform: string;
  handle?: string;
  url: string;
};

export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  summary?: string;
  tags?: string[];
};
