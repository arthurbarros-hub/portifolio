import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'assistente-ia-fablab',
    title: 'Assistente Interativo com IA',
    category: 'Projeto de automação + inteligência artificial',
    summary:
      'Desenvolvimento de solução experimental integrando sensores físicos com inteligência artificial em tempo real, criando uma experiência interativa única.',
    problem:
      'Como criar uma experiência interativa que integre sensores físicos com inteligência artificial em tempo real?',
    solution:
      'Desenvolvimento com Python, OpenAI API e integração entre sensores físicos e interface digital.',
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
      'Plataforma web automotiva com foco em interface premium, organização de componentes, performance e experiência visual.',
    problem:
      'Criar presença digital de alto impacto para um negócio automotivo com identidade forte.',
    solution:
      'Landing page com motion design, narrativa visual e foco em performance.',
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
      'E-commerce mobile-first focado em conversão via WhatsApp, com catálogo simples e fluxo direto de pedido.',
    problem:
      'Criar fluxo comercial otimizado para conversão via WhatsApp.',
    solution:
      'Catálogo digital com CTA direto para WhatsApp e UX voltada ao mobile.',
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
      'Analisar cloud gaming como solução de acessibilidade e seu impacto no mercado.',
    solution:
      'Pesquisa quantitativa, análise de mercado e estudo acadêmico.',
    tags: ['Pesquisa', 'Análise de Mercado', 'Cloud Gaming'],
    challenges: [],
    learnings: [],
    year: 2023,
  },
];

