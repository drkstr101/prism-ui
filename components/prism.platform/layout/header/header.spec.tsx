import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { BasicHeader } from './header.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicHeader />, {
    wrapper: ({ children }) => {
      return <MemoryRouter>{children}</MemoryRouter>;
    }
  });
  const rendered = getByText('Pied Piper');
  expect(rendered).toBeTruthy();
});
