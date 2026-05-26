import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiFigma,
  SiOpenai,
  SiNodedotjs,
  SiExpress,
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

// Gemini - Google Gemini logo style
const GeminiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <defs>
      <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" />
      </linearGradient>
    </defs>
    {/* G geometric shape */}
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"
      fill="currentColor"
    />
  </svg>
);

// Claude - Anthropic's elegant style
const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    {/* Elegant curved C shape */}
    <path
      d="M7 5C5.9 5 5 5.9 5 7V17C5 18.1 5.9 19 7 19C8.1 19 9 18.1 9 17M15 5C16.1 5 17 5.9 17 7V17C17 18.1 16.1 19 15 19C13.9 19 13 18.1 13 17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Center accent */}
    <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.6" />
  </svg>
);

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

// Midjourney - Professional "MJ" wordmark
const MidjourneyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <text
      x="12"
      y="15"
      fontSize="11"
      fontWeight="700"
      fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
      textAnchor="middle"
      fill="currentColor"
      letterSpacing="-0.3"
    >
      MJ
    </text>
  </svg>
);

// v0 - Vercel's v0 style
const V0Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    {/* V shape with geometric style */}
    <path d="M6 6L11 15L10.5 18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    {/* 0 shape */}
    <ellipse cx="16" cy="12" rx="2.5" ry="4" stroke="currentColor" strokeWidth="1.3" />
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
    name: 'Framer Motion',
    category: 'frontend',
    icon: SiFramer,
    brandColor: '#0055FF',
    animationType: 'morphing',
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
    name: 'Express',
    category: 'backend',
    icon: SiExpress,
    brandColor: '#90C53F',
    animationType: 'speed-line',
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
  {
    name: 'PostgreSQL',
    category: 'database',
    icon: SiPostgresql,
    brandColor: '#336791',
    animationType: 'wave-heavy',
  },
  {
    name: 'Firebase',
    category: 'database',
    icon: SiFirebase,
    brandColor: '#FFCA28',
    animationType: 'flame-flicker',
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
    name: 'VS Code',
    category: 'tools',
    icon: SiVscodium,
    brandColor: '#007ACC',
    animationType: 'pulse-glow',
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
  {
    name: 'Gemini',
    category: 'ai',
    icon: GeminiIcon,
    brandColor: '#4285F4',
    animationType: 'dual-glow',
  },
  {
    name: 'Claude',
    category: 'ai',
    icon: ClaudeIcon,
    brandColor: '#D4A574',
    animationType: 'warm-gradient',
  },
  {
    name: 'GitHub Copilot',
    category: 'ai',
    icon: GitHubCopilotIcon,
    brandColor: '#181717',
    animationType: 'code-typing',
  },
  {
    name: 'Midjourney',
    category: 'ai',
    icon: MidjourneyIcon,
    brandColor: '#A78BFA',
    animationType: 'gradient-flow',
  },
  {
    name: 'v0',
    category: 'ai',
    icon: V0Icon,
    brandColor: '#000000',
    animationType: 'grid-building',
  },
];
