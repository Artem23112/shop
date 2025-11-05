import { SliderLink } from '@components/slider/slider-link/slider-link';
import type { SlideInfo } from '@components/slider/types';
import clsx from 'clsx';
import type { FC } from 'react';
import s from './slide.module.scss';

type Props = {
  slideInfo: SlideInfo;
  isActive: boolean;
};

export const Slide: FC<Props> = ({ slideInfo, isActive }) => {
  return (
    <div className={clsx(s.slide, isActive && s.active)}>
      <div className={s.slideContent}>
        <h2 className={s.title}>{slideInfo.title}</h2>
        <p className={s.description}>{slideInfo.description}</p>
        <SliderLink to={slideInfo.to} text={slideInfo.linkText} />
      </div>
      <div className={s.slideOverlay} />
    </div>
  );
};
