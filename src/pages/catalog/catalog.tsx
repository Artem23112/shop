import { FilterPanel } from '@components/ui/filter-panel/filter-panel';
import { Toolbar } from '@components/ui/toolbar/toolbar';
import clsx from 'clsx';
import s from './catalog.module.scss';
import { CatalogList } from '@pages/catalog/components/catalog-list/catalog-list';

export const CatalogPage = () => {
  return (
    <div className={clsx('container', s.catalogWrapper)}>
      <Toolbar className={s.toolbar} />
      <FilterPanel className={s.filterPanel} />
      <CatalogList className={s.products} />
    </div>
  );
};
