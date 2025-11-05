import type { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import s from './product-card.module.scss';
import type { CatalogView } from '@components/ui/toolbar/toolbar';
import clsx from 'clsx';

const skeletonColors = {
  baseColor: '#e0e0e0',
  highlightColor: '#f8f8f8',
};

type Props = { view?: CatalogView };

export const ProductCardSkeleton: FC<Props> = ({ view = 'grid' }) => {
  return (
    <div className={clsx(s.card, s[view])}>
      <Skeleton className={s.img} {...skeletonColors} />

      <div className={s.infoWrapper}>
        <h3 className={s.title}>
          <Skeleton width="80%" {...skeletonColors} />
        </h3>

        <p className={s.price}>
          <Skeleton width={60} {...skeletonColors} />
        </p>

        <div className={s.btnWrapper}>
          <Skeleton className={s.skeletonCartBtn} {...skeletonColors} />
          <Skeleton className={s.skeletonWishBtn} {...skeletonColors} />
        </div>
      </div>
    </div>
  );
};
