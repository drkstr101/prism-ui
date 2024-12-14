import clsx from 'clsx';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import { Layout } from '../components/Layout';
import { Providers } from './providers';

import '../styles/tailwind.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
  src: '../fonts/lexend.woff2',
  display: 'swap',
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: {
    template: '%s - Docs',
    default: 'PrismUI - Never miss the cache again.',
  },
  description:
    'Prism UI provides components and tools to help developers work more efficiently, and to make applications more cohesive.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, lexend.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-white dark:bg-gray-900">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
