import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    saveAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
});

export const { saveAccessToken } = authSlice.actions;

export default authSlice.reducer;
