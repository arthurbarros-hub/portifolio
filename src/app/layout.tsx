import type { Metadata, Viewport } from 'next';

import '@/app/globals.css';

import { SkipToContent } from '@/components/ui/SkipToContent';
import { BackToTop } from '@/components/ui/BackToTop';
import { fontVariables } from '@/lib/fonts';
import { baseMetadata } from '@/lib/seo';

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: 'rgb(9 11 16)',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={fontVariables}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#090B10" />
      </head>
      <body className="min-h-screen bg-bg text-fg antialiased">
        <SkipToContent />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}

