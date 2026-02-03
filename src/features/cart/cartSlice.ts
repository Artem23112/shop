import type { RootState } from '@app/rtk/store';
import type {
  CartSetCountPayload,
  CartState,
  CartTogglePayload,
} from '@features/cart/types';
import { createSlice } from '@reduxjs/toolkit';
import { UserListKeys } from '@utils/constants/LS-keys';

const initialState: CartState = JSON.parse(
  localStorage.getItem(UserListKeys.cart) || '{}'
);

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    cartToggleItem: (state, { payload }: CartTogglePayload) => {
      debugger
      if (Object.keys(state).includes(payload.toString())) {
        delete state[payload];
      } else {
        state[payload] = 1;
      }
    },
    cartSetItemCount: (state, { payload }: CartSetCountPayload) => {
      state[payload.id] = payload.count;
    },
    clearCart: (state) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state = {};
    },
  },
});

export const cartItemsIdsSelector = (state: RootState) =>
  Object.keys(state.cartSliceReducer).map((id) => parseInt(id));
export const cartItemsInfoSelector = (state: RootState) =>
  state.cartSliceReducer;

export const { cartToggleItem, cartSetItemCount, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
