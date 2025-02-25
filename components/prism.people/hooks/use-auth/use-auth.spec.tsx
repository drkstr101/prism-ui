import { userMock } from '@prism/people.entities.user';
import { MockProvider } from '@prism/platform.testing.mock-provider';
import { act, renderHook } from '@testing-library/react';
import { useAuth } from './use-auth.js';

it('should return the authinticated user', () => {
  const { result } = renderHook(() => useAuth(userMock.larry), {
    wrapper: ({ children }) => <MockProvider>{children}</MockProvider>,
  });

  expect(result.current.user?.username).toBe('larry');
});

it('should logout a user', async () => {
  // Set a user before logging out.
  const { result } = renderHook(() => useAuth(userMock.larry), {
    wrapper: ({ children }) => {
      return <MockProvider>{children}</MockProvider>;
    },
  });

  act(() => {
    result.current.logout();
  });

  expect(result.current.user).toBeUndefined();
});
