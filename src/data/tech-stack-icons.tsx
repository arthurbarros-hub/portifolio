import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiFigma,
  SiOpenai,
  SiNodedotjs,
  SiPython,
} from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiVscodium } from 'react-icons/si';
import { IconType } from 'react-icons';

export type AnimationType =
  | 'dolphin-wave'
  | 'liquid-fill'
  | 'orbit'
  | 'particles'
  | 'shimmer'
  | 'steam'
  | 'pulse-glow'
  | 'wave-flow'
  | 'morphing'
  | 'branch-lines'
  | 'pulse-light'
  | 'shimmer-triangle'
  | 'network-dots'
  | 'speed-line'
  | 'cross-flow'
  | 'wave-heavy'
  | 'flame-flicker'
  | 'orbital-data'
  | 'dual-glow'
  | 'warm-gradient'
  | 'code-typing'
  | 'gradient-flow'
  | 'grid-building'
  | 'connected-nodes'
  | 'flight-path'
  | 'shape-nodes';

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'ai';
  icon: IconType | (() => React.ReactNode);
  brandColor?: string;
  animationType: AnimationType;
}

// Custom Icons for tools without react-icons equivalents

// GitHub Copilot - Code brackets style
const GitHubCopilotIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    {/* Left bracket */}
    <path d="M8 7L6 9V15L8 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Right bracket */}
    <path d="M16 7L18 9V15L16 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Center dots */}
    <circle cx="12" cy="10" r="0.8" fill="currentColor" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    <circle cx="12" cy="14" r="0.8" fill="currentColor" />
  </svg>
);



export const technologies: Technology[] = [
  // Frontend
  {
    name: 'React',
    category: 'frontend',
    icon: SiReact,
    brandColor: '#61DAFB',
    animationType: 'particles',
  },
  {
    name: 'Next.js',
    category: 'frontend',
    icon: SiNextdotjs,
    brandColor: '#000000',
    animationType: 'shimmer',
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    icon: SiTypescript,
    brandColor: '#3178C6',
    animationType: 'liquid-fill',
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    icon: SiJavascript,
    brandColor: '#F7DF1E',
    animationType: 'pulse-glow',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    icon: SiTailwindcss,
    brandColor: '#06B6D4',
    animationType: 'wave-flow',
  },
  {
    name: 'HTML5',
    category: 'frontend',
    icon: FaHtml5,
    brandColor: '#E34C26',
    animationType: 'pulse-glow',
  },
  {
    name: 'CSS3',
    category: 'frontend',
    icon: FaCss3,
    brandColor: '#1572B6',
    animationType: 'wave-flow',
  },

  // Backend
  {
    name: 'Java',
    category: 'backend',
    icon: FaJava,
    brandColor: '#007396',
    animationType: 'steam',
  },
  {
    name: 'Node.js',
    category: 'backend',
    icon: SiNodedotjs,
    brandColor: '#68A063',
    animationType: 'network-dots',
  },

  {
    name: 'Python',
    category: 'backend',
    icon: SiPython,
    brandColor: '#3776AB',
    animationType: 'cross-flow',
  },

  // Database
  {
    name: 'MySQL',
    category: 'database',
    icon: SiMysql,
    brandColor: '#00758F',
    animationType: 'dolphin-wave',
  },

  // Tools
  {
    name: 'Git',
    category: 'tools',
    icon: SiGit,
    brandColor: '#F1502F',
    animationType: 'branch-lines',
  },
  {
    name: 'GitHub',
    category: 'tools',
    icon: SiGithub,
    brandColor: '#181717',
    animationType: 'pulse-light',
  },
  {
    name: 'Vercel',
    category: 'tools',
    icon: SiVercel,
    brandColor: '#000000',
    animationType: 'shimmer-triangle',
  },
  {
    name: 'Postman',
    category: 'tools',
    icon: SiPostman,
    brandColor: '#FF6C37',
    animationType: 'flight-path',
  },
  {
    name: 'Figma',
    category: 'tools',
    icon: SiFigma,
    brandColor: '#F24E1E',
    animationType: 'shape-nodes',
  },

  // AI & Productivity
  {
    name: 'OpenAI',
    category: 'ai',
    icon: SiOpenai,
    brandColor: '#10A37F',
    animationType: 'orbital-data',
  },
];
