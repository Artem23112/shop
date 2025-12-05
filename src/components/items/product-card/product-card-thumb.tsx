import type { Product } from '@features/products/types';
import { ROUTES } from '@utils/constants/routes';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './product-card.module.scss';

type Props = {
  productInfo: Product;
};

export const ProductCardThumb: FC<Props> = ({ productInfo }) => {
  return (
    <Link
      className={s.thumbCard}
      to={ROUTES.CATALOG(productInfo.id.toString())}
    >
      <img className={s.thumbImg} src={productInfo.images[0]} alt="" />
      <div className={s.thumbTextWrapper}>
        <h4 className={s.thumbTitle}>{productInfo.title}</h4>
        <span className={s.thumbPrice}>${productInfo.price}</span>
      </div>
    </Link>
  );
};
