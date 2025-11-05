import clsx from 'clsx';
import type { FC } from 'react';
import s from './slider-dots.module.scss';

type Props = {
  count: number;
  activeNumber: number;
  onClick: (itemNum: number) => void;
};

export const SliderDots: FC<Props> = ({ count, activeNumber, onClick }) => {
  const arr = new Array(count).fill(0);
  return (
    <ul className={s.dotsWrapper}>
      {arr.map((_, index) => {
        return (
          <li key={index}>
            <button
              onClick={() => onClick(index + 1)}
              className={clsx(s.dot, activeNumber === index + 1 && s.active)}
            />
          </li>
        );
      })}
    </ul>
  );
};
