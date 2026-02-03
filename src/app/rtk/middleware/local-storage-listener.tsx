import type { RootState } from '@app/rtk/store';
import { cartToggleItem } from '@features/cart/cartSlice';
import {
  clearWishlist,
  wishlistToggleItem,
} from '@features/wishlist/wishlistSlice';
import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { UserListKeys } from '@utils/constants/LS-keys';

export const localStorageListener = createListenerMiddleware();

localStorageListener.startListening({
  matcher: isAnyOf(wishlistToggleItem, cartToggleItem, clearWishlist),
  effect: (_, { getState }) => {
    const state = getState() as RootState;
    localStorage.setItem(
      UserListKeys.cart,
      JSON.stringify(state.cartSliceReducer)
    );
    localStorage.setItem(
      UserListKeys.wishlist,
      JSON.stringify(state.wishlistSliceReducer.items)
    );
  },
});
