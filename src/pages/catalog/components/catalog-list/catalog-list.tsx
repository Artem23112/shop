import { useAppSelector } from '@app/rtk/hooks/hooks';
import { ProductList } from '@components/product-list/product-list';
import { ProductListSkeleton } from '@components/product-list/product-list-skeleton';
import { SpinnerLoader } from '@components/ui/loaders/spinner';
import { filterStateSelector } from '@features/filters/selectors';
import { useGetProductsByFilterQuery } from '@features/products/productsApi';
import type { Product } from '@features/products/types';
import { useSortProducts } from '@pages/catalog/components/catalog-list/useSortProducts';
import { useEffect, useRef, useState, type FC } from 'react';
import s from './catalog-list.module.scss';

type Props = {
  className?: string;
};

const ITEMS_PER_PAGE = 12;

export const CatalogList: FC<Props> = ({ className = '' }) => {
  const [offset, setOffset] = useState(0);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const { chosenCategoryId, priceRange, sortBy, view } =
    useAppSelector(filterStateSelector);

  const {
    data: products = [],
    isLoading,
    isFetching,
  } = useGetProductsByFilterQuery({
    limit: ITEMS_PER_PAGE,
    offset,
    priceMin: priceRange.min,
    priceMax: priceRange.max,
    categoryId: chosenCategoryId,
  });

  const downOfList = useRef<HTMLDivElement>(null);
  const canLoadMore = useRef(false);

  const sortedProducts = useSortProducts(sortBy, allProducts);

  // Сброс при изменении фильтров
  useEffect(() => {
    setAllProducts([]);
    setOffset(0);
  }, [chosenCategoryId, priceRange.min, priceRange.max]);

  // Добавление новых продуктов
  useEffect(() => {
    if (products.length > 0) {
      setAllProducts((prev) => [...prev, ...products]);
    }
  }, [products]);

  // Разрешение загрузки
  useEffect(() => {
    if (!isLoading && !isFetching && products.length === ITEMS_PER_PAGE) {
      canLoadMore.current = true;
    }
  }, [isLoading, isFetching, products.length, allProducts.length]);

  // Infinite scroll observer
  useEffect(() => {
    const node = downOfList.current;
    if (!node) return;

    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      if (!canLoadMore.current) return;

      canLoadMore.current = false;
      setOffset((prev) => prev + ITEMS_PER_PAGE);
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [allProducts.length]);

  const isInitialLoading = isLoading && allProducts.length === 0; // Начальная загрузка
  const isEmpty = !isLoading && !isFetching && sortedProducts.length === 0; // Пустой результат
  const hasProducts = !isLoading && sortedProducts.length > 0; // Есть продукты для отображения

  return (
    <div className={className}>
      {isInitialLoading && <ProductListSkeleton countItems={6} />}

      {hasProducts && (
        <>
          <ProductList itemsView={view} products={sortedProducts} />
          <div ref={downOfList} style={{ height: '1px' }} />
        </>
      )}

      {isEmpty && (
        <div className={s.emptyState}>
          <p className={s.emptyTitle}>We couldn't find any products</p>
          <p className={s.emptySubtitle}>
            Try changing your filters or browsing other categories.
          </p>
        </div>
      )}

      {isFetching && !isInitialLoading && (
        <SpinnerLoader className={s.spinnerLoader} />
      )}
    </div>
  );
};
