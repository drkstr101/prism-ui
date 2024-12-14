import { render } from '@testing-library/react';

const Page = () => <div>Hello, World!</div>;

describe('Page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Page />);
    expect(baseElement).toBeTruthy();
  });
});
