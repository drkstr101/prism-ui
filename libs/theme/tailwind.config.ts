import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { join } from 'path';
import { type Config } from 'tailwindcss';

export default {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require('../../tailwind-workspace-presets.js')],
} satisfies Config;
