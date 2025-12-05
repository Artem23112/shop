import type { CatalogView } from '@components/ui/toolbar/toolbar';

export interface FilterInitialState {
  sortBy: SortBy;
  priceRange: PriceRange;
  chosenCategoryId: number | null;
  view: CatalogView;
  searchValue: string;
}

export type SortBy = (typeof SORTBY)[keyof typeof SORTBY];
export function SortByGuard(val: string): val is SortBy {
  return Object.values(SORTBY).includes(val as SortBy);
}

export type PriceRange = {
  min: number;
  max: number;
};

export const SORTBY = {
  All: 'all',
  Ascending: 'asc',
  Descending: 'desc',
} as const;
