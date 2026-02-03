import { ProductList } from '@components/product-list/product-list';
import { ProductListSkeleton } from '@components/product-list/product-list-skeleton';
import { useGetProductsByFilterQuery } from '@features/products/productsApi';
import { SectionWithTitle } from '@layout/section-with-title/section-with-title';

export const PopularProductsSection = () => {
  const { data, isLoading } = useGetProductsByFilterQuery({
    limit: 6,
    offset: 0,
  }); // по-хорошему с бека должен получать популярные

  return (
    <SectionWithTitle
      title="Best-Selling Products"
      subtitle="This month’s most popular items"
    >
      {!isLoading ? (
        <ProductList products={data || []} />
      ) : (
        <ProductListSkeleton countItems={6} />
      )}
    </SectionWithTitle>
  );
};
