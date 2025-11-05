import s from './loaders.module.scss';

export const RingsLoader = () => {
  return (
    <div className={s.loaderContainer}>
      <div className={s.loader}>
        <div className={s.loaderRing}></div>
        <div className={s.loaderRing}></div>
        <div className={s.loaderRing}></div>
        <div className={s.loaderCenter}></div>
      </div>
      <div className={s.loadingDots}>
        <div className={s.dot}></div>
        <div className={s.dot}></div>
        <div className={s.dot}></div>
      </div>
    </div>
  );
};
