import clsx from 'clsx';
import type { FC } from 'react';
import s from './add-to-cart.module.scss';

type Props = {
  isActive: boolean;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const AddToCart: FC<Props> = ({
  className = '',
  children = 'Add to cart',
  isActive,
  ...attr
}) => {
  return (
    <button className={clsx(s.btn, className, isActive && s.active)} {...attr}>
      {children}
    </button>
  );
};
