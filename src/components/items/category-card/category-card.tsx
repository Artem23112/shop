import type { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './category-card.module.scss';

type Props = {
  name: string;
  imgUrl: string;
  to: string;
};

export const CategoryCard: FC<Props> = ({ to, name, imgUrl }) => {
  return (
    <Link to={to} className={s.card}>
      <img className={s.icon} src={imgUrl} alt={name} />
      <p className={s.name}>{name}</p>
    </Link>
  );
};
