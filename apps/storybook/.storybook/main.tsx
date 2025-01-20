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
    {
      name: '@storybook/addon-controls',
      options: {},
    },
    {
      name: '@storybook/addon-toolbars',
      options: {},
    },
    {
      name: '@storybook/addon-measure',
      options: {},
    },
    {
      name: '@storybook/addon-outline',
      options: {},
    },
    {
      name: '@storybook/addon-docs',
      options: {
        // Enables JSX support in MDX for projects that aren't configured to handle the format.
        configureJSX: true,
        // Support markdown in MDX files
        transcludeMarkdown: true,
      },
    },
    {
      name: '@storybook/addon-actions',
      options: {},
    },
    // https://github.com/storybookjs/storybook/tree/next/code/addons/themes
    '@storybook/addon-themes',
    // https://www.npmjs.com/package/@whitespace/storybook-addon-html
    '@whitespace/storybook-addon-html',
    // https://github.com/storybookjs/storybook/tree/next/code/addons/a11y
    '@storybook/addon-a11y',
    // https://storybook.js.org/addons/@etchteam/storybook-addon-status
    // '@etchteam/storybook-addon-status',
    // https://github.com/storybookjs/storybook/tree/next/code/addons/interactions
    '@storybook/addon-interactions',
    // https://docs.chromatic.com/docs/visual-tests-addon/
    // '@chromatic-com/storybook',
    // https://storybook.js.org/addons/@storybook/addon-designs/
    // '@storybook/addon-designs',
    // https://github.com/storybookjs/storybook/tree/next/code/addons/links
    '@storybook/addon-links',
  ],
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
    builder: '@storybook/builder-vite',
  },
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
  features: {
    /* Builds stories.json to help with on-demand loading */
    // buildStoriesJson: true,

    disallowImplicitActionsInRenderV8: true,
    experimentalRSC: true,
  },
  async viteFinal(config, { configType }) {
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      publicDir: '../public',
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: [
          '@whitespace/storybook-addon-html',
          '@storybook/blocks',
          '@storybook/theming',
          '@storybook/components',
        ],
      },
      build: {
        sourcemap: configType === 'DEVELOPMENT',
        manifest: true,
        minify: configType === 'PRODUCTION',
      },
      css: {
        devSourcemap: configType === 'DEVELOPMENT',
      },
      resolve: {
        // alias: components.map((component) => ({
        //   find: `@spectrum-css/${component}`,
        //   replacement: path.resolve(__dirname, `../components/${component}`),
        // })),
      },
    });
  },
  build: {
    test: {
      disabledAddons: ['@whitespace/storybook-addon-html', '@storybook/addon-interactions'],
      disableBlocks: false,
      disableAutoDocs: false,
      disableMDXEntries: false,
      disableDocgen: false,
    },
  },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
