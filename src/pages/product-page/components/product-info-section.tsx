import { useActions, useAppSelector } from '@app/rtk/hooks/hooks';
import { AddToCart } from '@components/ui/buttons/add-to-cart/add-to-cart';
import { AddToWishlist } from '@components/ui/buttons/add-to-wishlist/add-to-wishlist';
import { cartItemsSelector } from '@features/cart/cartSlice';
import type { Product } from '@features/products/types';
import { wishlistItemsSelector } from '@features/wishlist/selectors';
import { ChoseProductCount } from '@pages/product-page/components/chose-product-count/chose-product-count';
import clsx from 'clsx';
import { useState, type FC } from 'react';
import s from './product-info-section.module.scss';

type PropsT = {
  productInfo: Product;
};

export const ProductInfoSection: FC<PropsT> = ({ productInfo }) => {
  const [currentImgSrc, setCurrentImgSrc] = useState<string>(
    productInfo.images[0]
  );
  const wishlistItems = useAppSelector(wishlistItemsSelector);
  const cartItems = useAppSelector(cartItemsSelector);
  const { cartToggleItem, wishlistToggleItem } = useActions();

  return (
    <div className={s.productSectionContainer}>
      <div className={s.productGallery}>
        <img className={s.mainImg} src={currentImgSrc} alt="Product Image" />
        <ul className={s.thumbnailImagesContainer}>
          {productInfo.images.map((src, index) => {
            return (
              <li key={src}>
                <button
                  className={clsx(src === currentImgSrc && s.active)}
                  onClick={() => setCurrentImgSrc(src)}
                >
                  <img
                    className={s.thumbnailImg}
                    src={src}
                    alt={`${productInfo.slug}/${index + 1}`}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={s.productInfo}>
        <h1 className={s.productTitle}>{productInfo.title}</h1>
        <span className={s.productPrice}>${productInfo.price}</span>
        <p className={s.productDescription}>{productInfo.description}</p>
        <ChoseProductCount />
        <div className={s.btnsWrapper}>
          <AddToCart
            isActive={cartItems.includes(productInfo.id)}
            onClick={() => cartToggleItem(productInfo.id)}
          />
          <AddToWishlist
            isActive={wishlistItems.includes(productInfo.id)}
            onClick={() => wishlistToggleItem(productInfo.id)}
          />
        </div>
      </div>
    </div>
  );
};
