import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a page title', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Design System Demo/i)).toBeTruthy();
  });
});
