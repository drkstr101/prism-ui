import type { Meta, StoryObj } from '@storybook/react';

import { TypographyComposition } from './typography.composition';

const meta: Meta<typeof TypographyComposition> = {
  title: 'apsphysics.prism-ui/theme/typography',
  component: TypographyComposition,
};

export default meta;
type Story = StoryObj<typeof TypographyComposition>;

export const Heading: Story = {
  render: () => (
    <>
      <div className="heading heading--3xl">Heading (3xl)</div>
      <div className="heading heading--2xl">Heading (2xl)</div>
      <div className="heading heading--xl">Heading (xl)</div>
      <div className="heading heading--lg">Heading (lg)</div>
      <div className="heading heading--md">Heading (md)</div>
      <div className="heading heading--sm">Heading (sm)</div>
      <div className="heading heading--xs">Heading (xs)</div>
      <div className="heading heading--2xs">Heading (2xs)</div>
    </>
  ),
};

export const Body: Story = {
  render: () => (
    <>
      <div className="body body--3xl">Body (3xl)</div>
      <div className="body body--2xl">Body (2xl)</div>
      <div className="body body--xl">Body (xl)</div>
      <div className="body body--lg">Body (lg)</div>
      <div className="body body--md">Body (md)</div>
      <div className="body body--sm">Body (sm)</div>
      <div className="body body--xs">Body (xs)</div>
    </>
  ),
};

export const Detail: Story = {
  render: () => (
    <>
      <div className="detail detail--xl">Detail (xl)</div>
      <div className="detail detail--lg">Detail (lg)</div>
      <div className="detail detail--md">Detail (md)</div>
      <div className="detail detail--sm">Detail (sm)</div>
    </>
  ),
};

export const Code: Story = {
  render: () => (
    <>
      <div className="code code--xl">Code (xl)</div>
      <div className="code code--lg">Code (lg)</div>
      <div className="code code--md">Code (md)</div>
      <div className="code code--sm">Code (sm)</div>
      <div className="code code--xs">Code (xs)</div>
    </>
  ),
};

export const Composition: Story = {};
