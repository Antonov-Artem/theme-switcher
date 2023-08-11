import { createSlice } from '@reduxjs/toolkit';
import { Theme } from './types';

interface ThemeState {
  theme: Theme;
}

const initialState = {
  theme: 'light',
} as ThemeState;

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { toggle } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
