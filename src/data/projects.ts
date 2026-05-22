import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'assistente-ia-fablab',
    title: 'Assistente Interativo com IA',
    category: 'Projeto de automação + inteligência artificial',
    summary:
      'Desenvolvimento de solução experimental integrando sensores físicos com inteligência artificial em tempo real, criando uma experiência interativa única.',
    problem:
      'Como criar uma experiência interativa capaz de integrar sensores físicos com inteligência artificial em tempo real?',
    solution:
      'Desenvolvimento de solução experimental com Python, OpenAI API e integração entre sensores físicos e interface digital.',
    tags: ['Python', 'OpenAI API', 'Arduino', 'Raspberry Pi', 'Sensores', 'Git'],
    challenges: [
      'Integração hardware/software',
      'Comunicação entre dispositivos',
      'Fluxo de eventos',
      'Respostas da IA',
    ],
    learnings: ['Automação', 'Arquitetura experimental', 'Integração de APIs', 'Sistemas interativos'],
    featured: true,
    year: 2025,
  },
  {
    slug: '747-garage',
    title: '747 Garage',
    category: 'Web premium experience',
    summary:
      'Presença digital premium para oficina automotiva com landing page moderna, motion design e identidade visual forte.',
    problem:
      'Criar uma presença digital premium para oficina automotiva com forte identidade visual.',
    solution:
      'Landing page premium com Next.js, motion design, componentização e foco em experiência visual.',
    tags: ['Next.js', 'TypeScript', 'React', 'Tailwind', 'Framer Motion'],
    challenges: [],
    learnings: [],
    year: 2024,
  },
  {
    slug: 'line-rios-croche',
    title: 'Line Rios Crochê',
    category: 'E-commerce / Conversão',
    summary:
      'Plataforma de e-commerce mobile-first otimizada para conversão via WhatsApp com catálogo dinâmico.',
    problem:
      'Criar fluxo comercial otimizado para conversão via WhatsApp.',
    solution:
      'E-commerce mobile-first com catálogo dinâmico e geração automatizada de mensagens.',
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
      'Análise quantitativa de cloud gaming como solução de acessibilidade e seu impacto na indústria.',
    problem:
      'Analisar cloud gaming como solução de acessibilidade e impacto na pirataria.',
    solution:
      'Pesquisa quantitativa + análise de mercado + estudo acadêmico.',
    tags: ['Pesquisa', 'Análise de Mercado', 'Cloud Gaming'],
    challenges: [],
    learnings: [],
    year: 2023,
  },
];
