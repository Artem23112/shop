import { useActions, useAppSelector } from '@app/rtk/hooks/hooks';
import { FilterOption } from '@components/ui/filter-panel/components/filter-option/filter-option';
import { FilterPanelSectionWrapper } from '@components/ui/filter-panel/components/filter-panel-section-wrapper/filter-panel-section-wrapper';
import { useGetAllCategoriesQuery } from '@features/categories/categoriesApi';
import { filterStateSelector } from '@features/filters/selectors';
import clsx from 'clsx';
import { useState } from 'react';
import s from './filter-panel-category.module.scss';

const initialCountToShow = 8;

export const FilterPanelCategory = () => {
  const { data: categories, isLoading } = useGetAllCategoriesQuery();
  const { chosenCategoryId } = useAppSelector(filterStateSelector);
  const { toggleCategoryId } = useActions();
  const [countCategoriesShown, setCountCategoriesShown] =
    useState<number>(initialCountToShow);

  const isShowExpandBtn: boolean =
    !isLoading &&
    !!categories?.length &&
    categories.length > countCategoriesShown;

  const showCollapseBtn: boolean =
    !isLoading &&
    !!categories?.length &&
    categories.length <= countCategoriesShown &&
    categories.length > initialCountToShow;

  return (
    <FilterPanelSectionWrapper title="Categories">
      <ul className={s.categoriesList}>
        {categories?.slice(0, countCategoriesShown).map((category) => {
          return (
            <li className={s.listItem} key={category.id}>
              <FilterOption
                categoryInfo={category}
                checked={chosenCategoryId === category.id}
                type="radio"
                name="filter-category"
                readOnly
                onClick={() => toggleCategoryId(category.id)}
              />
            </li>
          );
        })}

        {isShowExpandBtn && (
          <button
            className={clsx(s.expandBtn, s.toggleBtn)}
            onClick={() => setCountCategoriesShown((prev) => prev + prev)}
          >
            Expand
          </button>
        )}
        {showCollapseBtn && (
          <button
            className={clsx(s.collapseBtn, s.toggleBtn)}
            onClick={() => setCountCategoriesShown(initialCountToShow)}
          >
            Collapse
          </button>
        )}
      </ul>
    </FilterPanelSectionWrapper>
  );
};
