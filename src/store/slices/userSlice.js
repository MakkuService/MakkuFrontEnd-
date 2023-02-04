import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  data: null,
};

const slice = createSlice({
  name: 'auth',
  initialState: { data: null },
  reducers: {
    setCredentials: (
      state,
      { payload: data },
    ) => (data ? {
      ...state,
      data: {
        ...data,
      },
    } : { ...state, data: null }),
  },
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (statee) => state.user.data;
