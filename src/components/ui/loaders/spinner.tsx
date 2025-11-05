import clsx from 'clsx';
import s from './loaders.module.scss';
import type { FC } from 'react';

type Props = { className?: string };

export const SpinnerLoader: FC<Props> = ({ className }) => {
  return (
    <div className={clsx(s.loaderContainer, className)}>
      <div className={s.spinner}></div>
      <div className={s.loadingText}>LOADING</div>
    </div>
  );
};
