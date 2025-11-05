import type { RootState } from '@app/rtk/store';

export const wishlistItemsSelector = (state: RootState) =>
  state.wishlistSliceReducer.items;
