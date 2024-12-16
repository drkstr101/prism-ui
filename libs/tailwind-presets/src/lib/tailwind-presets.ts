import typographyPlugin from '@tailwindcss/typography';
import { type Config } from 'tailwindcss';

import blue from './colors/blue';
import gray from './colors/gray';
import green from './colors/green';
import orange from './colors/orange';
import red from './colors/red';

export default {
  content: ['**/*.html', '**/*.erb', '**/*.haml', 'app/helpers/**/*.rb', 'app/frontend/**/*.*'],
  future: {
    respectDefaultRingColorOpacity: true,
  },
  darkMode: ['class', '[style*="color-scheme: dark;"]'],
  theme: {
    extend: {
      dropShadow: {
        DEFAULT: 'var(--prism-drop-shadow-color)',
      },
      colors: {
        gray,
        blue,
        green,
        orange,
        red,
        'background-base': gray[300],
        'background-layer-1': gray[200],
        'background-layer-2': gray[50],
        neutral: {
          background: gray[800],
          'background-hover': gray[900],
          'background-down': gray[900],
          'subdued-background': gray[600],
          'subdued-background-hover': gray[700],
          'subdued-background-down': gray[800],
          content: gray[800],
          'content-hover': gray[900],
          'content-down': gray[900],
          'subdued-content': gray[700],
          'subdued-content-hover': gray[800],
          'subdued-content-down': gray[900],
        },
        accent: {
          ...blue,
        },
      },
    },
  },
  plugins: [typographyPlugin],
} satisfies Config;
