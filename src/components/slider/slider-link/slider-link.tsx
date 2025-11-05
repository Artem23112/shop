import type { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './slider-link.module.scss';

type Props = {
  to: string;
  text: string;
};

export const SliderLink: FC<Props> = ({ to, text }) => {
  return (
    <Link className={s.btn} to={to}>
      {text}
    </Link>
  );
};
