import { useState } from 'react';
import s from './chose-product-count.module.scss';

export const ChoseProductCount = () => {
  const [productCount, setProductCount] = useState('1');

  const decrement = () => {
    setProductCount((prev) => {
      const prevNum = +prev;
      if (prevNum > 1) return `${prevNum - 1}`;
      return '1';
    });
  };

  const increment = () => {
    setProductCount((prev) => `${+prev + 1}`);
  };

  const countInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputtedValue = e.target.value;
    if (isNaN(+inputtedValue) || (+inputtedValue < 1 && inputtedValue !== ''))
      setProductCount('1');
    else setProductCount(inputtedValue);
  };

  return (
    <div className={s.choseCount}>
      <h6 className={s.choseCountTitle}>Количество: </h6>
      <div className={s.choseCountFunctionality}>
        <button
          className={s.changeCount}
          onClick={decrement}
          disabled={+productCount === 1}
        >
          -
        </button>
        <input
          className={s.countInput}
          value={productCount}
          onChange={countInputHandler}
          type="text"
        />
        <button className={s.changeCount} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};
