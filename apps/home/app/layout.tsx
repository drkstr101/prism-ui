import '@apsphysics/prism-ui.theme/styles.css';

import './global.css';

export const metadata = {
  title: 'Welcome to home',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="prism prism--medium prism--light">
      <body className="bg-background-base">{children}</body>
    </html>
  );
}
