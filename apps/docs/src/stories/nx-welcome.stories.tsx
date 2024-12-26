import type { Meta, StoryObj } from '@storybook/react';
import Index from '../app/page';

type Story = StoryObj<typeof Index>;

export const Composition: Story = {
  args: {},
};

export default {
  title: 'apsphysics.prism-ui/nx-welcome',
  component: Index,
  args: {},
} satisfies Meta<typeof Index>;
