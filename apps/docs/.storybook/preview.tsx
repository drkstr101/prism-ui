import { Preview } from '@storybook/react';

import '@apsphysics/prism-ui.theme/index.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="prism prism--medium prism--light">
        <Story />
      </div>
    ),
  ],
};

export default preview;
