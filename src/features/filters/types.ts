import type { CatalogView } from '@components/ui/toolbar/toolbar';

export interface FilterInitialState {
  sortBy: SortBy;
  priceRange: PriceRange;
  chosenCategoryId: number | null;
  view: CatalogView;
}

export type SortBy = `${SORTBY}`;
export function SortByGuard(val: string): val is SortBy {
  return Object.values(SORTBY).includes(val as SORTBY);
}

export type PriceRange = {
  min: number;
  max: number;
};

enum SORTBY {
  All = 'all',
  Ascending = 'asc',
  Descending = 'desc',
}
