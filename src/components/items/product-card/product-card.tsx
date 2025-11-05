import type {
  ToggleIdsFC,
  ToggleIdsVariants,
} from '@components/product-list/product-list';
import { AddToCart } from '@components/ui/buttons/add-to-cart/add-to-cart';
import { AddToWishlist } from '@components/ui/buttons/add-to-wishlist/add-to-wishlist';
import type { CatalogView } from '@components/ui/toolbar/toolbar';
import type { Product } from '@features/products/types';
import { ROUTES } from '@utils/constants/routes';
import clsx from 'clsx';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './product-card.module.scss';

type Props = {
  view: CatalogView;
  info: Product;
  isActiveBtns: {
    cartBtn: boolean;
    wishlistBtn: boolean;
  };
  onActionBtnsClick: ToggleIdsFC;
};

export const ProductCard: FC<Props> = ({
  view,
  info,
  isActiveBtns,
  onActionBtnsClick,
}) => {
  function safeOnClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    type: ToggleIdsVariants
  ) {
    e.preventDefault();
    e.stopPropagation();
    onActionBtnsClick(info.id, type);
  }

  return (
    <Link
      className={clsx(s.card, s[view])}
      to={ROUTES.CATALOG(info.id.toString())}
    >
      <img className={s.img} src={info.images[0]} alt={info.slug} />
      <div className={s.infoWrapper}>
        <h3 className={s.title}>{info.title}</h3>

        <p className={s.price}>${info.price}</p>

        <div className={s.btnWrapper}>
          <AddToCart
            className={clsx(isActiveBtns.cartBtn && s.cartBtnActive, s.cartBtn)}
            onClick={(e) => safeOnClick(e, 'cart')}
          />
          <AddToWishlist
            className={clsx(
              isActiveBtns.wishlistBtn && s.wishlistBtnActive,
              s.wishlistBtn
            )}
            onClick={(e) => safeOnClick(e, 'wishlist')}
          />
        </div>
      </div>
    </Link>
  );
};
