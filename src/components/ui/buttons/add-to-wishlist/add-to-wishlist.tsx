import clsx from 'clsx';
import type { FC } from 'react';
import s from './add-to-wishlist.module.scss';

type Props = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const AddToWishlist: FC<Props> = ({ className = '', ...attr }) => {
  return (
    <button className={clsx(s.btn, className)} {...attr}>
      ❤️
    </button>
  );
};
