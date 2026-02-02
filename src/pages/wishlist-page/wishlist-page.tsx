import { useAppSelector } from '@app/rtk/hooks/hooks';
import type { RootState } from '@app/rtk/store';
import { ProductList } from '@components/product-list/product-list';
import { ProductListSkeleton } from '@components/product-list/product-list-skeleton';
import { useGetAllProductsQuery } from '@features/products/productsApi';
import { SectionWithTitle } from '@layout/section-with-title/section-with-title';
import s from './wishlist-page.module.scss';

export const WishlistPage = () => {
  const wishlistIds = useAppSelector(
    (state: RootState) => state.wishlistSliceReducer.items
  );
  const { data: allProducts = [], isLoading } = useGetAllProductsQuery();
  // Bad way to receive all items from server, but server doesn't have endpoint with string of ids parameter
  const wishlistProducts = allProducts?.filter((product) =>
    wishlistIds.includes(product.id)
  );

  return (
    <SectionWithTitle title="Your Wishlist">
      {isLoading && <ProductListSkeleton countItems={4} view="list" />}
      {wishlistProducts.length > 0 ? (
        <ProductList itemsView={'list'} products={wishlistProducts} />
      ) : (
        <p className={s.emptyWishlist}>
          Sorry, seems like your wishlist is empty
        </p>
      )}
    </SectionWithTitle>
  );
};
