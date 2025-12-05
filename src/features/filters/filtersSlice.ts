import type { CatalogView } from '@components/ui/toolbar/toolbar';
import type {
  FilterInitialState,
  PriceRange,
  SortBy,
} from '@features/filters/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: FilterInitialState = {
  sortBy: 'all',
  priceRange: {
    min: 0,
    max: 10000,
  },
  chosenCategoryId: null,
  view: 'grid',
  searchValue: '',
};

export const filterSlice = createSlice({
  initialState,
  name: 'filterSlice',
  reducers: {
    setSortBy: (state, action: PayloadAction<SortBy>) => {
      state.sortBy = action.payload;
    },
    setPriceRange: (state, action: PayloadAction<PriceRange>) => {
      state.priceRange = action.payload;
    },
    toggleCategoryId: (state, { payload: id }: PayloadAction<number>) => {
      if (state.chosenCategoryId === id) {
        state.chosenCategoryId = null;
      } else {
        state.chosenCategoryId = id;
      }
    },
    setView: (state, action: PayloadAction<CatalogView>) => {
      state.view = action.payload;
    },
    changeSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
    },
  },
});

export const { setSortBy, setPriceRange, toggleCategoryId } =
  filterSlice.actions;

export default filterSlice.reducer;
