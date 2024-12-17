import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { join } from 'path';
import { type Config } from 'tailwindcss';

export default {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{js,jsx,ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--spectrum-sans-serif-font-family)',
        serif: 'var(--spectrum-serif-font-family)',
        code: 'var(--spectrum-code-font-family)',
        display: ['var(--font-lexend)', { fontFeatureSettings: '"ss01"' }],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  presets: [require('../../tailwind-workspace-presets.js')],
} satisfies Config;
