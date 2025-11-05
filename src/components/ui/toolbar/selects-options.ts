import type { SortBy } from '@features/filters/types';

export const sortSelectOptions: SortSelectOption[] = [
  {
    id: 1,
    value: 'all',
    text: 'All',
  },
  {
    id: 2,
    value: 'asc',
    text: 'Price ↑',
  },
  {
    id: 3,
    value: 'desc',
    text: 'Price ↓',
  },
];

type SortSelectOption = {
  id: number;
  value: SortBy;
  text: string;
};
