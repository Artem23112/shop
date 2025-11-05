import type { FC } from 'react';
import s from './page-title-block.module.scss';

type Props = {
  className?: string;
  title: string;
  subtitle?: string;
};

export const PageTitleBlock: FC<Props> = ({
  className = '',
  title,
  subtitle,
}) => {
  return (
    <div className={className}>
      <h2 className={s.title}>{title}</h2>
      {!!subtitle && <p className={s.subtitle}>{subtitle}</p>}
    </div>
  );
};
