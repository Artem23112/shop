import { FilterPanelCategory } from '@components/ui/filter-panel/components/filter-panel-sections/filter-panel-category/filter-panel-category';
import { FilterPanelPrice } from '@components/ui/filter-panel/components/filter-panel-sections/filter-panel-price/filter-panel-price';
import clsx from 'clsx';
import type { FC } from 'react';
import s from './filter-panel.module.scss';

type Props = {
  className?: string;
};

export const FilterPanel: FC<Props> = ({ className }) => {
  return (
    <div className={clsx(s.wrapper, className)}>
      <FilterPanelCategory />
      <FilterPanelPrice />
    </div>
  );
};
