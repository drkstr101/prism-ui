import clsx from 'clsx';
import { type Metadata } from 'next';

import { Layout } from '../components/Layout';
import { Providers } from './providers';

// import '@apsphysics/prism-ui.theme';
import '@apsphysics/prism-ui.theme/fonts.css';
import '@apsphysics/prism-ui.theme/tokens.css';
import '../styles/tailwind.css';

export const metadata: Metadata = {
  title: {
    template: '%s - Docs',
    default: 'Prism UI - Docs',
  },
  description:
    'Components and tools to help developers work more efficiently, and make applications more cohesive.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="prism prism--light prism--medium h-full antialiased"
      suppressHydrationWarning
    >
      <body className="bg-background-layer-2 flex min-h-full">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
