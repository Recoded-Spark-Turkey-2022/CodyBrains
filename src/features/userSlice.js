import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    // The `reducers` field lets us define reducers and generate associated actions
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    createUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, createUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
