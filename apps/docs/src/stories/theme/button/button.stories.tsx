import type { Meta, StoryObj } from '@storybook/react';

import { Container, PrimaryComposition } from './button.composition';

type Story = StoryObj<typeof PrimaryComposition>;

const meta: Meta<typeof PrimaryComposition> = {
  title: 'apsphysics.prism-ui/theme/button',
  component: Container,
  args: {},
};

export const Primary: Story = {
  render: PrimaryComposition,
  args: {},
};

export default meta;
