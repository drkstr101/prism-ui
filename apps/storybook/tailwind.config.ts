import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { join } from 'path';
import { type Config } from 'tailwindcss';

module.exports = {
  content: [
    join(__dirname, 'src/**/*!(*.spec).{cjs,mjs,js,jsx,ts,tsx,md,mdx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  presets: [require('../../tailwind-workspace-presets.js')],
} satisfies Config;
