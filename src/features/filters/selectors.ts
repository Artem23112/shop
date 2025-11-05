import type { RootState } from '@app/rtk/store';

export const filterStateSelector = (state: RootState) =>
  state.filterSliceReducer;

export const catalogViewSelector = (state: RootState) =>
  state.filterSliceReducer.view;
