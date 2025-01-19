import type { StorybookConfig } from '@storybook/react-vite';
import { join } from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      // Supported booleans: actions, controls, docs, toolbars, measure, outline.
      options: {
        // Don't need viewports b/c the medium/large contexts are used to support scaling.
        // viewport: false,
        // Don't need backgrounds b/c this is handled by the color contexts.
        backgrounds: false,
        // Configure separately
        // docs: false,
      },
    },
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  docs: {
    defaultName: 'Documentation',
  },
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: join(__dirname, '../vite.config.ts'),
      },
    },
  },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
