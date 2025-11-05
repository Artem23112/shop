import type { WishlistPayload, WishlistState } from '@features/wishlist/types';
import { createSlice } from '@reduxjs/toolkit';
import { UserListKeys } from '@utils/constants/LS-keys';

const initialState: WishlistState = {
  items: JSON.parse(localStorage.getItem(UserListKeys.wishlist) || '[]'),
};

export const wishlistSlice = createSlice({
  name: 'wishlistSlice',
  initialState,
  reducers: {
    wishlistToggleItem: (state, { payload }: WishlistPayload) => {
      if (state.items.includes(payload)) {
        state.items = state.items.filter((id) => id !== payload);
      } else {
        state.items.push(payload);
      }
    },

    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { wishlistToggleItem, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
