import type { AppDispatch, RootState } from '@app/rtk/store';
import { cartSlice } from '@features/cart/cartSlice';
import { filterSlice } from '@features/filters/filtersSlice';
import { wishlistSlice } from '@features/wishlist/wishlistSlice';
import { bindActionCreators } from '@reduxjs/toolkit';
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const actions = {
  ...filterSlice.actions,
  ...cartSlice.actions,
  ...wishlistSlice.actions,
};

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(actions, dispatch);
};
