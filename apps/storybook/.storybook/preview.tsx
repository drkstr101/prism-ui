import { withThemeByClassName } from '@storybook/addon-themes';
import { Preview } from '@storybook/react';

import '@apsphysics/prism-ui.theme/styles.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'light', value: '#e6e6e6' },
        { name: 'dark', value: '#0e0e0e' },
      ],
      default: 'light',
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'prism prism--medium prism--light',
        dark: 'prism prism--medium prism--dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
