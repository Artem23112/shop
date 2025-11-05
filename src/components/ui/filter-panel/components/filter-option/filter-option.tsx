import type { Category } from '@features/categories/types';
import type { FC } from 'react';
import s from './filter-option.module.scss';

type Props = {
  categoryInfo: Category;
  type: 'checkbox' | 'radio';
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FilterOption: FC<Props> = ({ categoryInfo, type, ...attr }) => {
  return (
    <div>
      <label className={s.label}>
        <input className={s.input} type={type} {...attr} />
        <p className={s.categoryText}>{categoryInfo.name}</p>
      </label>
    </div>
  );
};
