import clsx from 'clsx';
import type { FC } from 'react';
import s from './add-to-cart.module.scss';

type Props = {
  textWhenActive?: string;
  isActive: boolean;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const AddToCart: FC<Props> = ({
  className = '',
  textWhenActive,
  isActive,
  children = 'In cart',
  ...attr
}) => {
  return (
    <button className={clsx(s.btn, className, isActive && s.active)} {...attr}>
      {isActive ? textWhenActive : children}
    </button>
  );
};
