import type { SortBy } from '@features/filters/types';
import type { Product } from '@features/products/types';
import { useMemo } from 'react';

export const useSortProducts = (sortBy: SortBy, products: Product[] = []) => {
  const memoProducts = useMemo(() => {
    if (!products.length) return products;
    if (sortBy === 'all') return products;
    else if (sortBy === 'asc')
      return [...products].sort((a, b) => a.price - b.price);
    else if (sortBy === 'desc')
      return [...products].sort((a, b) => b.price - a.price);
    return products;
  }, [sortBy, products]);

  return memoProducts;
};
