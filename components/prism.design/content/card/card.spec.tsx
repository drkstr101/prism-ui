import React from 'react';
import { render } from '@testing-library/react';
import { BasicCard } from './card.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicCard />);
  const rendered = getByText('Lorem Ipsum is simply dummy text of the printing and typesetting industry');
  expect(rendered).toBeTruthy();
});
