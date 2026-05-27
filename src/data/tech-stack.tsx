export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'ai';
  svgComponent: () => React.ReactNode;
  brandColor?: string;
  animationType: 'orbit' | 'glow' | 'pulse' | 'fluid' | 'wave' | 'float';
}

// SVG Icon Components
export const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="12" cy="11" r="1.5" fill="currentColor" />
    <ellipse cx="12" cy="11" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="12" cy="11" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 11)" />
    <ellipse cx="12" cy="11" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 11)" />
  </svg>
);

export const NextIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M11.5 24c6.904 0 12.5-5.373 12.5-12S18.404 0 11.5 0 0 5.373 0 12s5.596 12 11.5 12z" />
    <path fillRule="evenodd" d="M17.089 5.5H5v13h12.089V5.5zm-6.5 0.5h4v10h-4v-10z" fill="white" />
  </svg>
);

export const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="24" height="24" fill="#3178C6" />
    <path d="M7 11h2v7H7zm4-4h2v11h-2zm4 2h2v9h-2z" fill="white" />
  </svg>
);

export const JavaScriptIcon = () => (
  <svg viewBox="0 0 24 24" fill="#F7DF1E" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="24" height="24" rx="4" fill="#F7DF1E" />
    <path d="M7 8h2v8H7zm4-2h2v10h-2zm4 3h2v7h-2z" fill="#000" />
  </svg>
);

export const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#06B6D4" />
    <circle cx="12" cy="12" r="3" fill="#06B6D4" />
  </svg>
);

<<<<<<< HEAD
=======
export const FramerMotionIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M3 3h18v6H3V3zm0 8h18v6H3v-6zm0 8h18v2H3v-2z" opacity="0.8" />
    <path d="M9 9h6v6H9V9z" fill="#0055FF" />
  </svg>
);

>>>>>>> 444835e4a34f5afb31fcba663da9a24c5979c93e
export const HTML5Icon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M2 3h20v18H2V3zm3 2v14h2V5H5zm4 0v14h2V5H9zm4 0v14h2V5h-2z" fill="#E34C26" />
  </svg>
);

export const CSS3Icon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M2 3h20v18H2V3zm2 2v14h4V5H4zm6 0v14h4V5h-4zm6 0v14h4V5h-4z" fill="#1572B6" />
  </svg>
);

export const JavaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M8 9c1.7 0 3-1.3 3-3S9.7 3 8 3 5 4.3 5 6s1.3 3 3 3zm0 2C5.8 11 3 12.8 3 15v3h10v-3c0-2.2-2.8-4-5-4zm8-2c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0 2c-2.2 0-5 1.8-5 4v3h10v-3c0-2.2-2.8-4-5-4z" fill="#007396" />
  </svg>
);

export const NodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" fill="#68A063" />
  </svg>
);

export const ExpressIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h4v-8h-4v8zm6-8h2v8h-2v-8zM6 9h2v8H6V9z" fill="#90C53F" />
  </svg>
);

export const PythonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" fill="#3776AB" />
  </svg>
);

export const RESTAPIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  </svg>
);

export const MySQLIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M3 3h18v4H3V3zm0 6h18v4H3V9zm0 6h18v4H3v-4zm0 6h18v2H3v-2z" fill="#00758F" />
  </svg>
);

<<<<<<< HEAD
=======
export const PostgreSQLIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="12" cy="12" r="10" fill="#336791" />
    <path d="M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z" fill="white" opacity="0.3" />
  </svg>
);

export const FirebaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M4 12L12 2v9h8L4 22v-10z" fill="#FFCA28" />
    <path d="M12 2L4 12v10l8-9V2z" fill="#FFA726" />
  </svg>
);
>>>>>>> 444835e4a34f5afb31fcba663da9a24c5979c93e

export const GitIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="12" cy="12" r="9" fill="#F1502F" />
    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" fill="white" />
  </svg>
);

export const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="#181717" />
  </svg>
);

export const VercelIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
  </svg>
);

<<<<<<< HEAD
=======
export const VSCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M2 4l14 8-14 8V4zm2 2v12l10-6-10-6z" fill="#0098FF" />
    <path d="M18 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" fill="#007ACC" />
  </svg>
);

>>>>>>> 444835e4a34f5afb31fcba663da9a24c5979c93e
export const PostmanIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#FF6C37" />
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" fill="white" />
  </svg>
);

export const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="6" cy="6" r="4" fill="#1ABCFE" />
    <circle cx="18" cy="6" r="4" fill="#0ACF83" />
    <circle cx="18" cy="18" r="4" fill="#FF61F6" />
    <circle cx="6" cy="18" r="4" fill="#F24E1E" />
  </svg>
);

export const OpenAIIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#10A37F" />
    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" fill="white" />
  </svg>
);

