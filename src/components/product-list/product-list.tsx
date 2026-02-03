import { useActions, useAppSelector } from '@app/rtk/hooks/hooks';
import { ProductCard } from '@components/items/product-card/product-card';
import type { CatalogView } from '@components/ui/toolbar/toolbar';
import { cartItemsIdsSelector } from '@features/cart/cartSlice';
import type { Product } from '@features/products/types';
import { wishlistItemsSelector } from '@features/wishlist/selectors';
import { UserListKeys } from '@utils/constants/LS-keys';
import clsx from 'clsx';
import type { FC } from 'react';
import s from './product-list.module.scss';

type Props = {
  itemsView?: CatalogView;
  products: Product[];
};

export const ProductList: FC<Props> = ({ itemsView = 'grid', products }) => {
  const cartProductsIds = useAppSelector(cartItemsIdsSelector);
  const wishlistProductsIds = useAppSelector(wishlistItemsSelector);
  const { cartToggleItem, wishlistToggleItem } = useActions();

  const toggleIds: ToggleIdsFC = (itemId, type) => {
    const toggle =
      type === UserListKeys.cart ? cartToggleItem : wishlistToggleItem;
    toggle(itemId);
  };

  return (
    <ul className={clsx(s.productsList, s[itemsView])}>
      {!!products?.length &&
        products.map((product) => (
          <li key={product.id}>
            <ProductCard
              view={itemsView}
              info={product}
              isActiveBtns={{
                cartBtn: cartProductsIds.includes(product.id),
                wishlistBtn: wishlistProductsIds.includes(product.id),
              }}
              onActionBtnsClick={toggleIds}
            />
          </li>
        ))}
    </ul>
  );
};

export type ToggleIdsFC = (itemId: number, type: ToggleIdsVariants) => void;
export type ToggleIdsVariants = 'cart' | 'wishlist';
