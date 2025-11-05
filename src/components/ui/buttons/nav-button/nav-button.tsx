import type { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './nav-button.module.scss';

type Props = {
  to: string;
  icon: React.ReactNode;
  count: number;
};

export const NavButton: FC<Props> = ({ to, icon, count }) => {
  return (
    <Link className={s.link} to={to}>
      {icon}
      <span className={s.count}>{count}</span>
    </Link>
  );
};
