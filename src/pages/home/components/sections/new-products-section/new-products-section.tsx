import { ProductList } from '@components/product-list/product-list';
import { ProductListSkeleton } from '@components/product-list/product-list-skeleton';
import { useGetProductsByFilterQuery } from '@features/products/productsApi';
import { SectionWithTitle } from '@layout/section-with-title/section-with-title';

export const NewProductsSection = () => {
  const { data, isLoading } = useGetProductsByFilterQuery({
    limit: 6,
    offset: 10,
  }); // по-хорошему должен с бека получать новые

  return (
    <SectionWithTitle title="Just Arrived" subtitle="Fresh new items in stock">
      {!isLoading ? (
        <ProductList products={data || []} />
      ) : (
        <ProductListSkeleton countItems={6} />
      )}
    </SectionWithTitle>
  );
};
