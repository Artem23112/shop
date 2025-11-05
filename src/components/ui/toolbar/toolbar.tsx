import { useActions, useAppSelector } from '@app/rtk/hooks/hooks';
import { sortSelectOptions } from '@components/ui/toolbar/selects-options';
import {
  catalogViewSelector,
  filterStateSelector,
} from '@features/filters/selectors';
import { SortByGuard } from '@features/filters/types';
import clsx from 'clsx';
import { type FC } from 'react';
import s from './toolbar.module.scss';

type Props = {
  className?: string;
};

export const Toolbar: FC<Props> = ({ className }) => {
  const { sortBy } = useAppSelector(filterStateSelector);
  const { setSortBy } = useActions();
  const view = useAppSelector(catalogViewSelector);
  const { setView } = useActions();

  const onSelectSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (SortByGuard(val)) setSortBy(val);
  };

  const toggleView = () => {
    if (view === 'grid') setView('list');
    else if (view === 'list') setView('grid');
  };

  return (
    <div className={clsx(s.wrapper, className)}>
      <div className={s.selectsWrapper}>
        <select
          className={s.select}
          value={sortBy}
          onChange={(e) => onSelectSort(e)}
        >
          {sortSelectOptions.map((option) => (
            <option key={option.id} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
      <div className={s.btnsWrapper}>
        <button
          className={clsx(s.btn, view === 'grid' && s.active)}
          onClick={toggleView}
        >
          ⊞
        </button>
        <button
          className={clsx(s.btn, view === 'list' && s.active)}
          onClick={toggleView}
        >
          ☰
        </button>
      </div>
    </div>
  );
};

export type CatalogView = 'grid' | 'list';
