import type { Metadata, Viewport } from 'next';

import '@/app/globals.css';

import { SkipToContent } from '@/components/ui/SkipToContent';
import { fontVariables } from '@/lib/fonts';
import { baseMetadata } from '@/lib/seo';

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: 'rgb(9 11 16)',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="min-h-screen bg-bg text-fg antialiased">
        <SkipToContent />
        {children}
      </body>
    </html>
  );
}
