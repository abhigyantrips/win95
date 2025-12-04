import { RootProvider } from 'fumadocs-ui/provider/next';

import type { Metadata } from 'next';

import { w95Sans } from '@/lib/fonts';

import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://win95.abhi.now'),
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={w95Sans.variable} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
