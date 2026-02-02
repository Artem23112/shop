import { useAppSelector } from '@app/rtk/hooks/hooks';
import { ProductList } from '@components/product-list/product-list';
import { ProductListSkeleton } from '@components/product-list/product-list-skeleton';
import { cartItemsSelector } from '@features/cart/cartSlice';
import { useGetAllProductsQuery } from '@features/products/productsApi';
import { SectionWithTitle } from '@layout/section-with-title/section-with-title';
import s from './cart-page.module.scss';

export const CartPage = () => {
  const cartItems = useAppSelector(cartItemsSelector);
  const { data: allProducts = [], isLoading } = useGetAllProductsQuery();
  // Bad way to receive all items from server, but server doesn't have endpoint with string of ids parameter
  const cartProducts = allProducts?.filter((product) =>
    cartItems.includes(product.id)
  );

  return (
    <SectionWithTitle title="Your Cart">
      {isLoading && <ProductListSkeleton countItems={4} view="list" />}
      {cartProducts.length > 0 ? (
        <ProductList itemsView={'list'} products={cartProducts} />
      ) : (
        <p className={s.emptyCart}>Sorry, seems like your cart is empty</p>
      )}
    </SectionWithTitle>
  );
};
