import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'assistente-ia-fablab',
    title: 'Assistente Interativo com IA',
    category: 'Projeto de automaÃ§Ã£o + inteligÃªncia artificial',
    summary:
      'Desenvolvimento de soluÃ§Ã£o experimental integrando sensores fÃ­sicos com inteligÃªncia artificial em tempo real, criando uma experiÃªncia interativa Ãºnica.',
    problem:
      'Como criar uma experiÃªncia interativa capaz de integrar sensores fÃ­sicos com inteligÃªncia artificial em tempo real?',
    solution:
      'Desenvolvimento de soluÃ§Ã£o experimental com Python, OpenAI API e integraÃ§Ã£o entre sensores fÃ­sicos e interface digital.',
    tags: ['Python', 'OpenAI API', 'Arduino', 'Raspberry Pi', 'Sensores', 'Git'],
    challenges: [
      'IntegraÃ§Ã£o hardware/software',
      'ComunicaÃ§Ã£o entre dispositivos',
      'Fluxo de eventos',
      'Respostas da IA',
    ],
    learnings: ['AutomaÃ§Ã£o', 'Arquitetura experimental', 'IntegraÃ§Ã£o de APIs', 'Sistemas interativos'],
    featured: true,
    year: 2025,
  },
  {
    slug: '747-garage',
    title: '747 Garage',
    category: 'Web premium experience',
    summary:
      'PresenÃ§a digital premium para oficina automotiva com landing page moderna, motion design e identidade visual forte.',
    problem:
      'Criar uma presenÃ§a digital premium para oficina automotiva com forte identidade visual.',
    solution:
      'Landing page premium com Next.js, motion design, componentizaÃ§Ã£o e foco em experiÃªncia visual.',
    tags: ['Next.js', 'TypeScript', 'React', 'Tailwind', 'Framer Motion'],
    challenges: [],
    learnings: [],
    year: 2024,
  },
  {
    slug: 'line-rios-croche',
    title: 'Line Rios CrochÃª',
    category: 'E-commerce / ConversÃ£o',
    summary:
      'Plataforma de e-commerce mobile-first otimizada para conversÃ£o via WhatsApp com catÃ¡logo dinÃ¢mico.',
    problem:
      'Criar fluxo comercial otimizado para conversÃ£o via WhatsApp.',
    solution:
      'E-commerce mobile-first com catÃ¡logo dinÃ¢mico e geraÃ§Ã£o automatizada de mensagens.',
    tags: ['Next.js', 'TypeScript', 'React', 'Tailwind', 'WhatsApp Integration'],
    challenges: [],
    learnings: [],
    year: 2024,
  },
  {
    slug: 'cloud-gaming-research',
    title: 'Cloud Gaming Research',
    category: 'Pesquisa aplicada',
    summary:
      'AnÃ¡lise quantitativa de cloud gaming como soluÃ§Ã£o de acessibilidade e seu impacto na indÃºstria.',
    problem:
      'Analisar cloud gaming como soluÃ§Ã£o de acessibilidade e impacto na pirataria.',
    solution:
      'Pesquisa quantitativa + anÃ¡lise de mercado + estudo acadÃªmico.',
    tags: ['Pesquisa', 'AnÃ¡lise de Mercado', 'Cloud Gaming'],
    challenges: [],
    learnings: [],
    year: 2023,
  },
];

