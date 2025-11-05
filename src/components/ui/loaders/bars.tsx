import s from './loaders.module.scss';

export const BarsLoader = () => {
  return (
    <div className={s.loaderContainer}>
      <div className={s.barsContainer}>
        <div className={s.bar}></div>
        <div className={s.bar}></div>
        <div className={s.bar}></div>
        <div className={s.bar}></div>
      </div>
      <div className={s.loadingDots}>
        <div className={s.dot}></div>
        <div className={s.dot}></div>
        <div className={s.dot}></div>
      </div>
    </div>
  );
};
