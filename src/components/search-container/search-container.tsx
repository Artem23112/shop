import { useActions, useAppSelector } from '@app/rtk/hooks/hooks';
import { Search } from '@components/ui/search/search';
import { filterStateSelector } from '@features/filters/selectors';
import { useGetProductsByFilterQuery } from '@features/products/productsApi';
import { ROUTES } from '@utils/constants/routes';
import { useEffect, useRef, useState, type FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const SearchContainer: FC<Props> = ({ value, setValue, ...attr }) => {
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const searchWrapperRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { changeSearchValue } = useActions();
  const { searchValue } = useAppSelector(filterStateSelector);
  const isOnCatalog = pathname === ROUTES.CATALOG();

  const {
    data: productsBySearch = [],
    isLoading,
    isFetching,
  } = useGetProductsByFilterQuery(
    { title: searchValue },
    { skip: searchValue === '' || isOnCatalog }
  );

  // Закрытие при клике вне области
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchWrapperRef.current &&
        !searchWrapperRef.current.contains(e.target as Node)
      ) {
        setIsResultsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Переход в каталог по Enter
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (
        e.code === 'Enter' &&
        searchValue &&
        document.activeElement === searchInputRef.current
      ) {
        navigate(ROUTES.CATALOG());
        setIsResultsOpen(false);
      }
    };

    document.addEventListener('keypress', handleKeyPress);
    return () => document.removeEventListener('keypress', handleKeyPress);
  }, [searchValue, navigate]);

  // Debounce для обновления searchValue
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      changeSearchValue(value);
    }, 400);
    return () => clearTimeout(timeoutId);
  }, [value, changeSearchValue]);

  // Закрытие результатов при переходе на страницу каталога
  useEffect(() => {
    if (isOnCatalog) {
      setIsResultsOpen(false);
    }
  }, [isOnCatalog]);

  // Открытие результатов при фокусе на input
  const handleFocus = () => {
    if (!isOnCatalog && searchValue) {
      setIsResultsOpen(true);
    }
  };

  return (
    <Search
      ref={searchWrapperRef}
      closeResult={() => setIsResultsOpen(false)}
      inputRef={searchInputRef}
      value={value}
      setValue={setValue}
      searchResultItems={productsBySearch}
      isLoading={isLoading || isFetching}
      isResultsOpen={isResultsOpen}
      onFocus={handleFocus}
      {...attr}
    />
  );
};
