import { ProductCardSkeleton } from '@components/items/product-card/product-card-skeleton';
import type { FC } from 'react';
import s from './product-list.module.scss';
import type { CatalogView } from '@components/ui/toolbar/toolbar';
import clsx from 'clsx';

type Props = {
  countItems: number;
  view?: CatalogView;
};

export const ProductListSkeleton: FC<Props> = ({
  countItems,
  view = 'grid',
}) => {
  return (
    <ul className={clsx(s.popularProducts, s[view])}>
      {new Array(countItems).fill(0).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </ul>
  );
};
