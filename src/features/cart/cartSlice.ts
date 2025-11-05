import type { RootState } from '@app/rtk/store';
import type { CartPayload, CartState } from '@features/cart/types';
import { createSlice } from '@reduxjs/toolkit';
import { UserListKeys } from '@utils/constants/LS-keys';

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem(UserListKeys.cart) || '[]'),
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    cartToggleItem: (state, { payload }: CartPayload) => {
      if (state.items.includes(payload)) {
        state.items = state.items.filter((id) => id !== payload);
      } else {
        state.items.push(payload);
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const cartItemsSelector = (state: RootState) =>
  state.cartSliceReducer.items;

export const { cartToggleItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
