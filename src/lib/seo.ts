import type { Metadata } from 'next';

export const siteMetadata = {
  name: 'Arthur Mansur | Desenvolvedor Back-End',
  title: 'Arthur Mansur | Desenvolvedor Back-End Java & Desenvolvimento Web',
  description:
    'PortfÃ³lio profissional de Arthur Mansur, desenvolvedor em evoluÃ§Ã£o no ecossistema Java, com experiÃªncia em suporte tÃ©cnico, infraestrutura, automaÃ§Ã£o, Python, APIs e desenvolvimento web moderno.',
  url: 'https://arthurportfolio.dev',
  author: 'Arthur Mansur',
  twitterHandle: '@arthurbarros',
  keywords: [
    'Arthur Mansur',
    'Desenvolvedor Back-End',
    'Java',
    'Spring Boot',
    'Next.js',
    'TypeScript',
    'PortfÃ³lio Desenvolvedor',
    'Desenvolvedor Web',
    'Python',
    'APIs',
    'Infraestrutura',
    'Suporte TÃ©cnico',
    'SÃ£o Paulo',
  ],
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: {
    default: siteMetadata.title,
    template: `%s Â· ${siteMetadata.name}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
  creator: siteMetadata.author,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteMetadata.url,
    siteName: siteMetadata.name,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: `${siteMetadata.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    creator: siteMetadata.twitterHandle,
    images: [`${siteMetadata.url}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: siteMetadata.url,
  },
};

