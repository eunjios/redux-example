import {
  PayloadAction,
  createSlice,
} from '@reduxjs/toolkit';
import { RootState } from '.';

export const LIGHT_MODE = 'LIGHT';
export const DARK_MODE = 'DARK';
export const BLUE_MODE = 'BLUE';

export type Mode = 'LIGHT' | 'DARK' | 'BLUE';

interface ThemeState {
  mode: Mode;
}

const initialState: ThemeState = {
  mode: 'LIGHT',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<Mode>) => {
      state.mode = action.payload;
    },
  },
});

export const themeActions = themeSlice.actions;

export const selectMode = (state: RootState) =>
  state.theme.mode;

export default themeSlice.reducer;
