import type { Meta, StoryObj } from '@storybook/react';

import {
  BodyComposition,
  CodeComposition,
  DetailComposition,
  HeadingComposition,
  Props,
  TypographyComposition,
} from './typography.composition';

const meta: Meta<typeof TypographyComposition> = {
  title: 'apsphysics.prism/theme/typography',
  component: (props: Props) => <div {...props}></div>,
  args: {},
};

export const Typography: Story = {
  render: TypographyComposition,
  args: {},
};

export default meta;
type Story = StoryObj<typeof TypographyComposition>;

export const Heading: Story = {
  render: HeadingComposition,
  args: {},
};

export const Body: Story = {
  render: BodyComposition,
  args: {},
};

export const Detail: Story = {
  render: DetailComposition,
  args: {},
};

export const Code: Story = {
  render: CodeComposition,
  args: {},
};
