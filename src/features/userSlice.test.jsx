import reducer, { setUser, logout } from './userSlice';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    user: null,
    status: 'idle',
    error: null,
  });
});

test('should handle setting the user', () => {
  const previousState = {
    user: null,
    status: 'idle',
    error: null,
  };

  const user = {
    id: 1,
    displayName: 'John Doe',
    photoURL: 'https://example.com/avatar.png',
  };
  expect(reducer(previousState, setUser(user))).toEqual({
    user,
    status: 'idle',
    error: null,
  });
});

test('should handle logging out', () => {
  const previousState = {
    user: {
      id: 1,
      displayName: 'John Doe',
      photoURL: 'https://example.com/avatar.png',
    },
    status: 'idle',
    error: null,
  };

  expect(reducer(previousState, logout())).toEqual({
    user: null,
    status: 'idle',
    error: null,
  });
});
