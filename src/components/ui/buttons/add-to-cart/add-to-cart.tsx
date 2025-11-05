import clsx from 'clsx';
import type { FC } from 'react';
import s from './add-to-cart.module.scss';

type Props = {
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const AddToCart: FC<Props> = ({
  className = '',
  children = 'Add to cart',
  ...attr
}) => {
  return (
    <button className={clsx(s.btn, className)} {...attr}>
      {children}
    </button>
  );
};
