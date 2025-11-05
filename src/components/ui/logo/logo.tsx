import clsx from 'clsx';
import s from './logo.module.scss';
import type { FC } from 'react';

type Props = {
  className?: string;
};

export const Logo: FC<Props> = ({ className }) => {
  return <p className={clsx(s.logo, className)}>ShopHub</p>;
};
