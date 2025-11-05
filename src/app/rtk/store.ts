import { localStorageListener } from '@app/rtk/middleware/local-storage-listener';
import authSliceReducer from '@features/auth/auth-slice';
import { authApi } from '@features/auth/authApi';
import cartSliceReducer from '@features/cart/cartSlice';
import { categoriesApi } from '@features/categories/categoriesApi';
import filterSliceReducer from '@features/filters/filtersSlice';
import { productApi } from '@features/products/productsApi';
import wishlistSliceReducer from '@features/wishlist/wishlistSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    cartSliceReducer,
    wishlistSliceReducer,
    filterSliceReducer,
    authSliceReducer,
    [productApi.reducerPath]: productApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .prepend(localStorageListener.middleware)
      .concat(productApi.middleware)
      .concat(categoriesApi.middleware)
      .concat(authApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
