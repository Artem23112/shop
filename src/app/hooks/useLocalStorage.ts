import { useEffect, useState } from 'react';

export const useLocalStorage = <T>(
  key: string,
  initial: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [data, setData] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initial;
    }

    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initial;
    } catch (err) {
      console.warn(`Error parsing localStorage key “${key}”:`, err);
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
      console.warn(`Error setting localStorage key “${key}”:`, err);
    }
  }, [key, data]);

  return [data, setData];
};
