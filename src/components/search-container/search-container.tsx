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
  const canOpenResults = !isOnCatalog && searchValue;
  const {
    data: productsBySearch = [],
    isLoading,
    isFetching,
  } = useGetProductsByFilterQuery(
    { title: searchValue },
    { skip: searchValue === '' || isOnCatalog }
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!searchWrapperRef.current) return;

      if (!searchWrapperRef.current.contains(e.target as Node)) {
        setIsResultsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!searchValue) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        navigate(ROUTES.CATALOG());
        setIsResultsOpen(false);
      }
    };
    document.addEventListener('keypress', handleKeyPress);
    return () => document.removeEventListener('keypress', handleKeyPress);
  }, [searchValue]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      changeSearchValue(value);
    }, 400);
    return () => clearTimeout(timeoutId);
  }, [value]);

  useEffect(() => {
    if (canOpenResults) {
      setIsResultsOpen(true);
    } else {
      setIsResultsOpen(false);
    }
  }, [canOpenResults]);

  useEffect(() => {
    const inputElement = searchInputRef.current;
    if (!inputElement) return;

    const handleFocus = () => {
      if (canOpenResults) setIsResultsOpen(true);
    };

    inputElement.addEventListener('focus', handleFocus);

    return () => {
      inputElement.removeEventListener('focus', handleFocus);
    };
  }, [searchInputRef, canOpenResults]);

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
      {...attr}
    />
  );
};
