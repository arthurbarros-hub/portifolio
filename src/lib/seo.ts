import type { Metadata } from 'next';

export const siteMetadata = {
  name: 'Arthur Mansur',
  title: 'Arthur Mansur | Desenvolvedor Back-End Java',
  description:
    'Portfólio profissional de Arthur Mansur. Desenvolvedor focado em Back-End Java, desenvolvimento web moderno, automação e infraestrutura.',
  url: 'https://arthurportfolio.dev',
  author: 'Arthur Mansur',
  twitterHandle: '@arthurbarros',
  keywords: [
    'Arthur Mansur',
    'Desenvolvedor Java',
    'Back-End Java',
    'Spring Boot',
    'Desenvolvedor Web',
    'TypeScript',
    'React',
    'Next.js',
    'Infraestrutura',
    'Suporte Técnico',
  ],
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: {
    default: siteMetadata.title,
    template: `%s · ${siteMetadata.name}`,
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

