import { configureStore } from '@reduxjs/toolkit';
import { themeSlice } from 'entities/theme';

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
