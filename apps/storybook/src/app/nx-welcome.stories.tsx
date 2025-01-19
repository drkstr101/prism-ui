import type { Meta, StoryObj } from '@storybook/react';
import NxWelcome from './nx-welcome';

type Story = StoryObj<typeof NxWelcome>;

export const Composition: Story = {
  args: {},
};

export default {
  title: 'apsphysics.prism/app/nx-welcome',
  component: NxWelcome,
  args: {},
} satisfies Meta<typeof NxWelcome>;
