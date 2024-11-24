import { Config } from 'style-dictionary';

// If you need to add multiple configutations Config[] is supported
const config: Config | Config[] = {
  source: ['src/tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'css/',
      files: [
        {
          destination: 'global-vars.css',
          format: 'css/variables',
        },
      ],
    },
  },
};

export default config;
