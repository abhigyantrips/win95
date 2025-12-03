import { RootProvider } from 'fumadocs-ui/provider/next';

import { w95Sans } from '@/lib/fonts';

import '@/styles/globals.css';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={w95Sans.variable} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
