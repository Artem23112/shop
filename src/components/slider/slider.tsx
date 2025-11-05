import { Slide } from '@components/slider/slide/slide';
import { SliderDots } from '@components/slider/slider-dots/slider-dots';
import type { SlideInfo } from '@components/slider/types';
import { useEffect, useState, type FC } from 'react';
import s from './slider.module.scss';

type Props = { slidesInfo: SlideInfo[] };

export const Slider: FC<Props> = ({ slidesInfo }) => {
  const [curActive, setCurActive] = useState<number>(1);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurActive((prev) => {
        if (prev === slidesInfo.length) return 1;
        return prev + 1;
      });
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [slidesInfo.length, curActive]);

  return (
    <div className={s.slider}>
      {slidesInfo.map((slideInfo) => {
        return (
          <Slide
            key={slideInfo.id}
            slideInfo={slideInfo}
            isActive={curActive === slideInfo.id}
          />
        );
      })}
      <SliderDots
        count={slidesInfo.length}
        activeNumber={curActive}
        onClick={(itemNum) => void setCurActive(itemNum)}
      />
    </div>
  );
};
