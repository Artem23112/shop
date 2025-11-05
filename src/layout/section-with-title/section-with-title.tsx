import { PageTitleBlock } from '@components/blocks/page-title-block/page-title-block';
import type { FC } from 'react';
import s from './section-with-title.module.scss';

type Props = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
};

export const SectionWithTitle: FC<Props> = ({ children, title, subtitle }) => {
  return (
    <section>
      <div className="container">
        <PageTitleBlock
          className={s.titleModify}
          title={title}
          subtitle={subtitle}
        />
        {children}
      </div>
    </section>
  );
};
