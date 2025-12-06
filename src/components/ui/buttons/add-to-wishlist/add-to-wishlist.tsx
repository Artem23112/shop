import clsx from 'clsx';
import type { FC } from 'react';
import s from './add-to-wishlist.module.scss';

type Props = {
  isActive: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const AddToWishlist: FC<Props> = ({
  className = '',
  isActive,
  ...attr
}) => {
  return (
    <button className={clsx(s.btn, className, isActive && s.active)} {...attr}>
      ❤️
    </button>
  );
};
