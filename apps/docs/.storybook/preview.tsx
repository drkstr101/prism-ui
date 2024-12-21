import { Preview } from '@storybook/react';

import './styles.css';

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
    (Story) => (
      <div className="prism prism--medium prism--light">
        <article className="bg-background-base h-full p-2">
          <Story />
        </article>
      </div>
    ),
  ],
};

export default preview;