export const APIsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline>
    <line x1="12" y1="12" x2="20" y2="7.5"></line>
    <line x1="12" y1="12" x2="12" y2="21"></line>
    <line x1="12" y1="12" x2="4" y2="7.5"></line>
  </svg>
);

export const AutomationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#4CAF50" />
  </svg>
);

export const technologies: Technology[] = [
  // Frontend
  {
    name: 'React',
    category: 'frontend',
    svgComponent: ReactIcon,
    brandColor: '#61DAFB',
    animationType: 'orbit',
  },
  {
    name: 'Next.js',
    category: 'frontend',
    svgComponent: NextIcon,
    brandColor: '#000000',
    animationType: 'pulse',
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    svgComponent: TypeScriptIcon,
    brandColor: '#3178C6',
    animationType: 'glow',
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    svgComponent: JavaScriptIcon,
    brandColor: '#F7DF1E',
    animationType: 'wave',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    svgComponent: TailwindIcon,
    brandColor: '#06B6D4',
    animationType: 'fluid',
  },
  {
<<<<<<< HEAD
=======
    name: 'Framer Motion',
    category: 'frontend',
    svgComponent: FramerMotionIcon,
    brandColor: '#0055FF',
    animationType: 'float',
  },
  {
>>>>>>> 444835e4a34f5afb31fcba663da9a24c5979c93e
    name: 'HTML5',
    category: 'frontend',
    svgComponent: HTML5Icon,
    brandColor: '#E34C26',
    animationType: 'pulse',
  },
  {
    name: 'CSS3',
    category: 'frontend',
    svgComponent: CSS3Icon,
    brandColor: '#1572B6',
    animationType: 'wave',
  },
  
  // Backend
  {
    name: 'Java',
    category: 'backend',
    svgComponent: JavaIcon,
    brandColor: '#007396',
    animationType: 'orbit',
  },
  {
    name: 'Node.js',
    category: 'backend',
    svgComponent: NodeIcon,
    brandColor: '#68A063',
    animationType: 'pulse',
  },
  {
    name: 'Express',
    category: 'backend',
    svgComponent: ExpressIcon,
    brandColor: '#90C53F',
    animationType: 'glow',
  },
  {
    name: 'Python',
    category: 'backend',
    svgComponent: PythonIcon,
    brandColor: '#3776AB',
    animationType: 'wave',
  },
  {
    name: 'REST API',
    category: 'backend',
    svgComponent: RESTAPIIcon,
    brandColor: '#1E90FF',
    animationType: 'float',
  },
  
  // Database
  {
    name: 'MySQL',
    category: 'database',
    svgComponent: MySQLIcon,
    brandColor: '#00758F',
    animationType: 'orbit',
  },
<<<<<<< HEAD
=======
  {
    name: 'PostgreSQL',
    category: 'database',
    svgComponent: PostgreSQLIcon,
    brandColor: '#336791',
    animationType: 'pulse',
  },
  {
    name: 'Firebase',
    category: 'database',
    svgComponent: FirebaseIcon,
    brandColor: '#FFCA28',
    animationType: 'glow',
  },
>>>>>>> 444835e4a34f5afb31fcba663da9a24c5979c93e
  
  // Tools
  {
    name: 'Git',
    category: 'tools',
    svgComponent: GitIcon,
    brandColor: '#F1502F',
    animationType: 'wave',
  },
  {
    name: 'GitHub',
    category: 'tools',
    svgComponent: GitHubIcon,
    brandColor: '#181717',
    animationType: 'float',
  },
  {
    name: 'Vercel',
    category: 'tools',
    svgComponent: VercelIcon,
    brandColor: '#000000',
    animationType: 'orbit',
  },
  {
<<<<<<< HEAD
=======
    name: 'VS Code',
    category: 'tools',
    svgComponent: VSCodeIcon,
    brandColor: '#007ACC',
    animationType: 'pulse',
  },
  {
>>>>>>> 444835e4a34f5afb31fcba663da9a24c5979c93e
    name: 'Postman',
    category: 'tools',
    svgComponent: PostmanIcon,
    brandColor: '#FF6C37',
    animationType: 'glow',
  },
  {
    name: 'Figma',
    category: 'tools',
    svgComponent: FigmaIcon,
    brandColor: '#F24E1E',
    animationType: 'wave',
  },
  
  // AI & Integrations
  {
    name: 'OpenAI',
    category: 'ai',
    svgComponent: OpenAIIcon,
    brandColor: '#10A37F',
    animationType: 'fluid',
  },
  {
    name: 'APIs',
    category: 'ai',
    svgComponent: APIsIcon,
    brandColor: '#1E90FF',
    animationType: 'float',
  },
  {
    name: 'Automação',
    category: 'ai',
    svgComponent: AutomationIcon,
    brandColor: '#4CAF50',
    animationType: 'orbit',
  },
];
