import type { Meta, StoryObj } from '@storybook/react';
import DocsHero from '../components/docs-hero';

type Story = StoryObj<typeof DocsHero>;

export const Composition: Story = {
  args: {},
};

export default {
  title: 'apsphysics.prism-ui/nx-welcome',
  component: DocsHero,
  args: {},
} satisfies Meta<typeof DocsHero>;
