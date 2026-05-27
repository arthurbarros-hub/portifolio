import type { Metadata } from 'next';

export const siteMetadata = {
<<<<<<< HEAD
  name: 'Arthur Mansur | Desenvolvedor Back-End',
  title: 'Arthur Mansur | Desenvolvedor Back-End Java & Desenvolvimento Web',
  description:
    'Portfólio profissional de Arthur Mansur, desenvolvedor em evolução no ecossistema Java, com experiência em suporte técnico, infraestrutura, automação, Python, APIs e desenvolvimento web moderno.',
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
    'Portfólio Desenvolvedor',
    'Desenvolvedor Web',
    'Python',
    'APIs',
    'Infraestrutura',
    'Suporte Técnico',
    'São Paulo',
  ],
=======
  name: 'Premium Developer Portfolio',
  title: 'Your Name',
  description:
    'Premium developer portfolio foundation focused on performance, motion, and clarity.',
  url: 'https://example.com',
  twitterHandle: '@yourhandle',
>>>>>>> 444835e4a34f5afb31fcba663da9a24c5979c93e
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: {
    default: siteMetadata.title,
    template: `%s · ${siteMetadata.name}`,
  },
  description: siteMetadata.description,
<<<<<<< HEAD
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
=======
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: siteMetadata.name,
    type: 'website',
>>>>>>> 444835e4a34f5afb31fcba663da9a24c5979c93e
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    creator: siteMetadata.twitterHandle,
<<<<<<< HEAD
    images: [`${siteMetadata.url}/og-image.png`],
=======
>>>>>>> 444835e4a34f5afb31fcba663da9a24c5979c93e
  },
  robots: {
    index: true,
    follow: true,
<<<<<<< HEAD
    nocache: true,
=======
>>>>>>> 444835e4a34f5afb31fcba663da9a24c5979c93e
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
<<<<<<< HEAD
  alternates: {
    canonical: siteMetadata.url,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
=======
>>>>>>> 444835e4a34f5afb31fcba663da9a24c5979c93e
};
