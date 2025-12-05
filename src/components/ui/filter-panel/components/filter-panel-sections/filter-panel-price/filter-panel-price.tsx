import { useActions, useAppSelector } from '@app/rtk/hooks/hooks';
import { FilterPanelSectionWrapper } from '@components/ui/filter-panel/components/filter-panel-section-wrapper/filter-panel-section-wrapper';
import { filterStateSelector } from '@features/filters/selectors';
import s from './filter-panel-price.module.scss';

export const FilterPanelPrice = () => {
  const { priceRange } = useAppSelector(filterStateSelector);
  const { setPriceRange } = useActions();

  const onRangeChange = (val: number, type: 'min' | 'max') => {
    let newRange;
    if (type === 'min') newRange = { ...priceRange, min: val };
    else newRange = { ...priceRange, max: val };
    setPriceRange(newRange);
  };
  return (
    <FilterPanelSectionWrapper title="Price">
      <div className={s.priceWrapper}>
        <input
          className={s.rangeMin}
          type="number"
          value={priceRange.min.toString()}
          onChange={(e) => onRangeChange(+e.target.value, 'min')}
        />
        <input
          className={s.rangeMax}
          type="number"
          value={priceRange.max.toString()}
          onChange={(e) => onRangeChange(+e.target.value, 'max')}
        />
      </div>
    </FilterPanelSectionWrapper>
  );
};
