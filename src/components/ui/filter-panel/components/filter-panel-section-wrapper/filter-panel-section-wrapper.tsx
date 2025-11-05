import clsx from 'clsx';
import { useEffect, useRef, useState, type FC } from 'react';
import s from './filter-panel-section-wrapper.module.scss';

type Props = {
  title: string;
  children: React.ReactElement;
};

export const FilterPanelSectionWrapper: FC<Props> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    const content = contentRef.current;
    if (!el || !content) return;

    const setHeight = () => {
      const height = content.scrollHeight;

      if (isOpen) el.style.height = height + 'px';
      else el.style.height = '0px';
    };
    setHeight();

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const handleResize = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setHeight();
        timeoutId = null;
      }, 300);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isOpen, children]);

  return (
    <div className={s.section}>
      <button className={s.title} onClick={() => setIsOpen((prev) => !prev)}>
        {title} <span className={clsx(s.arrow, isOpen && s.active)}>▼</span>
      </button>
      <div className={s.wrapper} ref={wrapperRef}>
        <div className={s.childrenWrapper} ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
};
